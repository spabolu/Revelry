import { Text, View, ActivityIndicator } from 'react-native';
import useAuth from './src/provider/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/Auth/SignIn';
import Register from './src/screens/Auth/Register';

import Profile from './src/screens/Main/Profile';
import Parties from './src/screens/Main/Parties';
import Search from './src/screens/Main/Search';

import {
  UserCircle,
  Ticket,
  ArrowUpDown,
  PartyPopper,
  SearchIcon,
} from 'lucide-react-native';

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // if user is logged in, show main app or else show auth screens
  return user ? (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          headerRight: () => (
            <View className="flex flex-row space-x-2 mr-2">
              <ArrowUpDown className="text-red-700" />
              <UserCircle className="text-red-700" />
            </View>
          ),
          headerLeft: () => (
            <View className="ml-2">
              <Ticket className="text-red-700" />
            </View>
          ),
          headerTitle(props) {
            return (
              <Text className="text-2xl font-bold text-neutral-50">
                {props.children}
              </Text>
            );
          },
          headerTintColor: '#fff',
        }}
      >
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <UserCircle className="text-red-700" />,
            tabBarActiveTintColor: 'rgb(185 28 28)',
          }}
        />
        <Tab.Screen
          name="Parties"
          component={Parties}
          options={{
            tabBarIcon: () => <PartyPopper className="text-red-700" />,
            tabBarActiveTintColor: 'rgb(185 28 28)',
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => <SearchIcon className="text-red-700" />,
            tabBarActiveTintColor: 'rgb(185 28 28)',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTitle(props) {
            return (
              <Text className="text-2xl font-bold text-neutral-50">
                {props.children}
              </Text>
            );
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
