const projects = [
  {
    image: "src/assets/images/project.svg",
    name: "Project One",
    description: "This is a description of .",
  },
  {
    image: "src/assets/images/project.svg",
    name: "Project Two",
    description: "This is a description of .",
  },
  {
    image: "src/assets/images/project.svg",
    name: "Project Three",
    description: "This is a description of .",
  },
  {
    image: "src/assets/images/project.svg",
    name: "Project Two",
    description: "This is a description of .",
  },
  {
    image: "src/assets/images/project.svg",
    name: "Project Three",
    description: "This is a description of .",
  },
  {
    image: "src/assets/images/project.svg",
    name: "Project Three",
    description: "This is a description of .",
  },
];

const Card = () => {
  return (
    <>
      <div className="d-flex m-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center m-3"
          >
            <img
              src={project.image}
              alt={`Image of ${project.name}`}
              className="rounded"
              style={{ height: "230px", width: "270px", objectFit: "cover" }}
            />
            <h3>{project.name}</h3>
            <p className="p-0 m-0">{project.description}</p>
            <div className=" bg-danger w-75 d-flex justify-content-center align-items-center">
              <p className="p-0 m-0">See More</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
