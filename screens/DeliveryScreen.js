import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const DeliveryScreen = () => {
    const navigation=useNavigation();
  return (
    <View className="bg-[#00CCBB] flex-1">
        <View className="p-5 flex-row justify-between items-center z-50">
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <XMarkIcon size={40} color="white" opacity={0.8}/>
            </TouchableOpacity>
            <TouchableOpacity>
                 <Text className="text-white font-sans text-base opacity-70 mx-2">Order Help</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DeliveryScreen