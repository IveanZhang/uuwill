import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { RecommendArticle } from '../../components/recommendArticle';

const data = [
  {
    title: '海外看病火？为啥这么多机构都热衷投资一家海外医疗公司',
    tag: '市场',
    author: '第一财经',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/LwUpqblnlisckDLpBCRx.png'
  }
];

export default class EstateScreen extends React.Component {
  static navigationOptions = {
    title: '地产'.toUpperCase(),
  }; 

  constructor(props){
    super(props);
  }

  rendenItems(){
    return data.map((item, index) => {
      return (
        <RecommendArticle 
          key={index} 
          data={item} 
          handlePress = { () => {this.props.navigation.navigate("Home")}}  
          >
        </RecommendArticle>
      );
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
