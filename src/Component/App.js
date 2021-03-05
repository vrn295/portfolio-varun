import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Services from './Services/Services';
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/about" exact component={About} />
            <Route path="/Portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
