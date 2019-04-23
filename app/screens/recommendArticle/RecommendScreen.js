import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { RecommendArticle } from '../../components/recommendArticle';

const data = [
  {
    data: {
      title: '海外看病火？为啥这么多机构都热衷投资一家海外医疗公司',
      tag: '市场',
      type: 1,
      author: '第一财经',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/LwUpqblnlisckDLpBCRx.png'
    },
    navigation: {
      url: 'Details',
      opt: {
        title: '文章',
        img: require("../../assets/images/culture.jpg")
      }
    }
  },
  {
    data: {
      title: '海外看病火？为啥这么多机构都热衷投资一家海外医疗公司',
      tag: '市场',
      type: 1,
      author: '第一财经',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/beKIEIHjDxrboDvaLHZs.png'
    },
    navigation: {
      url: 'Details',
      opt: {
        title: '文章',
        img: require("../../assets/images/culture.jpg")
      }
    }
  },
  {
    data: {
      title: '海外看病火？为啥这么多机构都热衷投资一家海外医疗公司',
      tag: '市场',
      type: 1,
      author: '第一财经',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/oIkLZVVJYahBbpztgFQv.png'
    },
    navigation: {
      url: 'Details',
      opt: {
        title: '文章',
        img: require("../../assets/images/culture.jpg")
      }
    }
  },
  {
    data: {
      title: '海外看病火？',
      tag: '市场',
      type: 1,
      author: '第一财经',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/LwUpqblnlisckDLpBCRx.png'
    },
    navigation: {
      url: 'Details',
      opt: {
        title: '文章',
        img: require("../../assets/images/culture.jpg")
      }
    }
  }
];

export default class RecommendScreen extends React.Component {
  static navigationOptions = {
    title: '热门推荐'.toUpperCase(),
  };

  constructor(props) {
    super(props);
  }

  rendenItems() {
    return data.map((item, index) => {
      return (
        <RecommendArticle
          key={index}
          data={item.data}
          handlePress={() => { this.props.navigation.navigate(item.navigation.url, item.navigation.opt) }}
        >
        </RecommendArticle>
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
    backgroundColor: '#fff',
  },
});
