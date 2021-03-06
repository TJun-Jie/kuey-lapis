import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BlockRGB from './components/BlockRGB';
import { useState } from 'react';
import DetailsScreen from './screens/DetailsScreen';

function HomeScreen({ navigation }) {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={addColor} title='Add' />,
    });
  });

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', { ...item });
        }}
      >
        <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
      </TouchableOpacity>
    );
  }

  function addColor() {
    setColors([
      {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255),
        id: colors.length,
      },
      ...colors,
    ]);
  }

  return (
    <View style={styles.container}>
      <Button onPress={addColor} title='Add Color' />
      <FlatList
        style={{ width: '100%' }}
        data={colors}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
