import React, { Component } from "react";
import "../App.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <h2 id='my-projects'>My Projects</h2>
      <div className="grid" id='projects'>
        <div class="column">
          <div class="left">
            <a href="http://theknowledge.surge.sh/" target="_blank">
              <h1>The Knowledge</h1>
            </a>
            <p>
              MERN stack (MongoDB, Express, React and Node.js) and full CRUD
              functionality. The app uses authorization, consisting of sign
              up/log in functionality, encrypted passwords and an authorization
              flow. 3 models total for quizzes, users, and seed data. Users can
              take a quiz and see quiz results, and upon finishing a quiz, the
              quiz "play" count updates on the backend. Future improvements
              include allowing users to see only quizzes they have created with
              a toggle button, linking to individual quizzes so they can be
              easily shared, and editing quizzes. To see quizzes, users can sign
              in with a test email address to simulate the authorization
              process, and begin taking and creating quizzes.{" "}
            </p>
          </div>
          <div class="pic">
            <a href="http://theknowledge.surge.sh/" target="_blank">
              <img src="theKnowledge.png" />
            </a>
          </div>
        </div>
        <div class="column">
            <div class='left'>

          <a href="https://peterfuoco.github.io/" target="_blank">
            <h1>Brewery Crawl</h1>
          </a>
          <p>
            {" "}
            Current functionality includes searching for breweries by the user
            inputting a city which returns a list of all breweries for that
            city. Users can click on a "details" button for each brewery which
            pops up general information about the brewery, including a hyperlink
            to the website and a google map iframe rendering its location via
            Google Maps API. Brewery details are populated via OpenBreweryDB's
            API. This app was my first coding project, and was built using
            Javascript, Jquery, CSS, and HTML. Future improvements include local
            storage,so users can create a list of breweries which gets rendered
            on the page, and creating multiple markers an embedded Google Maps
            iframe.{" "}
          </p>
            </div>
              <div class="pic">
          <a href="https://peterfuoco.github.io/" target="_blank">
         
                <img src="Brewery.png" />
          </a>
            </div>
        </div>
        <div class="column">
        <div class='left'>
          <a
            href="https://polar-journey-28859.herokuapp.com/pro_pedals/"
            target="_blank"
            >
            <h1>Guitar Pedalboard</h1>
          </a>
          <p>
            This project utilizes MVC architecture and JS, HTML, and CSS in
            order to dynamically render user input based on guitar pedals. Seed
            data is provided in the pro_pedals route as a reference for users.
            The app has create, read, update, and delete functionality for user
            input in the 'pedals' route. The second controller, Guitarists, has
            an index and show page in order to provide basic information for
            users to reference before returning to the pedals route. While there
            are currently issues with seeding data, I plan to re-seed data with
            more guitarists and pedals so users can select specific types of
            guitar pedals which corresponding images.{" "}
          </p>
          </div>
          <div class="pic">
          <a
            href="https://polar-journey-28859.herokuapp.com/pro_pedals/"
            target="_blank"
            >
              <img src="pedals.png" />
          </a>
            </div>
    
        </div>
        <div class="column">
            <div class='left'>

          <a href="https://happy-golick-b56eff.netlify.com/" target="_blank">
            <h1>Newsworthy</h1>
          </a>
          <p>
            This project utilizes a Ruby on Rails backend and React frontend to
            dynamically render results based on user selections in the quiz. The
            app consists of seeded data from actual screenshots of online news
            headlines, and users are prompted to select whether the reported
            story is real or fake. React Slider and React Slick were used to
            create the carousel effect, and React Modal was used for the
            Spotting Fake News button.{" "}
          </p>
                </div>
            <div class="pic">
          <a href="https://happy-golick-b56eff.netlify.com/" target="_blank">
              <img
                src="./Screen Shot 2019-10-08 at 4.43.43 PM.png"
                class="newsworthy"
                />
          </a>
            </div>
        </div>
      </div>
                </div>
    );
  }
}

export default Projects;
