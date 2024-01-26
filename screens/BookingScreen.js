import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { pickerSelectStyles, styles } from '../theme/bookingStyles';
import { availableTimeSlots, services } from './../components/data';
import { currentDate, isValidDate, isValidEmail } from '../components/lib';


export default function BookingScreen() {

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    date: "",
    numberField: "",
    timeSlot: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    numberField: "",
    timeSlot: null,
  });
  const navigation = useNavigation();
  const [selectedService, setSelectedService] = useState(null);


  const handleTimeSlotPress = (id) => {
    const selectedSlot = availableTimeSlots.find((slot) => slot.value === id);
    if (!selectedSlot.available) {
      setFormError((prevErrors) => ({ ...prevErrors, timeSlot: 'Please choose a different timeslot.' }));
      Alert.alert('Timeslot Not Available', 'Please choose a different timeslot.');
    } else {
      setFormError((prevErrors) => ({ ...prevErrors, timeSlot: '' }));
      setFormData((prevData) => ({ ...prevData, timeSlot: selectedSlot }));
    }
  };

  const handleBookingSubmit = () => {
  
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email.trim())) {
      errors.email = 'Invalid email format';
    }

    if (!formData.date.trim()) {
      errors.date = 'Date is required';
    } else if (!isValidDate(formData.date.trim())) {
      errors.date = 'Invalid date format (YYYY-MM-DD)';
    } else {
      const selectedDate = new Date(formData.date);
      if (selectedDate < currentDate) {
        errors.date = 'Please choose a future date';
      }
    }

    if (!formData.numberField.trim()) {
      errors.numberField = 'Phone Number is required';
    }

    if (!formData.timeSlot) {
      errors.timeSlot = 'Please choose a timeslot';
    }

    if (!selectedService) {
      errors.service = 'Please select a service';
    }

    if (Object.keys(errors).length > 0) {
      setFormError(errors);
    } else {
      setFormData({
        name: '',
        email: '',
        date: '',
        numberField: '',
        timeSlot: null,
      });
      setFormError({
        name: '',
        email: '',
        date: '',
        numberField: '',
        timeSlot: '',
      });

      navigation.navigate('Confirmation', {
        name: formData.name,
        email: formData.email,
        numberField: formData.numberField,
        selectedTimeSlot: formData.timeSlot,
        selectedDate: formData.date,
      });
    }
  };

  return (
    <View className="flex-1 bg-neutral-800">
      <Text style={styles.title} className="text-white text-xl mx-4 mt-2 font-bold">
        Book your Timeslot
      </Text>

      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          {[
            { key: 'name', label: 'Name', placeholder: 'Enter Your Name', keyboardType: 'default' },
            { key: 'email', label: 'Email', placeholder: 'Enter Your Email', keyboardType: 'email-address' },
            { key: 'numberField', label: 'Phone Number', placeholder: 'Enter your Phone Number', keyboardType: 'numeric' },
            { key: 'date', label: 'Enter Date', placeholder: 'Date (YYYY-MM-DD)', keyboardType: 'default' },
          ].map((field) => (
            <React.Fragment key={field.key}>
              <Text>{field.label}</Text>
              <TextInput style={styles.label} placeholder={field.placeholder} value={formData[field.key]} keyboardType={field.keyboardType}
                onChangeText={(text) => {
                  setFormData((prevData) => ({ ...prevData, [field.key]: text }));
                  setFormError((prevErrors) => ({ ...prevErrors, [field.key]: '' }));
                }}
              />
              {formError[field.key] && <Text style={styles.errorText}>{formError[field.key]}</Text>}
            </React.Fragment>
          ))}

          <Text className="mt-2">Select Time Slot: </Text>
          <RNPickerSelect placeholder={{ label: 'Select a Time Slot', value: null }}
            items={availableTimeSlots.map((slot) => ({ ...slot, label: `${slot.label} - ${slot.available ? 'Available' : 'Not Available'}`}))}
            onValueChange={(value) => {
              if (value !== null) {
                const selectedSlot = availableTimeSlots.find((slot) => slot.value === value);
                handleTimeSlotPress(selectedSlot?.value);
              }
            }}
            style={{ ...pickerSelectStyles, iconContainer: { top: 10,  right: 12 }}} value={formData.timeSlot ? formData.timeSlot.value : null}
          />
          {formError.timeSlot && <Text style={styles.errorText}>{formError.timeSlot}</Text>}

          <Text className="mt-2">Select Service: </Text>
          <RNPickerSelect
            placeholder={{ label: 'Select a Service', value: null }}
            items={services.map((service) => ({ label: `${service.label} - $${service.price}`, value: service.value }))}
            onValueChange={(value) => {
              setSelectedService(value);
              setFormError((prevErrors) => ({ ...prevErrors, service: '' }));
            }}
            style={{ ...pickerSelectStyles, iconContainer: { top: 10, right: 12 }}} value={selectedService}
          />
          {formError.service && <Text style={styles.errorText}>{formError.service}</Text>}

          {selectedService && (
            <Text style={styles.selectedServicePrice}>Price: ${services.find((service) => service.value === selectedService).price}</Text>
          )}

          <Button title="Submit Booking" onPress={handleBookingSubmit} />

        </View>
      </ScrollView>
    </View>
  );
}
