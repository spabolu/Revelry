import { useState } from 'react';
import { View, Text, TextInput, Pressable, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from './UseTogglePasswordVisibility';

export default function SignIn({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const handleSignIn = async () => {
    console.log('Email: ', email);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('Error signing in: ', error);
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
            autoCorrect={false}
            autoComplete="email"
            placeholderTextColor={'rgb(82 82 82)'}
            value={email}
          />
        </View>

        <View className="space-y-0.5 relative">
          <Text className="text-neutral-50 text-2xl font-bold">Password</Text>
          <TextInput
            placeholder="Enter Password"
            keyboardType="visible-password"
            className="text-xl text-white border-2 border-red-800 rounded-xl p-2 font-semibold pr-10"
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
            className="absolute top-11 transform -translate-y-1/2 right-2 flex items-center pr-2"
          >
            <MaterialCommunityIcons
              name={rightIcon as any}
              size={26}
              color="rgb(82 82 82)"
            />
          </Pressable>
        </View>

        <Pressable onPress={() => console.log('"Forgot Password" Pressed!')}>
          <Text className="text-base font-bold text-neutral-50">
            Forgot Password?
          </Text>
        </Pressable>
      </View>

      <View className="mt-8 w-screen px-4 space-y-1">
        <Pressable
          className="rounded-xl py-4 bg-red-800 border-red-800 border"
          onPress={() => {
            console.log('Sign In Pressed!');

            handleSignIn();
          }}
        >
          <Text className="text-base text-center font-bold text-neutral-50">
            Continue
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.goBack();
            navigation.navigate('Register');
          }}
        >
          <Text className="text-base text-center font-bold text-red-800">
            Don&apos;t have an account? Register.
          </Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
