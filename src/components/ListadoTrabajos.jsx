import { trabajos } from "./layout/data/trabajos"
import { Link } from 'react-router-dom'; // Importar el componente Link desde react-router-dom
export const ListadoTrabajos = ({limite = 5}) => {
  return (
      <section className="works">
      {
        trabajos.slice(0,limite).map(trabajos => {
          return (
            <div key={trabajos.id} className="work-item card col-12 col-md-6 col-lg-4 container">
            <div className="card-img-top mask">
              <img src={"/src/images/" + trabajos.id + ".jpeg"} alt={trabajos.nombre} />
            </div>
            <div className="card-body">
              <span className="card-text">{trabajos.categoria}</span>
              <h2 className="card-title">
                <Link to={"/proyecto/" + trabajos.id}>{trabajos.nombre}</Link>
              </h2>
              <h3 className="card-subtitle">{trabajos.tecnologias}</h3>
            </div>
          </div>
          );
        }

        )
      }
      </section>
  )
}
