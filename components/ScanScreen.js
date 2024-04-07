import React from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'react-native-camera';

const ScanScreen = () => {
 return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        onBarCodeRead={(barcode) => {
          console.log(barcode);
          // Handle the scanned QR code
        }}
      />
    </View>
 );
};

export default ScanScreen;
