const Promo = () => {
  return (
    <>
      <div className="d-flex h-100 w-100">
        <div className="d-flex flex-column align-items-center justify-content-center col">
          <h1 className="txt-blu">Not Your Average Realtor</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, elit. Sed nobis suscipit fugit culpa, eveniet corrupti quo eius, iusto perspiciatis, repellendus sequi odit minus animi asperiores cumque ratione nemo </p>
          
        </div>
        {/* <img src="src/assets/shapes/Group1.svg" alt="24" />
        <img src="src/assets/shapes/Ellipse8.svg" alt="24" /> */}

        <div className="d-flex mt-5 justify-content-center col relative">
          {/* <img
            src="src/assets/shapes/ellipse7.svg"
            alt=""
            className="rotate-90 position-absolute"
          /> */}
          {/* <img src="src/assets/shapes/Ellipse24.svg" alt="24" />
          <img src="src/assets/shapes/Ellipse25.svg" alt="24" />
          <img src="src/assets/shapes/Ellipse24-1.svg" alt="24" /> */}
          <div className="relative d-flex">
            <img
              src="src/assets/images/promo1.svg"
              alt="img1"
              className="img-fluid "
            />
            <div className="relative d-flex flex-column">
              <img src="src/assets/images/promo2.svg" alt="img2" />
              <img src="src/assets/images/promo3.svg" alt="img3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
