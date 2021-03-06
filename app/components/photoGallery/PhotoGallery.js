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


export default class PhotoGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topic: this.props.data
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
                <Text style={styles.topicHead}></Text>
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
            <TouchableOpacity style={styles.topicItem}>
                <Image style={styles.topicImg} source={ typeof item.img === 'string' ? {url:item.img} : item.img}></Image>
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
    topicItem: {
        width: width * 0.7,
        marginLeft: 15,
    },
    topicImg: {
        width: width * 0.7,
        height: width * 0.4,
        borderWidth: 0.5,
        borderColor: '#cdcdcd',
        borderRadius: 2,
    },
    topicContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    }
 });