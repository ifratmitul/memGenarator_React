import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
//import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAuP4FWmJfCS5pk7U3jbqjIPYhhzc03G84",
    authDomain: "imggallery-d1ffc.firebaseapp.com",
    databaseURL: "https://imggallery-d1ffc.firebaseio.com",
    projectId: "imggallery-d1ffc",
    storageBucket: "imggallery-d1ffc.appspot.com",
    messagingSenderId: "19137297370",
    appId: "1:19137297370:web:cda8e47a12acc88eea1ee3",
    measurementId: "G-1CGM3L6GEN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
class Uploader extends Component {
  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };
 
  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };
 
  render() {
    return (
      <div className ="btn">
        <form >
          
          
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} alt = ""/>}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
      </div>
    );
  }
}
 
export default Uploader;