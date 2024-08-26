const clients = [
  {
    image: "src/assets/images/Ellipse28.svg",
    name: "Project One",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam quo officiis commodi minima alias repellendus tenetur qui blanditiis nostrum?.",
    position: "head",
    
  },
  {
    image: "src/assets/images/Ellipse28.svg",
    name: "Project Two",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam quo officiis commodi minima alias repellendus tenetur qui blanditiis nostrum? of .",
    position: "head",
  },
  {
    image: "src/assets/images/Ellipse28.svg",
    name: "Project Three",
    description: "v Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam quo officiis commodi minima alias repellendus tenetur qui blanditiis nostrum? a description of .",
    position: "head",
  },
  {
    image: "src/assets/images/Ellipse28.svg",
    name: "Project Two",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam quo officiis commodi minima alias repellendus tenetur qui blanditiis nostrum? is a description of .",
    position: "head",
  },
  {
    image: "src/assets/images/Ellipse28.svg",
    name: "Project Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam quo officiis commodi minima alias repellendus tenetur qui blanditiis nostrum? is a description of .",
    position: "head",
  },
];

const Card = () => {
  return (
    <>
      <div className="d-flex m-5">
        {clients.map((item, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center m-3 bg-danger rounded"
          >
            <img
              src={item.image}
              alt={`Image of ${item.name}`}
            />{" "}
            <p className="p-0 m-0">{item.description}</p>
            <p className="p-0 m-0 txt-blu">{item.name}</p>
            <p className="p-0 m-0">{item.position}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
