import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import { Carousel, WingBlank } from '@ant-design/react-native';


export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Carousel
            style={styles.wrapper}
            selectedIndex={0}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
          >
            <View
              style={[styles.containerHorizontal]}
            >
              <Image style={{
                alignSelf: 'center',
                height: 200,
                width: '100%',
              }} source={require('../../assets/images/banner1.jpg')} resizeMode={'cover'} />
            </View>
            <View
              style={[styles.containerHorizontal]}
            >
              <Image style={{
                alignSelf: 'center',
                height: 200,
                width: '100%',
              }} source={require('../../assets/images/banner2.jpg')} resizeMode={'cover'} />
            </View>
          </Carousel>
          <Text>Carousel will adjust height based on content</Text>
          <Text>{React.Children.count(this.props.children)}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});