import React, { Component } from "react";
import { Button } from "react-materialize";
import $ from "jquery";

// import "../../../css/landing.css";


// IMPORT OTHER COMPONENTS AND DEPENDENCIES HERE

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // COMPONENT STATE DECLARTION HERE
    }
  }
  //LOGIC HERE: CHECK OUT COMPONENT MOUNTING IF YOU WANT TO TRY IT OUT
  onHandleFile = (e) => {
    let self = this;
    let path;
    let filename;
    $("#hiddenInput").trigger("click");
    $('#hiddenInput').change(function() {
        let file = $(this)[0].files[0];
        path = $(this).val();
        filename = path.replace(/^.*\\/, "");
        $('.fileName').text(filename);
        self.setState({
          file: filename,
          data: file
        });
        self.context.router.push("/customize");
    });
  };


  render(){
    //RENDER LOGIC HERE

    return(
      <div class="sixteen">
        <section class="hero electric-blue-light-background text-center">
          <h1 class="hh heroH1">easypay</h1>
          <h6 class="gray text-center hh heroH6">Set up an auto payment today!</h6>
          <div class="two electric-blue-background file-input">
            <input type="file" id="hiddenInput" class="lgnBtn settingsBtn lgnBtnLg smoothBkgd electric-blue-background white inline-block signupBtn hidden"></input>
            <a class="contact-upload white" onClick={this.onHandleFile}>Upload PDF</a>
          </div>
        </section>
      </div>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
};
