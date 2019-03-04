/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem'

export default class App extends Component {

  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = (val) => {
    this.setState({placeName: val})
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ""){ //verifica se está vazio
      return;
    }

    this.setState(prevState => {
      return { //coloca o nome do input text na lista de lugares
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    //envio o valor place para o componente ListItem através da propriedade placeName
    const placesOutput = this.state.places.map((place, i) => 
      <ListItem key={i} placeName={place}/>
    )
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.placeInput}
        placeholder= "An awesome place"
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler} />
        <Button 
        style={styles.placeButton} 
        title="Add"
        onPress={this.placeSubmitHandler}/>
      </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputContainer: {
    //flex: 1, //faz ocupar todo o espaço disponível
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, 
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
