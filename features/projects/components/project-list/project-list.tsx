import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { LoadingCircle } from "@features/ui";
import { ErrorMessageContainer } from "@features/layout";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return <LoadingCircle></LoadingCircle>;
  }

  if (isError) {
    console.error(error);
    return <ErrorMessageContainer></ErrorMessageContainer>;
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
