import { SiCss3, SiExpress, SiGithub, SiHtml5, SiJavascript, SiMaterialui, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiSequelize, SiStyledcomponents } from "react-icons/si";

function TechIcons({ technologies }) {
    
  return (
    <>
    {
      technologies.includes('Html5') &&
      <div className="text-white ">
        <SiHtml5  size={30}/>
      </div>
    }
    {
      technologies.includes('CssThree') &&
      <div className="text-white ">
        <SiCss3 size={30} />
      </div>
    }
    {
      technologies.includes('ReactJs') &&
      <div className="text-white ">
        <SiReact size={30} />
      </div>
    }
    {
      technologies.includes('Redux') &&
      <div className="text-white ">
        <SiRedux size={30} />
      </div>
    }
    {
      technologies.includes('Nodedotjs') &&
      <div className="text-white ">
        <SiNodedotjs size={30} />
      </div>
    }
    {
      technologies.includes('Express') &&
      <div className="text-white ">
        <SiExpress size={30} />
      </div>
    }
    {
      technologies.includes('Postgresql') &&
      <div className="text-white ">
        <SiPostgresql size={30} />
      </div>
    }
    {
      technologies.includes('Mui') &&
      <div className="text-white ">
        <SiMaterialui size={30} />
      </div>
    }
    {
      technologies.includes('StyledComponents') &&
      <div className="text-white ">
        <SiStyledcomponents size={30} />
      </div>
    }
    {
      technologies.includes('Javascript') &&
      <div className="text-white ">
        <SiJavascript size={30} />
      </div>
    }
    {
      technologies.includes('Sequelize') &&
      <div className="text-white ">
        <SiSequelize size={30} />
      </div>
    }
    {
      technologies.includes('Github') &&
      <div className="text-white ">
        <SiGithub size={30} />
      </div>
    }
    </>
  );
}
export default TechIcons