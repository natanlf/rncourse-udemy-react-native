import React,  { Component } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class PlaceInput extends Component {

    state = {
        placeName: ''
    }
    
    placeNameChangedHandler = (val) => {
        this.setState({placeName: val})
    }

    //ao clicar no botão adicionar, chama esse método
    placeSubmitHandler = () => { 
        if(this.state.placeName.trim() === ""){ //verifica se está vazio
            return;
        }
        //envia o valor do local digitado para a propriedade onPlaceAdded que se encontra no App.js
        this.props.onPlaceAdded(this.state.placeName) 
    }

    render(){
        return(
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
        )
    }
}

const styles = StyleSheet.create({
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
      }
})

export default PlaceInput