import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Works,
} from "./components";
import Blogs from "./components/Blogs";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    // <BrowserRouter>
    //   <div className=" bg-cover bg-no-repeat bg-center relative z-0 bg-white-100">
    //     <Navbar />
    //     <Hero />
    //     <About />
    //     <Works />
    //     <Blogs />
    //     <div className="relative z-0">
    //       <Contact />
    //     </div>
    //   </div>
    // </BrowserRouter>
    <MainLayout />
  );
}

export default App;
