import React from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';


class App extends React.Component{
  state = {
      clientId: 'idhere',
      familyName: null,
      givenName: null,
      userToken: null,
      imageURL: null,
      name: null
  };

  setFamilyName = (familyName) => {
      this.setState({familyName: familyName})
  };

  setGivenName = (givenName) => {
      this.setState({givenName: givenName})
  };

  setUserToken = (userToken) => {
      console.log(userToken);
      this.setState({userToken: userToken})
  };

  setImageURL = (imageURL) => {
      this.setState({imageURL: imageURL})
  };

  setName = (name) => {
      this.setState({name: name})
  };

  onLoginSuccess = (response) => {
      this.setFamilyName(response.profileObj.familyName);
      this.setGivenName(response.profileObj.givenName);
      this.setUserToken(response.tokenId);
      this.setImageURL(response.profileObj.imageUrl);
      this.setName(response.profileObj.name);
  };

  getGoogleLogin = () => {
      return (
          <GoogleLogin
              onSuccess={this.onLoginSuccess}
              onFailure={console.log("oh no")}
              clientId={this.state.clientId}
              buttonText={"Sign in"}
          />
      )
  };

  render(){
      if(!this.state.userToken){
          return this.getGoogleLogin();
      }
      return(
          <div>
              {this.state.familyName}
              {this.state.givenName}
              {this.state.userToken}
              {this.state.imageURL}
              {this.state.name}
          </div>
      )
  }
}

export default App;
