const Card = ({projects}) => {
  return (
    <>
      <div className="d-flex my-5">
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
            <p className="p-0 m-0 fw-semibold">{project.description}</p>
            <div className="hover-z  bg-orange w-75 rounded d-flex justify-content-center align-items-center p-1 mt-4">
              <p className="p-0 m-0 fw-semibold  text-light ">See More</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
