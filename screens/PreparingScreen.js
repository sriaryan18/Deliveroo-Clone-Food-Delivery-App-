import { View, Text } from 'react-native'
import {ProgressBar} from '@react-native-community/progress-bar-android'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const PreparingScreen = () => {
  return (
    <View className="  bg-[#00bcde] flex-1 justify-center items-center">
        <Animatable.Image
       source={require('../assets/preparation.gif')} 
    //    className='h-50 w-full '
    iterationCount={1}
    animation="slideInUp"
         
        />
        <Animatable.Text
         iterationCount={1}
         animation="slideInUp"
         className="text-center text-white text-lg my-10 font-bold"
        >
            <Text>Waiting for Conformation from Restaurants</Text>
        </Animatable.Text>
        {/* <Progress.CircleSnail color='white' fill='transparent' borderColor='white'  unfilledColor='white'/> */}
        <ProgressBar color="white" />
    </View>
  )
}

export default PreparingScreen