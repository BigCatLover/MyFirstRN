import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import SecondPageComponent from "./SecondPageComonent";

export default class FirstPageComponent extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    _pressButtoon(){
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'SecondPageComonent',
                component:SecondPageComponent,
            })
        }
    }

    render(){
        return (
            <View>
                <TouchableOpacity onPress={this._pressButtoon.bind(this)}>
                    <Text>点我跳转</Text>
                </TouchableOpacity>
            </View>
        );
    }
}