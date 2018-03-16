import React, {Component} from 'react';
import {ScrollView, Image, Text, StyleSheet, ToastAndroid} from 'react-native';

/**
 * Created by marno on 2017/1/17
 * Desc:ScrollView的使用
 */
export default class ScrollViewTest extends Component {
    //ScrollView使用比较简单和Android中的ScrollView比较类似，
    // 当放入其中的组件高度大于屏幕时就会开始滚动
    constructor(props){
       super(props);
       this.state = {
           ontouchstart:0,
           ontouchmove:0,
           ontouchend:0,
           onMomentumScrollBegin:0,
           onMomentumScrollEnd:0,
           onStartShouldSetResponder:0,
           onResponderGrant:0,
           onResponderRelease:0,
           onscroll:0,
           onScrollBeginDrag:0,
           onScrollEndDrag:0
       };
    }

    onTouchStart=(e)=>{
        ToastAndroid.show("onTouchStart", ToastAndroid.SHORT);
        console.log("zl=="+"onTouchStart")
        this.setState({
            onTouchStart:e.nativeEvent},function () {
            console.log(this.state.ontouchstart)
        })
    }

    onTouchMove=(e)=>{
        console.log("zl=="+"onTouchMove")
        this.setState({
            onTouchMove:e.nativeEvent},function () {
            console.log(this.state.ontouchend)
        })
    }
    onScroll=(e)=>{
        console.log("zl=="+"_onScroll")
        this.setState({
            onScroll:e.nativeEvent},function () {
            console.log(this.state.onscroll)
        })
    }


    // _onScroll() {
    //     console.log("zl=="+"_onScroll")
    //     //在滚动的过程中，每帧最多调用一次此回调函数。
    //     // 调用的频率可以用scrollEventThrottle属性来控制。
    // }

    _onEndReached() {
        ToastAndroid.show("到达底部了", ToastAndroid.SHORT);
    }

    render() {

        return (
            /**
             * 属性列表: http://www.jianshu.com/p/58301af1dbf2
             */

            <ScrollView
                ref="scrollView"
                scrollEventThrottle={200}
                horizontal={false}//设置是否是横向滚动
                onScroll={this.onScroll}
                onTouchStart={this.onTouchStart}
                onTouchMove={this.onTouchMove}
                removeClippedSubviews={true}//实验特性，可以优化滚动性能
                showsVerticalScrollIndicator={false}//是否显示垂直滚动条
            >
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView1</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView2</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView3</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView4</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
            </ScrollView>
        )
    }
}

const ScrollViewTestStyle = StyleSheet.create({
    scroll_item: {
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        elevation: 3,
        overflow: 'hidden',

    },
})