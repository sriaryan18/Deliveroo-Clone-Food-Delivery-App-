import { View, Text, SafeAreaView,Image, Settings, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'

const Home = () => {

    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
// style={{mabackgroundColor:'white',paddingTop:5,paddingHorizontal:0}}
  return (
    <SafeAreaView className='bg-white pt-5'>
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
                    // className="rounded-md"
                    
                />
            </View>
            <AdjustmentsVerticalIcon size={30} color="#00CCBB"/>
        </View>
        <ScrollView className="bg-gray-100" contentContainerStyle={{padding:1}}>
            <Categories/>
            
        </ScrollView>

     </SafeAreaView>
     
  )
}

export default Home