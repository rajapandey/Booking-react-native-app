import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ServicesScreen() {
  const navigation = useNavigation();

  const handleCardClick = () => {
    navigation.navigate('Booking');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} className="text-white text-xl mx-4 mb-5 mt-2 font-bold">Services</Text>

      <ScrollView>
        <TouchableOpacity style={styles.card} onPress={handleCardClick}>
          <Image source={require('../assets/haircut.webp')} style={styles.image} />
          <Text style={styles.header}>Haircut</Text>
          <Text style={styles.description}>Buzz cut, a Caesar cut, a mullet, a fade, an undercut, and many other cuts.</Text>
          <View style={styles.lowerSection}>
            <Text style={styles.textCorner}>$100</Text>
            <Text style={styles.textCorner}>30min</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleCardClick}>
            <Image source={require('../assets/facial.webp')} style={styles.image} />
            <Text style={styles.header}>Facial</Text>
            <Text style={styles.description}>Skin care treatments for the face, including steam, extraction, creams, lotions, facial masks, peels, and massage</Text>
            <View style={styles.lowerSection}>
              <Text style={styles.textCorner}>$200</Text>
              <Text style={styles.textCorner}>90min</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleCardClick}>
            <Image source={require('../assets/massage.webp')} style={styles.image} />
            <Text style={styles.header}>Massage</Text>
            <Text style={styles.description}>Form of manual therapy that includes holding, moving, and applying pressure to the muscles, tendons, ligaments and fascia.</Text>
            <View style={styles.lowerSection}>
              <Text style={styles.textCorner}>$500</Text>
              <Text style={styles.textCorner}>120 min</Text>
            </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    marginBottom: 12,
  },
  lowerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCorner: {
    color: 'black',
  },
});
