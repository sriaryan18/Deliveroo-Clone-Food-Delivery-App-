import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';
import 'react-native-url-polyfill/auto';

const FeaturedRow = ({id,title,description}) => {

   

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

             
                <RestaurantCard
                    id="1"
                    imgUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    title="TESTING"
                    rating={4.2}
                    genre="TESTING"
                    address="TESTING"
                    short_description="TESTING"
                    dishes="TESTING"
                    long="TESTING"
                    lat="TESTING"

                />
                 <RestaurantCard
                    id="1"
                    imgUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    title="TESTING"
                    rating={4.2}
                    genre="TESTING"
                    address="TESTING"
                    short_description="TESTING"
                    dishes="TESTING"
                    long="TESTING"
                    lat="TESTING"

                />
                 <RestaurantCard
                    id="1"
                    imgUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    title="TESTING"
                    rating={4.2}
                    genre="TESTING"
                    address="TESTING"
                    short_description="TESTING"
                    dishes="TESTING"
                    long="TESTING"
                    lat="TESTING"

                />
            </ScrollView>
    </View>
  )
}

export default FeaturedRow