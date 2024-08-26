import Shape1 from "./shapes/Shape1";
import Shape2 from "./shapes/Shape2";
import Shape3 from "./shapes/Shape3";
import Shape4 from "./shapes/Shape4";

const About = () => {
  return (
    <>
      <div className="my-5" id="about">
        <div style={{ position: "relative", top: "-200px", left: "0px" }}>
          <Shape1 />
        </div>

        <div style={{ position: "relative", }}>
          {" "}
          <Shape2 />
        </div>

        <div style={{ position: "relative"}}>
          <Shape3 />
        </div>
        <div style={{ position: "relative" }}>
          {" "}
          <Shape4 />
        </div>

        <img
          src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724673172/Rectangle_55_iieymu.svg"
          alt="img"
          style={{
            height: "90px",
            width: "90px",
            position: "relative",
            top: "10px",
            left: "320px",
          }}
        />
      </div>

      {/* text */}
      <div className="d-flex flex-column justify-content-center align-items-center mt-4">
        <div className="w-50 text-center">
          <h1 className="txt-blu py-3">About Us</h1>
          <img
            src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724673174/Rectangle_58_mf31eo.svg"
            alt="underline"
            className="mx-auto d-block pb-5"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi optio
            aperiam explicabo sint accusantium dolores nostrum impedit amet ex,
            earum pariatur. Minima eos illo quis provident unde, reiciendis
            natus itaque deserunt aliquid nesciunt neque deleniti dolor omnis
            architecto alias in. Illum eius eaque nemo impedit explicabo
            voluptatem voluptate, officia sequi!
          </p>
        </div>
        <div className="hover-z">
          <button className="my-5 rounded fw-semibold bg-light txt-blu px-5 py-1 border border-primary">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};
export default About;
