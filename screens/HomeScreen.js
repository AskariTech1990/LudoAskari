/** @format */

import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from './Navbar';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollContainer}>
				<LinearGradient
					colors={['#3E1399', '#150735']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.gradientContainer}>
					{/* Header */}
					<View style={styles.header}>
						<View style={styles.profileContainer}>
							<Image
								source={require('../assets/avatar1.png')}
								style={styles.avatar}
							/>
							<Text style={styles.username}>Thami</Text>
						</View>
						<Image
							source={require('../assets/splash.png')}
							style={styles.logo}
						/>
						<View style={styles.coinContainer}>
							<Image
								source={require('../assets/coin.png')}
								style={styles.coinIcon}
							/>
							<Text style={styles.coinText}>50142</Text>
						</View>
					</View>

					{/* Banner or Main Content */}
					<ScrollView
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
						style={styles.banner}>
						<Image
							source={require('../assets/banner.png')}
							style={styles.bannerImage}
						/>
						<Image
							source={require('../assets/banner.png')}
							style={styles.bannerImage}
						/>
						<Image
							source={require('../assets/banner.png')}
							style={styles.bannerImage}
						/>
					</ScrollView>

					<View>
						<Text style={styles.onlineUsersText}>Online Users</Text>
					</View>

					<View style={styles.gameOptions}>
						<TouchableOpacity style={styles.gameOption}>
							<LinearGradient
								colors={['#2cb4ec', '#72d8fe']}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
								style={styles.gradient}>
								<Image
									source={require('../assets/splash.png')}
									style={styles.gameIcon}
								/>
								<Text style={styles.gameText}>Fast Ludo</Text>
							</LinearGradient>
						</TouchableOpacity>
						<TouchableOpacity style={styles.gameOption}>
							<LinearGradient
								colors={['#261A8C', '#1C2025']}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
								style={styles.gradient}>
								<Image
									source={require('../assets/classicLudo.png')}
									style={styles.gameIcon}
								/>
								<Text style={styles.gameText}>Classic Ludo</Text>
							</LinearGradient>
						</TouchableOpacity>
						<TouchableOpacity style={styles.gameOption}>
							<LinearGradient
								colors={['#E2768F', '#A05373']}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
								style={styles.gradient}>
								<Text style={styles.gameText}>Rummy</Text>

								<Image
									source={require('../assets/rummy.png')}
									style={styles.gameIcon}
								/>
							</LinearGradient>
						</TouchableOpacity>
						<TouchableOpacity style={styles.gameOption}>
							<LinearGradient
								colors={['#bfe1a8', '#5BB021']}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
								style={styles.gradient}>
								<Text style={styles.gameText}>Cricket</Text>

								<Image
									source={require('../assets/cricket.png')}
									style={styles.gameIcon}
								/>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</ScrollView>
			{/* Navbar outside of ScrollView */}
			<Navbar />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#150735',
	},
	scrollContainer: {
		flex: 1,
	},
	gradientContainer: {
		flex: 1,
		paddingBottom: 80, // Ensure the last content doesn't get hidden under the Navbar
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
	banner: {
		height: 170,
		marginHorizontal: 20,
		borderRadius: 10,
		marginTop: 40,
		marginBottom: 20,
	},
	bannerImage: {
		width: width - 40, // Adjusting width based on screen width
		height: '100%',
		borderRadius: 10,
		marginRight: 10, // Add spacing between images
	},
	onlineUsersText: {
		color: 'white',
		paddingLeft: 20,
		fontWeight: 'bold',
		fontSize: 24,
		paddingBottom: 15,
	},
	gameOptions: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	gameOption: {
		width: '48%',
		borderRadius: 10,
		marginBottom: 20,
		overflow: 'hidden',
		height: 160,
	},
	gradient: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
	},
	gameIcon: {
		width: 100,
		height: 100,
		marginBottom: 10,
	},
	gameText: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
	},
	bottomNavigation: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 40,
		paddingVertical: 10,
		backgroundColor: '#000',
	},
	navItem: {
		alignItems: 'center',
	},
	navIcon: {
		width: 30,
		height: 30,
	},
});

export default HomeScreen;
