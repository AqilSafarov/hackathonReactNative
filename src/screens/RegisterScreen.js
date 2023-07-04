import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isValidEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const isValidPhoneNumber = (phone) => {
    return /^\d+$/.test(phone);
  };

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      alert('Invalid email!');
      return;
    }

    if (!isValidPassword(password)) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      alert('Phone number must contain only digits!');
      return;
    }

    // Prepare the form data
    const formData = new FormData();
    formData.append('username', email);
    formData.append('email', email);
    formData.append('full_name', `${firstName} ${lastName}`);
    formData.append('password', password);

    // Make the POST request
    try {
      const response = await fetch('http://192.168.31.203:8000/register/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }

      console.log('Registration successful');
      navigation.replace('Login'); // Navigate to the login screen
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="First Name*"
          value={firstName}
          onChangeText={setFirstName}
          required
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name*"
          value={lastName}
          onChangeText={setLastName}
          required
        />
        <TextInput
          style={styles.input}
          placeholder="Organization"
          value={company}
          onChangeText={setCompany}
        />
        <TextInput
          style={styles.input}
          placeholder="Email*"
          value={email}
          onChangeText={setEmail}
          autoCompleteType="off"
          required
        />
        <TextInput
          style={styles.input}
          placeholder="Phone*"
          value={phone}
          onChangeText={setPhone}
          keyboardType="number-pad"
          required
        />
        <TextInput
          style={styles.input}
          placeholder="Password*"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCompleteType="off"
          required
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password*"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          autoCompleteType="off"
          required
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.note}>* - asterisks indicate fields that must be filled in</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#254A60',
  },
  form: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#15172B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',  
    justifyContent: 'center', 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  note: {
    marginTop: 10,
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default SignUp;
