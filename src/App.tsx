import type { Component } from 'solid-js';
import { Routes, Route } from "@solidjs/router";
import {lazy} from "solid-js";
const Nav= lazy(() => import('./Components/Nav'));
const Home= lazy(() => import('./pages/Home'));
const About= lazy(() => import('./pages/About'));
const Contact= lazy(() => import('./pages/Contact'));
const Chat= lazy(() => import('./Pages/Chat'));
const App: Component = () => {
  return (
      <div class="">
          <Nav />
          <Routes>
              <Route path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Chat" component={Chat} />
          </Routes>
      </div>
  );
};

export default App;
