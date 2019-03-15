import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

export class RecommendArticle extends React.Component {
  componentName = 'recommendArticle';

  renderImg = () => {
    return (
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
          <Image style={{width: 110, height: 72}} source={{ url: this.props.data.img }} />
        </View>
      </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderImg()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 0,
    borderColor: '#777',
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  content:{
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  right:{
    width: '35%',
    paddingLeft: 10
  },
  left: {
    width: '65%',
    paddingRight: 10
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
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
