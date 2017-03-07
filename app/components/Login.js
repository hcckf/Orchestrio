import React from 'react';
import GoogleLogin from 'react-google-login-component';
 
class Login extends React.Component{
 
  constructor (props, context) {
    super(props, context);
  }
 
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    var email = googleUser.BasicProfile.getEmail();
	var firstn = googleUser.BasicProfile.getGivenName();
	var lastn = googleUser.BasicProfile.getFamilyName();
	var image = googleUser.BasicProfile.getImageUrl();
  }
 
  render () {
    return (
      <div>
        <GoogleLogin socialId="177846993261-4igmehvrh435lml71thvsrrjnvo8qmlf.apps.googleusercontent.com"
                     class="google-login"
                     scope="profile"
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }
 
}
 
export default Login;