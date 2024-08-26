import { useState } from "react";
import Data from "../../../static/navbar.json";
import { createNews } from "../../../services/admin-news";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createNews({ email });
      setSuccess("Subscription successful!");
      setEmail("");
    } catch (error) {
      setError("Email already exists");
      console.error("Error details:", error);
    }
  };
  return (
    <>
      <div className="position-relative" id="footer">
        <div className="">
          <img
            src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672784/Rectangle_fyxxos.svg"
            alt="footer image"
            className="w-100"
            style={{ display: "block", filter: "brightness(25%)" }}
          />
        </div>{" "}
        <div
          className="d-flex flex-column justify-content-center align-items-center position-absolute "
          style={{
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2 className="text-center text-light fw-semibold">
            Learn more about our listing process as well as our <br />{" "}
            additional staging and design work
          </h2>
          <button className="w-25 mt-4 text-primary fw-semibold rounded">
            newsletter
          </button>
        </div>
        <div className="d-flex justify-content-around align-items-center bg-primary p-3 text-light">
          <div className="d-flex align-items-center justify-content-center">
            {Data.data.map((item, i) => (
              <div key={i} className="px-4">
                <p className="p-0 m-0 hover-zoom">{item.name}</p>
              </div>
            ))}
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="pe-5">
                Subscribe to
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
              <button type="submit" className="fw-semibold rounded ">
                Subscribe
              </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center bg-dark p-3 text-light">
          <div>
            <p className="p-0 m-0 ">Lorem, ipsum dolor.</p>
          </div>
          <div className="svg rounded p-2" >
            <img
              src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672795/logo_s84s9j.svg"
              alt="logo"
            />
          </div>
          <div className="svg rounded">
            <img
              src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672475/Group-1_vtnrhv.svg"
              alt="logo"
              className="p-2 hover-zoom"
            />
            <img
              src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672475/Group_tzgp4r.svg"
              alt="logo"
              className="p-2 hover-zoom"
            />
            <img
              src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672475/Linkedin_mn0i5a.svg"
              alt="logo"
              className="p-2 hover-zoom"
            />
            <img
              src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672475/Frame_w90z9i.svg"
              alt="logo"
              className="p-2 hover-zoom"
            />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Footer;
