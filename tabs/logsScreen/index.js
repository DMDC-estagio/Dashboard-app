import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    tabDefaults: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

export function LogsScreen() {
    return (
      <View style={ style.tabDefaults }>
        <Text> This will be the logs screen... </Text>
        <Text> Stay tuned for changes! </Text>
      </View>
    );
}