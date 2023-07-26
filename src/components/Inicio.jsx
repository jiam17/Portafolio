import { Link } from "react-router-dom"
import { ListadoTrabajos } from "./ListadoTrabajos"

export const Inicio = () => {
  return (
    <div className="home container">
      <h1 className="display-4 mt-3">
        Hola, soy <strong>Jonathan Alfaro</strong>, un desarrollador web.
        Ofrezco mis servicios de <strong>programación y desarrollo</strong> para todo tipo de proyectos web.
      </h1>
      <h2 className="title title lead mt-3">
        Te ayudo a crear tu sitio o aplicacion web, <Link to="/contacto">Contacta conmigo.</Link>
      </h2>
      <section className="last-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web. </p>
        <div className="works">
          <ListadoTrabajos limite="2" />
        </div>
      </section>
    </div>
  )
}
