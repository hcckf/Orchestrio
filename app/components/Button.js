import React, {PropTypes} from 'react';

//props: 
// directFunction: function()
// text: string
// style: string (enum: green, blue, orange)
export default class Button extends React.Component {
  
  f2(choice){
  	switch(choice) {
    case 'red':
        return '#ca5e2e';
        break;
    case 'green':
       	return '#7fb436';
        break;
    case 'blue':
        return '#3e93bb';
        break;
    case 'orange':
        return '#f9a100';
        break;
    default:
        return '#3e93bb';
}
  }
  render() {
    return (
    <div>
      <button onClick={this.props.directFunction} style={{backgroundColor:this.f2(this.props.divStyle)}}>{this.props.text}</button>
    </div>);
  }
}

Button.propTypes = {
};

//color option
//thumbnail