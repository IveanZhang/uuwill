import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';
import { ArticleList } from '../../components/articleList';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import data from "../../data/raw/projects";
import { RecommendArticle } from '../../components/recommendArticle';

export default class ProjectScreen extends React.Component {
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
            articleList: data.articleList.data,
            articles: data.articles,
        };
    }

    onPress(url, opt) {
        this.props.navigation.navigate(url, opt);
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

                    <View style={styles.blogContainer}>
                        <Text style={styles.blogTitle}>精选文章</Text>
                        {this.renderPosts()}
                    </View>
                    <ArticleList data={this.state.articleList} onPress={(url, opt) => { this.onPress(url, opt) }}  />
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
        paddingLeft: 20,
        paddingTop: 10,
        fontSize: 18,
        color: '#222'
    }
});
