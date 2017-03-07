import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

export default class SignIn extends React.Component {
	componentDidMount(){
		
	}
	
	responseGoogle(){
		var id_token = GoogleUser.getAuthResponse().id_token;
		console.log({accessToken: id_token});
		var email = GoogleUser.basicProfile.getEmail();
		var firstn = GoogleUser.basicProfile.getGivenName();
		var lastn = GoogleUser.basicProfile.getFamilyName();
		var image = GoogleUser.basicProfile.getImageUrl();
	}
	
	render(){
		return(
				<GoogleLogin
					clientId="177846993261-4igmehvrh435lml71thvsrrjnvo8qmlf.apps.googleusercontent.com"
					buttonText="log in now"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
					style={{ background:'orange', color: 'white', border: '0px', width: '200px', height: '40px', }}
				/>
		)
	}
}
