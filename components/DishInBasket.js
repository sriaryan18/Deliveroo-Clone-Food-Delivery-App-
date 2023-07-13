import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { CurrencyRupeeIcon } from 'react-native-heroicons/outline'

const DishInBasket = ({name,quantity,imgUrl, amount}) => {
  return (
        <View className="bg-white items-center rounded-md border-2 border-gray-300 px-4 my-1 py-2 justify-between shadow-2xl flex-row"> 
            <Text className="text-black font-extrabold text-lg">{name}</Text>
            <View className="items-center">
                <Text className="text-[#00CCBB] text-">{`X ${quantity}`}</Text>
                <View className="flex-row">
                    <CurrencyRupeeIcon size={30} opacity={0.4} color="gray"/>
                    <Text className="text-center font-semibold text-lg">{amount}</Text>
                </View>
            </View>
            <Image source={{uri:imgUrl}} className="h-20 w-20 rounded-md"/>
        </View>
  )
}

export default DishInBasket