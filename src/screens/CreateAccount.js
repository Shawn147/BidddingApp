import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native';

export default function Create() {
	return (
		<View style={styles.container}>
			<View style={{marginTop: 20}}>
				<Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
					Create An Account
				</Text>
				<Text style={{color:'#2ea8f7', marginTop:35}} >Choose a username</Text>
				<TextInput style={{paddingTop:10, fontSize:16, color:'#fff', }} ></TextInput>
				<View style={{borderWidth:1, borderColor:'#fff'}} />
			</View>
			<View style={{marginTop: 20, alignSelf: 'flex-end',}}>
				<TouchableOpacity>
					<View
						style={{
							position:'absolute',
							backgroundColor: '#ECECEC',
							paddingHorizontal:30,
							paddingVertical: 10,
							borderRadius: 3,
							right:5,
							bottom:-100
						}}>
						<Text style={{fontWeight: 'bold', color: '#057CEA'}}>Next</Text>
					</View>
				</TouchableOpacity>
				
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0086DF',
		paddingHorizontal: 30,
	},
});
