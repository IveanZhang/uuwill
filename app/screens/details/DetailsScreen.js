import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import { ArticleList } from '../../components/articleList';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import DetailList from "../../components/detailList/index"
import data from "../../data/raw/services";

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title'),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.navigation.getParam('title'),
            img: this.props.navigation.getParam('img'),
            articleList: data.articleList.data
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
          
            </View>
        )
    }
}