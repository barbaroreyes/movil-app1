import {NavigationContainer} from '@react-navigation/native'
import MyStack from './MyStack'
import MyBottomTab from './MyBottomTaps'

export default function RootNavigator (){
    return (
        <NavigationContainer>
            <MyStack/>
           
        </NavigationContainer>
    )
}