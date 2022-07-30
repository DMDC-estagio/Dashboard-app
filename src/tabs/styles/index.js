import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    tabDefaults: {
      flex: 1,
      justifyContent: 'center',
    },
    loadingScreen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export const DATA = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
}