import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,lat
}) => {
  return (
    <TouchableOpacity className="bg-white">
     <Image
        source={{
            uri:imgUrl
        }}
        className='h-36 w-64 rounded'
     />
     <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">
            {title}
        </Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon size={22} color="green" opacity={0.5}/>
            <Text className="text-xs text-gray-500">
              <Text className="text-green-600">{rating}</Text> . {genre}
            </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <MapPinIcon size={22} color="gray" opacity={0.4}/>
            <Text className="text-xs text-gray-500">Nearby .{address}</Text>
        </View>
     </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard