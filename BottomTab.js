import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import allColors from './src/theme/colors';
import Svg, {Path} from 'react-native-svg';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import SettingScreen from './src/screens/SettingScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View
            style={{
              flex: 1,
            }}></View>
          <Svg width={70} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={allColors.green}
            />
          </Svg>
          <View
            style={{
              flex: 1,
            }}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: allColors.white,
            borderWidth: 2,
            borderColor: 'whitesmoke',
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

function BottomTab() {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          style: {
            position: 'absolute',
            backgroundColor: allColors.green,
            bottom: 5,
            left: 15,
            right: 15,
            elevation: 0,
            borderRadius: 20,
            height: 60,
          },
        }}
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.mainIconContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('./assets/chat.png')}
                    resizeMode="contain"
                    style={{
                      width: 38,
                      height: 38,
                      tintColor: focused ? 'lightgreen' : '#000000',
                    }}
                  />
                </View>
              </View>
            ),
            tabBarButton: props => <TabBarCustomButton {...props} />,
          }}
        />

        <Tab.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.mainIconContainer}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('./assets/profile.png')}
                    resizeMode="contain"
                    style={{
                      width: 42,
                      height: 42,
                      tintColor: focused ? 'lightgreen' : '#000000',
                    }}
                  />
                </View>
              </View>
            ),
            tabBarButton: props => <TabBarCustomButton {...props} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  label: {
    fontSize: 12,
  },

  iconContainer: {
    width: 55,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 4,
  },
  textContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: 80,
  },
  mainIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 5,
    paddingBottom: 5,
  },
});

export default BottomTab;
