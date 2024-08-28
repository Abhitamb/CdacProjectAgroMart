import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseDB from "./fireconfig";

function AddProdInformation() {
  const [state, setState] = useState({
    pname: "",
    desc: "",
    method: "",
    instr: "",
    target: "",
    benefit: "",
    precaution: "",
    storageHandling: "",
    compatibility: "",
    availability: "",
  });

  const { pname, desc, method, instr,target,benefit,precaution,storageHandling,compatibility,availability } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pname || !desc || !method || !instr || !target || !benefit || !precaution || !storageHandling || !compatibility || !availability) {
      toast.error("Please provide value in each input field");
    } else {
      firebaseDB.child("ProdInformation").push(state);
      setState({ pname: "", desc: "", method: "", instr: "" ,target: "", benefit:"", precaution:"", storageHandling:"",compatibility:"",availability:"" });
      toast.success("Form Submitted Successfully");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    // <section className="contact-section">
    //   <div className="container">
    //     <ToastContainer position="top-right" />
    //     <div className="row justify-content-center">
    //       <div className="col-md-10">
    //         <div className="wrapper">
    //           <div className="row no-gutters">
    //             <div className="col-md-6">
    //               <div className="contact-wrap w-100 p-lg-5 p-4">
    //                 <h3 className="mb-4">Send us a message</h3>
    //                 <form
    //                   id="contactForm"
    //                   className="contactForm"
    //                   onSubmit={handleSubmit}
    //                 >
    //                   <div className="row">
    //                     <div className="col-md-12">
    //                       <div className="form-group">
    //                         <input
    //                           type="text"
    //                           className="form-control"
    //                           name="name"
    //                           placeholder="Name"
    //                           onChange={handleInputChange}
    //                           value={name}
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="col-md-12">
    //                       <div className="form-group">
    //                         <input
    //                           type="email"
    //                           className="form-control"
    //                           name="email"
    //                           placeholder="Email"
    //                           onChange={handleInputChange}
    //                           value={email}
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="col-md-12">
    //                       <div className="form-group">
    //                         <input
    //                           type="text"
    //                           className="form-control"
    //                           name="subject"
    //                           placeholder="Subject"
    //                           onChange={handleInputChange}
    //                           value={subject}
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="col-md-12">
    //                       <div className="form-group">
    //                         <textarea
    //                           type="text"
    //                           className="form-control"
    //                           name="message"
    //                           placeholder="Message"
    //                           cols="30"
    //                           rows="6"
    //                           onChange={handleInputChange}
    //                           value={message}
    //                         ></textarea>
    //                       </div>
    //                     </div>
    //                     <div className="col-md-12">
    //                       <div className="form-group">
    //                         <input
    //                           type="submit"
    //                           value="Send Message"
    //                           className="btn btn-primary"
    //                         />
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>
                
    //             <div className="col-md-6 d-flex align-items-stretch">
                  
    //               <div className="info-wrap  img">
    //               <div className="col-12 ">
    //                 <img
    //                     src="https://www.iglowsoft.com/wp-content/uploads/2018/05/contact.jpg"
    //                     className="rounded-start img-fluid"
    //                     style={{ width: "1800px" ,height:"150px"}} />
    //             </div>
    //                 <h3>Contact us</h3>
    //                 <p className="mb-4">
    //                   We're open for any suggestion or just to have a chat
    //                 </p>
    //                 <div className="dbox w-100 d-flex align-items-start">
    //                   <div className="icon d-flex align-items-center justify-content-center">
    //                     <span className="fa fa-map-marker"></span>
    //                   </div>
    //                   <div className="text pl-3">
    //                     <p>
    //                       <span>Address:</span> 198 West 21th Street, Suite 721
    //                       New York NY 10016
    //                     </p>
    //                   </div>
    //                 </div>
    //                 <div className="dbox w-100 d-flex align-items-center">
    //                   <div className="icon d-flex align-items-center justify-content-center">
    //                     <span className="fa fa-phone"></span>
    //                   </div>
    //                   <div className="text pl-3">
    //                     <p>
    //                       <span>Phone:</span>
    //                       <a href="tel://123456789">+91 8007592194</a>
    //                     </p>
    //                   </div>
    //                 </div>
    //                 <div className="dbox w-100 d-flex align-items-center">
    //                   <div className="icon d-flex align-items-center justify-content-center">
    //                     <span className="fa fa-paper-plane"></span>
    //                   </div>
    //                   <div className="text pl-3">
    //                     <p>
    //                       <span>Email:</span>
    //                       <a href="mailto:info@agriculture.com">
    //                         info@agriculture.com
    //                       </a>
    //                     </p>
    //                   </div>
    //                 </div>
    //                 <div className="dbox w-100 d-flex align-items-center">
    //                   <div className="icon d-flex align-items-center justify-content-center">
    //                     <span className="fa fa-globe"></span>
    //                   </div>
    //                   <div className="text pl-3">
    //                     <p>
    //                       <span>Website:</span>
    //                       <a href="#">Agriculture.com</a>
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>


<div className="container mt-5">
<div className="card shadow bg-transparent text-dark">
    <div className="card-body">
        <div className="row">
            {/* <div class="col-sm-4 pt-5">
                {selectedPhoto ? <img className="img-thumbnail" src={file} alt="Photo" /> : ""}
            </div> */}
            <div className="col-4 ">
        <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/product-feedback-7494367-6149427.png"
            className="rounded-start img-fluid mb-3"
            style={{ width: "100 x" }} alt="category" />
    </div>
            <div className="col-sm-6">
                <h4 className="text-center p-2">
                    Add Product Information
                </h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label text-justify">Product Name</label>
                        <div className="col-sm-8">
                            <input type="text" name="pname"
                              placeholder="Enter product Name"
                              onChange={handleInputChange}
                              value={pname} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label text-justify">Discription</label>
                        <div className="col-sm-8">
                            <input type="text" name="desc"
                              placeholder="Enter product Description"
                              onChange={handleInputChange}
                              value={desc} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label text-justify">Application Method</label>
                        <div className="col-sm-8">
                            <input type="text" name="method"
                              placeholder="method of application or usage for the product."
                              onChange={handleInputChange}
                              value={method} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label text-justify">Usage Instructions</label>
                        <div className="col-sm-8">
                            <input type="text" name="instr"
                              placeholder="Detailed instructions on how to use the product"
                              onChange={handleInputChange}
                              value={instr} 
                              className="form-control" />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label text-justify">Target</label>
                        <div className="col-sm-8">
                            <input type="text" name="target"
                              placeholder="for which season the product is suitable"
                              onChange={handleInputChange}
                              value={target} 
                              className="form-control" />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label text-justify">Benefits</label>
                        <div className="col-sm-8">
                            <input type="text" name="benefit"
                              placeholder="The advantages or benefits of using the product"
                              onChange={handleInputChange}
                              value={benefit} 
                              className="form-control" />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label text-justify">Precautions</label>
                        <div className="col-sm-8">
                            <input type="text" name="precaution"
                              placeholder="The advantages or benefits of using the product"
                              onChange={handleInputChange}
                              value={precaution} 
                              className="form-control" />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label text-justify">Storage and Handling</label>
                        <div className="col-sm-8">
                            <input type="text" name="storageHandling"
                              placeholder="storage and handling of the product"
                              onChange={handleInputChange}
                              value={storageHandling} 
                              className="form-control" />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label text-justify">Compatibility</label>
                        <div className="col-sm-8">
                            <input type="text" name="compatibility"
                              placeholder="compatibility with other agricultural inputs"
                              onChange={handleInputChange}
                              value={compatibility} 
                              className="form-control" />
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label text-justify">Availability</label>
                        <div className="col-sm-8">
                            <input type="text" name="availability"
                              placeholder="Availability of product"
                              onChange={handleInputChange}
                              value={availability} 
                              className="form-control" />
                        </div>
                    </div>
                    <button className="btn btn-primary float-right">Save Product</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>


  );
}

export default AddProdInformation;
