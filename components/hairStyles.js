import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'

var {width, height} = Dimensions.get('window');

export default function HairStyles({data}) {

  return (
    <View className="mb-8 mt-10">
      <Text className="text-white text-xl mx-4 mb-5 ">Hair Styles</Text>
      <Carousel
            data={data}
            renderItem={({item})=> <MovieCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideOpacity={0.60}
            sliderWidth={width}
            itemWidth={width*0.62}
            slideStyle={{display: 'flex', alignItems: 'center'}}
        />
    </View>
  )
}

const MovieCard = ({item, handleClick})=>{

    return (
        <TouchableWithoutFeedback> 
            <Image 
                source={item.imageSource}
                style={{
                    width: width * 0.62,
                    height: height * 0.4
                }}
                className="rounded-md" 
            />
        </TouchableWithoutFeedback>
    )
}