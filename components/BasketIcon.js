import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { getTotalSum, selectBasketItems } from '../redux/storeBasket'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const navigation = useNavigation();
    const items = useSelector(selectBasketItems);
    const total =useSelector(getTotalSum);
  return (
    <View className="absolute z-50 bottom-10 w-full">
    <TouchableOpacity className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1" onPress={()=>navigation.navigate("Basket")}>
        <Text className="text-white font-extrabold bg-[#01A296] py-1 px-1 text-xl rounded-md">{items.length}</Text>
        <Text className="font-extrabold text-white text-xl text-center flex-1">View Basket</Text>
        <Text className="text-white text-lg font-extrabold">{total}</Text>


    </TouchableOpacity>
    </View>
  )
}

export default BasketIcon