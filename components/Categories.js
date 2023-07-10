import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCards from './CategoryCards'

const Categories = () => {
  return (
    <ScrollView horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            // paddingHorizontal:1,
            paddingTop:10
        }}
    >
        <CategoryCards imgUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' title="TESTING"/>
        <CategoryCards imgUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' title="TESTING"/>
        <CategoryCards imgUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' title="TESTING"/>
        <CategoryCards imgUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' title="TESTING"/>
        <CategoryCards imgUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' title="TESTING"/>
        
        

    </ScrollView>
  )
}

export default Categories