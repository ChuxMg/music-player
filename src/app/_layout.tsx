import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-reanimated'



export default function App() {
	

	return (
		<View style={styles.container}>
			<Text>
				<Text>Start working on the app!</Text>
				<StatusBar style='auto'/>
			</Text>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
})