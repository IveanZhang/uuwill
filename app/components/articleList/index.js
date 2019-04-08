import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export class ArticleList extends React.Component {
  componentName = 'articleList';

  renderImg = () => {
    return this.props.data.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={styles.innerBlock}>
            <View style={styles.overlay}></View>
            <Image style={styles.innerImg} source={{ url: item.img }} />
            <Text style={styles.tag}>{item.tag}</Text>
            <Text style={styles.innerTitle}>{item.title}</Text>
        </TouchableOpacity>)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>热点聚焦</Text>
        {this.renderImg()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  title: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 18,
    color: '#777'
  },
  innerBlock: {
    width: '100%',
    marginBottom: 10
  },
  overlay: { 
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  innerImg: {
    zIndex: -1,
    width: 'auto',
    height: 100,
    position: 'relative',
  },
  tag: {
    fontSize: 12,
    position: 'absolute',
    top: '5%',
    left: '2%',
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 4
  },
  innerTitle: {
    width: '100%',
    top: '40%',
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
    textAlign: 'center',
    fontWeight: "700",
    fontSize: 20
  }
});
