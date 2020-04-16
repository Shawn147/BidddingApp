import {Body, Left, Right, Header} from 'native-base';
import React, {Component} from 'react';
import * as Icons from './icons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
export default class GlobalHeader extends React.Component {
  render() {
    return (
      <Header style={{backgroundColor: '#113068'}}>
        <Left
          style={{
            flex: 0.15,
            height: '100%',
            width: '100%',
          }}>
          {this.props.LeftMenu && (
            <TouchableOpacity
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                // alignItems: 'center',
              }}>
              <Icons.EvilIcons name="user" size={35} color={'#fff'} />
            </TouchableOpacity>
          )}
        </Left>
        <Body
          style={{
            flex: 0.65,
            height: '100%',
            width: '100%',
            // justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
              marginRight: 10,
            }}>
            {this.props.headingText
              ? this.props.headingText
              : 'Checkout Github Users'}
          </Text>
          <Icons.AntDesign
            name="down"
            size={19}
            color={'#fff'}
            style={{top: 2}}
          />
        </Body>
        <Right style={{flex: 0.2, height: '100%', width: '100%'}}>
          {this.props.RightMenu && (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ExclusiveOffers')}
              style={{
                height: '100%',
                width: '100%',
                // justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  marginRight: 5,
                  top: 2,
                }}>
                {'\u20AC'}0.00
              </Text>
              <Icons.AntDesign name="right" size={20} color={'#fff'} />
            </TouchableOpacity>
          )}
        </Right>
      </Header>
    );
  }
}
