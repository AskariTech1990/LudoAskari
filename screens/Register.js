/** @format */

// import React, { useState } from 'react';
// import {
// 	View,
// 	Text,
// 	TextInput,
// 	TouchableOpacity,
// 	StyleSheet,
// 	Image,
// 	ScrollView,
// 	Animated,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
// import {
// 	useFonts,
// 	IrishGrover_400Regular,
// } from '@expo-google-fonts/irish-grover';
// import AppLoading from 'expo-app-loading';
// import { MaterialIcons } from '@expo/vector-icons';

// const RegisterScreen = () => {
// 	const [name, setName] = useState('');
// 	const [phoneNumber, setPhoneNumber] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [confirmPassword, setConfirmPassword] = useState('');
// 	const [selectedAvatar, setSelectedAvatar] = useState(null);
// 	const [scaleValue] = useState(new Animated.Value(1));

// 	const navigation = useNavigation();

// 	let [fontsLoaded] = useFonts({
// 		IrishGrover_400Regular,
// 	});

// 	if (!fontsLoaded) {
// 		return <AppLoading />;
// 	}

// 	const avatars = [
// 		require('../assets/avatar1.png'),
// 		require('../assets/avatar2.png'),
// 		require('../assets/avatar3.png'),
// 		require('../assets/avatar4.png'),
// 		require('../assets/avatar5.png'),
// 		require('../assets/avatar6.png'),
// 		require('../assets/avatar7.png'),
// 		require('../assets/avatar8.png'),
// 		require('../assets/avatar9.png'),
// 	];

// 	const handleAvatarSelect = (index) => {
// 		setSelectedAvatar(index);
// 		// Start the popup animation
// 		Animated.sequence([
// 			Animated.timing(scaleValue, {
// 				toValue: 1.2,
// 				duration: 150,
// 				useNativeDriver: true,
// 			}),
// 			Animated.timing(scaleValue, {
// 				toValue: 1.1,
// 				duration: 150,
// 				useNativeDriver: true,
// 			}),
// 		]).start();
// 	};

// 	return (
// 		<LinearGradient
// 			colors={['#2CB4EC', '#72D8FE']}
// 			start={{ x: 0.5, y: 0 }}
// 			end={{ x: 0.5, y: 1 }}
// 			style={styles.container}>
// 			<Text style={styles.registerText}>Sign Up</Text>

// 			<Text style={styles.avatarHeading}>Avatar</Text>
// 			<ScrollView
// 				horizontal
// 				showsHorizontalScrollIndicator={false}
// 				style={styles.avatarContainer}
// 				contentContainerStyle={styles.avatarContentContainer}>
// 				{avatars.map((avatar, index) => (
// 					<TouchableOpacity
// 						key={index}
// 						onPress={() => handleAvatarSelect(index)}>
// 						<Animated.View
// 							style={[
// 								styles.avatarWrapper,
// 								selectedAvatar === index && {
// 									transform: [{ scale: scaleValue }],
// 									shadowColor: '#000',
// 									shadowOffset: { width: 0, height: 2 },
// 									shadowOpacity: 0.4,
// 									shadowRadius: 5,
// 									elevation: 10,
// 								},
// 							]}>
// 							<Image
// 								source={avatar}
// 								style={[
// 									styles.avatar,
// 									selectedAvatar === index && styles.selectedAvatar,
// 								]}
// 							/>
// 							{selectedAvatar === index && (
// 								<MaterialIcons
// 									name='check-circle'
// 									size={24}
// 									color='white'
// 									style={styles.tickIcon}
// 								/>
// 							)}
// 						</Animated.View>
// 					</TouchableOpacity>
// 				))}
// 			</ScrollView>

// 			<View style={styles.formContainer}>
// 				<View style={styles.inputContainer}>
// 					<Text style={styles.inputLabel}>Name</Text>
// 					<TextInput
// 						style={styles.input}
// 						placeholder='Thami Jhonson'
// 						value={name}
// 						onChangeText={setName}
// 					/>
// 				</View>

// 				<View style={styles.inputContainer}>
// 					<Text style={styles.inputLabel}>Phone No.</Text>
// 					<TextInput
// 						style={styles.input}
// 						placeholder='+91 2452 25142 522'
// 						value={phoneNumber}
// 						onChangeText={setPhoneNumber}
// 						keyboardType='phone-pad'
// 					/>
// 				</View>

// 				<View style={styles.inputContainer}>
// 					<Text style={styles.inputLabel}>Password</Text>
// 					<TextInput
// 						style={styles.input}
// 						placeholder='********'
// 						value={password}
// 						onChangeText={setPassword}
// 						secureTextEntry
// 					/>
// 				</View>

// 				<View style={styles.inputContainer}>
// 					<Text style={styles.inputLabel}>Confirm Password</Text>
// 					<TextInput
// 						style={styles.input}
// 						placeholder='********'
// 						value={confirmPassword}
// 						onChangeText={setConfirmPassword}
// 						secureTextEntry
// 					/>
// 				</View>

// 				<LinearGradient
// 					colors={['#018BE8', '#48C6EF']} // Linear gradient colors for the Sign Up button
// 					start={{ x: 0, y: 0 }}
// 					end={{ x: 1, y: 1 }}
// 					style={styles.signUpButton}>
// 					<TouchableOpacity onPress={() => navigation.navigate('otp')}>
// 						<Text style={styles.signUpButtonText}>Sign Up</Text>
// 					</TouchableOpacity>
// 				</LinearGradient>

// 				<TouchableOpacity
// 					style={styles.alreadyAccountContainer}
// 					onPress={() => navigation.navigate('Login')}>
// 					<Text style={styles.alreadyAccountText}>
// 						Already have an account?
// 					</Text>
// 				</TouchableOpacity>
// 			</View>
// 		</LinearGradient>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		paddingHorizontal: 20,
// 	},
// 	registerText: {
// 		fontSize: 40,
// 		fontWeight: 'bold',
// 		color: '#fff',
// 		marginBottom: 25,
// 		fontFamily: 'IrishGrover_400Regular',
// 	},
// 	avatarHeading: {
// 		fontSize: 25,
// 		color: '#fff',
// 		marginBottom: 10,
// 		fontWeight: 'bold',
// 		display: 'flex',
// 		alignSelf: 'flex-start',
// 	},
// 	avatarContainer: {
// 		maxHeight: 100,
// 		marginBottom: 5,
// 	},
// 	avatarContentContainer: {
// 		alignItems: 'center',
// 		paddingHorizontal: 1,
// 	},
// 	avatarWrapper: {
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		marginHorizontal: 15,
// 	},
// 	avatar: {
// 		width: 60,
// 		height: 60,
// 		borderRadius: 30,
// 		borderWidth: 2,
// 		borderColor: 'transparent',
// 	},
// 	selectedAvatar: {
// 		width: 70, // Increase size of selected avatar
// 		height: 70, // Increase size of selected avatar
// 		borderRadius: 35,
// 		borderColor: '#fff', // Highlight selected avatar with a white border
// 	},
// 	tickIcon: {
// 		position: 'absolute',
// 		bottom: -10,
// 		right: -10,
// 	},
// 	formContainer: {
// 		width: '100%',
// 	},
// 	inputContainer: {
// 		marginBottom: 10,
// 	},
// 	inputLabel: {
// 		fontSize: 18,
// 		color: '#fff',
// 		marginBottom: 5,
// 		fontWeight: 'bold',
// 	},
// 	input: {
// 		backgroundColor: '#fff',
// 		borderRadius: 30,
// 		paddingHorizontal: 15,
// 		paddingVertical: 10,
// 		fontSize: 16,
// 		width: '100%',
// 		shadowColor: '#000',
// 		shadowOffset: { width: 0, height: 2 },
// 		shadowOpacity: 0.2,
// 		shadowRadius: 3,
// 		elevation: 5,
// 	},
// 	signUpButton: {
// 		borderRadius: 30,
// 		width: '100%',
// 		paddingVertical: 15,
// 		alignItems: 'center',
// 		marginTop: 20,
// 	},
// 	signUpButtonText: {
// 		fontSize: 18,
// 		color: '#fff',
// 	},
// 	alreadyAccountContainer: {
// 		marginTop: 15,
// 	},
// 	alreadyAccountText: {
// 		color: '#fff',
// 		fontSize: 16,
// 		textDecorationLine: 'underline',
// 		textAlign: 'right',
// 	},
// });

// export default RegisterScreen;

import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
	ScrollView,
	Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {
	useFonts,
	IrishGrover_400Regular,
} from '@expo-google-fonts/irish-grover';
import AppLoading from 'expo-app-loading';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const RegisterScreen = () => {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [passwordStrength, setPasswordStrength] = useState('');
	const [selectedAvatar, setSelectedAvatar] = useState(null);
	const [scaleValue] = useState(new Animated.Value(1));

	const navigation = useNavigation();

	let [fontsLoaded] = useFonts({
		IrishGrover_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const avatars = [
		require('../assets/avatar1.png'),
		require('../assets/avatar2.png'),
		require('../assets/avatar3.png'),
		require('../assets/avatar4.png'),
		require('../assets/avatar5.png'),
		require('../assets/avatar6.png'),
		require('../assets/avatar7.png'),
		require('../assets/avatar8.png'),
		require('../assets/avatar9.png'),
	];

	const handleAvatarSelect = (index) => {
		setSelectedAvatar(index);
		Animated.sequence([
			Animated.timing(scaleValue, {
				toValue: 1.2,
				duration: 150,
				useNativeDriver: true,
			}),
			Animated.timing(scaleValue, {
				toValue: 1.1,
				duration: 150,
				useNativeDriver: true,
			}),
		]).start();
	};

	const checkPasswordStrength = (password) => {
		if (password.length >= 8) {
			if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
				setPasswordStrength('strong');
			} else {
				setPasswordStrength('medium');
			}
		} else {
			setPasswordStrength('');
		}
	};

	const handlePasswordChange = (text) => {
		setPassword(text);
		checkPasswordStrength(text);
	};

	const isPasswordMatching = () => password === confirmPassword;

	return (
		<LinearGradient
			colors={['#2CB4EC', '#72D8FE']}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			style={styles.container}>
			<Text style={styles.registerText}>Sign Up</Text>

			<Text style={styles.avatarHeading}>Avatar</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.avatarContainer}
				contentContainerStyle={styles.avatarContentContainer}>
				{avatars.map((avatar, index) => (
					<TouchableOpacity
						key={index}
						onPress={() => handleAvatarSelect(index)}>
						<Animated.View
							style={[
								styles.avatarWrapper,
								selectedAvatar === index && {
									transform: [{ scale: scaleValue }],
									shadowColor: '#000',
									shadowOffset: { width: 0, height: 2 },
									shadowOpacity: 0.4,
									shadowRadius: 5,
									elevation: 10,
								},
							]}>
							<Image
								source={avatar}
								style={[
									styles.avatar,
									selectedAvatar === index && styles.selectedAvatar,
								]}
							/>
							{selectedAvatar === index && (
								<MaterialIcons
									name='check-circle'
									size={24}
									color='white'
									style={styles.tickIcon}
								/>
							)}
						</Animated.View>
					</TouchableOpacity>
				))}
			</ScrollView>

			<View style={styles.formContainer}>
				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Name</Text>
					<TextInput
						style={styles.input}
						placeholder='Thami Jhonson'
						value={name}
						onChangeText={setName}
					/>
				</View>

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
					<View style={styles.inputIconContainer}>
						<TextInput
							style={styles.input}
							placeholder='********'
							value={password}
							onChangeText={handlePasswordChange}
							secureTextEntry
						/>
						<FontAwesome
							name='lock'
							size={24}
							color='black'
							style={styles.inputIcon}
						/>
					</View>
					{passwordStrength ? (
						<View
							style={[
								styles.passwordStrengthBar,
								passwordStrength === 'strong'
									? styles.strongPassword
									: styles.mediumPassword,
							]}
						/>
					) : null}
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Confirm Password</Text>
					<View style={styles.inputIconContainer}>
						<TextInput
							style={styles.input}
							placeholder='********'
							value={confirmPassword}
							onChangeText={setConfirmPassword}
							secureTextEntry
						/>
						<FontAwesome
							name='lock'
							size={24}
							color='black'
							style={styles.inputIcon}
						/>
					</View>
					{confirmPassword && (
						<Text
							style={[
								styles.matchText,
								isPasswordMatching() ? styles.match : styles.noMatch,
							]}>
							{isPasswordMatching()
								? 'Passwords match'
								: 'Passwords do not match'}
						</Text>
					)}
				</View>

				<LinearGradient
					colors={['#018BE8', '#48C6EF']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.signUpButton}>
					<TouchableOpacity onPress={() => navigation.navigate('otp')}>
						<Text style={styles.signUpButtonText}>Sign Up</Text>
					</TouchableOpacity>
				</LinearGradient>

				<TouchableOpacity
					style={styles.alreadyAccountContainer}
					onPress={() => navigation.navigate('Login')}>
					<Text style={styles.alreadyAccountText}>
						Already have an account?
					</Text>
				</TouchableOpacity>
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
	registerText: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
		fontFamily: 'IrishGrover_400Regular',
	},
	avatarHeading: {
		fontSize: 25,
		color: '#fff',
		marginBottom: 10,
		fontWeight: 'bold',
		display: 'flex',
		alignSelf: 'flex-start',
	},
	avatarContainer: {
		maxHeight: 100,
		marginBottom: 5,
	},
	avatarContentContainer: {
		alignItems: 'center',
		paddingHorizontal: 1,
	},
	avatarWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 15,
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: 'transparent',
	},
	selectedAvatar: {
		width: 70,
		height: 70,
		borderRadius: 35,
		borderColor: '#fff',
	},
	tickIcon: {
		position: 'absolute',
		bottom: -10,
		right: -10,
	},
	formContainer: {
		width: '100%',
	},
	inputContainer: {
		marginBottom: 10,
	},
	inputLabel: {
		fontSize: 18,
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
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 5,
	},
	inputIconContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	inputIcon: {
		position: 'absolute',
		right: 10,
	},
	passwordStrengthBar: {
		height: 5,
		borderRadius: 5,
		marginTop: 5,
		width: '100%',
	},
	strongPassword: {
		backgroundColor: 'green',
	},
	mediumPassword: {
		backgroundColor: 'orange',
	},
	matchText: {
		fontSize: 14,
		marginTop: 5,
	},
	match: {
		color: 'green',
	},
	noMatch: {
		color: 'red',
	},
	signUpButton: {
		borderRadius: 30,
		width: '100%',
		paddingVertical: 15,
		alignItems: 'center',
		marginTop: 20,
	},
	signUpButtonText: {
		fontSize: 18,
		color: '#fff',
	},
	alreadyAccountContainer: {
		marginTop: 15,
	},
	alreadyAccountText: {
		color: '#fff',
		fontSize: 16,
		textDecorationLine: 'underline',
		textAlign: 'right',
	},
});

export default RegisterScreen;
