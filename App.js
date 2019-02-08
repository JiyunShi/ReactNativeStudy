/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, Button, Text} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {


  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = val=>{
    this.setState({
      placeName: val
    });
  };

  buttonClickHandler = ()=>{
    if(this.state.placeName.trim()==="") return;

    this.setState(prevState=>{
      return{
        places: prevState.places.concat(prevState.placeName)
      }
    })
  };



  render() {
    const placesOutput = this.state.places.map(place=>(
      <Text>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.placeInput}
              placeholder = "An awesome place"
              value={this.state.placeName}
              onChangeText={this.placeNameChangeHandler}
          />
          <Button style={styles.placeButton}
                      title={"Add"} onPress={this.buttonClickHandler}/>
        </View>
        <View>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    //flex: 1,
    width : "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: "70%",
    borderWidth: 2,
    borderColor: 'black'
  },
  placeButton: {
    width: "30%"
  }
});