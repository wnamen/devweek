import React, { Component } from "react";
import { Button } from "react-materialize";
import $ from "jquery";

// import "../../../css/landing.css";


// IMPORT OTHER COMPONENTS AND DEPENDENCIES HERE

export default class PaymentForm extends React.Component {
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
      <div class="sixteen columns gray-light-background">
        <div class="text-center fpng">
          Payment Form Here
        </div>
      </div>
    )
  }
}
