import * as React from 'react';
import { Text, View } from 'react-native';

export default function BlockRGB({ red, blue, green }) {
  return (
    <View
      style={{
        backgroundColor: `rgba(${red} , ${green} , ${blue}, 1.0)`,
        width: '100%',
        height: 80,
      }}
    ></View>
  );
}
