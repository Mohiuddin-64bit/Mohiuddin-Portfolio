import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Works,

} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background bg-cover bg-no-repeat bg-center relative z-0 bg-white-100">
        <Navbar />
        <Hero />
        <About />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
