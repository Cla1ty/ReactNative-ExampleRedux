import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
// import { createStore, applyMiddleware, compose } from 'redux';
import createStore from './Redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './Redux/RepoRedux';
import RepoList from './RepoList';
import RepoDetail from './RepoDetail';
import Profile from './Profile';

import ReactotronConfig from './ReactotronConfig';
import Reactotron from 'reactotron-react-native';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
});

// const enhancers = [];
// enhancers.push(applyMiddleware(axiosMiddleware(client)));
// // enhancers.push(Reactotron.createEnhancer());
// const store = createStore(reducer, compose(...enhancers));
const store = createStore();

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RepoList"
        component={RepoList}
        options={{
          title: 'Repositories',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={RepoDetail}
        options={{
          title: 'Repo Detail',
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
