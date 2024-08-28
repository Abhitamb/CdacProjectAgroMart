import React from 'react';
import '../static/About.css';
import computer from "../images/computer.png";
import target from "../images/target.png";
import confued from "../images/confused.png";

function About() {
    return (
        <>
            <main role="main">
           
                <div className="container about_text">
                <hr />
                    <div className="row">
                        <div className="col-md-4  ">
                            <div className="text-center mt-2">
                                <img src={computer} alt={"Logo"} className="bd-placeholder-img  " width="140" height="140" />
                                <h2>Vision</h2>
                            </div>
                            <p className="text-justify">
                           1. Our agricultural website aims to empower farmers with knowledge and tools to maximize crop yield and sustai nability, driving a vision of agricultural abundance and ecological balance.   <br />
                           2.Our vision is to create a thriving agricultural community by providing innovative solutions and resources that enhance productivity, profitability, and environmental stewardship. <br />
                           3.We envision a future where farmers have access to cutting-edge technologies and data-driven insights, enabling them to make informed decisions and optimize resource utilization for sustainable and efficient farming practices.
                            </p>

                        </div>
                        <div className="col-md-4  ">
                            <div className="text-center mt-2">
                                <img src={target} alt={"Logo"} className="bd-placeholder-img " width="140" height="140" />
                                <h2>Mission</h2>
                            </div>
                            <p className="text-justify">
                            1.Our mission is to equip farmers with the knowledge, tools, and resources they need to enhance productivity, profitability, and sustainability in their agricultural practices. <br />

                            2.We are dedicated to providing comprehensive information, expert guidance, and innovative solutions to address the evolving challenges faced by farmers, fostering their success and resilience in the ever-changing agricultural landscape. <br />

                            3.Our mission is to promote the adoption of sustainable farming methods, conservation practices, and the responsible use of resources, ensuring a better future for agriculture, the environment, and generations to come.
                            </p>

                        </div>
                        <div className="col-md-4  ">
                            <div className="text-center mt-2">
                                <img src={confued} alt={"Logo"} className="bd-placeholder-img" width="140" height="140" />
                                <h2>Why Us</h2>
                            </div>
                            <p className="text-justify">
                            1.Choose us for your agricultural needs because we offer a wide range of high-quality products and services tailored to meet the specific requirements of farmers, ensuring optimal results and maximum yields. <br />

                            2.With our team of experienced agricultural experts and industry professionals, we provide unparalleled expertise and support, guiding farmers every step of the way to achieve success and profitability in their farming operations. <br />
                            3.Our dedication to sustainability and environmental stewardship sets us apart, as we strive to promote sustainable farming practices and provide eco-friendly solutions that minimize the ecological impact while maximizing long-term agricultural productivity.

                            </p>
                        </div>
                    </div>

                    <hr />

                </div>

            </main>
        </>
    );
}

export default About;