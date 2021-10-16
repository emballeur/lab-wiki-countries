//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router';
import allCountries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
       <Switch>
        <Route exact path="/country/:cca3" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
