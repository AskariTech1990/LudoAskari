/** @format */

// /** @format */

// import React, { useEffect } from 'react';
// import { View, Image, StyleSheet } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// // import LinearGradient from 'react-native-linear-gradient';

// const SplashScreen = ({ navigation }) => {
// 	// useEffect(() => {
// 	// 	setTimeout(() => {
// 	// 		navigation.replace('Login');
// 	// 	}, 3000); // Splash screen duration
// 	// }, [navigation]);

// 	return (
// 		<LinearGradient
// 			colors={['#2CB4EC', '#72D8FE']}
// 			start={{ x: 0.5, y: 0 }}
// 			end={{ x: 0.5, y: 1 }}
// 			style={styles.container}>
// 			<View style={styles.circle2}>
// 				<View style={styles.circle1}>
// 					<View style={styles.circle}>
// 						<Image
// 							source={require('../assets/splash.png')}
// 							style={styles.logo}
// 						/>
// 					</View>
// 				</View>
// 			</View>
// 		</LinearGradient>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'flex-start', // Align items from the top
// 		alignItems: 'center',
// 	},
// 	circle: {
// 		width: 270,
// 		height: 270,
// 		borderRadius: 180,
// 		backgroundColor: '#7ED2F4',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	circle1: {
// 		width: 310,
// 		height: 310,
// 		borderRadius: 150,
// 		backgroundColor: '#70CDF3',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	circle2: {
// 		width: 350,
// 		height: 350,
// 		borderRadius: 180,
// 		backgroundColor: '#56C3F0',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		marginTop: 100, // Adjust the circle position slightly higher on the screen
// 	},
// 	logo: {
// 		width: 150,
// 		height: 150,
// 	},
// });

// export default SplashScreen;

/** @format */

import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
	const navigation = useNavigation();

	const handleNext = () => {
		navigation.navigate('HitZone'); // Navigate to HitZone screen with sliding effect
	};

	return (
		<LinearGradient
			colors={['#2CB4EC', '#72D8FE']}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			style={styles.container}>
			<View style={styles.circleContainer}>
				<View style={styles.circle3}>
					<View style={styles.circle2}>
						<View style={styles.circle1}>
							<Image
								source={require('../assets/splash.png')} // Replace with your image
								style={styles.logo}
							/>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.mainText}>
				<Text style={styles.title}>Dice</Text>
				<Text style={styles.subtitle}>Legends</Text>
				<Text style={styles.description}>
					Step into a world of strategic fun with Ludo. Roll the dice, navigate
					the board, and race your opponents to the finish line. Every move
					counts in this classic game of chance and skill!
				</Text>
			</View>
			<View style={styles.footer}>
				<View style={styles.pagination}>
					<View style={styles.dot1} />
					<View style={styles.dot} />
					<View style={styles.dot} />
				</View>
				<TouchableOpacity style={styles.nextButton} onPress={handleNext}>
					<Text style={styles.nextButtonText}>&gt;</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	circleContainer: {
		marginTop: 80,
		marginBottom: 20,
	},
	circle1: {
		width: 270,
		height: 270,
		borderRadius: 135,
		backgroundColor: '#7ED2F4',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle2: {
		width: 310,
		height: 310,
		borderRadius: 155,
		backgroundColor: '#70CDF3',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle3: {
		width: 350,
		height: 350,
		borderRadius: 175,
		backgroundColor: '#56C3F0',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 200,
		height: 200,
	},
	mainText: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '-30%',
	},
	title: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#5C99BB',
	},
	subtitle: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
		top: '-6%',
	},
	description: {
		fontSize: 16,
		color: '#fff',
		textAlign: 'center',
		marginHorizontal: 20,
		marginBottom: 30,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: 20,
		position: 'absolute', // Position the footer at the bottom
		bottom: 100, // Adjust this value to position the footer above the edge
	},
	pagination: {
		flexDirection: 'row',
	},
	dot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: '#B8EBFE',
		marginHorizontal: 5,
	},
	dot1: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: '#fff',
		marginHorizontal: 5,
	},
	nextButton: {
		backgroundColor: '#fff',
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	nextButtonText: {
		fontSize: 34,
		color: '#72D8FE',
	},
});

export default SplashScreen;
