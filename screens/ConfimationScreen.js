import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ConfirmationScreen({ route }) {
  const {
    name,
    selectedTimeSlot,
    selectedDate,
  } = route.params;

  return (
    <View className='flex-1 bg-neutral-800'>
      <Text style={styles.title} className="text-white text-xl mt-2 font-bold">Booking Confirmation</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            Congratulations, {name}!
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            Your Slot has been Booked on {selectedDate} at {selectedTimeSlot.label}.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: '100%',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,
  }
});
