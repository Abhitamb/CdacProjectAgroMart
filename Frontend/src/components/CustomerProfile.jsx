import axios from "axios";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import validator from 'validator';
import { useDispatch } from "react-redux";

function CustomerProfile() {
    // Initialize state with values from session storage
    const [uname, setUname] = useState(sessionStorage.getItem("uname") || "");
    const userid = sessionStorage.getItem("email");
    const id = sessionStorage.getItem("id");

    const [user, setUser] = useState({
        id: id || "",
        name: "",
        city: "",
        email: "",
        password: "",
        phone: "",
        gender: ""
    });

    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch user data on component mount
        axios.get(`http://localhost:8081/api/customers/${id}`)
            .then(resp => {
                console.log(resp.data.data);
                setUser(resp.data.data);
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, [id]);

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Ensure data is set in session storage on window unload
    window.onbeforeunload = () => {
        sessionStorage.setItem("origin", window.location.href);
    };

    // Validate session storage on window load
    window.onload = () => {
        if (window.location.href === sessionStorage.getItem("origin")) {
            dispatch({ type: 'IsLoggedIn' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let newErrors = {};

        // Validation logic
        if (!user.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!/^[a-zA-Z ]{2,40}$/.test(user.name)) {
            newErrors.name = "Enter a valid name";
        }

        if (!user.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!user.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validator.isEmail(user.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!user.gender) {
            newErrors.gender = "Gender is required";
        }

        if (!user.password.trim()) {
            newErrors.password = "Password is required";
        } else if (!validator.isStrongPassword(user.password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            newErrors.password = "Password is not strong enough";
        }

        // If no validation errors, submit data
        if (Object.keys(newErrors).length === 0) {
            axios.put(`http://localhost:8081/api/customers/${id}`, user)
                .then(resp => {
                    swal({
                        title: "Success!",
                        text: "Profile updated successfully!",
                        icon: "success",
                        button: "OK",
                    });
                    setUname(user.name);
                    sessionStorage.setItem("uname", user.name); // Update session storage
                })
                .catch(error => {
                    console.error("Error updating profile:", error);
                    swal({
                        title: "Error!",
                        text: "Profile update failed!",
                        icon: "error",
                        button: "OK",
                    });
                });
        } else {
            setErrors(newErrors);
            swal({
                title: "Error!",
                text: "Please enter valid information!",
                icon: "error",
                button: "OK",
            });
        }
    };

    return (
        <div className="container bg-light mt-1 text-black">
            <div className="row">
                <div className="col-sm-7 mx-auto">
                    <div className="card shadow bg-transparent mt-3">
                        <div className="card-body">
                            <h4 className="p-2 text-center text-dark">Welcome! {uname}</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-user-circle-o pr-2"></i>Customer Name :</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            name="name"
                                            value={user.name}
                                            onChange={handleInput}
                                            className="form-control"
                                        />
                                    </div>
                                    {errors.name && <small className="text-danger float-right">{errors.name}</small>}
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-address-card pr-2"></i>City :</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            name="city"
                                            value={user.city}
                                            onChange={handleInput}
                                            className="form-control"
                                        />
                                    </div>
                                    {errors.city && <small className="text-danger float-right">{errors.city}</small>}
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-male pr-2"></i>Gender :</label>
                                    <div className="col-sm-8">
                                        <select
                                            required
                                            name="gender"
                                            value={user.gender}
                                            onChange={handleInput}
                                            className="form-control"
                                        >
                                            <option value="">Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    {errors.gender && <small className="text-danger float-right">{errors.gender}</small>}
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-envelope pr-2"></i>Email :</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleInput}
                                            className="form-control"
                                        />
                                    </div>
                                    {errors.email && <small className="text-danger float-right">{errors.email}</small>}
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-phone pr-2"></i>Phone :</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="tel"
                                            name="phone"
                                            minLength="10"
                                            maxLength="10"
                                            value={user.phone}
                                            onChange={handleInput}
                                            className="form-control"
                                        />
                                    </div>
                                    {errors.phone && <small className="text-danger float-right">{errors.phone}</small>}
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-unlock pr-2"></i>Password :</label>
                                    <div className="col-sm-8">
                                        <input
                                            type="password"
                                            name="password"
                                            value={user.password}
                                            onChange={handleInput}
                                            className="form-control"
                                        />
                                    </div>
                                    {errors.password && <small className="text-danger float-right">{errors.password}</small>}
                                </div>
                                <button type="submit" className="btn btn-primary float-right">Update Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerProfile;
