import { View, Text, SafeAreaView,Image, Settings, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/Featured';
import sanityClient from '../sanity';
import 'react-native-url-polyfill/auto';



const Home = () => {

  

    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[]);
    const [featuredCategories,setFeaturedCategories] = useState([]);
    useEffect(()=>{  
       const fetchData = async ()=>{
           const data=await sanityClient.fetch(
               `*[_type=="featured"]{
                   ...,
                   restaurants[]->{
                     ...,
                     dishes[]->,
                     type->{
                       name
     
                     }    
                   }
                 }`
           );
           setFeaturedCategories(data);
        } 
        fetchData()
   },[]);
//    console.log(featuredCategories   [0].restaurants) 



 return (
    <SafeAreaView className='pt-5'>
        <ScrollView>
        <View className='flex-row  pb-3 items-center mx-4 space-x-2'>
            <Image
                source={{
                    uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                }}
                className='h-7 w-7 rounded-full bg-gray-300 p-4'
            />
            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'> Deliver Now!!!</Text>
                <Text className='font-bold text-xl'>
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB"/>
        </View>
        <View className='pb-2 mx-4 flex-row items-center space-x-2'>
            <View className='flex-row flex-1 space-x-2 bg-gray-200 items-center px-2'>
                <MagnifyingGlassIcon size={20} color="gray"/>
                <TextInput 
                    placeholder='Search Restaurant!!'
                    keyboardType='default'
                />
            </View>
            <AdjustmentsVerticalIcon size={30} color="#00CCBB"/>
        </View>

        {/* Categories */}
        <ScrollView className="bg-gray-100" contentContainerStyle={{paddingHorizontal:15,gap:15}}>
            <Categories/>
            
        </ScrollView>
                    {/* :TODO A modal can be added for showing loading until featured categories loads */}
           {featuredCategories?.map(category=>{
                  return  <FeaturedRow
                        id={category._id}
                        key={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                })}
    </ScrollView>

     </SafeAreaView>
     
  )
}

export default Home