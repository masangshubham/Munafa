import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const CardDisplay = ({cardData}) => {

 console.log("home card",cardData);

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: 'https://i.imgur.com/kGkSg1v.png' }} />
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.nameLabel}>Name</Text>
              <Text style={styles.nameValue}>User Name</Text>
            </View>
            <Image style={styles.icon} source={{ uri: 'https://i.imgur.com/bbPHJVe.png' }} />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardLabel}>Card Number</Text>
            <Text style={styles.cardValue}>4242  **** **** ****</Text>
          </View>
          <View style={styles.cardFooter}>
            <View style={styles.footerItem}>
              <Text style={styles.footerLabel}>Valid</Text>
              <Text style={styles.footerValue}>02/25</Text>
            </View>
            {/* <View style={styles.footerItem}>
              <Text style={styles.footerLabel}>Expiry</Text>
              <Text style={styles.footerValue}>03/25</Text>
            </View> */}
            <View style={styles.footerItem}>
              <Text style={styles.footerLabel}>CVV</Text>
              <Text style={styles.footerValue}>···</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    
  },
  card: {
    width: 350,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 20,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardContent: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  nameLabel: {
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
  },
  nameValue: {
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    width: 20,
    height: 20,
  },
  cardBody: {
    marginBottom: 10,
  },
  cardLabel: {
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
  },
  cardValue: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerLabel: {
    fontFamily: 'Arial',
    fontSize: 12,
    fontWeight: '300',
    color: 'white',
  },
  footerValue: {
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CardDisplay;
