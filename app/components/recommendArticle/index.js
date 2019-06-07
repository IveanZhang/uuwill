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

    onPress() { }

    renderType1 = () => {
        return (
            <TouchableHighlight onPress={this.props.handlePress} underlayColor={'rgb(240, 240, 240)'} >
                <View style={[styles.row, styles.content]}>
                    <View style={[styles.row, styles.left]}>
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
        );
    }

    renderImages(images){
        return images.map( (img, index) => {
            return (
                <Image key={index} style={{ width: 110, height: 72 }} source={{ url: img }} />
            );
        });
    }

    renderType2 = () => {
        return (
            <TouchableHighlight onPress={this.props.handlePress} underlayColor={'rgb(240, 240, 240)'} >
                <View style={styles.row}>
                    <Text style={[styles.row, styles.title]}>{this.props.data.title}</Text>
                    <View style={[styles.row, styles.content]}>
                        {this.renderImages(this.props.data.img)}
                    </View>
                    <View style={[styles.row, styles.category]}>
                        <Text style={styles.tag}>{this.props.data.tag}</Text>
                        <Text style={styles.tag}> | </Text>
                        <Text style={styles.tag}>{this.props.data.author}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    renderType3 = () => {
        return (
            <TouchableHighlight onPress={this.props.handlePress} underlayColor={'rgb(240, 240, 240)'} >
                <View style={styles.row}>
                    <Text style={[styles.row, styles.title]}>{this.props.data.title}</Text>
                    <View style={[styles.row, styles.content]}>
                        <Image style={{ width: '100%', height: 172 }} source={{ url: this.props.data.img }} />
                    </View>
                    <View style={[styles.row, styles.category]}>
                        <Text style={styles.tag}>{this.props.data.tag}</Text>
                        <Text style={styles.tag}> | </Text>
                        <Text style={styles.tag}>{this.props.data.author}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    renderItems = (type) => {
        return type === 1
            ? this.renderType1()
            : type === 2
                ? this.renderType2()
                : this.renderType3()
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
    row: {
        flex: 1,
        padding: 10,
    },
    content: {
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
        fontSize: 14,
        color: '#777',
    },
    category: {
        flex: 1,
        flexDirection: 'row'
    }
});
