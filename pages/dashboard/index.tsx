import type { NextPage } from "next";
import { PageContainer } from "@features/layout";
import { ProjectList } from "@features/projects";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type ProjectListContextTypes = {
  key: number | null;
  setKey: Dispatch<SetStateAction<number>> | null;
};

export const ProjectListContext = createContext<ProjectListContextTypes>({
  key: null,
  setKey: null,
});

const Home: NextPage = () => {
  const [projectListKey, setProjectListKey] = useState(0);

  return (
    <PageContainer
      title="Projects"
      info="Overview of your projects sorted by alert level."
    >
      <ProjectListContext.Provider
        value={{ key: projectListKey, setKey: setProjectListKey }}
      >
        <ProjectList key={projectListKey}></ProjectList>
      </ProjectListContext.Provider>
    </PageContainer>
  );
};

export default Home;
