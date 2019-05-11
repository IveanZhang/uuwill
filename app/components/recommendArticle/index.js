import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export class RecommendArticle extends React.Component {
    componentName = 'recommendArticle';

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.data.type
        }
    }

    onPress() {}

    renderType1 = () => {}

    renderType2 = () => {}

    renderType3 = () => {}


    renderItems = (type) => {
        type === 1 
            ? (
                <TouchableHighlight onPress={this.props.handlePress} underlayColor={'rgb(240, 240, 240)'} >
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Text style={styles.title}>{this.props.data.title}</Text>
                            <View style={styles.category}>
                                <Text style={styles.tag}>{this.props.data.tag}</Text>
                                <Text style={styles.tag}> | </Text>
                                <Text style={styles.tag}>{this.props.data.author}</Text>
                            </View>
                        </View>
                        <View style={styles.right}>
                            <Image style={{ width: 110, height: 72 }} source={{ url: this.props.data.img }} />
                        </View>
                    </View>
                </TouchableHighlight>
            )
            : type === 2 
                ? null
                : null
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderItems(this.state.type)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#A0A0A0',
        borderBottomWidth: 0.5,
    },
    content: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    right: {
        width: '35%',
        paddingLeft: 10
    },
    left: {
        width: '65%',
        paddingRight: 10
    },
    title: {
        color: "#4F4F4F",
        fontSize: 16,
        fontWeight: "500",
        paddingTop: 5,
        paddingBottom: 10,
    },
    tag: {
        fontSize: 12,
        color: '#777',
    },
    category: {
        flex: 1,
        flexDirection: 'row'
    }
});
