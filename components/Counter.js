import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <View className="flex-row space-x-3">
    <TouchableOpacity>
         <MinusCircleIcon onPress={()=>{ if(count>0) setCount(count-1)}} size={30} color="#00CCBB"/>
     </TouchableOpacity>
    
     <Text className="text-black text-lg">{count}</Text>
     <TouchableOpacity onPress={()=>{setCount(count+1)}}>
         <PlusCircleIcon size={30} color="#00CCBB"/>
     </TouchableOpacity>
    </View>
  )
}

export default Counter