import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ number, text }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.upperText}>{number}</Text>
      <Text style={styles.lowerText}>{text}</Text>
    </View>
  );
};

const Cards = () => {
  return (
    <View style={styles.container}>
      <Card number="06" text="Appointments" />
      <Card number="11" text="Booking request" />
      <Card number="03" text="Cancelled Booking" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000', 
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
    marginHorizontal:10
  },
  upperText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lowerText: {
    fontSize:10
  },
});

export default Cards;
