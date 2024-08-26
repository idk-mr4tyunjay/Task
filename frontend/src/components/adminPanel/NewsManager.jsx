import { useEffect, useState } from "react";
import { fetchNews } from "../../services/admin-news";

const NewsManager = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  useEffect(() => {
    const getEmail = async () => {
      try {
        const subscriptions = await fetchNews();
        setSubscriptions(subscriptions);
        subscriptions;
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    getEmail();
  }, []);
  return (
    <section id="contact">
      <div className="admin-panel">
        <h2>Subscribed to Newsletter</h2>
        <ul>
          {subscriptions.map((sub, index) => (
            <li key={index}>{sub.email}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewsManager;
