import {View ,Text} from 'react-native'
import {globalStyles} from '../styles/globalStyles'
export default function Profile (){
    return(
        <View style={globalStyles.screenContainer}>
         <Text style={globalStyles.title}>Profile</Text>
        </View>
    )
}