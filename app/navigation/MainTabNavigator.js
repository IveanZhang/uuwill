import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SettingScreen from '../screens/setting/SettingScreen';
import HomeScreen from '../screens/home/HomeScreen';
import RecommendScreen from '../screens/recommendArticle/RecommendScreen';
import ServiceScreen from '../screens/services/ServiceScreen';
import ProjectScreen from '../screens/projects/ProjectScreen'
import DetailsScreen from '../screens/details/DetailsScreen';
import TopicsScreen from '../screens/topics/TopicsScreen';
import ProductDetailScreen from '../screens/productDetailScreen/ProductDetailScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Service: ServiceScreen,
    Projects: ProjectScreen,
    Details: DetailsScreen,
    Topics: TopicsScreen,
    ProductDetail: ProductDetailScreen 
});

HomeStack.navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios' 
                    ? `ios-home`
                    : `md-home`
            }
        />
    ),
};

const RecommendStack = createStackNavigator({
    Links: RecommendScreen,
    Details: DetailsScreen
});

RecommendStack.navigationOptions = {
    tabBarLabel: '推荐',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'}
        />
    ),
};

const SettingStack = createStackNavigator({
    Setting: SettingScreen,
});

SettingStack.navigationOptions = {
    tabBarLabel: '特惠',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios' 
                    ? `ios-heart`
                    : `md-heart`
            }
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    RecommendStack,
    SettingStack,
});