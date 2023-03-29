import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Modal,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const ModalPopup = ({visible, children}) => {
  const [showModal, setShowModal] = useState(visible);

  const scaleValue = useRef(new Animated.Value(0)).current; ///// FOR ANIMATION OF SCREEN

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    ///////// HOW TO OPEN MODAL POPUP
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    ///////////////////////////////////////////// THIS IS FOR MODAL ///////////////////////////////////////

    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Index = () => {
  const [visible, setVisible] = useState(false);

  return (
    //////////////////////////////////  THIS IS FOR MODAL POPUP ///////////////////////////////////////

    <View style={styles.modalButton}>
      <ModalPopup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}>
              <Image
                source={require('../assets/x.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>

            <Text style={{color: '#000000', fontWeight: 'bold', opacity: 0.7}}>
              SHARE THIS PROPERTY LISTING{' '}
            </Text>

            <Image
              source={require('../assets/logo.png')}
              style={{width: 40, height: 10, marginTop: 3}}
            />
          </View>

          <View
            style={{
              width: 320,
              height: 1,
              borderColor: '#BE9F56',
              borderWidth: 0.5,
            }}></View>

          <Text
            style={{
              color: '#000000',
              fontWeight: 'bold',
              opacity: 0.7,
              marginTop: 5,
              alignSelf: 'flex-end',
            }}>
            THANK YOU FOR SHARING
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/mainimage.png')}
            style={styles.mainImage}
          />

          <Text style={styles.textStyle}> SHELTON STREET </Text>

          <Text style={styles.textStyle}> CDVENT GARDEN </Text>

          <Text style={styles.textStyle}> LONDON </Text>

          <Text style={styles.textStyle}> WC2H </Text>

          <Text style={styles.textStyle}> UNITED kINGDOM </Text>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={styles.bottomImage}>
            <Image
              source={require('../assets/copylink.png')}
              style={{width: 34, height: 34, marginTop: 24}}
            />
            <Text style={styles.imageText}>COPY LINK</Text>
          </View>

          <View style={styles.bottomImage}>
            <Image
              source={require('../assets/email.png')}
              style={{width: 34, height: 26, marginTop: 31}}
            />
            <Text style={styles.imageText}>EMAIL</Text>
          </View>

          <View style={styles.bottomImage}>
            <Image
              source={require('../assets/message.png')}
              style={{width: 34, height: 34, marginTop: 24}}
            />
            <Text style={styles.imageText}>MESSAGES</Text>
          </View>

          <View style={styles.bottomImage}>
            <Image
              source={require('../assets/whtsapp.png')}
              style={{width: 34, height: 34, marginTop: 24}}
            />
            <Text style={styles.imageText}>WHATSAPP</Text>
          </View>

          <View style={styles.bottomImage}>
            <Image
              source={require('../assets/qr.png')}
              style={{width: 34, height: 34, marginTop: 24}}
            />
            <Text style={styles.imageText}>QR CODE</Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 15
          }}>
          <View style={styles.bottomImage}>
            <Image
              source={require('../assets/fb.png')}
              style={{width: 18, height: 36, marginTop: 24}}
            />
            <Text style={styles.imageText}>FACEBOOK</Text>
          </View>

          <View style={styles.bottomImage}>
            <Image
              source={require('../assets/twitter.png')}
              style={{width: 34, height: 34, marginTop: 24}}
            />
            <Text style={styles.imageText}>TWITTER</Text>
          </View>

          <View style={styles.bottomImage}>
            <Image
              source={require('../assets/pinterest.png')}
              style={{width: 34, height: 34, marginTop: 24}}
            />
            <Text style={styles.imageText}>PINTEREST</Text>
          </View>

          <View style={styles.bottomImage}>
            <Image
              source={require('../assets/messenger.png')}
              style={{width: 34, height: 34, marginTop: 24}}
            />
            <Text style={styles.imageText}>MESSENGER</Text>
          </View>

          <View style={styles.bottomImage}>
            <Image
              source={require('../assets/mo.png')}
              style={{width: 32, height: 32, marginTop: 32}}
            />
            <Text style={styles.imageText}>MORE OPTIONS</Text>
          </View>
        </View>

      </ModalPopup>

      <TouchableOpacity style={styles.open} onPress={() => setVisible(true)}>
        <Text style={styles.openText}> OPEN </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  open: {
    backgroundColor: '#179BDB',
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
  },

  openText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },

  modalButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '95%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
    borderColor: '#179BDB',
    borderWidth: 2,
  },

  header: {
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  mainImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    left: -10,
  },

  textStyle: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#000000',
    fontWeight: '700',
    fontSize: 9,
  },

  bottomImage: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    margin: 5,
    marginHorizontal: 5,
    left: -13
  },

  imageText: {
    color: 'black',
    marginTop: 10,
    fontSize: 10,
    fontWeight: '700',
  },
});
