import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SignUp from './SignUp';
import Home from './Home';
import Add from './Add'
import Profile from './Profile'
import Chat from './Chat'
import BottomTab from './BottomTabNavigator'
const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              height: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: isFocused ? 0 : 5,
              }}>
              {isFocused && (
                <View
                  style={{
                    width: '100%',
                    height: 4,
                    backgroundColor: '#8fd5fb',
                    // borderBottomRightRadius: 4,
                    // borderBottomLeftRadius: 4,
                  }}></View>
              )}
            </View>

            <View
              style={{
                height: '99%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {index === 0 && (
                <MaterialCommunityIcons name="clipboard-text" size={20} color="#AEB3B9" />
              )}
              {index === 1 && (
                <Feather name="search" size={20} color="#AEB3B9" />
              )}
              {index === 2 && (
                <Octicons name="diff-added" size={20} color="#AEB3B9" />
              )}
              {index === 3 && (
                <MaterialIcons name="chat-bubble-outline" size={20} color="#AEB3B9" />
              )}
              {index === 4 && (
                <Feather name="users" size={20} color="#AEB3B9" />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: '#191919'}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Add" component={Add} />

    </Tab.Navigator>
  );
}

export default MyTabs;