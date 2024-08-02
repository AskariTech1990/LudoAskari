/** @format */

import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const OTPVerificationScreen = () => {
	const [otp, setOtp] = useState('');

	const navigation = useNavigation();

	const handleResendOTP = () => {
		// Logic to resend OTP goes here
		console.log('OTP Resent');
	};

	return (
		<LinearGradient
			colors={['#A7EB79', '#C1E2AA']} // Define your gradient colors here
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={styles.container}>
			<Text style={styles.headerText}>OTP</Text>
			<View style={{ top: '-2%' }}>
				<Image
					source={require('../assets/sheild.png')} // Replace with your GIF
					style={styles.robotImage}
					contentFit='contain'
				/>
			</View>
			<Text style={styles.verificationText}>OTP Verification</Text>
			<View style={styles.otpContainer}>
				{[...Array(4)].map((_, index) => (
					<TextInput
						key={index}
						style={styles.otpInput}
						maxLength={1}
						keyboardType='numeric'
						onChangeText={(text) => {
							const newOtp = otp.split('');
							newOtp[index] = text;
							setOtp(newOtp.join(''));
						}}
						value={otp[index] || ''}
					/>
				))}
			</View>
			<TouchableOpacity style={styles.verifyButton}>
				<LinearGradient
					colors={['#ADEFE4', '#24C058']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.verifyButtonGradient}>
					<Text
						style={styles.verifyButtonText}
						onPress={() => navigation.navigate('Home')}>
						Verify
					</Text>
				</LinearGradient>
			</TouchableOpacity>
			<TouchableOpacity style={styles.resendButton} onPress={handleResendOTP}>
				<Text style={styles.resendButtonText}>Resend OTP </Text>
			</TouchableOpacity>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 50,
		fontWeight: 'bold',
		color: '#FFFFFF',
		top: '-8%',
	},
	robotImage: {
		height: 250,
		width: 250,
	},
	verificationText: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#ffffff',
		marginTop: 20,
		marginBottom: 40,
	},
	otpContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '85%',
		marginBottom: 40,
	},
	otpInput: {
		width: 70,
		height: 70,
		backgroundColor: '#ffffff',
		borderRadius: 50,
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold',
		borderColor: 'black',
		borderWidth: 2,
	},
	verifyButton: {
		width: '80%',
		height: 50,
		borderRadius: 25,
	},
	verifyButtonGradient: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
	},
	verifyButtonText: {
		fontSize: 18,
		color: '#ffffff',
		fontWeight: 'bold',
	},
	resendButton: {
		marginTop: 20,
	},
	resendButtonText: {
		fontSize: 16,
		color: '#28A745',
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
});

export default OTPVerificationScreen;
