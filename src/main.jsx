import {createRoot} from "react-dom/client";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />)