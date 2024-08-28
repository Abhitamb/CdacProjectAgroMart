// import React, { useEffect, useState } from 'react';
// import './CounterUp.css';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHistory, faGift, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';

// const CounterUpAnimation = () => {
//   const [isCounting, setIsCounting] = useState(false);
//   const [count, setCount] = useState({
//     customers: 0,
//     projects: 0,
//     clients: 0,
//     awards: 0
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = document.querySelector('.counter-up');
//       const positionFromTop = element.getBoundingClientRect().top;

//       if (positionFromTop - window.innerHeight <= 0) {
//         setIsCounting(true);
//         window.removeEventListener('scroll', handleScroll);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (isCounting) {
//       const interval = setInterval(() => {
//         setCount(prevCount => ({
//           customers: prevCount.customers === 230 ? prevCount.customers : prevCount.customers + 1,
//           projects: prevCount.projects === 540 ? prevCount.projects : prevCount.projects + 1,
//           clients: prevCount.clients === 560 ? prevCount.clients : prevCount.clients + 1,
//           awards: prevCount.awards === 467 ? prevCount.awards : prevCount.awards + 1
//         }));

//         if (
//           count.customers === 230 &&
//           count.projects === 540 &&
//           count.clients === 560 &&
//           count.awards === 467
//         ) {
//           clearInterval(interval);
//         }
//       }, 100);

//       return () => {
//         clearInterval(interval);
//       };
//     }
//   }, [isCounting, count]);

//   return (
//     <div className="counter-up">
//       <div className="content">
//         <div className="box">
//           {/* <div className="icon"><FontAwesomeIcon icon={faHistory} /></div> */}
//           <div className="counter">{isCounting ? count.customers : 0}</div>
//           <div className="text">Happy Customers</div>
//         </div>
//         <div className="box">
//           {/* <div className="icon"><FontAwesomeIcon icon={faGift} /></div> */}
//           <div className="counter">{isCounting ? count.projects : 0}</div>
//           <div className="text">Completed Projects</div>
//         </div>
//         <div className="box">
//           {/* <div className="icon"><FontAwesomeIcon icon={faUsers} /></div> */}
//           <div className="counter">{isCounting ? count.clients : 0}</div>
//           <div className="text">Happy Clients</div>
//         </div>
//         <div className="box">
//           {/* <div className="icon"><FontAwesomeIcon icon={faAward} /></div> */}
//           <div className="counter">{isCounting ? count.awards : 0}</div>
//           <div className="text">Awards Received</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CounterUpAnimation;

import React, { useEffect, useState } from 'react';
import './CounterUp.css';
import slide from "../img/15.png"
import slide1 from "../img/16.png"
import slide2 from "../img/17.png"
import slide3 from "../img/18.png"
const CounterUpAnimation = () => {
  const [isCounting, setIsCounting] = useState(false);
  const [count, setCount] = useState({
    customers: 0,
    projects: 0,
    clients: 0,
    awards: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.counter-up');
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - window.innerHeight <= 0) {
        setIsCounting(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setCount(prevCount => ({
          customers: prevCount.customers === 530 ? prevCount.customers : prevCount.customers + 1,
          projects: prevCount.projects === 89 ? prevCount.projects : prevCount.projects + 1,
          clients: prevCount.clients === 10 ? prevCount.clients : prevCount.clients + 1,
          awards: prevCount.awards === 23 ? prevCount.awards : prevCount.awards + 1
        }));

        if (
          count.customers === 530 &&
          count.projects === 89 &&
          count.clients === 10 &&
          count.awards === 23
        ) {
          clearInterval(interval);
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isCounting, count]);

  const formatCount = value => {
    if (value > 1) {
      return (value) + '+';
    }
    return value;
  };

  return (
    <div className="counter-up">
      <div className="content">
        <div className="box">
          
          <img className='img1' src={slide} alt="Image 1" />
          <div className="counter">{isCounting ? formatCount(count.customers) : 0}</div>
          <div className="text">Happy Clients</div>
        </div>
        <div className="box">
          
          <img className='img1' src={slide3} alt="Image 1" />
          <div className="counter">{isCounting ? formatCount(count.projects) : 0}</div>
          <div className="text">Product's</div>
        </div>
        <div className="box">
         
          <img className='img1' src={slide2} alt="Image 1" />
          <div className="counter">{isCounting ? formatCount(count.clients) : 0}</div>
          <div className="text">Year Experience</div>
        </div>
        <div className="box">
          
          <img className='img1' src={slide1} alt="Image 1" />
          <div className="counter">{isCounting ? formatCount(count.awards) : 0}</div>
          <div className="text">Awards Win</div>
        </div>
      </div>
    </div>
  );
};

export default CounterUpAnimation;
