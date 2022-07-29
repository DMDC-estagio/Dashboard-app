import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogsScreen } from './tabs/logsScreen'
import { GroupScreen } from './tabs/groupScreen'

// const getData = async () => {
//   try {
//     var response = await fetch('https://dmdc-stagging.herokuapp.com/api/logs');
//     var json = await Promise.resolve(response.json());
//     console.log(json);
//     return json
//   } catch(err) { console.log(err); }
// }
// console.log(json.logs[0].voltageMed) { json.logs[0].voltageMed.toString() }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Logs') {
              iconName = focused
                ? 'newspaper'
                : 'newspaper-outline';
            } else if (route.name === 'Grupo') {
              iconName = focused ? 'people' : 'people-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#273444',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Logs" component={LogsScreen} />
        <Tab.Screen name="Grupo" component={GroupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  tabDefaults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});