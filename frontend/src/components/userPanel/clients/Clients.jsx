import Card from "./Card";

const Clients = () => {
  return (
    <>
      <div className="my-5">
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center w-50 txt-blu">
                Happy Clients
            </h1>
            <img src="src/assets/shapes/Rectangle58.svg" alt="underline" className="py-3"/>
        </div>
        <div className="pb-5">
            <Card/>
        </div>
      </div>
    </>
  );
};
export default Clients;
