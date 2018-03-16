import React, {Component} from "react";
import {Navigator} from "react-native-deprecated-custom-components";
import ListViewTest from "../05_scroll_demo/ListViewTest";

//标记是第几次按下返回键
let isFirstQuit = 0;
/**
 * Created by marno on 2017/1/19
 * Desc:全局配置Navigator,并且需要将该页面在index中设置为启动页
 */
export default class StartUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <Navigator
                // ref="navigator"
                //初始化默认页面，也就是启动app后看到的第一屏
                initialRoute={{name: 'ListViewTest', component: ListViewTest}}

                /**
                 *  配置页面之间跳转的动画，还有其他动画可以使用,所有动画均带手势
                 *  动画效果有三种:Push,Float,Swipe,支持上下左右四个方向
                 *  如果使用webstrom的话，可以点进去看下源码，或者看我附上的文章
                 */
                configureScene={(route)=> {
                    var config;
                    //先判断一下传入页面是否自己定义了转场动画
                    if (route.sceneConfig) {
                        config = route.sceneConfig;
                    } else {
                        config = Navigator.SceneConfigs.HorizontalSwipeJump;
                    }
                    //禁用config中的手势返回，否则会导致页面可以左右滑动
                    config.gestures = null;
                    return config;
                }}

                //这里需要注意，Navigator一经初始化后，就可以多处使用，整个工程维持一个就好了
                renderScene={(route, navigator)=> {
                    let Component = route.component;
                    if(route.component){
                        return <Component {...route.params} navigator={navigator} />
                    }
                }}
            />
        );
    }
}