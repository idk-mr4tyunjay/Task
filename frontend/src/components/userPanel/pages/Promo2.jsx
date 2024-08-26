const data = [
  {
    icon: "https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672476/home_nmtylv.svg",
    title: "Potential Roi",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis veniam nihil quidem adipisci, aperiam labore provident ullam porro doloribus?",
  },
  {
    icon: "https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672475/paintbrush-2_wt6opy.svg",
    title: "Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis veniam nihil quidem adipisci, aperiam labore provident ullam porro doloribus?",
  },
  {
    icon: "https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724672475/circle-dollar-sign_ifcy7h.svg",
    title: "Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis veniam nihil quidem adipisci, aperiam labore provident ullam porro doloribus?",
  },
];
const Promo2 = () => {
  return (
    <>
      <div>
        <div className="d-flex flex-column align-items-center">
          <h1 className="txt-blu">Why Choose Us?</h1>
          <img
            src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724673174/Rectangle_58_mf31eo.svg"
            alt="underline"
            className="py-3"
          />
        </div>
        <div className="d-flex mx-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center justify-content-center p-5"
            >
              <img src={item.icon} alt="home" className="py-2" />
              <h2 className="py-2 txt-blu">{item.title}</h2>
              <p className="py-2 p-0 m-0 text-center">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end pe-5 mb-5">
          <img
            src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724673176/Subtract-1_comlvn.svg"
            alt="shape"
          />
        </div>
      </div>
    </>
  );
};

export default Promo2;
