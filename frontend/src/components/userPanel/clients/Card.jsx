const Card = ({ clients }) => {
  return (
    <>
      <div className="d-flex my-5">
        {clients.map((item, index) => (
          <div
            key={index}
            className="d-flex flex-column justify-content-between align-items-center m-3 bg-light rounded p-3 shadow-lg"
          >
            <img
              src={item.image}
              alt={`Image of ${item.name}`}
              className="round-image"
            />
            <p className="p-0 m-0">{item.description}</p>
            <div className="bottom-content text-center">
              <p className="p-0 m-0 text-primary fw-semibold">{item.name}</p>
              <p className="p-0 m-0">{item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
