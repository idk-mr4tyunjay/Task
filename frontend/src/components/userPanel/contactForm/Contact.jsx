import Form from "./Form";

const Contact = () => {
  return (
    <>
    <section id="home">
      <div className="position-relative" >
        <img
          src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672805/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home_1_bit5q0.svg"
          alt="couple"
          className="img-fluid w-100"
        />
        <div className="position-absolute text-light" style={{ top: '60%', left: '25%', transform: 'translate(-50%, -50%)' }}>
          <p className="mb-0 fw-bolder" style={{fontSize: "60px", lineHeight: "1" }}>
            Consultation,
            <br />
            Design,<br />
            & Marketing
          </p>
        </div>
        <div className="position-absolute" style={{ top: '55%', left: '75%', transform: 'translate(-50%, -50%)'}}>
            <Form/>
        </div>
      </div>
      </section>
    </>
  );
};
export default Contact;
