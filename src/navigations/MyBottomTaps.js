import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const MyTab = createBottomTabNavigator();

export default function MyBottomTab(){
   return(
   <MyTab.Navigator>
    <MyTab.Screen name="Home" component={Home}/>
    <MyTab.Screen name="Profile" component={Profile}/>
   </MyTab.Navigator>
   
   ) 
}