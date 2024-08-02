/** @format */

import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

const HitZoneScreen = () => {
	const navigation = useNavigation();

	const handleNext = () => {
		// Navigate to the next screen, for example, the CardClash screen
		navigation.navigate('CardClash');
	};

	return (
		<LinearGradient
			colors={['#A6EA78', '#C1E2AA']}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			style={styles.container}>
			<View style={styles.circleContainer}>
				<View style={styles.circle3}>
					<View style={styles.circle2}>
						<View style={styles.circle1}>
							<Image
								source={require('../assets/cricket.png')} // Replace with your cricket image
								style={styles.logo}
							/>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.mainText}>
				<Text style={styles.title}>Hit</Text>
				<Text style={styles.subtitle}>Zone</Text>
				<Text style={styles.description}>
					Experience the thrill of cricket from the comfort of your screen. Hit
					boundaries, take wickets, and strategize your way to victory. Whether
					you're a bowler or a batsman, the action never stops!
				</Text>
			</View>
			<View style={styles.footer}>
				<View style={styles.pagination}>
					<View style={styles.dot} />
					<View style={styles.dot2} />
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
		marginTop: 60,
		marginBottom: 20,
	},
	circle1: {
		width: 270,
		height: 270,
		borderRadius: 135,
		backgroundColor: '#9BEE83',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle2: {
		width: 310,
		height: 310,
		borderRadius: 155,
		backgroundColor: '#93EA7E',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle3: {
		width: 350,
		height: 350,
		borderRadius: 175,
		backgroundColor: '#88E77B',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 200,
		height: 200,
	},
	title: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#6EB75F',
	},
	subtitle: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
	},
	description: {
		fontSize: 16,
		color: '#fff',
		textAlign: 'center',
		marginHorizontal: 20,
		marginBottom: 30,
	},

	mainText: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '-30%',
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
		backgroundColor: '#E0F1D4',
		marginHorizontal: 5,
	},
	dot2: {
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
		color: '#A6EA78',
	},
});

export default HitZoneScreen;
