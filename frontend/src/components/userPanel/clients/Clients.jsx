import { fetchClients } from "../../../services/admin-clients";
import Card from "./Card";
import { useEffect, useState } from "react";

const Clients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      try {
        const clients = await fetchClients();
        setClients(clients);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    getClients();
  }, []);
  
  return (
    <>
      <div className="my-5" id="testimonials">
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center w-50 txt-blu">
                Happy Clients
            </h1>
            <img src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724673174/Rectangle_58_mf31eo.svg" alt="underline" className="py-3"/>
        </div>
        <div className="pb-5 ">
            <Card clients={clients}/>
        </div>
      </div>
    </>
  );
};
export default Clients;
