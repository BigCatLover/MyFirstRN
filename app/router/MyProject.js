import React, {Component} from "react";
import {Navigator}
    from "react-native-deprecated-custom-components"
// import FirstPageComponent from "./FirstPageComponent";
import ListViewTest from "../05_scroll_demo/ListViewTest";
// import MainPage from "../eyepetizer_demo/MainPage";


export default class MyProject extends Component {
    render() {
        var defaultName = 'ListViewTest';
        var defaultComponent = ListViewTest;
        return (
            <Navigator
                ref="navigator"
                //指定了默认的页面，也就是启动app之后会看到的第一屏，需要两个参数，name跟component
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    //跳转的动画
                    return Navigator.SceneConfigs.FadeAndroid;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    if(route.component){
                        return <Component {...route.params} navigator={navigator} />
                    }
                }} />
        );
    }
}