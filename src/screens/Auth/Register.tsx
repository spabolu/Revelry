import { useState } from 'react';
import { View, Text, TextInput, Pressable, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function Register({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    console.log('Email: ', email);
    console.log('Password: ', password);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('Error registering: ', error);
    }
  };

  return (
    <View className="flex-1 justify-center bg-black">
      <View className="space-y-2 mt-4 w-screen px-4">
        <View className="space-y-0.5">
          <Text className="text-neutral-50 text-2xl font-bold">Email</Text>
          <TextInput
            placeholder="sparky@asu.edu"
            keyboardType="email-address"
            className="text-xl text-white border-2 border-red-800 rounded-lg p-2 font-semibold"
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            placeholderTextColor={'rgb(82 82 82)'}
            value={email}
          />
        </View>

        <View className="space-y-0.5">
          <Text className="text-neutral-50 text-2xl font-bold">Password</Text>
          <TextInput
            placeholder="************"
            keyboardType="visible-password"
            className="text-xl text-white border-2 border-red-800 rounded-lg p-2 font-semibold"
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={'rgb(82 82 82)'}
            value={password}
            secureTextEntry={true}
          />
        </View>

        <View className="space-y-0.5">
          <Text className="text-neutral-50 text-2xl font-bold">
            Confirm Password
          </Text>
          <TextInput
            placeholder="************"
            keyboardType="visible-password"
            className="text-xl text-white border-2 border-red-800 rounded-lg p-2 font-semibold"
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={setConfirmPassword}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={'rgb(82 82 82)'}
            value={confirmpassword}
            secureTextEntry={true}
          />
        </View>
      </View>

      <View className="mt-8 w-screen px-4 space-y-1">
        <Pressable
          className="rounded-lg py-4 bg-red-800 border-red-800 border"
          onPress={() => {
            console.log('Register Pressed!');
            if (password !== confirmpassword) {
              console.log('Passwords do not match!');
            } else {
              handleRegister();
            }
          }}
        >
          <Text className="text-base text-center font-bold text-neutral-50">
            Create Account
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.goBack();
            navigation.navigate('Sign In');
          }}
        >
          <Text className="text-base text-center font-bold text-red-800">
            Already have an account? Sign in.
          </Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
