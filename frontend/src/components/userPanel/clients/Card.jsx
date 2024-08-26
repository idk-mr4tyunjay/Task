const Card = ({ clients }) => {
  return (
    <>
      <div className="d-flex m-5">
        {clients.map((item, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center m-3 bg-light rounded p-3 shadow-lg"
          >
            <img src={item.image} alt={`Image of ${item.name}`} className="round-image"/>
            <p className="p-0 m-0">{item.description}</p>
            <p className="p-0 m-0 text-primary fw-semibold">{item.name}</p>
            <p className="p-0 m-0">{item.position}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
