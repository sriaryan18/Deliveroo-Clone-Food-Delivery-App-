import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCards from './CategoryCards'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    const fetchCategories = async ()=>{
      const data=await sanityClient.fetch(`
      *[_type=="category"]{
        ...
      }      
      `)
      setCategories(data);
    } 
    fetchCategories();
  },[])
  return (
    <ScrollView horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            // paddingHorizontal:1,
            paddingTop:10
        }}
    >
      {
        categories?.map(category=>{
          return <CategoryCards
          key={category._id}
            imgUrl={urlFor(category.image).url()}
            title={category.name}
          />
        })
      }

    </ScrollView>
  )
}

export default Categories