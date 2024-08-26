import navbarData from "../../../static/navbar.json";
const Navbar = () => {
  return (
    <>
      <div className="d-flex justify-content-around m-0">
        <div className="p-0 m-0 mt-2">
          <img src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672795/logo_s84s9j.svg" alt="logo" />
        </div>
        <div className="d-flex">
          {navbarData.data.map((item, index) => (
            <div key={index} className="p-0 m-0 mt-1">
              <p className="p-4 text-uppercase fs-6 fw-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
