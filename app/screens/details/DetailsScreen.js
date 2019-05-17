import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { findArticle } from '../../utils/textUtils';

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title'),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.getParam('article'),
            details: findArticle(this.props.navigation.getParam('article'))
        };
    }

    renderArticleContent() {
        return this.state.details.details.map((item, index) => {
            return item.type === 'subtitle'
                ? (<Text key={index} style={styles.subtitle}>{item.content}</Text>)
                : item.type === 'content'
                    ? (<Text key={index} style={styles.content}>{item.content}</Text>)
                    : (<View key={index} style={styles.alignCenter}>
                        <View style={styles.seperator}></View>
                       </View>)
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
                        source={{ url: this.state.details.img }} />}
                    parallaxHeaderHeight={220}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{this.state.details.title}</Text>
                        <View style={styles.authorinfo}>
                            <Text style={styles.tag}>{this.state.details.author}</Text>
                            <Text style={styles.tag}>|</Text>
                            <Text style={styles.tag}>{this.state.details.tag}</Text>
                        </View>
                        {this.renderArticleContent()}
                    </View>
                </ParallaxScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: '#fff',
    },
    authorinfo: {
        flex: 1,
        padding: 15,
        flexDirection: 'row'
    },
    title: {
        fontWeight: '700',
        lineHeight: 35,
        fontSize: 25,
    },
    tag: {
        fontSize: 16,
        color: '#777',
        paddingRight: 7
    },
    subtitle: {
        paddingTop: 30,
        fontSize: 20,
        color: '#777',
        textAlign: 'center'
    },
    seperator: {
        flex: 1,
        width: 50,
        margin: 20,
        borderBottomWidth: 2,
        borderColor: "#777"
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center'
    },
    content: {
        fontSize: 16,
        lineHeight: 25,
    }
});
