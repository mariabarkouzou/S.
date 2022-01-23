import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Post from "./components/Post";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Post/>
      {/* <Contact /> */}
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
