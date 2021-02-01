import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return(
    <div >
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/movie-detail" component={Detail} />
        <Route path="/search" component={Search} />
      </HashRouter>
    </div>
  );
}

export default App;