import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import ListingScreen from './src/screens/ListingScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import ChatDetail from './src/screens/ChatDetail';
import NotificationScreen from './src/screens/NotificationScreen';
import CallScreen from './src/screens/CallScreen';
import PrivacyScreen from './src/screens/PrivacyScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from './BottomTab';
import VideoCallScreen from './src/screens/VideoCallScreen';

const Stack = createStackNavigator();
const user = null;
const Tab = createBottomTabNavigator();

const Navigation = ({user}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Listing"
              component={ListingScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="ChatDetail"
              component={ChatDetail}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EditProfileScreen"
              component={EditProfileScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="NotificationScreen"
              component={NotificationScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CallScreen"
              component={CallScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PrivacyScreen"
              component={PrivacyScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="VideoCallScreen"
              component={VideoCallScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
