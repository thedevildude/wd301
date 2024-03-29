import React, { useEffect } from "react";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";
import { useMembersDispatch } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";
import { Outlet } from "react-router-dom";

const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch();
  const memberDispatch = useMembersDispatch();
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchMembers(memberDispatch);
  }, [projectDispatch, memberDispatch]);
  return <Outlet />;
};

export default ProjectContainer;