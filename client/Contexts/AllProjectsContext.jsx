import { createContext, useState } from "react";
import DataSet from '../Assets/db.json';

export const AllProjectContext = createContext();

const AllProjectContextProvider = ({ children }) => {
  const [projects] = useState(DataSet.projects);

  const getOneProduct = (projectId) => {
    return projects.find((project) => project.id == projectId);
  };

  return (
    <AllProjectContext.Provider
      value={{ projects, getOneProduct }}
    >
      {children}
    </AllProjectContext.Provider>
  );
};

export default AllProjectContextProvider;
