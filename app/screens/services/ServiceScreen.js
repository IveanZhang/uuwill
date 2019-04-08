import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class ServiceScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ParallaxScrollView
                    backgroundColor="#fff"
                    style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
                    renderBackground={() => <Image style={{
                        alignSelf: 'center',
                        height: 220,
                        width: '100%',
                    }}
                    source={require('../../assets/images/estate.jpg')} />}
                    parallaxHeaderHeight={220}>
                    <View style={{ alignItems: 'center' , marginBottom: 50}}><Text style={{ fontSize: 30 }}>{this.props.navigation.getParam("title")}</Text></View>
                </ParallaxScrollView>
            </View>
        )
    }
}