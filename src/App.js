import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Maintain from "./components/Maintain";

function App() {
  return (
    <>
      <Router>
        <Container>
          <section>
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/Maintain">
                <Maintain />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </section>
        </Container>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Router>
    </>
  );
}

export default App;