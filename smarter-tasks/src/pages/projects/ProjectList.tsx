import React, { useEffect } from "react";
import { fetchProjects } from "../../context/projects/actions";
import { useProjectsDispatch } from "../../context/projects/context";
import ProjectListItems from './ProjectListItems';

const ProjectList: React.FC = () => {
  const dispatchProjects = useProjectsDispatch();

  useEffect(() => {
    // And I'll pass the `dispatchProjects` to `fetchProjects` function.
    fetchProjects(dispatchProjects)
  }, [dispatchProjects])

  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <ProjectListItems />
    </div>
  );
};
export default ProjectList;
