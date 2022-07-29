import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LogsScreen } from './tabs/logsScreen'
import { GroupScreen } from './tabs/groupScreen'
import { GraphScreen } from './tabs/graphScreen'
import { HomeScreen } from './tabs/homeScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => { let iconName;
            if (route.name === 'Logs') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            }
            if (route.name === 'Grupo') {
              iconName = focused ? 'people' : 'people-outline';
            }
            if (route.name === 'Home') {
              iconName = focused ? 'albums' : 'albums-outline';
            }
            if (route.name === 'Graficos') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#273444',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Logs" component={LogsScreen} />
        <Tab.Screen name="Graficos" component={GraphScreen} />
        <Tab.Screen name="Grupo" component={GroupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}