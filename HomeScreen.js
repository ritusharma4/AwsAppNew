/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Item = ({ title, subtitle }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{`Name: ${title}`}</Text>
        <Text style={styles.subtitle}>{`Email: ${subtitle}`}</Text>
    </View>
);

export function HomeScreen({ navigation }) {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        const onGetUserList = async () => {
            firestore()
                .collection('User')
                .get()
                .then(querySnapshot => {
                    const arrayUserList = [];
                    querySnapshot.forEach(documentSnapshot => {
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        arrayUserList.push(documentSnapshot.data());
                    });

                    setUsers(arrayUserList)
                });
        }

        onGetUserList()
    }, [])

    const renderItem = ({ item }) => (
        <Item title={item.name} subtitle={item.email} />
    );

    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView style={[styles.viewParent]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View>
                <FlatList
                    data={users}
                    keyExtractor={item => `${item.email}`}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    renderS
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewParent: {
        flex: 1,
        margin: 20
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomWidth: 0.5
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10
    },
});
