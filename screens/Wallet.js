/** @format */

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Navbar from './Navbar';

const WalletScreen = () => {
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

			{/* Player Selection */}
			<View style={styles.playerSelection}>
				<TouchableOpacity style={styles.playerButton}>
					<Text style={styles.playerButtonText}>2 Players</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.playerButtonActive}>
					<Text style={styles.playerButtonTextActive}>4 Players</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.playerButton}>
					<Text style={styles.playerButtonText}>Tournaments</Text>
				</TouchableOpacity>
			</View>

			{/* Wallet Information Cards */}
			<View style={styles.walletCard}>
				<View style={styles.walletCardContent}>
					<Text style={styles.prizeText}>1st Prize</Text>
					<Text style={styles.amountText}>₹ 5025</Text>
					<View style={styles.rightContainer}>
						<Text style={styles.priceText}>₹ 2789</Text>
					</View>
				</View>
				<View style={styles.walletCardFooter}>
					<View style={styles.playerInfo}>
						{/* <Image
							source={require('../assets/players.png')}
							style={styles.playersIcon}
						/> */}
						<Text style={styles.playerCount}>2</Text>
					</View>
					<Text style={styles.timeText}>5 m 30 s</Text>
				</View>
			</View>

			{/* Repeat the Wallet Card as needed */}
			<View style={styles.walletCard}>
				<View style={styles.walletCardContent}>
					<Text style={styles.prizeText}>1st Prize</Text>
					<Text style={styles.amountText}>₹ 5025</Text>
					<View style={styles.rightContainer}>
						<Text style={styles.priceText}>₹ 2789</Text>
					</View>
				</View>
				<View style={styles.walletCardFooter}>
					<View style={styles.playerInfo}>
						{/* <Image
							source={require('../assets/players.png')}
							style={styles.playersIcon}
						/> */}
						<Text style={styles.playerCount}>2</Text>
					</View>
					<Text style={styles.timeText}>5 m 30 s</Text>
				</View>
			</View>

			{/* Bottom Navigation */}
			<Navbar />
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
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
	playerSelection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 20,
		gap: 5,
	},
	playerButton: {
		backgroundColor: '#4c669f',
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 20,
	},
	playerButtonActive: {
		backgroundColor: '#4caf50',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
	},
	playerButtonText: {
		color: '#fff',
		fontSize: 16,
	},
	playerButtonTextActive: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	walletCard: {
		backgroundColor: '#00BFFF',
		padding: 20,
		marginVertical: 10,
		borderRadius: 20,
	},
	walletCardContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	prizeText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	amountText: {
		color: '#fff',
		fontSize: 32,
		fontWeight: 'bold',
	},
	rightContainer: {
		backgroundColor: '#039BE5',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 20,
	},
	priceText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	walletCardFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
	},
	playerInfo: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	playersIcon: {
		width: 20,
		height: 20,
		marginRight: 5,
	},
	playerCount: {
		color: '#fff',
		fontSize: 16,
	},
	timeText: {
		color: '#fff',
		fontSize: 16,
	},
});

export default WalletScreen;
