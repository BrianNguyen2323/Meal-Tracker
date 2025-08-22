import { Stack } from 'expo-router';
// import "nativewind/tailwind.css";

import '../global.css';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
