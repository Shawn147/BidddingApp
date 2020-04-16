import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native';

export default function SignUp() {
	return (
		<View style={styles.container}>
			<View style={{marginTop: 180}}>
				<Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
					Create An Account
				</Text>
			</View>
			<View style={{marginTop: 20}}>
				<TouchableOpacity>
					<View
						style={{
							flexDirection: 'row',
							backgroundColor: '#ECECEC',
							justifyContent: 'center',
							paddingVertical: 20,
							borderRadius: 3,
						}}>
						<Text style={{fontWeight: 'bold', color: '#057CEA'}}>FACEBOOK</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{marginTop: 18}}>
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
						<Text style={{fontWeight: 'bold', color: '#fff'}}>
							Create An Account
						</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View style={{position:'absolute', bottom:40, width:'100%', alignSelf:'center'}}>
				<Text style={{color:'#fff', textAlign:'center'}} >By signing up, I agree to freelancers.com's</Text>
				<View style={{flexDirection: 'row', alignSelf:'center'}}>
					<TouchableOpacity>
						<Text style={{color:'#fff',textDecorationLine:'underline',fontWeight:'bold'}}>Terms of Services</Text>
					</TouchableOpacity>
					<Text style={{color:'#fff',fontWeight:'bold'}}> & </Text>
					<TouchableOpacity>
						<Text style={{color:'#fff',textDecorationLine:'underline', fontWeight:'bold'}}>Privacy Policy</Text>
					</TouchableOpacity>
				</View>
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
