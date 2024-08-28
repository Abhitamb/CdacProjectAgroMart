import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col } from 'react-bootstrap';
import testmonial from "./Testimonial.css";
const Testimonial = () => {
  const testimonials = [
    {
      img: 'https://media.istockphoto.com/id/652550482/photo/portrait-of-buffalo-shepherd.jpg?s=1024x1024&w=is&k=20&c=yAQNxy85TSJYTKCpJsCrdaA-1EOZDPWwr4xXNYIol-U=',
      text:
      '#Potassium Deficiency #Citrus Red Mite ऊपर दिए गए हरे लिंक पर क्लिक करें जो हमें प्रभावी नियंत्रण उपायों के साथ विस्तृत जानकारी के लिए प्लांटिक्स लाइब्रेरी में भेज देगायदी आप अपनी समस्या के निवारण से समाधानी हो तो कृपया Solved बटन पर क्लिक करें, धन्यवाद!',
      name: 'Shailesh Malge',
      designation: 'Farmer',
    },
    {
      img: 'https://media.istockphoto.com/id/907753228/photo/indian-farmer-women-on-farm-field-with-happy-face.jpg?s=1024x1024&w=is&k=20&c=7ICAgHKJTMfnM3W5RCyAsX3M0FZSIYb5hhD6awFVxIk=',
      text:
      '#Jacket Rot ऊपर दिए गए हरे लिंक पर क्लिक करें जो हमें प्रभावी नियंत्रण उपायों के साथ विस्तृत जानकारी के लिए प्लांटिक्स लाइब्रेरी में भेज देगा.यदी आप अपनी समस्या के निवारण से समाधानी हो तो कृपया Solved बटन पर क्लिक करें, धन्यवाद ',
      name: 'Meena Patil',
      designation: 'Farmer',
    },
    {
      img: 'https://images.unsplash.com/photo-1609252509102-aa73ff792667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      text:
      '#Chilli Thrips  वरील हिरव्या लिंकवर क्लिक करा जे प्रभावी खबरदारी आणि उपचारात्मक उपायांसह तपशीलवार माहितीसाठी आम्हाला प्लांटिक्स लायब्ररीकडे वळवेल. जर तुम्हाला आमच्या उत्तराने समाधान वाटत असेल तर कृपया सॉल्व्हेड बटणावर क्लिक करा.  धन्यवाद . ☺☺🌱🌱🙏🏻🙏🏻',
      name: 'Satish Patil',
      
      designation:'Aspiring Farmer',
    },
  ];

  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-chevron-left fa-2x" style={{ color: 'gray' }}></i>
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-chevron-right fa-2x" style={{ color: 'gray' }}></i>
      </div>
    );
  };

  return (
    <div className="testimonial">
      <Container>
        <h1 className="text-center mb-5">TESTIMONIALS</h1>
        <Slider dots prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} {...testimonial} />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

const Card = ({ img, text, name, designation }) => {
  return (
    <div className="testimonial-card">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="text-justify">
          <img src={img} alt="avatar" className="testimonial-avatar" />
          <p>{text}</p>
          <p>
            <strong>{name}</strong>, {designation}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonial;
