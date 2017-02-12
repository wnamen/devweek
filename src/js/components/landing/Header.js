import React, { Component } from "react";
import { Button } from "react-materialize";
import $ from "jquery";
import Dropzone from 'react-dropzone';
import request from 'superagent';

// import "../../../css/landing.css";
const CLOUDINARY_UPLOAD_PRESET = 'iemwkgco';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dev-week-hack/image/upload';
// $.cloudinary.config({ cloud_name: 'sample', api_key: '874837483274837'})

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
              console.log(error)
                console.log(result);
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
          <h1 class="hh heroH1">easypay</h1>
          <h6 class="gray text-center hh heroH6">Set up an auto payment today!</h6>
          <div class="two electric-blue-background file-input">
            <input type="file" id="hiddenInput" class="lgnBtn settingsBtn lgnBtnLg smoothBkgd electric-blue-background white inline-block signupBtn hidden"></input>
            <a class="contact-upload white" onClick={this.onHandleFile}>Upload PDF</a>
          </div>
          <form>
            <div className="FileUpload">
              <Dropzone
                onDrop={this.onImageDrop.bind(this)}
                multiple={false}
                accept="image/*">
                <div>Drop an image or click to select a file to upload.</div>
              </Dropzone>
            </div>
            <div>
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>
          </form>
          <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
        </section>
      </div>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
};
