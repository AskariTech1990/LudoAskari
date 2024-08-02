/** @format */

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import HomeScreen from './screens/HomeScreen';
import HitZoneScreen from './screens/HitZoneScreen';
import CardClashScreen from './screens/CardClashScreen';
import OTPVerificationScreen from './screens/OtpScreen';
import WalletScreen from './screens/Wallet';
import Tournament from './screens/Tournament';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Splash'
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Splash' component={SplashScreen} />
				<Stack.Screen name='HitZone' component={HitZoneScreen} />
				<Stack.Screen name='CardClash' component={CardClashScreen} />

				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Register' component={RegisterScreen} />
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='otp' component={OTPVerificationScreen} />
				<Stack.Screen name='wallet' component={WalletScreen} />
				<Stack.Screen name='tournament' component={Tournament} />

				{/* Add more screens as needed */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
