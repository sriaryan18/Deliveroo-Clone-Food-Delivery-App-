import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CurrencyRupeeIcon, FaceFrownIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const BasketButtons = ({
  total,
  id,
  type
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className={`${type=="Order-Button"?'bg-[#00CCBB]':'bg-red-600'} border rounded-lg shadow-4xl items-center
      px-7`}
      onPress={type != "Order-Button"?()=>navigation.goBack():()=>navigation.navigate("Preparation Screen")}
      >

        <Text className="text-black font-extrabold text-2xl">
          {type=="Order-Button"?'Order':'Cancel'}
        </Text>
       {type=="Order-Button"? <View className="flex-row items-center">
        <CurrencyRupeeIcon
          size={30} color='black' opacity={0.6}
        />
          
            <Text className="text-xl">{total}.00</Text>
        </View> :
          <View>
            <FaceFrownIcon size={30} color='white'/>
          </View>
        }
    </TouchableOpacity>
  )
}

export default BasketButtons