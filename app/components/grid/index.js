import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Flex } from '@ant-design/react-native';
import { data } from './data';
import { FontAwesome } from '../../assets/icons';
import { relativeTimeRounding } from 'moment';
import { faFastBackward, faBold } from '@fortawesome/free-solid-svg-icons';

export class IvaGrid extends React.Component {
  componentName = 'IvaGrid';
  typeMapping = {
    container: {},
    image: {},
    badge: {},
    badgeText: {},
  };

  renderImg = () => {
    return data.map((item, index) => {
      return (
        <View key={index} style={styles.innerBlock}>
          <View style={styles.overlay}></View>
          <Image style={styles.innerImg} source={{ url: item.img }} />
          <Text style={styles.innerTitle}>{item.title}</Text>
          <Text style={styles.innerSubTitle}>{item.subTitle}</Text>

        </View>)
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
