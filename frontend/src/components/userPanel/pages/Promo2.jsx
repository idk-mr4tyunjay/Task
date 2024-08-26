const data = [
  {
    icon: "src/assets/icons/home.svg",
    title: "Potential Roi",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis veniam nihil quidem adipisci, aperiam labore provident ullam porro doloribus?",
  },
  {
    icon: "src/assets/icons/paintbrush-2.svg",
    title: "Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis veniam nihil quidem adipisci, aperiam labore provident ullam porro doloribus?",
  },
  {
    icon: "src/assets/icons/circle-dollar-sign.svg",
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
          <img src="src/assets/shapes/Rectangle58.svg" alt="underline" className="py-3"/>
        </div>
        <div className="d-flex m-5">
          {data.map((item, index) => (
            <div key={index} className="d-flex flex-column align-items-center justify-content-center p-5">
              <img src={item.icon} alt="home" className="py-2"/>
              <h2 className="py-2 txt-blu">{item.title}</h2>
              <p className="py-2 text-center">{item.description}</p>
            </div>
          ))}
        </div>
        <img src="src/assets/shapes/Subtract-1.svg" alt="" />
      </div>
    </>
  );
};

export default Promo2;
