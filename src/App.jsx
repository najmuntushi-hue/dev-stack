import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <section id="projects" className="hidden" aria-hidden="true" />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;