import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import { Carousel, WingBlank, Grid } from '@ant-design/react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { IvaGrid } from '../../components/grid';


export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const data = [
      {
        url: 'http://www.uuwill.cn/Public/b/ly_b.png',
        text: '旅游'
      },
      {
        url: 'http://www.uuwill.cn/Public/b/jy_b.png',
        text: '教育'
      },
      {
        url: 'http://www.uuwill.cn/Public/b/wh_b.png',
        text: '文化'
      },
      {
        url: 'http://www.uuwill.cn/Public/b/qz_b.png',
        text: '签证'
      },
      {
        url: 'http://www.uuwill.cn/Public/b/jr.png',
        text: '金融'
      },
      {
        url: 'http://www.uuwill.cn/Public/b/jk.png',
        text: '健康'
      },
      {
        url: 'http://www.uuwill.cn/Public/b/ym.png',
        text: '移民'
      },
      {
        url: 'http://www.uuwill.cn/Public/b/dc.png',
        text: '地产'
      }
    ];
    const outlineData = data.map(item => ({
      icon: <Image style={{
        alignSelf: 'center',
        height: 40,
        width: 40,
      }} source={{url:item.url}} resizeMode={'cover'} />,
      // icon: <FontAwesomeIcon icon={faCoffee} />,

      text: item.text,
    }));
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
                height: 220,
                width: '100%',
              }} source={require('../../assets/images/banner1.jpg')} resizeMode={'cover'} />
            </View>
            <View
              style={[styles.containerHorizontal]}
            >
              <Image style={{
                alignSelf: 'center',
                height: 220,
                width: '100%',
              }} source={require('../../assets/images/banner2.jpg')} resizeMode={'cover'} />
            </View>
          </Carousel>

          <View>
            <Grid data={outlineData} columnNum={4} hasLine={false} />
          </View>

          <IvaGrid />
        </View>
      </ScrollView >
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
    height: 220,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});