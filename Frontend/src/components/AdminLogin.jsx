import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import loginvalidation from "../loginvalidation"
import swal from 'sweetalert';
import admin from "../images/admin.png";
import { Link } from "react-router-dom";

function AdminLogin() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        "email": "",
        "password": ""
    })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})
    // const [errmsg, setErrmsg] = useState()   //for displaying msg if login fails ..used sweetalert for that
    const navigate = useNavigate();

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(loginvalidation(user))
        setSubmitted(true)
    }

    window.onbeforeunload = function () {
        sessionStorage.setItem("origin", window.location.href);
    }

    window.onload = function () {
        if (window.location.href == sessionStorage.getItem("origin")) {
            dispatch({ type: 'LogOut' })
            //sessionStorage.clear();
            //navigate("/alogin");
        }
    }

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && submitted) {
            console.log(user)
            axios.post("http://localhost:8081/api/admin/validate", user)
                .then(resp => {
                    let result = resp.data.data;
                    console.log(resp.data.data)
                    sessionStorage.setItem("email", result.email)
                    sessionStorage.setItem("uname", result.uname)
                    sessionStorage.setItem("role", "admin")
                    swal({
                        title: "Success!",
                        text: "Login Successful!",
                        icon: "success",
                        button: "OK",
                    });
                    dispatch({ type: 'IsLoggedIn' })
                    navigate('/aprofile');
                })
                .catch(error => {
                    console.log("Error", error);
                    //setErrmsg("Invalid username or password..!!")
                    swal({
                        title: "Error!",
                        text: "Invalid username or password",
                        icon: "error",
                        button: "OK",
                    });
                })
        }
    }, [errors])


    return (
        <div className="container-fluid w-50 mt-5 login-component"   >
            <div className="row shadow  border rounded" >
                <div className="col-4 ">
                    <img
                        src={admin}
                        className="rounded-start img-fluid mt-5"
                        style={{ width: "300px" }} />
                </div>
                <div className="col-8">
                    <div className="border border-0 rounded p-2">
                        <h2 className="fw-bold mb-2 mt-2 text-uppercase"> Admin Login</h2>

                        <div className="">
                            <form onSubmit={handleSubmit}>
                                {/* <div className="form-floating mb-3">
                                    <label for="floatingTextarea">Email Address</label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInput}
                                        className="form-control"
                                        placeholder="name@example.com"
                                    />
                                    {errors.email && <medium className="text-danger float-right">{errors.email}</medium>}
                                </div> */}
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" name="email" id="floatingInput" placeholder="name@example.com" value={user.email}
                                        onChange={handleInput}/>
                                    <label for="floatingInput"><i class="fa fa-envelope-o" aria-hidden="true"></i> Email Address</label>
                                    {errors.email && <medium className="text-danger float-right">{errors.email}</medium>}
                                </div>
                                    {/* For Password */}
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" name="password" id="floatingInput" placeholder="name@example.com"  value={user.password}
                                        onChange={handleInput}/>
                                    <label for="floatingInput"><i className="fa fa-unlock pr-2"></i> Password</label>
                                    {errors.password && <medium className="text-danger float-right">{errors.password}</medium>}
                                </div>
                                
                                {/* <div className="form-floating mb-3">
                                    <label for="floatingInput"><i className="fa fa-unlock pr-2"></i>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={user.password}
                                        onChange={handleInput}
                                        placeholder="password"
                                        id="floatingInput"
                                    />
                                    {errors.password && <medium className="text-danger float-right">{errors.password}</medium>}
                                </div> */}

                                
                                <div className="row g-1">
                                    <div className="text-center mb-2 pl-3">
                                        <Link to="/forgetPasswordAdmin" className="link-primary">
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
        </div>
    );
}

export default AdminLogin;
