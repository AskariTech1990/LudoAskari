/** @format */

import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
	const navigation = useNavigation(); // useNavigation hook to navigate between screens
	const [activeIcon, setActiveIcon] = useState('home'); // default active icon

	const handleIconPress = (iconName, screenName) => {
		setActiveIcon(iconName);
		navigation.navigate(screenName); // navigate to the corresponding screen
	};

	return (
		<View style={styles.navbar}>
			<TouchableOpacity onPress={() => handleIconPress('user', 'tournament')}>
				<View style={activeIcon === 'user' ? styles.activeIconContainer : null}>
					<FontAwesome
						name='user'
						size={35}
						style={[styles.icon, activeIcon === 'user' && styles.activeIcon]}
					/>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleIconPress('credit-card', 'wallet')}>
				<View
					style={
						activeIcon === 'credit-card' ? styles.activeIconContainer : null
					}>
					<FontAwesome
						name='credit-card'
						size={32}
						style={[
							styles.icon,
							activeIcon === 'credit-card' && styles.activeIcon,
						]}
					/>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => handleIconPress('home', 'Home')}>
				<View style={activeIcon === 'home' ? styles.activeIconContainer : null}>
					<FontAwesome
						name='home'
						size={35}
						style={[styles.icon, activeIcon === 'home' && styles.activeIcon]}
					/>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleIconPress('headphones', 'Support')}>
				<View
					style={
						activeIcon === 'headphones' ? styles.activeIconContainer : null
					}>
					<FontAwesome
						name='headphones'
						size={35}
						style={[
							styles.icon,
							activeIcon === 'headphones' && styles.activeIcon,
						]}
					/>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => handleIconPress('cog', 'Settings')}>
				<View style={activeIcon === 'cog' ? styles.activeIconContainer : null}>
					<FontAwesome
						name='cog'
						size={30}
						style={[styles.icon, activeIcon === 'cog' && styles.activeIcon]}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	navbar: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingVertical: 2,
		backgroundColor: '#200B3C',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	icon: {
		color: '#fff',
	},
	activeIconContainer: {
		width: 60,
		height: 60,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2895C2',
		padding: 10,
		marginBottom: 20,
		transform: [{ scale: 1.2 }],
		shadowColor: '#2895C2',
		shadowOffset: { width: 10, height: 10 },
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 50, // for Android shadow effect
	},
	activeIcon: {
		color: '#fff', // color when the icon is active
	},
	activeHomeIconContainer: {
		width: 60,
		height: 60,
		borderRadius: 35,
		backgroundColor: '#0a84ff',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
		transform: [{ scale: 1.2 }],
		shadowColor: '#0a84ff',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 30, // for Android shadow effect
	},
	activeHomeIcon: {
		color: '#fff', // home icon stays white but with a popup effect
	},
});

export default Navbar;
