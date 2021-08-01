import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";









function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/">
          <Header/>
          <Footer/>
       
         
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;