import React, {Component} from 'react';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import "./App.css";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Projects />
        <Footer />
      </div>
  );
}
}

export default App;
