import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../redux/storeBasket'
import { XCircleIcon } from 'react-native-heroicons/solid'
import DishInBasket from '../components/DishInBasket'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'
import { CheckIcon, TicketIcon } from 'react-native-heroicons/outline'
import BasketButtons from '../components/BasketButtons'

const Basket = () => {
    const navigation = useNavigation();
    const dishes = useSelector(selectBasketItems);
    const [dishIds,setDishIds]=useState({});
    useMemo(()=>{
        let aggregatedObj={};
        for(let dish of dishes){
            if(dish.id in aggregatedObj)
                aggregatedObj[dish.id].push(dish)
            else
                aggregatedObj[dish.id]=[dish]
        }
        setDishIds(aggregatedObj);
    },[dishes]);
    
    const arr=[]
    for(const [key,value] of Object.entries(dishIds)){
        let dish=dishIds[key][0];
        let amt=dish.price * dishIds[key].length;
        arr.push(
            <DishInBasket
                key={key}
                imgUrl={urlFor(dish.image).url()}
                name={dish.name}
                quantity={dishIds[key].length}
                amount={amt}
            />
        )
    }

  return (
    <View className="relative">
        <ScrollView className="mt-4 mx-3">
            <View className="bg-white rounded-md border-2 border-gray-300 px-4 pt-5 pb-5 shadow-2xl my-2">
                <View onPress={()=> navigation.goBack()} className="flex-row justify-between">
                    <TouchableOpacity >
                        <CheckIcon size={50} color="#00CCBB"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.goBack()} >
                        <XCircleIcon size={50} color="#00CCBB"/>
                    </TouchableOpacity>
                
                </View>
            </View>
            <View className="pb-40">{arr}</View>
            
        </ScrollView>
        <View className="absolute z-50 bottom-10 w-full">
            <BasketButtons/>
            <BasketButtons/>
        </View>
    </View>
  )
}

export default Basket