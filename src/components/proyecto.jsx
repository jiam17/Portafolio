import { useParams } from "react-router-dom";
import { trabajos } from "./layout/data/trabajos";
import { useEffect, useState } from "react";

export const Proyecto = () => {
  const [proyecto, setProyecto] = useState({});
  const params = useParams();

  useEffect(() => {
    const proyecto = trabajos.find((trabajo) => trabajo.id === params.id);
    setProyecto(proyecto);
  }, [params.id]);

  return (
    <div className="page page-work container">
        <div className="mask container">
            <img className="img-fluid" src={"/src/images/"+proyecto.id+".jpeg"} />
        </div>
      <h1 className="heading">{proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
      <a href={proyecto.url} target="_blank">Ir al proyecto</a>
    </div>
  );
};
