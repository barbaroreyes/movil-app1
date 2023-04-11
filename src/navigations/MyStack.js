import {createStackNavigator} from '@react-navigation/stack';
import {View,Text} from 'react-native'
import Home from '../screens/Home';
import { Colors } from "../contants/colors";
import Settings from '../screens/Settings'

const HomeStack = createStackNavigator();
function CustomerHeader({title}) {
    return (
    <View
    style={{
        height:80,
        width:"100%",
        backgroundColor: Colors.secondary
    }}
    >
      
    </View>
    )
    
}
 
export default function MyStack(){
return(
    <HomeStack.Navigator
    initialRouteName='Home'
    screenOptions={{
        headerShown: true,
        headerTitleAlign:'center',
        presentation:'card',
        header: ({})=> <CustomerHeader/>

    }}
    
    >
       <HomeStack.Screen name="Home" component={Home}/>
       <HomeStack.Screen name="Settings" component={Settings}/>
    </HomeStack.Navigator>
)
}