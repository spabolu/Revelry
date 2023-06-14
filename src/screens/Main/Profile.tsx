import { StatusBar } from 'expo-status-bar';
import { Dimensions, View, Text, FlatList } from 'react-native';
import { Users2 } from 'lucide-react-native';

interface Party {
  id: string;
  name: string;
  host: string;
  distance: string;
  attendees: number;
  daysAway: string;
  theme?: string;
}

const parties: Party[] = [
  {
    id: '1',
    name: 'Chi Phi Under Da Sea',
    host: 'Saketh',
    distance: '180 feet away',
    attendees: 28,
    theme: 'Little Mermaid',
    daysAway: '2 days',
  },
  {
    id: '2',
    name: 'Influencer Mansion Party',
    host: 'Anuj',
    distance: '1.1 miles away',
    attendees: 41,
    daysAway: 'Tomorrow',
  },
  {
    id: '3',
    name: "Saketh's 20th Birthday",
    host: 'Saketh',
    distance: '123 feet away',
    attendees: 18,
    daysAway: '28 days',
  },
  {
    id: '4',
    name: '007 Casino Royale',
    host: 'Sid',
    theme: 'Secret Agent',
    distance: '8 miles away',
    attendees: 88,
    daysAway: '7 days',
  },
  // Feel free to add more dummy parties here for testing until we figure out firebase
];

export default function Profile() {
  const screenHeight = Dimensions.get('window').height;

  return (
    <View className="flex-1 items-center bg-black">
      {/* TODO Add Profile Picture like Poppin */}

      <Text className="text-2xl text-white font-bold mt-4">Anish Kolan</Text>
      <Text className="text-base text-neutral-300 font-semibold tracking-wider">
        @akolan
      </Text>

      <Text className="text-red-700 italic mt-1 text-base">
        “I&apos;m a party animal, and I don&apos;t drink!”
      </Text>

      <View className="flex flex-row space-x-4 mt-2">
        <Text className="text-white text-lg">
          <Text className="text-xl font-semibold">23</Text> Parties Attended
        </Text>
        <Text className="text-white text-lg">
          <Text className="text-xl font-semibold">4</Text> Parties Hosted
        </Text>
      </View>

      <View className="px-2 self-start">
        <Text className="text-white text-left text-2xl font-bold my-1.5">
          Attending:
        </Text>

        {parties.length > 0 ? (
          <FlatList
            data={parties}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="min-w-full my-1.5">
                <View className="border-4 border-red-700 rounded-lg space-y-1.5 p-2.5">
                  <Text className="text-white text-2xl font-extrabold -my-1">
                    {item.name}
                  </Text>
                  <View>
                    <Text className="text-white text-lg font-semibold">
                      Hosted by {item.host}
                    </Text>
                    {item.theme && (
                      <Text className="text-white text-sm font-semibold">
                        Party Theme: {item?.theme}
                      </Text>
                    )}
                  </View>
                  <View className="flex flex-row space-x-1">
                    <Text className="text-white font-semibold">
                      {item.distance}
                    </Text>
                    <Text className="text-white">•</Text>
                    <Text className="text-white font-semibold">
                      {item.daysAway}
                    </Text>
                  </View>
                  <View className="flex flex-row space-x-1">
                    <Users2 className="text-white" size={20} />
                    <Text className="text-white">{item.attendees} going</Text>
                  </View>
                </View>
              </View>
            )}
            contentContainerStyle={{
              paddingBottom: screenHeight * 0.2,
            }}
          />
        ) : (
          <Text className="text-neutral-300 font-semibold items-center mt-2 text-base">
            You&apos;re not attending any parties yet!
          </Text>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
