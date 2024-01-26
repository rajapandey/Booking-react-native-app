import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    title: {
      alignSelf: 'center',
      textAlign: 'center',
      marginBottom: 10,
    },
    container: {
      paddingHorizontal: 20,
    },
    formContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 5,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      marginVertical: 10,
    },
    label: {
      backgroundColor: 'white',
      padding: 5,
      borderRadius: 2,
      elevation: 2,
      marginVertical: 10,
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
    selectedServicePrice: {
      marginVertical: 10,
      marginBottom:30,
      fontSize: 16,
      fontWeight: 'bold',
      color: 'green',
    },
  });
  
export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
  
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 1,
      borderWidth: 0.5,
      borderRadius: 5,
      color: 'black',
      paddingRight: 30,
    },
  });