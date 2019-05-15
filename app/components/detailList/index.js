import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
} from 'react-native';

const { width, height } = Dimensions.get('window');


export default class DetailList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topic: this.props.data,
            title: this.props.title
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true,
            });
        }, 0)
    }

    renderTopic() {
        return (
            <View style={styles.topic}>
                <Text style={styles.topicHead}>{this.state.title}</Text>
                <FlatList
                    data={this.state.topic}
                    keyExtractor={(item, index) => item + index}
                    renderItem={this.renderTopicItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    renderTopicItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.topicItem} onPress={() => { this.props.onPress(item.navigation.url, item.navigation.opt) }}>
                <Image source={item.img}  source={typeof item.img === 'string' ? {url:item.img} : item.img} style={styles.topicImg} />
                <View style={styles.topicContainer}>
                    <View style={styles.topicText}>
                        <Text style={styles.topicTitle} numberOfLines={2}>{item.title}</Text>
                        <Text style={styles.topicDesc} numberOfLines={2} >{item.describe}</Text>
                    </View>
                    <Text style={styles.topicPrice}>¥{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderTopic()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#efefef',
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        borderRadius: 0,
    },
    tips: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-around',
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tipItemBox: {
        flexDirection: 'row',
    },
    redyes: {
        width: 16,
        height: 16,
        marginRight: 5,
    },
    tipItem: {
        fontSize: 14,
        color: '#333',
    },
    topic: {
        width: width,
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        paddingBottom: 10,
        marginBottom: 10,
    },
    topicHead: {
        fontSize: 18,
        color: '#666',
        padding: 15,
    },
    topicItem: {
        width: width * 0.6,
        marginLeft: 15,
    },
    topicImg: {
        width: width * 0.6,
        height: width * 0.3,
        borderWidth: 0.5,
        borderColor: '#cdcdcd',
        borderRadius: 2,
    },
    topicContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    topicTitle: {
        fontSize: 14,
        color: '#444',
    },
    topicDesc: {
        fontSize: 13,
        color: '#999',
        marginTop: 10,
    },
    topicText: {
        width: '80%'

    },
    topicPrice: {
        fontSize: 14,
        color: '#b4282d',
    },
});