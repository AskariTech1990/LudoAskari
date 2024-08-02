/** @format */

import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
	Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [secureTextEntry, setSecureTextEntry] = useState(true);

	const handleLogin = async () => {
		try {
			console.log('Mobile and password:', phoneNumber, password);
			const response = await axios.post(
				'https://831cr15k-5000.inc1.devtunnels.ms/api/auth/login',
				{
					mobileNumber: phoneNumber,
					password: password,
				}
			);
			console.log('response:', response.data.token);

			// Assuming the backend returns a token
			if (response.data && response.data.token) {
				const { token } = response.data;

				// Save the token to AsyncStorage
				await AsyncStorage.setItem('authToken', token);

				// Navigate to the home screen
				navigation.navigate('Home');
			} else {
				throw new Error('Token not found in the response');
			}
		} catch (error) {
			// Handle error and show an alert
			Alert.alert('Login Failed', 'Invalid Credentials');
		}
	};

	return (
		<LinearGradient
			colors={['#2CB4EC', '#72D8FE']}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			style={styles.container}>
			<Text style={styles.loginText}>Login</Text>

			<Image
				source={require('../assets/robot.gif')} // Replace with your GIF
				style={styles.robotImage}
				contentFit='contain'
			/>

			<View style={{ width: '100%', marginTop: '-10%' }}>
				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Phone No.</Text>
					<TextInput
						style={styles.input}
						placeholder='+91 2452 25142 522'
						value={phoneNumber}
						onChangeText={setPhoneNumber}
						keyboardType='phone-pad'
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Password</Text>
					<View style={styles.passwordContainer}>
						<TextInput
							style={styles.input}
							placeholder='********'
							value={password}
							onChangeText={setPassword}
							secureTextEntry={secureTextEntry}
						/>
						<TouchableOpacity
							onPress={() => setSecureTextEntry(!secureTextEntry)}>
							<Image
								source={require('../assets/Eye.png')} // Replace with your eye icon image
								style={styles.eyeIcon}
								contentFit='contain'
							/>
						</TouchableOpacity>
					</View>
				</View>

				<LinearGradient
					colors={['#018BE8', '#48C6EF']} // Linear gradient colors for the login button 018BE8
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.loginButton}>
					<TouchableOpacity onPress={handleLogin}>
						{/* () => navigation.navigate('Home') */}
						<Text style={styles.loginButtonText}>Login</Text>
					</TouchableOpacity>
				</LinearGradient>

				<View style={styles.footerLinks}>
					<TouchableOpacity onPress={() => navigation.navigate('Register')}>
						<Text style={[styles.createAccountText, styles.underline]}>
							Create account
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('ForgotPassword')}>
						<Text style={[styles.forgotPasswordText, styles.underline]}>
							Forget Password!
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	loginText: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 25,
	},
	robotImage: {
		width: 300,
		height: 380,
	},
	inputContainer: {
		width: '100%',
		marginBottom: 15,
	},
	inputLabel: {
		fontSize: 16,
		color: '#fff',
		marginBottom: 5,
		fontWeight: 'bold',
	},
	input: {
		backgroundColor: '#fff',
		borderRadius: 30,
		paddingHorizontal: 15,
		paddingVertical: 10,
		fontSize: 16,
		width: '100%',
		// Add shadow to the input fields
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 5, // Android shadow
	},
	passwordContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	eyeIcon: {
		width: 25,
		height: 25,
		marginLeft: -40, // Adjust based on your design
	},
	loginButton: {
		borderRadius: 30,
		width: '100%',
		paddingVertical: 15,
		alignItems: 'center',
		marginTop: 20,
	},
	loginButtonText: {
		fontSize: 18,
		color: '#fff',
	},
	footerLinks: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: 20,
	},
	createAccountText: {
		color: '#fff',
		fontSize: 16,
	},
	forgotPasswordText: {
		color: '#00B3FF',
		fontSize: 16,
	},
	underline: {
		textDecorationLine: 'underline', // Underline for links
	},
});

export default LoginScreen;
