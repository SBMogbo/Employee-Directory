import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Employees from "./components/pages/Employees";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Employees" component={Employees} />  
        </Wrapper>  
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
