import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CurrencyRupeeIcon } from 'react-native-heroicons/outline'

const DishRow = ({
    id,
    short_description,
    name,
    imgUrl,
    price
}) => {
  return (
    <TouchableOpacity>
        <View className="px-4 bg-white border border-gray-200 flex-row items-center pb-6">
            <View className='flex-1 pr-2'>
                <Text className="mb-1 text-lg text-black">{name}</Text>
                <Text className="text-gray-400">
                    {short_description}
                </Text>
                <View className="items-center flex-row space-x-1 mt-2">
                    <CurrencyRupeeIcon size={20} color="gray"/>
                    <Text>{price}</Text>
                </View>
            </View>
        <View>
            <Image
                src={imgUrl}
                className="h-20 w-20 rounded-md mt-6"
            />
        </View>
           
        </View>
    </TouchableOpacity>
  )
}

export default DishRow