import React, {useEffect, useState} from 'react';
import BottomTab from './BottomTab';
import {
  UserContextProvider,
  useUserContext,
} from './src/components/context/userContext';
import Navigation from './navigation';
import {NavigationContainer} from '@react-navigation/native';

import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firbase';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext from './src/components/context';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
function App() {
  const {error} = useUserContext();
  // useEffect(() => {}, []);
  const [loading, setLoading] = useState(true);
  const [userLogin, setUserLogin] = useState(null);
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setLoading(true);
      setUserLogin(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);
  const getUser = async () => {
    try {
      const u = await AsyncStorage.getItem('user');
      console.log(u, 'losoms');
      if (u) {
        const us = JSON.parse(u);
        setUser(us);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(u, 'no user');
  };
  useEffect(() => {
    getUser();
  }, [auth.currentUser]);
  return (
    <UserContextProvider>
      {loading ? (
        <Text>loading...</Text>
      ) : (
        <AuthContext.Provider value={{user, setUser}}>
          <Navigation user={userLogin} />
        </AuthContext.Provider>
      )}
    </UserContextProvider>
  );
}
export default App;
