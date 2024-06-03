/* eslint-disable prettier/prettier */
// App.tsx
// App.tsx
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './android/app/src/screens/Home';
import SavingsScreen from './android/app/src/screens/MySavings';
import ScheduleScreen from './android/app/src/screens/ExpenseSchedule';
import { ButtonProvider } from './android/app/src/contexts/FooterMenuContext';
import LoginScreen from './android/app/src/screens/LoginScreen';
import SavingsAdd from './android/app/src/screens/MySavingsAdd';
import SavingsConf from './android/app/src/screens/MySavingsConf';
import MySavingsWithdawals from './android/app/src/screens/MySavingsWithdrawals';
import CreateAcountScreen from './android/app/src/screens/CreateAccount';
import { UserProvider } from './android/app/src/contexts/UserContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <ButtonProvider>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <Stack.Screen name="Savings" component={SavingsScreen} options={{ title: 'Mis Ahorros' }} />
            <Stack.Screen name="Schedule" component={ScheduleScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SavingsAdd" component={SavingsAdd} />
            <Stack.Screen name="SavingsConf" component={SavingsConf} />
            <Stack.Screen name="MySavingsWithdawals" component={MySavingsWithdawals} />
            <Stack.Screen name="CreateAcount" component={CreateAcountScreen} />
          </Stack.Navigator>
        </ButtonProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
