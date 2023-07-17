import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { ProgressBar } from '@react-native-community/progress-bar-android'

const DeliveryScreen = () => {
    const navigation=useNavigation();
  return (
    <View className="bg-[#00CCBB] flex-1 ">
        <View className="p-5 flex-row justify-between items-center z-50">
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <XMarkIcon size={40} color="white" opacity={0.8}/>
            </TouchableOpacity>
            <TouchableOpacity>
                 <Text className="text-white font-sans text-base opacity-70 mx-2">Order Help</Text>
            </TouchableOpacity>
        </View>
        <View className="bg-white h-1/4 mt-5 rounded-2xl mx-4 border-separate shadow-2xlS mb-2">
            <Text className="text-gray-400 mx-4 mt-4 text-lg">Estimated Arrival</Text>
            <Text className="text-black font-extrabold mx-4 text-3xl">40-45 Minutes</Text>
            <ProgressBar styleAttr='Horizontal' color='#00CCBB' style={{margin:15, height:40 , width:300}}/>
            <Text className="mx-4 font-semibold font-mono">Your Delicious Food is getting prepared</Text>
        </View> 
        <Image
          source={require('../assets/mapDemo.jpeg')}
          
        />
    </View>
  )
}

export default DeliveryScreen