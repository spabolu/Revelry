import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';

const BLURHASH = 'LHC4ebJ*2o#:|2OBB7weB7jt,GWV';

export default function Welcome({ navigation }: { navigation: any }) {
  return (
    <Image
      source="https://images.unsplash.com/photo-1545128485-c400e7702796"
      className="flex-1"
      contentFit="cover"
      cachePolicy="disk"
      placeholder={BLURHASH}
      transition={250}
    >
      <View className="flex-1 items-center justify-center">
        <View className="items-center -top-24">
          <Text className="text-6xl font-black text-neutral-50">Revelry</Text>
          <Text className="font-bold text-base text-neutral-50 italic">
            Unleash Your Party Spirit
          </Text>
        </View>

        <View className="items-center -bottom-1/4">
          <Text className="font-bold text-base text-neutral-50">
            🕺 Explore and RSVP to college parties
          </Text>
          <Text className="font-bold text-base text-neutral-50">
            💰 Host events and monetize them
          </Text>
          <Text className="font-bold text-base text-neutral-50">
            🫱🏼‍🫲🏽 Connect with new friends at events
          </Text>
          <Text className="font-bold text-base text-neutral-50">
            🤩 Review and share your party experiences
          </Text>

          <View className="space-y-2 mt-4 w-screen px-4">
            <Pressable
              className="rounded-lg py-4 bg-red-800 border-red-800 border"
              onPress={() => navigation.navigate('Sign In')}
            >
              <Text className="text-base text-center font-bold text-neutral-50">
                Sign In
              </Text>
            </Pressable>

            <Pressable
              className="rounded-lg py-4 bg-red-800 border-red-800 border"
              onPress={() => navigation.navigate('Register')}
            >
              <Text className="text-base text-center font-bold text-neutral-50">
                Register
              </Text>
            </Pressable>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </Image>
  );
}
