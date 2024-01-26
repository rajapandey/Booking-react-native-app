import { View, Text, StatusBar, StyleSheet, Platform, Touchable, TouchableOpacity, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Bars3CenterLeftIcon, HeartIcon} from 'react-native-heroicons/outline'
import { styles } from '../theme'
import HairStyles from '../components/hairStyles'
import { useNavigation } from '@react-navigation/native';
import Cards from '../components/cards'

const ios = Platform.OS === "ios"

export default function HomeScreen() {

  const hairStyles = [
    { imageSource: require('../assets/hairStyle1.jpg') },
    { imageSource: require('../assets/hairStyle5.jpg') },
    { imageSource: require('../assets/hairStyle2.jpg') },
    { imageSource: require('../assets/hairStyle4.jpg') },
    { imageSource: require('../assets/hairStyle3.jpg') },
    { imageSource: require('../assets/hairStyle6.jpg') },
  ]

  const navigation = useNavigation();

    const handlePress = item=>{
        navigation.navigate('Booking');
    }
    const handleBellPress = item=>{
        navigation.navigate('Services');
    }

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios? "-mb-2": "mb-3 mt-2"}>
        <StatusBar style="light"/> 
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>S</Text>aloonify
          </Text>
          <TouchableOpacity onPress={handleBellPress}>
            <HeartIcon size="30" strokeWidth={2} color="white"/> 
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Cards/> 
        </View>
        <HairStyles data={hairStyles} />
      </ScrollView>
      

      <View style={styles.container}>
        <TouchableOpacity onPress={handlePress} style={style.button} className='bg-yellow-500 p-3 rounded-xl' >
          <Text className='text-white text-center font-bold'>Book Your Timeslot</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    marginBottom: 60,
    alignSelf: 'center',
  },
});