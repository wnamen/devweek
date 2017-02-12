import React, { Component } from "react";
import $ from "jquery";

// IMPORT OTHER COMPONENTS AND DEPENDENCIES HERE

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
        <section class="hero electric-blue-light-background text-center">
          <h6 class="gray text-center hh heroH6">Feel free to make any final adjustments.</h6>
        </section>
        <div class="image-container">
          <img src="public/images/example-expense-report.png" />
        </div>
      </div>
    )
  }
}
