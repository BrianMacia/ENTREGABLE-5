import { ProvideProtected, ProvideDark, ProvideNumItems } from "./provider/AuthProvider.jsx";
import "./styles.css";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
} from 'react-router-dom';
import Beginning from  './components/beginning/Beginning.jsx';
import Pokedex from './components/pokedexList/Pokedex.jsx'
import Pokemon from "./components/pokemonDetails/Pokemon";
import Encounters from "./components/Location/Encounters.jsx";
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Settings from "./components/settings/Settings.jsx";

export default function App() {
  return (
    <ProvideDark>
      <ProvideProtected>
        <ProvideNumItems>
          <div className="App">
            <Router>
              <div className="pokeball-background"></div>
              <Link to="/settings" className="settings">
                <i className="fas fa-cog"></i>
              </Link>
              <Switch>
                <ProtectedRoute path="/pokedex/:id/encounters">
                  <Encounters/>
                </ProtectedRoute>
                <ProtectedRoute path="/pokedex/:id">
                  <Pokemon/>
                </ProtectedRoute>
                <ProtectedRoute path="/pokedex">
                  <Pokedex/>
                </ProtectedRoute>
                <Route path="/settings" component={Settings}/>
                <Route path="/" component={Beginning}/>
              </Switch>
            </Router>
          </div>
        </ProvideNumItems>
      </ProvideProtected>
    </ProvideDark>
    
  );
}