/** @format */

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from './Navbar';

const TwoPlayerScreen = () => (
	<View style={styles.card}>
		<Text style={styles.prizeText}>$ 100</Text>
		<Text style={styles.prizeSubText}>Prize Pool</Text>
		<View style={styles.detailsContainer}>
			<Text style={styles.detailsText}>2 players</Text>
			<Text style={styles.detailsText}>1 Winner</Text>
			<Text style={styles.freeText}>FREE</Text>
		</View>
	</View>
);

const FourPlayerScreen = () => (
	<View style={styles.card}>
		<Text style={styles.prizeText}>$ 200</Text>
		<Text style={styles.prizeSubText}>Prize Pool</Text>
		<View style={styles.detailsContainer}>
			<Text style={styles.detailsText}>4 players</Text>
			<Text style={styles.detailsText}>1 Winner</Text>
			<Text style={styles.freeText}>FREE</Text>
		</View>
	</View>
);

const TournamentScreen = () => (
	<View style={styles.card}>
		<Text style={styles.prizeText}>$ 500</Text>
		<Text style={styles.prizeSubText}>Prize Pool</Text>
		<View style={styles.detailsContainer}>
			<Text style={styles.detailsText}>Tournament</Text>
			<Text style={styles.detailsText}>Multiple Winners</Text>
			<Text style={styles.freeText}>FREE</Text>
		</View>
	</View>
);

const renderScene = SceneMap({
	twoPlayer: TwoPlayerScreen,
	fourPlayer: FourPlayerScreen,
	tournament: TournamentScreen,
});

const Tournament = () => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'twoPlayer', title: 'Game' },
		{ key: 'fourPlayer', title: '4 Players' },
		{ key: 'tournament', title: 'Tournament' },
	]);

	const getLeftButtonText = () => {
		switch (index) {
			case 0:
				return 'Game';
			case 1:
				return '4 Players';
			case 2:
				return '4 Players';
			default:
				return 'Game';
		}
	};

	const getRightButtonText = () => {
		switch (index) {
			case 0:
				return '4 Players';
			case 1:
				return 'Tournament';
			case 2:
				return 'Tournament';
			default:
				return '4 Players';
		}
	};

	return (
		<LinearGradient colors={['#3E1399', '#150735']} style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<View style={styles.profileContainer}>
					<Image
						source={require('../assets/avatar1.png')}
						style={styles.avatar}
					/>
					<Text style={styles.username}>Thami</Text>
				</View>
				<Image source={require('../assets/splash.png')} style={styles.logo} />
				<View style={styles.coinContainer}>
					<Image
						source={require('../assets/coin.png')}
						style={styles.coinIcon}
					/>
					<Text style={styles.coinText}>50142</Text>
				</View>
			</View>

			{/* Buttons */}
			<View style={styles.buttonsContainer}>
				<Text style={styles.leftButton}>{getLeftButtonText()}</Text>
				<Text style={styles.rightButton}>{getRightButtonText()}</Text>
			</View>

			{/* Tab View */}
			<View style={styles.tabContainer}>
				<TabView
					navigationState={{ index, routes }}
					renderScene={renderScene}
					onIndexChange={setIndex}
					initialLayout={{ width: Dimensions.get('window').width }}
					renderTabBar={() => null} // Hide default TabBar
				/>
			</View>

			<Navbar />
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		top: '8%',
	},
	profileContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	username: {
		color: '#fff',
		marginLeft: 10,
		fontSize: 18,
	},
	logo: {
		width: 100,
		height: 30,
		resizeMode: 'contain',
	},
	coinContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	coinIcon: {
		width: 30,
		height: 30,
	},
	coinText: {
		color: '#fff',
		marginLeft: 5,
		fontSize: 16,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginVertical: 20,
	},
	leftButton: {
		color: '#FFD700',
		fontSize: 18,
		fontWeight: 'bold',
	},
	rightButton: {
		color: '#FFFFFF',
		fontSize: 18,
		fontWeight: 'bold',
	},
	tabContainer: {
		flex: 1,
		paddingHorizontal: 20,
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'flex-start', // Aligns content to the top of the container
		alignItems: 'center',
		marginTop: 20, // Adds space between buttons and cards
	},
	card: {
		backgroundColor: '#3B5998',
		borderRadius: 10,
		padding: 20,
		width: '100%',
		marginBottom: 20, // Adds space between cards
	},
	prizeText: {
		color: '#FFFFFF',
		fontSize: 24,
		fontWeight: 'bold',
	},
	prizeSubText: {
		color: '#FFFFFF',
		fontSize: 16,
		marginTop: 5,
	},
	detailsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
	},
	detailsText: {
		color: '#FFFFFF',
		fontSize: 14,
	},
	freeText: {
		color: '#00FF00',
		fontSize: 14,
		fontWeight: 'bold',
	},
});

export default Tournament;
