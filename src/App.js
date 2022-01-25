import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import About from "./pages/About";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ModelProvider from "./context/provider/ModelProvider";
import Nav from "./components/Nav";
import NavProvider from "./context/provider/NavProvider";
import Toggle from "./components/Toggle";
import DestinationsProvider from "./context/provider/DestinationsProvider";
import Details from "./pages/Details";
import SharedProvider from "./context/provider/SharedProvider";
import GalleryProvider from "./context/provider/GalleryProvider";
import Contact from "./pages/Contact";
import AnimationProvider from "./context/provider/AnimationProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <ModelProvider>
          <NavProvider>
            <DestinationsProvider>
              <SharedProvider>
                <GalleryProvider>
                  <AnimationProvider>
                    <Toggle />
                    <Nav />
                    <HelmetProvider>
                      <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/about" exact element={<About />} />
                        <Route
                          path="/details/:id"
                          exact
                          element={<Details />}
                        />
                        <Route path="/contact" exact element={<Contact />} />
                        <Route path="*" element={<PageNotFound />} />
                      </Routes>
                    </HelmetProvider>
                  </AnimationProvider>
                </GalleryProvider>
              </SharedProvider>
            </DestinationsProvider>
          </NavProvider>
        </ModelProvider>
      </Router>
    </div>
  );
}

export default App;
