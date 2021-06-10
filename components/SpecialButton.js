import * as React from 'react';
import { Button } from 'react-native';

export default function SpecialButton({ text, color }) {
  return <Button color={color} title={text} />;
}
