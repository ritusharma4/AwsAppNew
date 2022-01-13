/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
     SafeAreaView,
     StatusBar,
     StyleSheet,
     Text,
     useColorScheme,
     View,
     TextInput,
     TouchableOpacity,
     TouchableWithoutFeedback,
     Alert,
     Dimensions,
     Image,
 } from 'react-native';
 import Icon from 'react-native-vector-icons/dist/Ionicons';
 import firestore from '@react-native-firebase/firestore';
 
 import {
     Colors,
 } from 'react-native/Libraries/NewAppScreen';
 const { width, height } = Dimensions.get("window");


 
 export function OutofHourScreen({ navigation }) {
     const [email, onChangeEmail] = React.useState('');
     const [password, onChangePassword] = React.useState('');
     const [isSecure, onSetSecureText] = React.useState(true);
 
     const onPressFeedback = () => {
         this.props.navigation.navigate('OutofHourScreen')
        //  if (email.trim().length === 0) {
        //      Alert.alert('', 'Please enter a email.');
        //  }
        //  else if (password.trim().length === 0) {
        //      Alert.alert('', 'Please enter a password.');
        //  }
        //  else if (password.length < 6) {
        //      Alert.alert('', 'Password should be 6 character long.');
        //  }
        //  else {
        //      firestore()
        //          .collection('User')
        //          .doc(email.toLocaleLowerCase())
        //          .get()
        //          .then(documentSnapshot => {
        //              if (documentSnapshot.exists) {
        //                  const userProfile = documentSnapshot.data();
        //                  console.log('User data: ', userProfile);
        //                  if(userProfile.password === password) {
        //                      navigation.navigate('Home');
        //                  }
        //                  else {
        //                      Alert.alert('', 'Email or password doesn`t match, please check.');
        //                  }
        //              }
        //              else {
        //                  Alert.alert('', 'User doesn`t exixts.');
        //              }
        //          });
        //  }
     }
 
     const isDarkMode = useColorScheme() === 'dark';
     const backgroundStyle = {
         backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
     };
 
     return (
         <SafeAreaView style={[backgroundStyle, styles.viewParent]}>
             <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
             <View style={styles.headerWhite}>
            

                 
             </View>
         </SafeAreaView>
     );
 };
 
 const styles = StyleSheet.create({
     viewParent: {
         flex: 1,
         backgroundColor:'#60adb7'
     },
     viewChild: {
         margin: 20,
     },
     viewMiddle: {
         justifyContent: 'center',
         alignItems: 'center',
     },
     viewTxt: {
         width:'80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
     headerWhite:{
   
        width: width,height: 70, backgroundColor:'#0e494f',
         flexDirection: 'row', 
         alignItems: 'center'
      },
      settingText:{
        fontSize: 18, color: 'white',fontWeight:'bold'
      },
      
    
     viewMiddle2: {
         justifyContent: 'center',
     },
     txtTitle: {
         fontSize: 22,
         marginBottom: 20,
         color: 'white',
         textAlign: 'center',
         alignItems: 'center',
         letterSpacing:5

     },
     txtTitle2: {
         fontSize: 20,
         marginBottom: 5,
         color: 'white',
         marginLeft:2,
     },
     imageMenuIcon:{
        width: 25, height: 20, 
      },
      
     viewRow: {
         width: '100%',
         height: 60,
         alignItems: 'center',
         flexDirection: 'row',
         marginVertical: 10,
         borderWidth: 1,
         marginTop:10,
         borderColor:'white',
         backgroundColor:'white'
     },
     icon: {
         marginLeft: 12
     },
     icon2: {
         marginRight: 12
     },
     input: {
         flex: 1,
         height: 40,
         marginLeft: 12,
         padding: 10,
     },
     button: {
         marginVertical: 20,
         borderRadius: 10,
         height: 60,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#003d40',
         marginTop:70,
     },
     viewCreatAcc: {
         flexDirection: 'row',
         justifyContent: 'center',
     },
     textButton: {
         color: '#91bfb5',
         fontSize: 20,
         fontWeight: 'bold',
 
     },
     textButton2: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',

    },
     txtCreate: {
         color: 'blue'
     }
 });
 
 