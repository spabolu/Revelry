import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, TextInput, Keyboard, Text, Pressable } from 'react-native';
import clsx from 'clsx';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<{
    query: string;
    type: 0 | 1; // 0 = party, 1 = user
  }>({
    query: '',
    type: 0,
  });

  return (
    <View className="flex-1 items-center bg-black">
      <View className="w-screen m-2">
        {searchQuery.type === 0 ? (
          <TextInput
            placeholder="Search Parties..."
            className="text-xl text-white border-2 border-red-800 rounded-xl p-2 font-semibold"
            onSubmitEditing={Keyboard.dismiss}
            value={searchQuery.query}
            onChangeText={(text) => {
              setSearchQuery({ query: text, type: 0 });
            }}
            placeholderTextColor={'rgb(82 82 82)'}
          />
        ) : (
          <TextInput
            placeholder="Search Users..."
            className="text-xl text-white border-2 border-red-800 rounded-xl p-2 font-semibold"
            onSubmitEditing={Keyboard.dismiss}
            value={searchQuery.query}
            onChangeText={(text) => {
              setSearchQuery({ query: text, type: 1 });
            }}
            placeholderTextColor={'rgb(82 82 82)'}
          />
        )}
      </View>

      <View className="flex flex-row space-x-2 mx-2">
        <View
          className={clsx(
            'border-2 px-4 py-2.5 border-red-700 rounded-xl space-x-1.5 w-1/2',
            {
              'bg-red-700': searchQuery.type === 0,
            },
          )}
        >
          <Pressable
            onPress={() => {
              setSearchQuery({ ...searchQuery, type: 0 });
            }}
          >
            <Text className="text-lg text-white font-bold">Parties</Text>
          </Pressable>
        </View>

        <View
          className={clsx(
            'border-2 px-4 py-2.5 border-red-700 rounded-xl space-x-1.5 w-1/2',
            {
              'bg-red-700': searchQuery.type === 1,
            },
          )}
        >
          <Pressable
            onPress={() => {
              setSearchQuery({ ...searchQuery, type: 1 });
            }}
          >
            <Text className="text-lg text-white font-bold ">Users</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Text>
          {/* TODO Implement Search Functionality based on the above filters */}
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
