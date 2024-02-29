import { useNavigate, useParams } from "react-router-dom";
import { AllProjectContext } from "../Contexts/AllProjectsContext";
import { useContext, useEffect, useState } from "react";
import "../Styles/DetailComponentStyles.modules.scss";

import ImagesSliderDetailHomePavlina from "../Components/ImagesSliderDetailHomePavlina";
import EmailButton from "../Components/MailtoButton";

function HomePavlina() {
  const { projectId } = useParams();
  const { getOneProduct } = useContext(AllProjectContext);
  const [project, setProject] = useState({});

  useEffect(() => {
    setProject(getOneProduct(0));
  }, [0]);


  return (
    <div className="ProductDetailWrapper">
      <ImagesSliderDetailHomePavlina className="ImgSlider" />

<div className="ProductDescriptionWrapper">
      {project && <h3>{project.title}</h3>}
      {project && <p>{project.description}</p>}
{project.accomplishments && 
  <>
    <h3>Acomplishments</h3>
    <ul className="ListingDetail">
      {project.accomplishments.map((acc, index) => (
        <li key={index}>{acc}</li>
      ))}
    </ul>
  </>
}
{project.education && 
  <>
    <h3>Education</h3>
    <ul className="ListingDetail">
      {project.education.map((edu, index) => (
        <li key={index}>{edu}</li>
      ))}
    </ul>
  </>
}
</div>


      <div className="ButtonsWrapper">
        <EmailButton />

      </div>
    </div>
  );
}

export default HomePavlina;
