import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <div className="App">
        <div class="footer" id="contact">
          <div class="line">
            <a
              href="https://www.linkedin.com/in/peter-fuoco-72477688/"
              target="_blank"
            >
                <img src='https://image.flaticon.com/icons/png/512/174/174857.png'>

                </img>
              
            </a>

            <a href="https://github.com/peterfuoco" target="_blank">
              <img src='https://www.logo.wine/a/logo/GitHub/GitHub-Wordmark-White-Dark-Background-Logo.wine.svg'>

              </img>
            </a>
            <a
              href="https://drive.google.com/file/d/1jtLw6Yl8_Xkmz3fQCWvS6OO_wDoZprCR/view?usp=sharing"
              target="_blank"
            >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamIxi-0l5lB692vqg6oNy2REeqsl407UFtA&usqp=CAU'></img>
            </a>

            <a href="mailto:peterfuoco@gmail.com">
                <img src='data:image/png;base64,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'></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
