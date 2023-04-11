import {NavigationContainer} from '@react-navigation/native'
import MyStack from './MyStack'
import MyBottomTab from './MyBottomTaps'
import MyDrawer from './MyDrawer'

export default function RootNavigator (){
    return (
        <NavigationContainer>
            {/*<MyStack/>*/}
           <MyDrawer/>
        </NavigationContainer>
    )
}