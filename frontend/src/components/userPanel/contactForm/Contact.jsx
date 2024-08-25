import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className="position-relative">
        <img
          src="src/assets/images/couple.svg"
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
    </>
  );
};
export default Contact;
