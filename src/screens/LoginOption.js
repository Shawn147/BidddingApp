import React,{Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native';

export default class LoginOpt extends Component {
	render(){
		return (
		<View style={styles.container}>
			<View style={{marginTop: 180}}>
				<Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
					Select you account
				</Text>
			</View>
			<View style={{marginTop: 20}}>
				<TouchableOpacity onPress={()=> this.props.navigation.navigate('CreateAccount')}>
					<View
						style={{
							flexDirection: 'row',
							backgroundColor: '#017EEC',
							justifyContent: 'center',
							paddingVertical: 20,
							borderRadius: 4,
							borderWidth: 1,
							borderColor: '#fff',
						}}>
						<Text style={{fontWeight: 'bold', color: '#fff'}}>I want to hire</Text>
					</View>
				</TouchableOpacity >
				<TouchableOpacity style={{marginTop: 18}} onPress={()=> this.props.navigation.navigate('CreateAccount')} >
					<View
						style={{
							flexDirection: 'row',
							backgroundColor: '#017EEC',
							justifyContent: 'center',
							paddingVertical: 20,
							borderRadius: 4,
							borderWidth: 1,
							borderColor: '#fff',
						}} >
						<Text style={{fontWeight: 'bold', color: '#fff'}}>
							I want to work
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0086DF',
		paddingHorizontal: 30,
	},
});
