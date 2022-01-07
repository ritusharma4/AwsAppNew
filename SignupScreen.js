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
    Platform,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import FIcon from 'react-native-vector-icons/dist/FontAwesome';
import firestore from '@react-native-firebase/firestore';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


export function SignUpScreen({ navigation }) {
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [isSecure, onSetSecureText] = React.useState(true);

    const onPressCreateAccount = () => {
        if (name.trim().length === 0) {
            Alert.alert('', 'Please enter a name.');
        }
        else if (email.trim().length === 0) {
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
                    if (!documentSnapshot.exists) {
                        firestore()
                            .collection('User')
                            .doc(email.toLocaleLowerCase())
                            .set({
                                name: name,
                                password: password,
                                email: email.toLocaleLowerCase(),
                                os: Platform.OS === 'ios' ? 'ios' : 'android'
                            })
                            .then(() => {
                                Alert.alert('Thank you', 'Thank you for register, please login.', [
                                    {
                                        text: "Okay",
                                        onPress: () => navigation.goBack(),
                                    }
                                ]);
                            });
                    }
                    else {
                        console.log('User data: ', documentSnapshot.data());
                        Alert.alert('', 'User already exixts.');
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
                    <Text style={styles.txtTitle}>Sign Up</Text>
                    <View style={styles.viewRow}>
                        <FIcon name="user-circle-o" size={20} style={styles.icon} color="blue" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeName}
                            value={name}
                            placeholder="Name"
                        />
                    </View>
                    <View style={styles.viewRow}>
                        <Icon name="mail-open" size={20} style={styles.icon} color="blue" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Email"
                        />
                    </View>
                    <View style={styles.viewRow}>
                        <Icon name="lock-closed" size={20} style={styles.icon} color="blue" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Password"
                            secureTextEntry={isSecure}
                        />
                        <TouchableOpacity onPress={() => onSetSecureText(!isSecure)}>
                            <Icon name={isSecure ? "eye" : "eye-off"} size={20} style={[styles.icon, styles.icon2]} color="blue" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={onPressCreateAccount} style={styles.button}>
                    <Text style={styles.textButton}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
                <View style={styles.viewCreatAcc}>
                    <Text>Already have an account?</Text>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <Text style={styles.txtCreate}>{` Sign in`}</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    viewParent: {
        flex: 1,
        justifyContent: 'center',
    },
    viewChild: {
        margin: 20,
    },
    viewMiddle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    viewRow: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 1
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
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    viewCreatAcc: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textButton: {
        color: 'white'
    },
    txtCreate: {
        color: 'blue'
    }
});

