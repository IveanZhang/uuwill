import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Article1Screen from '../screens/articles/Article1Screen';
import HomeScreen from '../screens/home/HomeScreen';
import RecommendScreen from '../screens/recommendArticle/RecommendScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const RecommendStack = createStackNavigator({
  Links: RecommendScreen,
});

RecommendStack.navigationOptions = {
  tabBarLabel: '推荐',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ArticleStack = createStackNavigator({
  Article: Article1Screen,
});

ArticleStack.navigationOptions = {
  tabBarLabel: 'Article',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,
  RecommendStack,
  ArticleStack,
});