import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import FirstPageComponent from "./FirstPageComponent";

export default class SecondPageComponent extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    _pressButton1(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }
    render(){
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton1.bind(this)}>
                    <Text>点我跳转回去</Text>
                </TouchableOpacity>
            </View>
        );
    }
}