import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { data } from './data';

export class ArticleList extends React.Component {
  componentName = 'articleList';

  renderImg = () => {
    return data.map((item, index) => {
      return (
        <View key={index} style={styles.innerBlock}>
            <View style={styles.overlay}></View>
            <Image style={styles.innerImg} source={{ url: item.img }} />
            <Text style={styles.tag}>{item.tag}</Text>
            <Text style={styles.innerTitle}>{item.title}</Text>
        </View>)
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
    margin: 20
  },
  title: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 18,
    color: '#777'
  },
  innerBlock: {
    width: '100%',
    margin: 4
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
    top: '40%',
    left: '40%',
    color: '#fff',
    position: 'absolute',
    textAlign: 'center',
    fontWeight: "700",
    fontSize: 20
  }
});
