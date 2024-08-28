import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import loginvalidation from "../loginvalidation";
import profile from "../images/profile.png";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

function CustomerLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = loginvalidation(user);
        setErrors(validationErrors);
        setSubmitted(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitted) {
            axios.post("http://localhost:8081/api/customers/validate", user)
                .then(resp => {
                    let result = resp.data;
                    console.log("Backend response:", result); // Debugging line
                    sessionStorage.setItem("email", result.email);
                    sessionStorage.setItem("uname", result.name || ""); // Ensure default value if result.name is undefined
                    sessionStorage.setItem("role", "customer");
                    sessionStorage.setItem("id", result.id);
                    swal({
                        title: "Success!",
                        text: "Logged in successfully",
                        icon: "success",
                        button: "OK",
                    });
                    dispatch({ type: 'IsLoggedIn' });
                    navigate('/');
                })
                .catch(error => {
                    console.error("Error:", error);
                    swal({
                        title: "Error!",
                        text: "Invalid username or password",
                        icon: "warning",
                        button: "OK",
                    });
                });
        }
    }, [errors, submitted, user, dispatch, navigate]);

    return (
        <div className="container-fluid w-50 mt-5 login-component">
            <div className="row shadow bg-light border rounded">
                <div className="col-4">
                    <img
                        src={profile}
                        className="rounded-start img-fluid mt-5"
                        style={{ width: "300px" }}
                        alt="Profile"
                    />
                </div>
                <div className="col-8">
                    <div className="border border-0 rounded p-2">
                        <h2 className="fw-bold mb-2 mt-2 text-uppercase">Customer Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={user.email}
                                    onChange={handleInput}
                                />
                                <label htmlFor="floatingInput">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i> Email Address
                                </label>
                                {errors.email && <small className="text-danger float-right">{errors.email}</small>}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={handleInput}
                                />
                                <label htmlFor="floatingPassword">
                                    <i className="fa fa-unlock pr-2"></i> Password
                                </label>
                                {errors.password && <small className="text-danger float-right">{errors.password}</small>}
                            </div>
                            <div className="row g-1">
                                <div className="text-center mb-2 pl-3">
                                    <Link to="/forgetPasswordCustomer" className="link-primary">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <button className="btn btn-primary float-center">Login Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerLogin;
