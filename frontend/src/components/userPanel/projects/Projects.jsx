import Card from "./Card";
import { useEffect, useState } from "react";
import { fetchProjects } from "../../../services/admin-projects";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      try {
        const projects = await fetchProjects();
        setProjects(projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    getProjects();
  }, []);

  return (
    <>
      <div className="my-5 bg-blu">
        <div className="d-flex flex-column align-items-center text-center">
            <h1 className=" w-50 txt-blu pt-5">
                Our Projects
            </h1>
            <img src="https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724673174/Rectangle_58_mf31eo.svg" alt="underline" className="py-3"/>
            <p className="w-50 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius excepturi, dolor nemo maxime consequuntur numquam! Ipsa architecto laborum neque animi.</p>
        </div>
        <div className="pb-5">
            <Card projects={projects}/>
        </div>
      </div>
    </>
  );
};
export default Projects;
