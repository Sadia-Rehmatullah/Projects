import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {firebase} from '../config';

const Skills = () => {
   const [document1Subcollection1Data, setDocument1Subcollection1Data] = useState([]);
   const [document2Subcollection2Data, setDocument2Subcollection2Data] = useState([]);
   const [document3Subcollection3Data, setDocument3Subcollection3Data] = useState([]);
   const [document4Subcollection4Data, setDocument4Subcollection4Data] = useState([]);
   useEffect(() => {
      
      const fetchSubCollectionData = async () => {
        try {
         //  // Replace 'collection_id', 'document_id', and 'subcollection_id' with your actual IDs
         //  const subCollectionRef = firebase.firestore()
         //    .collection('Skills')
         //    .doc('HDguYGaqL7uGjUIrtbgT')
         //    .collection('Linguistic');
  
         //  const snapshot = await subCollectionRef.get();
         //  snapshot.forEach((doc) => {
         //    const data = doc.data();
         //    console.log('Subcollection Data:', data);
         //  });
         
         const collectionRef = firebase.firestore().collection('Skills');

         const document1Subcollection1Ref = collectionRef.doc('HDguYGaqL7uGjUIrtbgT').collection('Linguistic');
         const document2Subcollection2Ref = collectionRef.doc('WVbUb3P5bUmfVLbwRFGh').collection('Cognitive');
         const document3Subcollection3Ref = collectionRef.doc('oM8J1ZlWgf5zYw5nem6f').collection('Social & Emotional');
         const document4Subcollection4Ref = collectionRef.doc('tAxw38CIpWRWiJ3Ix1ah').collection('Physical');
 
         const document1Subcollection1Snapshot = await document1Subcollection1Ref.get();
         const document2Subcollection2Snapshot = await document2Subcollection2Ref.get();
         const document3Subcollection3Snapshot = await document3Subcollection3Ref.get();
         const document4Subcollection4Snapshot = await document4Subcollection4Ref.get();
 
         // const document1Subcollection1Data = document1Subcollection1Snapshot.docs.map((doc) => doc.data());
         // const document2Subcollection2Data = document2Subcollection2Snapshot.docs.map((doc) => doc.data());
         // const document3Subcollection3Data = document3Subcollection3Snapshot.docs.map((doc) => doc.data());
        // const document4Subcollection4Data = document4Subcollection4Snapshot.docs.map((doc) => doc.data());
        const data1 = document1Subcollection1Snapshot.docs.map((doc) => doc.data());
        const data2 = document2Subcollection2Snapshot.docs.map((doc) => doc.data());
        const data3 = document3Subcollection3Snapshot.docs.map((doc) => doc.data());
        const data4 = document4Subcollection4Snapshot.docs.map((doc) => doc.data());

        setDocument1Subcollection1Data(data1);
        setDocument2Subcollection2Data(data2);
        setDocument3Subcollection3Data(data3); 
        setDocument4Subcollection4Data(data4);

         console.log(data1);
         console.log(setDocument2Subcollection2Data);
         console.log(setDocument3Subcollection3Data);
         console.log(setDocument4Subcollection4Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSubCollectionData();
  }, []);

  const renderItem = ({ item }) => (
   <View style={styles.itemContainer}>
     <Text style={styles.itemName}>{item.Name}</Text>
     <Text style={styles.itemText}>Age: {item.Age}</Text>
     
   </View>
   
 );

 return (
   <ScrollView style={styles.container}>
   <View>
   <Text style={styles.headerStyle}>Linguistic</Text>
   <FlatList
     data={document1Subcollection1Data}
     keyExtractor={(item, index) => index.toString()}
     renderItem={renderItem}
     contentContainerStyle={styles.flatlist}
   />
   <Text style={styles.headerStyle}>Congnitive</Text>
   <FlatList
      data={document2Subcollection2Data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.flatlist}
    />
    <Text style={styles.headerStyle}>Social & Emotional</Text>
   <FlatList
      data={document3Subcollection3Data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.flatlist}
    />
    <Text style={styles.headerStyle}>Physical</Text>
   <FlatList
      data={document4Subcollection4Data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.flatlist}
    />
    </View>
    </ScrollView>
 );

};

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#1D1160',
     borderRadius: 8,
   },
   opacity: {
      width: 90,
      height: 50,
      borderRadius: 20,
      backgroundColor: 'black',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 20,
    },
    headerStyle: {
      backgroundColor: '#1D1160',
      color:'white',
      fontSize: 24,
      fontWeight:'bold',
      alignContent:'center',
      alignItems:'center',
      textAlign:'center',
    },
    itemName:{
      fontSize:22,
      fontWeight:'bold',
   },
    itemText: {
      fontSize: 16,
   },
    separator: {
      height: 1,
      backgroundColor: '#ccc',
      marginTop: 10, // Adjust the marginTop as needed for spacing
    },
    flatlist: {
      marginBottom: 20,
      borderRadius: 8,
      backgroundColor:'#1D1160',
    },
    itemContainer: {
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderBottomWidth: 1, // Add the borderBottomWidth to create the line separator
      borderBottomColor: '#ccc',
    },
    
 });
 
 export default Skills;
