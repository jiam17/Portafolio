import { trabajos } from "./layout/data/trabajos"
import { Link } from 'react-router-dom'; // Importar el componente Link desde react-router-dom
export const Portafolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portafolio</h1>
      {
        trabajos.map(trabajos => {
          return (
          <article key={trabajos.id}>
            <span>{trabajos.categoria}</span>
            <h2><Link to={"/proyecto/"+trabajos.id}>{trabajos.nombre}</Link></h2>
            <h3>{trabajos.tecnologias}</h3>
          </article>
          );
        }

        )
      }
    </div>
  )
}
