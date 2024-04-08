import { BarCodeScanningResult, Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Alert } from 'react-native';

export default function ScanScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (scanned) {
      setScanned(false);
    }
  }, [scanned]);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
        </View>
    );
}

const handleBarCodeScanned = (result) => {
    const { type, data } = result;
    setScanned(true);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    Alert.alert('QR Code Scanned', `Data: ${data}`);
};

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });