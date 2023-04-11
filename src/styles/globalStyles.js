import {StyleSheet} from 'react-native';
import { Colors } from '../contants/colors';

export  const globalStyles = StyleSheet.create({
    screenContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.ligth

    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.secondary
    }
})