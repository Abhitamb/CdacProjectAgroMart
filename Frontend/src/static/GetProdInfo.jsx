
// import React, { useEffect, useState } from 'react';
// import firebase from './firebase';
// import 'firebase/database';

// const ContactTable = () => {
//   const [contactsData, setContactsData] = useState([]);

//   const fetchData = () => {
//     const url = 'https://contactus-9cfc7-default-rtdb.firebaseio.com/contacts.json';

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         setContactsData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleCollapse = index => {
//     if (activeIndex === index) {
//       setActiveIndex(null);
//     } else {
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div className="container-fluid text-white">
//       <h2 className="p-2 text-center text-dark">Contact Data</h2>
//       <table className="table table-bordered table-striped table-light table-hover mt-2">
//         <thead className="table-dark">
//           <tr className="text-center">
//             <th>Name</th>
//             <th>Email</th>
//             <th>Subject</th>
//             <th>Message</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(contactsData).map(([key, contact], index) => (
//             <React.Fragment key={key}>
//               <tr>
//                 <td>
//                   <button
//                     className="btn btn-link"
//                     onClick={() => toggleCollapse(index)}
//                   >
//                     {contact.name}
//                   </button>
//                 </td>
//                 <td>{contact.email}</td>
//                 <td>{contact.subject}</td>
//                 <td>{contact.message}</td>
//               </tr>
//               {activeIndex === index && (
//                 <tr>
//                   <td colSpan="4">
//                     <div className="collapse show">
//                       <p>{contact.name}</p>
//                       <p>{contact.email}</p>
//                       <p>{contact.subject}</p>
//                       <p>{contact.message}</p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ContactTable;


// import React, { useEffect, useState } from 'react';
// import firebase from './fireconfig';
// import 'firebase/database';
// import { Modal, Button } from 'react-bootstrap';

// const GetProdInfo = () => {
//   const [productsData, setProductsData] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const fetchData = () => {
//     const url = 'https://prodinformation-887f6-default-rtdb.firebaseio.com/ProdInformation.json';

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         setProductsData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleProductClick = product => {
//     setSelectedProduct(product);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <div className="container-fluid text-white">
//       <h2 className="p-2 text-center text-dark">Product Information</h2>
//       <table className="table table-bordered table-striped table-light table-hover mt-2">
//         <thead className="table-dark">
//           <tr className="text-center">
//             <th>Name</th>
//             <th>Description</th>
//             <th>Application Method</th>
//             <th>Usage Instructions</th>
//             <th>Target</th>
//             <th>Benefit</th>
//             <th>Precautions</th>
//             <th>Storage and Handling</th>
//             <th>Compatibility</th>
//             <th>Availability</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(productsData).map(([key, product]) => (
//             <tr key={key}>
             
//               <td>
//                 <Button variant="link" className="text-dark" onClick={() => handleProductClick(product)}>
//                   {product.pname}
//                 </Button>
//               </td>
//               <td>{product.desc}</td>
//               <td>{product.method}</td>
//               <td>{product.instr}</td>
//               <td>{product.target}</td>
//               <td>{product.benefit}</td>
//               <td>{product.precaution}</td>
//               <td>{product.storageHandling}</td>
//               <td>{product.compatibility}</td>
//               <td>{product.availability}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Modal show={selectedProduct !== null} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Details</Modal.Title>
//         </Modal.Header>
//         {selectedProduct && (
//           <Modal.Body>
//             <p>Name: {selectedProduct.pname}</p>
//             <p>Description: {selectedProduct.desc}</p>
//             <p>Application Method: {selectedProduct.method}</p>
//             <p>Usage Instructions: {selectedProduct.instr}</p>
//             <p>Target: {selectedProduct.target}</p>
//             <p>Benefit: {selectedProduct.benefit}</p>
//             <p>Precautions: {selectedProduct.precaution}</p>
//             <p>Storage and Handling: {selectedProduct.storageHandling}</p>
//             <p>Compatibility: {selectedProduct.compatibility}</p>
//             <p>Availability: {selectedProduct.availability}</p>
//           </Modal.Body>
//         )}
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default GetProdInfo;


// import React, { useEffect, useState } from 'react';
// import firebase from './fireconfig';
// import 'firebase/database';
// import { Button, Modal } from 'react-bootstrap';

// const GetProdInfo = () => {
//   const [productsData, setProductsData] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const fetchData = () => {
//     const url = 'https://prodinformation-887f6-default-rtdb.firebaseio.com/ProdInformation.json';

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         setProductsData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleProductClick = product => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="container-fluid text-white">
//       <h2 className="p-2 text-center text-dark">Product Information</h2>
//       <table className="table table-bordered table-striped table-light table-hover mt-2">
//         <thead className="table-dark">
//           <tr className="text-center">
//             <th>Product Name</th>
//             <th>Description</th>
//             <th>Application Method</th>
//             {/* <th>Usage Instructions</th>
//             <th>Target</th>
//             <th>Benefit</th>
//             <th>Precautions</th>
//             <th>Storage and Handling</th>
//             <th>Compatibility</th> */}
//             <th>Availability</th>
//             <th>More Details</th>
//           </tr>
//         </thead>
//         <tbody className='text-justify'>
//           {Object.entries(productsData).map(([key, product]) => (
//             <tr key={key}>
//               <td className="product-name">
//                 {product.pname}
//               </td>
//               <td>{product.desc}</td>
//               <td>{product.method}</td>
//               {/* <td>{product.instr}</td>
//               <td>{product.target}</td>
//               <td>{product.benefit}</td>
//               <td>{product.precaution}</td>
//               <td>{product.storageHandling}</td>
//               <td>{product.compatibility}</td> */}
//               <td>{product.availability}</td>
//               <td>
//                 <Button variant="outline-primary" onClick={() => handleProductClick(product)}>
//                   Details
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Details</Modal.Title>
//         </Modal.Header>
//         {selectedProduct && (
//           <Modal.Body>
//             <p><b>Product Name:</b>{selectedProduct.pname}</p>
//             <p><b>Description:</b>{selectedProduct.desc}</p>
//             <p><b>Application Method:</b>{selectedProduct.method}</p>
//             <p><b>Usage Instructions:</b>{selectedProduct.instr}</p>
//             <p><b>Target:</b>{selectedProduct.target}</p>
//             <p><b>Benefit:</b>{selectedProduct.benefit}</p>
//             <p><b>Precautions:</b>{selectedProduct.precaution}</p>
//             <p><b>Storage and Handling:</b>{selectedProduct.storageHandling}</p>
//             <p><b>Compatibility:</b>{selectedProduct.compatibility}</p>
//             <p><b>Availability:</b>{selectedProduct.availability}</p>
//           </Modal.Body>
//         )}
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default GetProdInfo;


import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const GetProdInfo = () => {
  const [productsData, setProductsData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const url = 'https://agromart-b99e5-default-rtdb.firebaseio.com/'
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProductsData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container-fluid text-dark">
      <h2 className="p-2 text-center">Product Information</h2>
      <table className="table table-bordered table-striped table-hover mt-2">
        <thead className="thead-dark">
          <tr className="text-center">
            <th>Product Name</th>
            <th>Description</th>
            <th>Application Method</th>
            <th>Availability</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(productsData).map(([key, product]) => (
            <tr key={key}>
              <td>{product.pname}</td>
              <td>{product.desc}</td>
              <td>{product.method}</td>
              <td>{product.availability}</td>
              <td>
                <Button variant="outline-primary" onClick={() => handleProductClick(product)}>
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        {selectedProduct && (
          <Modal.Body>
            <p><strong>Product Name:</strong> {selectedProduct.pname}</p>
            <p><strong>Description:</strong> {selectedProduct.desc}</p>
            <p><strong>Application Method:</strong> {selectedProduct.method}</p>
            <p><strong>Usage Instructions:</strong> {selectedProduct.instr || 'N/A'}</p>
            <p><strong>Target:</strong> {selectedProduct.target || 'N/A'}</p>
            <p><strong>Benefit:</strong> {selectedProduct.benefit || 'N/A'}</p>
            <p><strong>Precautions:</strong> {selectedProduct.precaution || 'N/A'}</p>
            <p><strong>Storage and Handling:</strong> {selectedProduct.storageHandling || 'N/A'}</p>
            <p><strong>Compatibility:</strong> {selectedProduct.compatibility || 'N/A'}</p>
            <p><strong>Availability:</strong> {selectedProduct.availability}</p>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GetProdInfo;
