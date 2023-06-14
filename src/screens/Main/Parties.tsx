import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import clsx from 'clsx';

export default function Parties() {
  const [partiesType, setPartiesType] = useState<0 | 1 | 2>(0);

  return (
    <View className="flex-1 items-center bg-black">
      <View className="flex flex-row space-x-2 mt-4 mx-2">
        <View
          className={clsx(
            'border-2 px-4 py-2.5 border-red-700 rounded-xl space-x-1.5 w-1/3',
            { 'bg-red-700': partiesType === 0 },
          )}
        >
          <Pressable
            onPress={() => {
              setPartiesType(0);
            }}
          >
            <Text className="text-lg text-white font-bold ">This Week</Text>
          </Pressable>
        </View>
        <View
          className={clsx(
            'border-2 px-4 py-2.5 border-red-700 rounded-xl space-x-1.5 w-1/3',
            { 'bg-red-700': partiesType === 1 },
          )}
        >
          <Pressable
            onPress={() => {
              setPartiesType(1);
            }}
          >
            <Text className="text-lg text-white font-bold">Nearby</Text>
          </Pressable>
        </View>
        <View
          className={clsx(
            'border-2 px-4 py-2.5 border-red-700 rounded-xl space-x-1.5 w-1/3',
            { 'bg-red-700': partiesType === 2 },
          )}
        >
          <Pressable
            onPress={() => {
              setPartiesType(2);
            }}
          >
            <Text className="text-lg text-white font-bold">Popular</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Text>
          {/* TODO Implement List of Parties based on the above filters */}
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
