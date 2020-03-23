import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path={["/", ,"/react-portfolio", "/about"]}>
              <About />
            </Route >
          </Switch>
          <Switch>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
