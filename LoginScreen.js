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
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import firestore from '@react-native-firebase/firestore';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


export function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [isSecure, onSetSecureText] = React.useState(true);

    const onPressLogin = () => {
        if (email.trim().length === 0) {
            Alert.alert('', 'Please enter a email.');
        }
        else if (password.trim().length === 0) {
            Alert.alert('', 'Please enter a password.');
        }
        else if (password.length < 6) {
            Alert.alert('', 'Password should be 6 character long.');
        }
        else {
            firestore()
                .collection('User')
                .doc(email.toLocaleLowerCase())
                .get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        const userProfile = documentSnapshot.data();
                        console.log('User data: ', userProfile);
                        if(userProfile.password === password) {
                            navigation.navigate('Home');
                        }
                        else {
                            Alert.alert('', 'Email or password doesn`t match, please check.');
                        }
                    }
                    else {
                        Alert.alert('', 'User doesn`t exixts.');
                    }
                });
        }
    }

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={[backgroundStyle, styles.viewParent]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.viewChild}>
                <View style={styles.viewMiddle}>
                    <Text style={styles.txtTitle}>Sign in</Text>
                    <View style={styles.viewMiddle2}>
                    <Text style={styles.txtTitle2}>Username</Text>

                    <View style={styles.viewRow}>
                        {/* <Icon name="mail-open" size={20} style={styles.icon} color="blue" /> */}
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                           // placeholder="Email"
                        />
                    </View>
                    </View>
                    <View style={styles.viewMiddle2}>
                    <Text style={styles.txtTitle2}>Password</Text>
                    <View style={styles.viewRow}>
                        {/* <Icon name="lock-closed" size={20} style={styles.icon} color="blue" /> */}
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                           // placeholder="Password"
                            secureTextEntry={isSecure}
                        />
                        {/* <TouchableOpacity onPress={() => onSetSecureText(!isSecure)}>
                            <Icon name={isSecure ? "eye" : "eye-off"} size={20} style={[styles.icon, styles.icon2]} color="blue" />
                        </TouchableOpacity> */}
                    </View>
                    </View>
                </View>
                <TouchableOpacity onPress={onPressLogin} style={styles.button}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>

              
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
    viewMiddle2: {
        justifyContent: 'center',
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    },
    txtTitle2: {
        fontSize: 20,
        marginBottom: 5,
        color: 'white',
        marginLeft:2,
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
        borderRadius: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003d40'
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
    txtCreate: {
        color: 'blue'
    }
});

