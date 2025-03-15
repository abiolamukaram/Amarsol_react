import { createBrowserRouter } from "react-router-dom";
import About from "./src/components/pages/About";
import Services from "./src/components/pages/Services";
import Contact from "./src/components/pages/Contact";
import App from "./src/App";



export const router = createBrowserRouter ([
{path: "/", element: <App />},
{path: "about", element: <About />},
{path: "services", element: <Services />},
{path: "contact", element: <Contact />}
])