const Form = () => {
    return (
      <>
        <div className="border fluid transparent-background" style={{ height: "70vh", width: "25vw" }}>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h2 className="text-light text-center pb-4" style={{lineHeight: "1"}}>Get a Free <br /> Consultation</h2>
            <div className="w-75">
                <form action="" onSubmit={() => {}}>
                  <div className="form-group mb-3 ">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      value={""}
                      onChange={() => {}}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={""}
                      onChange={() => {}}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={""}
                      onChange={() => {}}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                      value={""}
                      onChange={() => {}}
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Form;
  