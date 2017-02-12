import React, { Component } from "react";
import { Link } from "react-router";
import { Button } from "react-materialize";
import $ from "jquery";

// IMPORT OTHER COMPONENTS AND DEPENDENCIES HERE
import Customizer from "./Customizer";

export default class ImageShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // COMPONENT STATE DECLARTION HERE
    }
  }
  //LOGIC HERE: CHECK OUT COMPONENT MOUNTING IF YOU WANT TO TRY IT OUT



  render(){
    //RENDER LOGIC HERE

    return(
      <div class="sixteen">
        <section style={{"margin-top":"5em"}} class="customizeContainer electric-blue-light-background text-center">
          <h6 class="gray text-center hh customizeH6">Feel free to make any final adjustments.</h6>
          <div>
            <div class="image-container offset-by-one six columns">
              <img class="image" src="public/images/example-expense-report.png" />
            </div>
            <div class="offset-by-two five columns">
              <Customizer />
              <Link to="/payment"><div class="lgnBtn settingsBtn smoothBkgd electric-blue-background white">Continue</div></Link>
            </div>
          </div>

        </section>
      </div>
    )
  }
}
