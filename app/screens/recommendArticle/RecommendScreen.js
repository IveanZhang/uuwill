import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { RecommendArticle } from '../../components/recommendArticle';
import articles from '../../data/raw/articles';


export default class RecommendScreen extends React.Component {
    static navigationOptions = {
        title: '热门推荐'.toUpperCase(),
    };

    constructor(props) {
        super(props);
    }

    rendenItems() {
        return articles.map((item, index) => {
            return (
                <RecommendArticle
                    key={index}
                    data={item}
                    handlePress={() => { this.props.navigation.navigate('Details', { article: item.id }) }}
                >
                </RecommendArticle>
            );
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.rendenItems()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
