import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Flex } from '@ant-design/react-native';

export class IvaGrid extends React.Component {
  componentName = 'IvaGrid';
  typeMapping = {
    container: {},
    image: {},
    badge: {},
    badgeText: {},
  };

  constructor(props){
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  onPress() { }

  renderImg = () => {
    return this.state.data.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={styles.innerBlock} onPress={() => { this.props.onPress(item.navigation.url, item.navigation.opt) }} >
          <View style={styles.overlay}></View>
          <Image style={styles.innerImg} source={{ url: item.img }} />
          <Text style={styles.innerTitle}>{item.title}</Text>
          <Text style={styles.innerSubTitle}>{item.subTitle}</Text>
        </TouchableOpacity>
      )
    });
  }

  render() {
    return (
      <Flex justify="center" wrap="wrap">
        {this.renderImg()}
      </Flex>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  innerBlock: {
    width: '45%',
    margin: 5
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
  innerTitle: {
    top: '15%',
    left: '30%',
    color: '#fff',
    position: 'absolute',
    textAlign: 'center',
    fontWeight: "700"
  },
  innerSubTitle: {
    top: '25%',
    left: '23%',
    color: '#fff',
    position: 'absolute',
    textAlign: 'center',
    fontWeight: "700"
  }
});
