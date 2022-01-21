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
     TouchableWithoutFeedback,
     Dimensions,
     Image,
    ScrollView,

 } from 'react-native';
 import firestore from '@react-native-firebase/firestore';
 const { width, height } = Dimensions.get("window");
 const Item = ({ title, subtitle,telephone }) => (
     <View style={styles.item}>
         {/* <Text style={styles.title}>{`Name: ${title}`}</Text> */}
         <Text style={styles.title}>{title}</Text>

         <View style={{flexDirection:'row',marginTop:10,alignItems: 'center'}}>
             <Image style={{width:25, height:25}}
             source={require("./assets/phone.png")} 
             ></Image>
             <Text style={{marginLeft:10,    fontSize: 16,}}>{telephone}</Text>
         </View>
         <Text style={styles.subtitle}>{subtitle}</Text>
     </View>
 );
 
 export function OutofHourScreen({ navigation }) {
     const [category, setCategory] = React.useState([]);
     const [subcategory, setSubCategory] = React.useState([]);
      const itemListing = 
      [{
            "Categoryname": "Foodbanks",
            "subcategory": [
                {
        
                    "Name": "Glasgow SE Foodbank",
        
                    "AddressInfo": "42 Inglefield St, Glasgow G42 7AT",
        
                    "Telephone": "01414 232 418"},
               
                {
    
                "Name": "Glasgow NE Foodbank",
    
                "AddressInfo": "142 Helenvale St, Glasgow G31 4NA",
    
                "Telephone": "07745 242 738"},
                {     
    
                "Name": "Glasgow NW Foodbank - Trussel Trust",
    
                "AddressInfo": "Millbrix Ave, Glasgow G14 0EP",
    
                "Telephone": "07787 334 012"},
                {     
    
                "Name": "The Trussel Trust Food Bank",
    
                "AddressInfo": "2 Kirkwood St, Rutherglen, Glasgow G73 2SL",
    
                "Telephone": "07393 737 030"
                }
            ]

            },
            {
                "Categoryname": "Samaritans",
                "subcategory": [{
    
                "Name": "The Trussel Trust Food Bank",
    
                "AddressInfo": "2 Kirkwood St, Rutherglen, Glasgow G73 2SL",
    
                "Telephone": "07393 737 030"},
            ]

}];
     
       
    
   
      const onPressBack = (event) => {
        navigation.navigate('Login');
    }
     useEffect(() => {
         
                     const arrayUserList = [];
                     itemListing.forEach(documentSnapshot => {
                         console.log('User ID: ', documentSnapshot);
                         arrayUserList.push(documentSnapshot);
                        
                         const arrayUserList2 = [];

                         arrayUserList.forEach(documentSnapshot2 => {
                            console.log('Sub Category: ', documentSnapshot2.subcategory);
                            arrayUserList2.push(documentSnapshot2.subcategory);
   
   
                        });

                         setSubCategory(arrayUserList2)
                         console.log('Sub Category array: ',arrayUserList2);

                     });
                     setCategory(arrayUserList)
                     console.log('Category array: ', arrayUserList);

           
     }, [])
 
     const renderItem = ({ item }) => (
         <Item 
         title={item.Name} subtitle={item.AddressInfo} telephone ={item.Telephone} />
     );
 
     const isDarkMode = useColorScheme() === 'dark';
     return (
         <SafeAreaView style={[styles.viewParent]}>
             <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
             <ScrollView style={{flex: 1}}>
<View>

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

                            <Text style={styles.settingText}>Out of Hours</Text>

                        </View>

                    </View>
                    <View style={styles.viewTxt}>
                     <Text style={styles.txtTitle}>Out of Hours Support</Text>
                     {/* <Text style={styles.txtTitle2}>Foodbanks</Text> */}

                     </View>
             <View>
            <FlatList
                            style={{ marginLeft: 10, marginRight: 10, }}
                            // listkey={item => item.id}
                            data={category}
                            renderItem={({ item, index }) => (

                                <View style={{ width: width, alignSelf: 'center', marginTop: 10, }}>
                                        <Text style={styles.txtTitle2}>{item.Categoryname}</Text> 
                 <FlatList
                style={{width:width,backgroundColor:'#ebfdff'}}
                     data={item.subcategory}
                     keyExtractor={item => `${item.Name}`}
                    //  renderItem={renderItem}
                    //  keyExtractor={item => item.id}
                     
                    renderItem={({ item, index }) => (
                        <View style={styles.item}>
                        {/* <Text style={styles.title}>{`Name: ${title}`}</Text> */}
                        <Text style={styles.title}>{item.Name}</Text>
               
                        <View style={{flexDirection:'row',marginTop:10,alignItems: 'center'}}>
                            <Image style={{width:25, height:25}}
                            source={require("./assets/phone.png")} 
                            ></Image>
                            <Text style={{marginLeft:10,    fontSize: 16,}}>{item.Telephone}</Text>
                        </View>
                        <Text style={styles.subtitle}>{item.AddressInfo}</Text>
                    </View>
                        )}

                 />
                                
                              </View>
                            )}

                        /> 
             </View>

            
             </View>
             </ScrollView>
             {/* <View style={{width: width,
             position:'absolute',bottom:0,justifyContent:'center',alignItems: 'center',backgroundColor:'#ebfdff'}}>
             <Text style={styles.txtTitle3}>Lorem Ipsum dummy text Lorem Ipsum dummy text
             Lorem Ipsum dummy text Lorem Ipsum dummy text</Text>
             <TouchableOpacity 
             //onPress={onPressFeedback}
              style={styles.button}>
                     <Text style={styles.textButton}>Return to Login</Text>
                 </TouchableOpacity>

             </View> */}


         </SafeAreaView>
     )
 }
 
 const styles = StyleSheet.create({
     viewParent: {
         flex: 1,
         backgroundColor:'#60adb7',
     },
     item: {
         padding: 10,
         marginVertical: 8,
         marginHorizontal: 16,
         borderBottomWidth: 0.5,
         width:'100%', 
         alignItems: 'center',
         justifyContent: 'center'
     },
     title: {
         fontSize: 16,
         fontWeight: 'bold',
     },
     subtitle: {
         fontSize: 16,
         marginTop: 10
     },
     headerWhite:{
   
        width: width,height: 50, backgroundColor:'#0e494f',
         flexDirection: 'row', 
         alignItems: 'center'
      },
      imageMenuIcon:{
        width: 25, height: 20, 
      },
      settingText:{
        fontSize: 18, color: 'white',fontWeight:'bold'
      },
      viewTxt: {
        width:width,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop:20,
   },


   textButton: {
    color: '#91bfb5',
    fontSize: 20,
    fontWeight: 'bold',

},
   txtTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    letterSpacing:5

},
txtTitle2: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    letterSpacing:2,
    fontWeight: 'bold',

},
txtTitle3: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    letterSpacing:1,
    fontWeight: 'bold',

},
button: {
    marginVertical: 20,
    borderRadius: 10,
    height: 60,
width: '50%',
bottom:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003d40',
},
 });
 