import Card from "./Card";

const Projects = () => {
  return (
    <>
      <div className="my-5">
        <div className="d-flex flex-column align-items-center text-center">
            <h1 className=" w-50 txt-blu">
                Our Projects
            </h1>
            <img src="src/assets/shapes/Rectangle58.svg" alt="underline" className="py-3"/>
            <p className="w-50 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius excepturi, dolor nemo maxime consequuntur numquam! Ipsa architecto laborum neque animi.</p>
        </div>
        <div className="pb-5">
            <Card/>
        </div>
      </div>
    </>
  );
};
export default Projects;
