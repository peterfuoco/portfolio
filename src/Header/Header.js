import React, { Component } from "react";
// import DiNodejsSmall from "react-icons/di";
// import { IconName } from "react-icons/di";
// import DiReact from 'react-icons/di';
import {Card, Button} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div>

            <a href='#'>

          <h1>Peter Fuoco</h1>
            </a>
          <nav>

            <a href="#main-skills">
              <h1>  Skills</h1>
              </a>
              <a href="#my-projects">
              <h1>  Projects</h1>
              </a>
     
          </nav>
          </div>
        </header>
        <div class="about">
          <img src="peter-fuoco.jpg" />
          <div>
  
            <p>
              I’m passionate about making an impact with technology and working
              seamlessly with others to create positive change
            </p>
          </div>
        </div>
        <div id='main-skills'>
         <h2>My main skills are:</h2>
        </div>
        
        <div className= 'skills'>
     
        <div id='skills' className='container'>
          <img id='react' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'></img>
          <h3>React</h3>
        </div>
        <div className='container'>
          <img src='https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg'></img>
          <h3>JavaScript</h3>
        </div>
        <div className='container'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png'></img>
          <h3>HTML 5</h3>
        </div>
        <div className='container'>
          <img src='https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png'></img>
          <h3>CSS 3</h3>
        </div>
        <div className='container'>
          <img src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'></img>
          <h3>Node</h3>
        </div>
        <div className='container'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png'></img>
          <h3>Git</h3>
        </div>
        <div className='container'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'></img>
          <h3>PostgreSQL</h3>
        </div>
        <div className='container'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'></img>
          <h3>Python</h3>
        </div>
{/* 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
              <Card.Body>
                <Card.Title>React</Card.Title>
              </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.vhv.rs/dpng/d/313-3133777_javascript-transparent-background-svg-hd-png-download.png" />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
          </Card> */}

        </div>
      </div>
    );
  }
}

export default Header;
