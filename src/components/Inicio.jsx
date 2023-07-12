import { Link } from "react-router-dom"

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola, soy <strong>Jonathan Alfaro</strong>, un desarrollador web.
        Ofrezco mis servicios de <strong>programación y desarrollo</strong> para todo tipo de proyectos web.
      </h1>
      <h2>
        Te ayudo a crear tu sitio o aplicacion web, <Link to="/contacto">Contacta conmigo.</Link>
      </h2>
      <section className="last-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web. </p>
        <div className="works">

        </div>
      </section>
    </div>
  )
}
