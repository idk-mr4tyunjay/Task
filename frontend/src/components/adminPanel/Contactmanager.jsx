import { useEffect, useState } from "react";
import { fetchContact } from "../../services/admin-contact";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getContacts = async () => {
      try {
        const data = await fetchContact();
        setContacts(data);
      } catch (error) {
        setError("Error fetching contacts");
        console.error(error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="admin-panel">
      <h2>Contact Information</h2>
      {error && <p>{error}</p>}
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <p className="p-0 m-0">
              <strong>Name:</strong> {contact.fullName}
            </p>
            <p className="p-0 m-0">
              <strong>Email:</strong> {contact.email}
            </p>
            <p className="p-0 m-0">
              <strong>Mobile:</strong> {contact.mobile}
            </p>
            <p className="p-0 m-0">
              <strong>City:</strong> {contact.city}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactManager;
