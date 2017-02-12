import React, { Component } from "react";
import Router, { browserHistory } from "react-router";
import { Button } from "react-materialize";
import $ from "jquery";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Axios from 'axios'

// import "../../../css/landing.css";
const CLOUDINARY_UPLOAD_PRESET = 'iemwkgco';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dev-week-hack/image/upload';

// IMPORT OTHER COMPONENTS AND DEPENDENCIES HERE

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cloud_name: 'dev-week-hack',
      api_key: '542866124832859',
      uploadFile: null,
      uploadedFileCloudinaryUrl: ''
      // COMPONENT STATE DECLARTION HERE
    }
  }
  uploadWidget() {
    cloudinary.openUploadWidget({ cloud_name: 'dev-week-hack', upload_preset: 'hkuswefc'},
      function(error, result) {
        console.log(result[0].url);
        // post result[0].url into database for image location
        Axios.post('/api/vision/test', { user: "BEN", image: result[0].url, phoneNumber: '555-555-5555'} )
          .then(function(res){
            // redirect to success
            browserHistory.push('/success')
          })
      });
    }

  onImageDrop(files){
    this.setState({
      uploadedFile: files[0]
    })
    this.handleImageUpload(files[0])
  }

  handleImageUpload(file){
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

      upload.end((err, res) => {
        if (err) { console.log(err) }
        if (res.body.secure_url !== ''){
          this.setState({
            uploadedFileCloudinaryUrl: res.body.secure_url
          })
        }
      })
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
          <h1 class="hh heroH1">EasyPay</h1>
          <h6 class="gray text-center hh heroH6">Set up an auto payment today!</h6>
          <div>
            <button onClick={this.uploadWidget.bind(this)} className="upload-button two electric-blue-background file-input contact-upload white">
              Upload PDF / Image
            </button>
          </div>
        </section>
      </div>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
};
