import { View, Text, ScrollView,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';
import {urlFor} from '../sanity'
// import sanityClient from '../sanity';
// import 'react-native-url-polyfill/auto';

const FeaturedRow = ({id,title,description,restaurantsArray}) => {
    const [restaurants,setRestaurants] = useState([]);
    useEffect(()=>{

        setRestaurants(restaurantsArray);
    },[])
  return (
    <View>
        <View className='flex-row mt-4 px-4 justify-between items-center'>
            <Text className="text-lg font-bold text-black">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>
            <Text className="font-sm text-gray-500 px-4 text-xs">{description}</Text>
            <ScrollView
                contentContainerStyle={{gap:15, paddingHorizontal:15}}
                horizontal
                className="pt-4 bg-gray-100 pb-4"
                showsHorizontalScrollIndicator={false}
            >
            {
                restaurants?.map(restaurant=>{
                    return <RestaurantCard
                    key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={urlFor(restaurant.image).url()}//"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                        rating={restaurant.rating}
                        genre={restaurant?.type?.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.longitude}
                        lat={restaurant.latitude}
                        title={restaurant.name}

                    />
                })
            }
            </ScrollView>
    </View>
  )
}

export default FeaturedRow