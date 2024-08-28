import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import 'firebase/database';
const ContactTable = () => {
    const [contactsData, setContactsData] = useState([]);
  
    const fetchData = () => {
      const url = 'https://prodinformation-887f6-default-rtdb.firebaseio.com/contacts.json';
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setContactsData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div className="container-fluid text-white">
        <h2 className="p-2 text-center text-dark">Contact Data</h2>
        <table className="table table-bordered table-striped table-light table-hover mt-2">
          <thead className="table-dark">
            <tr className="text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(contactsData).map(([key, contact]) => (
              <tr key={key}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ContactTable;