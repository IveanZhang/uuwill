import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image
} from 'react-native';
import { Carousel , Grid } from '@ant-design/react-native';
import { IvaGrid } from '../../components/grid';
import { ArticleList } from '../../components/articleList';
import data from '../../data/raw/home';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: '全球智能商盟平台'.toUpperCase(),
  };

  constructor(props) {
    super(props);
  }

  onPress(url, opt){
    this.props.navigation.navigate(url, opt);
  } 

  render() {
    const outlineData = data.map(item => ({
      icon: <Image style={{
        alignSelf: 'center',
        height: 40,
        width: 40,
      }} source={{url:item.url}} resizeMode={'cover'} />,
      // icon: <FontAwesomeIcon icon={faCoffee} />,
      navigation: item.navigation,
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
            <Grid data={outlineData} columnNum={4} hasLine={false} onPress={ (el, index)=>{this.onPress(el.navigation.url, el.navigation.opt)}}/>
          </View>
          
          <IvaGrid onPress={ (url, opt)=>{this.onPress(url, opt)}}/>
          <ArticleList />
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