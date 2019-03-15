import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { RecommendArticle } from '../../components/recommendArticle';

const data = [
  {
    title: '海外看病火？为啥这么多机构都热衷投资一家海外医疗公司',
    tag: '市场',
    author: '第一财经',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/LwUpqblnlisckDLpBCRx.png'
  },
  {
    title: '海外看病火？为啥这么多机构都热衷投资一家海外医疗公司',
    tag: '市场',
    author: '第一财经',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/beKIEIHjDxrboDvaLHZs.png'
  },
  {
    title: '海外看病火？为啥这么多机构都热衷投资一家海外医疗公司',
    tag: '市场',
    author: '第一财经',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/oIkLZVVJYahBbpztgFQv.png'
  },
  {
    title: '海外看病火？',
    tag: '市场',
    author: '第一财经',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/LwUpqblnlisckDLpBCRx.png'
  }
];

export default class RecommendScreen extends React.Component {

  rendenItems(){
    return data.map((item, index) => {
      return (
        <RecommendArticle  key={index} data={item}></RecommendArticle>
      );
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.rendenItems()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
