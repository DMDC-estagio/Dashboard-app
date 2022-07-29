import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { style } from '../styles'

export function GroupScreen() {
    return (
      <View style={ style.tabDefaults }>
        <Text> This will be the group screen... </Text>
        <Text> Stay tuned for changes! </Text>
      </View>
    );
}