import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux';
import { addItems, removeItems, selectBasketItems, selectBasketItemsWithId } from '../redux/storeBasket';

const Counter = ({id,description,name,image,price}) => {
    const items=useSelector((state)=> {return selectBasketItemsWithId(state,id)});
    const dispatch = useDispatch();
    const addItemsInBasket = ()=>{
     dispatch(addItems({id,description,name,image,price}))
    };
    const removeItemFromBasket = ()=>{
      dispatch(removeItems({id}));
      }
  return (
    <View className="flex-row space-x-3 items-center bg-gray-50 rounded-xl " >
    <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length}>
         <MinusCircleIcon size={40} color={items.length?"#00CCBB":"gray"}/>
     </TouchableOpacity>
    
     <Text className="text-black text-2xl">{items.length}</Text>
     <TouchableOpacity onPress={addItemsInBasket}>
         <PlusCircleIcon size={40} color="#00CCBB"/>
     </TouchableOpacity>
    </View>
  )
}

export default Counter