//React
import { Route, Switch } from "react-router-dom";

//CSS
import './App.css';

//Layout
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

//Components
import About from "./Components/About";
import Procedures from "./Components/Procedures";
import Feedback from "./Components/Feedback";
import Teams from "./Components/Teams";
import Contact from "./Components/Contact";
import Service from "./Components/Pages/Service";
import Feature from "./Components/Pages/Feature";




function App() {
  return (
    <>
      <Header />


      <main className="container-fluid">
        <Switch>
          <Route exact path="/Service" component={Service} />
          <Route exact path="/Feature" component={Feature} />
          <Route exact path="/">
            <About />
            <Procedures />
            <Feedback />
            <Teams />
            <Contact />
          </Route>
        </Switch>
      </main>


      <Footer />
    </>
  );
}

export default App;
