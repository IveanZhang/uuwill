import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import data from "../../data/raw/posts";
import { RecommendArticle } from '../../components/recommendArticle';
import PhotoGallery from '../../components/photoGallery/PhotoGallery';

export default class TopicsScreen extends React.Component {
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
            photoGallery: data.photoGallery,
            articles: data.articles,
        };
    }

    renderPosts = () => {
        return this.state.articles.map((item, index) => {
            return (
                <RecommendArticle
                    key={index}
                    data={item}
                    handlePress={() => { this.props.navigation.navigate('Details', { article: item.id }) }}
                >
                </RecommendArticle>
            );
        });
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

                    <PhotoGallery data={this.state.photoGallery} />

                    <View style={styles.blogContainer}>
                        <Text style={styles.blogTitle}>精选文章</Text>
                        {this.renderPosts()}
                    </View>
                </ParallaxScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    blogContainer: {
        marginTop: 10
    },
    blogTitle: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        color: '#303030'
    }
});
