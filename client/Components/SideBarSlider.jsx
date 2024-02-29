import { Link } from "react-router-dom";
import "../Styles/SideBarSlider.modules.scss";
import DataSet from '../Assets/db.json';

function SideBarSlider() {
  const projects = DataSet.projects;

  return (
    <>
      <div className="SideBarWrapper">
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="SideBarItem">
              <Link to={`/${project.id}`}>
                <img src={project.thumbnail} className="ImgThumnail" alt={project.title}/>
                <p>{project.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideBarSlider;
