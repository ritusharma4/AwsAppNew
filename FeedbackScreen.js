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


 
 export function FeedbackScreen({ navigation }) {
     const [email, onChangeEmail] = React.useState('');
     const [password, onChangePassword] = React.useState('');
     const [isSecure, onSetSecureText] = React.useState(true);
    
     const onPressBack = (event) => {
        navigation.navigate('Login');
    }
     const onPressFeedback = () => {
        navigation.navigate('OutofHourScreen');
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
                        <View style={{ width: '15%', }}>
                            <TouchableOpacity 
                            onPress={onPressBack}
                             style={{ marginLeft: 10 }} >
                                <Image source={require("./assets/back.png")} 
                                style={styles.imageMenuIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '75%', alignItems: 'center' }}>

                            <Text style={styles.settingText}>Feedback</Text>

                        </View>

                    </View>

             <View style={styles.viewChild}>
                 <View style={styles.viewMiddle}>
                     <View style={styles.viewTxt}>
                     <Text style={styles.txtTitle}>How are you feeling today?</Text>
                     </View>
                   
                     <View style={{ width: '100%', flexDirection: 'row', marginTop: 50 }}>
                            <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ marginTop: 10 }}
                                    //onPress={() => this.setState({ isRadioUnLike: false, isRadioLike: true })}
                                    >
                                    <View style={{ width: '100%', height: 100, borderRadius: 10, justifyContent: 'center' }}>
                                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                            {/*
                                             <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ width: 15, height: 15, borderWidth: 1, borderRadius: 15 / 2, alignItems: 'center', justifyContent: 'center' }}>
                                                    {this.state.isRadioLike === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: 'green' }} />)}
                                                </View>
                                            </View> */}
                                            <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center',marginLeft:10 }}>
                                                <Image source={require("./assets/greenemoji.png")} style={{width:90,height:90}}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ marginTop: 10 }}
                                   // onPress={() => this.setState({ isRadioLike: false, isRadioUnLike: true })}
                                    >
                                    <View style={{ width: '100%', height: 100, borderRadius: 10, justifyContent: 'center' }}>
                                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                            {/* <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ width: 15, height: 15, borderWidth: 1, borderRadius: 15 / 2, alignItems: 'center', justifyContent: 'center' }}>
                                                    {this.state.isRadioUnLike === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: 'red' }} />)}
                                                </View>
                                            </View> */}
                                            <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center',marginLeft:10 }}>
                                                <Image source={require("./assets/redemoji.png")} style={{width:90,height:90}}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
</View>
                 
                 </View>
                 <TouchableOpacity onPress={onPressFeedback} style={styles.button}>
                     <Text style={styles.textButton}>Next</Text>
                 </TouchableOpacity>
                 <Text style={styles.textButton2}>13th January 2022</Text>

                 {/* <View style={styles.viewCreatAcc}>
                     <Text>Don't have a account?</Text>
                     <TouchableWithoutFeedback onPress={() => navigation.navigate('Signup')}>
                         <Text style={styles.txtCreate}>{` Create`}</Text>
                     </TouchableWithoutFeedback>
                 </View> */}
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
 
 