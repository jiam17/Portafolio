import { trabajos } from "./layout/data/trabajos"
import { Link } from 'react-router-dom'; // Importar el componente Link desde react-router-dom
import { ListadoTrabajos } from './ListadoTrabajos'

export const Portafolio = () => {
  return (
    <div className="page">
      <ListadoTrabajos />
    </div>
  )
}
