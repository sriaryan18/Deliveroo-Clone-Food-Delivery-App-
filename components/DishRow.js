import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { CurrencyRupeeIcon } from 'react-native-heroicons/outline'
import Counter from './Counter';

const DishRow = ({
    id,
    short_description,
    name,
    imgUrl,
    price
}) => {
   const [showCounter,setShowCounter]=useState(false);
  return (
    <View className="bg-white border border-gray-200 ">
        <TouchableOpacity  onPress={()=>setShowCounter(!showCounter)} className="px-2 py-4 flex-row ">
                <View className="w-3/4 ">
                <Text className="mb-1 text-lg text-black">{name}</Text>
                    <Text className="text-gray-400 h-10 w-70">
                        {short_description}
                    </Text>
                    <View className="items-center flex-row space-x-1 mt-2">
                        <CurrencyRupeeIcon size={20} color="gray"/>
                        <Text>{price}</Text>
                    </View>
                </View>
                <View className="flex-row items-center ml-2">
                <Image
                    src={imgUrl}
                    className="h-20 w-20 rounded-md mt-1"
                />
                </View>
        </TouchableOpacity>
       
        {showCounter?
            <View className="items-center">
                <Counter
                   id= {id} 
                   description={short_description}
                   name={name}
                   image={imgUrl}
                   key={id}
                   price={price}
                />
            </View>:null
        }

    </View>
  )
}

export default DishRow
