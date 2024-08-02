/** @format */

import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CardClashScreen = () => {
	const navigation = useNavigation();

	const handleNext = () => {
		// Navigate to the next screen, for example, the CardClash screen
		navigation.navigate('Login');
	};

	return (
		<LinearGradient
			colors={['#EC7C94', '#EFA7B6']}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			style={styles.container}>
			<View style={styles.circleContainer}>
				<View style={styles.circle3}>
					<View style={styles.circle2}>
						<View style={styles.circle1}>
							<Image
								source={require('../assets/rummy.png')} // Replace with your card image
								style={styles.logo}
							/>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.mainText}>
				<Text style={styles.title}>Card</Text>
				<Text style={styles.subtitle}>Clash</Text>
				<Text style={styles.description}>
					Get ready for a classic card challenge with Rummy. Arrange your cards,
					make strategic decisions, and aim for the perfect hand. Outsmart your
					opponents and claim victory in this timeless game of skill and luck!
				</Text>
			</View>
			<View style={styles.footer}>
				<View style={styles.pagination}>
					<View style={styles.dot} />
					<View style={styles.dot} />
					<View style={styles.dot3} />
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
		marginTop: 60,
		marginBottom: 20,
	},
	circle1: {
		width: 270,
		height: 270,
		borderRadius: 135,
		backgroundColor: '#F593B2',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle2: {
		width: 310,
		height: 310,
		borderRadius: 155,
		backgroundColor: '#F793B8',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle3: {
		width: 350,
		height: 350,
		borderRadius: 175,
		backgroundColor: '#F686A9',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 225,
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
		color: '#E0678B',
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
		backgroundColor: '#F7D3DA',
		marginHorizontal: 5,
	},
	dot3: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: 'white',
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
		color: '#EC7C94',
	},
});

export default CardClashScreen;
