const Promo = () => {
  return (
    <>
      <div className="d-flex h-100 " id="services">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{width:"40vw"}}>
          <h1 className="txt-blu">Not Your Average Realtor</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, elit. Sed nobis suscipit fugit culpa, eveniet corrupti quo eius, iusto perspiciatis, repellendus sequi odit minus animi asperiores cumque ratione nemo </p>
          
        </div >
        {/* <img src="src/assets/shapes/Group1.svg" alt="24" />
        <img src="src/assets/shapes/Ellipse8.svg" alt="24" /> */}

        <div className="d-flex mt-5 justify-content-center relative"style={{overflow: "hidden" }}>
          {/* <img
            src="src/assets/shapes/ellipse7.svg"
            alt=""
            className="rotate-90 position-absolute"
          /> */}
          {/* <img src="src/assets/shapes/Ellipse24.svg" alt="24" />
          <img src="src/assets/shapes/Ellipse25.svg" alt="24" />
          <img src="src/assets/shapes/Ellipse24-1.svg" alt="24" /> */}
          <div className="relative d-flex" >
            <img
              src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672797/promo1_ewrrbr.svg"
              alt="img1"
              className="img-fluid "
              style={{width:"33vw"}}
            />
            <div className="relative d-flex flex-column">
              <img src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672797/promo2_ffdtjd.svg" alt="img2" style={{width:"25vw"}}/>
              <img src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672797/promo3_jsapdb.svg" alt="img3" style={{width:"25vw"}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
