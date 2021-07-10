import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import {MarvelScreen} from '../components/marvel/MarvelScreen';
import { SearchScreen } from "../components/search/SearchScreen";
import {Navbar} from '../components/ui/Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
         <Route exact path="/marvel" component={MarvelScreen}/>
         <Route exact path="/dc" component={DcScreen}/>
         <Route exact path="/hero/:heroeId" component={HeroScreen}/>
         <Route exact path="/search" component={SearchScreen}/>
        </Switch>
      </div>
    </Router>
  );
}