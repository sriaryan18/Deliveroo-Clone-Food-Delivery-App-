import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftCircleIcon, StarIcon } from 'react-native-heroicons/solid';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useSelector } from 'react-redux';
import { getTotalSum } from '../redux/storeBasket';

const Restaurants = () => {
    const {params:{
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,lat
    }}=useRoute();
    const navigation=useNavigation();
    const total =useSelector(getTotalSum);
      useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    });

  return (
    <>
    {total?<BasketIcon/>:null} 
    <ScrollView>
        <View className='relative'>
            <Image
                src={imgUrl}
                className='h-56 w-full bg-gray-300 p-4'
            />
            <TouchableOpacity onPress={()=>{navigation.goBack()}}
             className="absolute p-2 bg-gray-100 rounded-full left-6 top-10">
                <ArrowLeftIcon  size={20} color="#00CCBB" className='bg-white'/>
            </TouchableOpacity>
        </View>
         <View className="bg-white">
            <View className="px-4 pt-4">
                <Text className="text-3xl text-black font-bold">
                    {title}
                </Text>
                <View className="flex-row space-x-3 my-1">
                    <View className="flex-row space-x-1 items-center">
                        <StarIcon size={22} color="green" opacity={0.5}/>
                        <Text className="text-sm  text-gray-500">
                            <Text  className="text-green-500"> {rating}</Text> .     {genre}
                        </Text>   
                    </View>
                    <View className="flex-row space-x-1 items-center">
                        <MapPinIcon size={22} opacity={0.4} color="gray"/>
                        <Text>Nearby - {address}</Text>
                    </View>
                   
                </View>
            </View>
            <View className="px-4 mt-2 pb-4">
                <Text>
                    {short_description}
                </Text>
            </View>
           
            <TouchableOpacity className="border-y border-gray-300 px-4">
                <View className="flex-row items-center justify-between py-4">
                    <View className="flex-row items-center space-x-3">
                        <QuestionMarkCircleIcon size={20} opacity={0.6} color="gray"/>
                        <Text className="font-bold text-md text-black">Have a food alergy?</Text>
                    </View>
                    <ChevronRightIcon size={22} color="#00CCBB"/>
                </View>
            </TouchableOpacity>
         </View>
         <View>
            <Text className="px-4 pt-6 mb-3 font-bold text-xl text-black"> Menu   </Text>
         </View>
         <View className="bg-white pb-40">
            {dishes.map(dish=>{
                return <DishRow
                key={dish._id}
                id={dish._id}
                short_description={dish.short_description}
                price={dish.price}
                imgUrl={urlFor(dish.image).url()}
                name={dish.name}

                  />
            })}
         </View>

       
    </ScrollView>
    </>
  )
}

export default Restaurants