import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from './UseTogglePasswordVisibility';
// import zxcvbn from 'zxcvbn';
// import { ProgressBar } from 'react-native-progress';

export default function Register({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  // const [passwordStrength, setPasswordStrength] = useState(0);

  // const handlePasswordChange = (value: string) => {
  //   setPassword(value);
  //   const strength = zxcvbn(value).score;
  //   setPasswordStrength(strength);
  // };

  const handleRegister = async () => {
    console.log('Email: ', email);
    console.log('Password: ', password);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (
        String(error).includes('Firebase: Error (auth/email-already-in-use).')
      )
        Alert.alert('The email address is already in use.');
      if (
        String(error).includes(
          'Firebase: Password should be at least 6 characters (auth/weak-password).]',
        )
      ) {
        Alert.alert('Password must be at least 6 characters.');
      } else {
        console.log(error);
      }
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
            className="text-xl text-white border-2 border-red-800 rounded-xl p-2 font-semibold"
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
          <View>
            <TextInput
              placeholder="Enter Password"
              keyboardType="visible-password"
              className="text-xl text-white border-2 border-red-800 rounded-xl p-2 font-semibold"
              onSubmitEditing={Keyboard.dismiss}
              onChangeText={setPassword}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={'rgb(82 82 82)'}
              value={password}
              secureTextEntry={passwordVisibility}
            />
            <Pressable
              onPress={handlePasswordVisibility}
              className="absolute top-3 transform -translate-y-1/2 right-2 flex items-center pr-2"
            >
              <MaterialCommunityIcons
                name={rightIcon as any}
                size={26}
                color="rgb(82 82 82)"
              />
            </Pressable>
          </View>
          {/* {password && 
            <ProgressBar progress = {passwordStrength / 4} color = {getPasswordStrengthColor(passwordStrength)}
          } */}
        </View>

        <View className="space-y-0.5">
          <Text className="text-neutral-50 text-2xl font-bold">
            Confirm Password
          </Text>
          <TextInput
            placeholder="Confirm Password"
            keyboardType="visible-password"
            className="text-xl text-white border-2 border-red-800 rounded-xl p-2 font-semibold"
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={setConfirmPassword}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={'rgb(82 82 82)'}
            value={confirmpassword}
            secureTextEntry={passwordVisibility}
          />
          <Pressable
            onPress={handlePasswordVisibility}
            className="absolute top-11 transform -translate-y-1/2 right-2 flex items-center pr-2"
          >
            <MaterialCommunityIcons
              name={rightIcon as any}
              size={26}
              color="rgb(82 82 82)"
            />
          </Pressable>
        </View>
      </View>
      <View className="mt-8 w-screen px-4 space-y-1">
        <Pressable
          className="rounded-xl py-4 bg-red-800 border-red-800 border"
          onPress={() => {
            console.log('Register Pressed!');
            if (password !== confirmpassword) {
              console.log('Passwords do not match!');
              Alert.alert('Passwords do not match!', '', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]);
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
