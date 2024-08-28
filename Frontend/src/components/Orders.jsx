import axios from "axios";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [show, setShow] = useState(false);
    const [details, setDetails] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8081/api/orders")
            .then(resp => {
                console.log(resp.data);
                setOrders(resp.data.data);
            })
            .catch(error => {
                console.error("Error fetching orders:", error);
            });
    }, []);

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.setItem("origin", window.location.href);
        };

        const handleLoad = () => {
            if (window.location.href === sessionStorage.getItem("origin")) {
                dispatch({ type: 'IsLoggedIn' });
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('load', handleLoad);
        };
    }, [dispatch]);

    const showDetails = (orderId) => {
        axios.get(`http://localhost:8081/api/orders/${orderId}`)
            .then(resp => {
                console.log(resp.data);
                setDetails(resp.data.data.details);
            })
            .catch(error => {
                console.error("Error fetching order details:", error);
            });
        setShow(true);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-7">
                    <h4 className="p-2 text-center text-black">My Purchased Orders</h4>
                    <table className="table table-bordered table-sm table-light table-hover table-striped">
                        <thead className="table-dark">
                            <tr className="text-center">
                                <th>Id</th>
                                <th>Order Date</th>
                                <th>Amount</th>
                                <th>Customer</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(x => (
                                <tr key={x.orderId}>
                                    <td>{x.orderId}</td>
                                    <td><Moment format="ddd, DD-MMM-YYYY">{x.orderDate}</Moment></td>
                                    <td>&#8377; {x.payment.amount}</td>
                                    <td>{x.customer.name}</td>
                                    <td>
                                        <button onClick={() => showDetails(x.orderId)} className="btn btn-primary btn-sm">Show Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-5">
                    {show ? (
                        <>
                            <h4 className="p-2 text-dark">Order Details</h4>
                            <table className="table table-bordered table-light table-hover table-striped table-sm">
                                <thead>
                                    <tr className="text-center">
                                        <th>Id</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.map(x => (
                                        <tr key={x.product.productId} className="text-center">
                                            <td>{x.product.productId}</td>
                                            <td>
                                                <img className="mr-2 float-left" src={`http://localhost:8081/${x.product.photo}`} width="100" alt={x.product.pname} />
                                                {x.product.pname}<br />
                                                {x.product.category ? x.product.category.categoryName : 'No Category'}
                                            </td>
                                            <td>{x.product.price}</td>
                                            <td>{x.qty}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Orders;
