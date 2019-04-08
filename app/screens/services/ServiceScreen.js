import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import { ArticleList } from '../../components/articleList';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import DetailList from "../../components/detailList/index"

export default class ServiceScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title'),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.navigation.getParam('title'),
            img: this.props.navigation.getParam('img')
        };
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
                    source={this.state.img} />}
                    parallaxHeaderHeight={220}>
                    <DetailList />
                    <ArticleList />
                </ParallaxScrollView>
            </View>
        )
    }
}