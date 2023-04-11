import {View ,Text} from 'react-native'
import {globalStyles} from '../styles/globalStyles' 


export default function Notifications (){
    return(
        <View style={globalStyles.screenContainer}>
         <Text style={globalStyles.title}>Notifications</Text>
        </View>
    )
}