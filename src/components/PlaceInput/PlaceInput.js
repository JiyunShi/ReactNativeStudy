import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';


class PlaceInput extends React.Component
{
    state = {
        placeName: ""
    };

    placeNameChangeHandler = val=>{
        this.setState({
            placeName: val
        });
    };


    placeSubmitHandler = ()=>{
        if(this.state.placeName.trim()==="") return;
        this.props.onPlaceAdded(this.state.placeName);
        this.setState({
            placeName: ""
        })
    };

    render(){
        return(
            <View style={styles.inputContainer}>
                <TextInput style={styles.placeInput}
                           placeholder="An awesome place"
                           value={this.state.placeName}
                           onChangeText={this.placeNameChangeHandler}
                />
                <Button style={styles.placeButton}
                        title={"Add"} onPress={
                            //()=>this.props.onPlaceAdded(this.state.placeName)
                        this.placeSubmitHandler
                        }/>
            </View>);
    };
}


const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width: "100%",
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
    },
});

export default PlaceInput;