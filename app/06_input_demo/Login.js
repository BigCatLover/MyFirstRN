import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
    Button,Container
} from "native-base";
import ToastUtil from "../utils/ToastUtil";
import Main from "./Main";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:'',
        }
        this._handlePress = this._handlePress.bind(this);
    }

    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    /**
     * 配置场景动画
     * @param route 路由
     * @param routeStack 路由栈
     * @returns {*} 动画
     */
    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
        }
        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }

    _handlePress() {
        let password = this.state.password
        let userName = this.state.userName

        if (password.length > 0 && userName.length > 0) {
            ToastUtil.show('用户名 :' + userName + ' 密码 :' + password)
        } else {
            ToastUtil.show('数据缺失')
        }
        this.props.navigator.push({
            component: Main,
            passProps: {
                name: name
            },
            type: type
        })
    }

    render(){
        return <Container>
            <View style={{
                alignItems: 'center'
            }}>
                <View>
                    <Text style ={
                        TextInputStyle.sectionSpeakerText
                    }>
                        捞月游戏登录
                    </Text>
                </View>
                <View style={{
                    width: 200,
                    flexDirection: 'row',
                    borderWidth: 1,
                    marginTop: 30
                }}>
                    <Text style={{
                        marginLeft: 10,
                        alignSelf: 'center'
                    }}>
                        账号 ：
                    </Text>
                    <TextInput placeholder='input userName' onChangeText={(text) => {
                        this.setState({userName: text});
                    }} style={{
                        flex: 1,
                        height: 40,
                        width: 100
                    }}/>
                </View>
                <View style={{
                    width: 200,
                    flexDirection: 'row',
                    borderWidth: 1,
                    marginTop: 30
                }}>
                    <Text style={{
                        marginLeft: 10,
                        alignSelf: 'center'
                    }}>
                        密码 ：
                    </Text>
                    <TextInput style = {TextInputStyle.input_password}
                               placeholder='input password'
                               onChangeText={(text) => {
                        this.setState({password: text});
                    }} style={{
                        flex: 1,
                        height: 40,
                        width: 100
                    }}/>
                </View>
                <Button block
                        onPress={()=>this._handlePress()}
                        style={TextInputStyle.btn_commit}>
                    <Text style={{fontSize: 18, color: 'white'}}>登录</Text>
                </Button>

            </View>
        </Container>
    }


}

const TextInputStyle = StyleSheet.create({
    sectionSpeakerText: {
        color: 'white',
        fontSize: 15,
    },
    view_account_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,
        marginBottom: 8,

    },
    view_password_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,

    },
    input_account: {
        flex: 1,
        fontSize: 14,
        paddingVertical: 8,
    },
    input_password: {
        flexGrow: 4,
        fontSize: 14,
        paddingVertical: 8,
    },
    icon_account: {
        fontSize: 26,
        marginRight: 16,
        marginLeft: 8,
        color: '#b2b2b2'
    },
    tv_verify_code: {
        color: '#333',
        flexGrow: 1,
        textAlign: 'center'
    },
    btn_commit: {
        height: 48,
        backgroundColor: '#333',
        marginTop: 38,
        marginHorizontal: 14,
    }
})