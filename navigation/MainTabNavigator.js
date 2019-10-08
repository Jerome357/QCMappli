import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import QuestionsScreen from '../screens/QuestionsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Sujets',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Proposer',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
  ),
};

LinksStack.path = '';

const QuestionsStack = createStackNavigator(
  {
    Questions: QuestionsScreen,
  },
  config
);

QuestionsStack.navigationOptions = {
  tabBarLabel: 'Questions',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
  ),
};

QuestionsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  QuestionsStack
});

tabNavigator.path = '';



export default tabNavigator;
