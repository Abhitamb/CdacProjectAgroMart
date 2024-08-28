import Carousel from 'react-bootstrap/Carousel';
//import Footer from './Footer';
import slide2 from "../img/2.jpg"
import slide3 from "../img/3.jpg"
import slide4 from "../img/4.jpg"

import HorizonatalCard from './HorizonatalCard';
import {  ButtonGroup, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardHorizontal from './CardHorizontal';


function TopSlider() {
    const navigate=useNavigate()
  const state=useSelector((state)=>state);
    return (
        <>
<div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 h-20"
                        src={slide2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
          {state.loggedin.IsLoggedIn ? "":(
            <ButtonGroup size="lg" className="mb-2">
              <Button onClick={e=>navigate('/clogin')} variant="info gradient me-2">Login</Button>
              <Button variant="success gradient" onClick={e=>{navigate('/register')}}>Signup</Button>
            </ButtonGroup>
             )}
            </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                        className="d-block w-100 h-20"
                        src={slide3}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={9000}>
                    <img
                        className="d-block w-100 h-20"
                        src={slide4}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            {/* <Footer /> */}
       
        </div>
        <CardHorizontal/>
    <HorizonatalCard/>
        </>
          
    );
}

export default TopSlider;