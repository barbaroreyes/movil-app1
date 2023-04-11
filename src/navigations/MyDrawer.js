import {createDrawerNavigator} from '@react-navigation/drawer'
import Notifications from '../screens/MyNotifications'


const Drawer = createDrawerNavigator();


export default function MyDrawer (){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Notifications" component={Notifications}/>
        </Drawer.Navigator>
    )
}