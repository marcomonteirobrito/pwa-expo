import React, { useState, useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';


export default function Camera() {

  if (!Platform === 'web') {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
      (async () => {
        const { status } = await ExpoCamera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  }
  
  return (
    <View style={{ flex: 1 }}>
      <ExpoCamera style={{ flex: 1}} />
    </View>
  );
}

