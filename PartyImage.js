'use strict'
import React,{Image,View} from 'react-native';

var PartyImage = React.createClass({
  render(){
    return(
      <Image source={require('./img/one.jpg')} style={{width: 120, height: 120}}/>
      );
  }
});
module.exports = PartyImage;