import {createStackNavigator} from '@react-navigation/stack';
import {View,Text} from 'react-native'
import Home from '../screens/Home';
import MyBottomTab from './MyBottomTaps'
import { Colors } from "../contants/colors";
import Settings from '../screens/Settings'

const HomeStack = createStackNavigator();

function CustomerHeader({title}) {
    return (
    <View
    style={{
        height:80,
        width:"100%",
        backgroundColor: Colors.secondary,
        padding:10,
        justifyContent: "flex-end",
        alignItems: "center",

    }}
    >
      <Text
      style={{
        fontSize:20,
        fontWeight: "bold",
        color: Colors.ligth
      }}
      >{title}</Text>
    </View>
    )
    
}
  const myConfi = {
    headerShown: false,
    headerTitleAlign:'center',
    presentation:'modal',
   // header: ({route})=> 
   // <CustomerHeader
   // title={route.name}
    ///>
    //

}
export default function MyStack(){
return(
<HomeStack.Navigator 
    initialRouteName='Home' 
    screenOptions={myConfi}
    >
    <HomeStack.Screen name="Root" component={MyBottomTab}/>
    <HomeStack.Group screenOptions={{headerShown:true}}>
    <HomeStack.Screen 
    name="Settings"
    component={Settings}
    options ={{headerBackTitle:'Home'}}
    /> 
    </HomeStack.Group>
    
 </HomeStack.Navigator>
)
}