import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const ProfilePage = () => {
  const [firstName, setFirstName] = useState('Gullu');
  const [lastName, setLastName] = useState('Maharramova');
  const [company, setCompany] = useState('AKM');
  const [position, setPosition] = useState('Cybersecurity engineer');
  const [email, setEmail] = useState('test@test.com');
  const [phone, setPhone] = useState('+99455 555 55 55');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleChangePassword = () => {
    console.log('Change Password clicked');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            defaultValue={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            defaultValue={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            defaultValue={company}
            onChangeText={setCompany}
          />
          <TextInput
            style={styles.input}
            defaultValue={position}
            onChangeText={setPosition}
          />
          <TextInput
            style={styles.input}
            defaultValue={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            defaultValue={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            defaultValue={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
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
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#15172b',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfilePage;
