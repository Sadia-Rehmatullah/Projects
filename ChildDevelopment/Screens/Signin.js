import {
    Alert,
    Image,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ToastAndroid,
  } from 'react-native';
  
  import React, {useState, useEffect} from 'react';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import {TextInput, Card} from 'react-native-paper';
  import {ScrollView} from 'react-native';
  import {firebase} from '../config';
  import { query, where, collection } from "firebase/firestore";
  const LoginScreen = ({navigation, route}) => {
    const start = () => {
        navigation.navigate('Signup');
      };
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
    // useEffect(() => {
    //   checkLoginStatus();
    // }, []);
    // const checkLoginStatus = async () => {
    //   try {
    //     if (token === 'true') {
    //       navigation.navigate('WorkSpace');
    //     }
    //   } catch (error) {
    //     showToast('Error', 'Failed to check login status.');
    //   }
    // };
    // const showToast = (message, type) => {
    //   ToastAndroid.show(message, ToastAndroid.SHORT);
    // };

     const handleLoginButton1 = () => {  
     try
     {
      const usersRef = firebase.firestore().collection('Users');
      const q1 = query(usersRef, where("Email", "==", email), where("Password", "==", password));
      console.log(q1);
     }
     catch(err)
     {
      alert(err.message);
      return;
     }
    };

    const handleLoginButton = async () => {
     try
     {  const usersRef = firebase.firestore().collection('Users');
        usersRef
      .where('Email','==',email)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // User with the entered email and password exists
          // You can proceed with login logic here
          navigation.navigate('Home');
          Alert.alert('Success', 'Login successful!');
        } else {
          console.log(usersRef);
          Alert.alert('Error', 'Invalid email or password.');
        }
      })}catch(err)
     {
        alert(err.message);
        return;
     }
    };
    // };
    return (
      <View style={{backgroundColor: '#1D1160', flex: 1, padding: 20}}>
        <ScrollView>
        <View
            style={{
              backgroundColor: '#1D1160',
              width: 150,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0.1,
              alignSelf:'center',
              marginTop:10
            }}>
            {/* <Text style={{color: 'white',fontWeight:'bold',fontSize:20}}>Sign In</Text> */}
          </View>
          <Card
            style={{
              marginTop: 0.5,
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor:'white'
            }}>
            <Card.Content>
              <Image
                source={require('../images/logo.png')}
                style={{
                  height: 200,
                  width: 200,
                  alignSelf: 'center',
                  marginTop: 15,
                }}
              />
              <View style={styles.inputBoxContainer}>
                <FontAwesome5 style={{color: 'black'}} name="user" size={25} />
                <TextInput
                  style={styles.inputBox}
                  placeholder="Enter Your Email"
                  onChangeText={setemail}
                  value={email}
                />
              </View>
              <View style={styles.inputBoxContainer2}>
                <FontAwesome5 style={{color: 'black'}} name="lock" size={25} />
                <TextInput
                  style={styles.inputBox}
                  placeholder="Enter Your Password"
                  onChangeText={text => setpassword(text)}
                  value={password}
                  secureTextEntry={hidePassword}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setHidePassword(!hidePassword)}>
                  <FontAwesome5
                    name={hidePassword ? 'eye-slash' : 'eye'}
                    size={18}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.opacity}
                  onPress={handleLoginButton}>
                  <Text style={styles.btn}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{color: 'black', marginLeft: 100, marginTop: 12}}>
                  OR
                </Text>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginLeft: 20,
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.dont}>don't have account?{'   '}</Text>
                    <TouchableOpacity
                      style={styles.signupbutton}
                      onPress={start} navigation={navigation}>
                      <Text style={styles.buttonText}>SignUp</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    );
  };
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      margin: 20,
      marginTop: 20,
      backgroundColor: '#7F248D',
      borderRadius: 50,
      marginBottom: 20,
    },
    title: {
      color: 'black',
      fontSize: 20,
      alignSelf: 'center',
      marginTop: 40,
      fontWeight: '700',
    },
    inputBox: {
      marginHorizontal: 10,
      flex: 2,
      backgroundColor: 'transparent',
      opacity: 0.4,
      alignSelf: 'center',
      color: 'yellow',
    },
    inputBoxContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 0.5,
      width: '140%',
      marginTop: 40,
      borderRadius: 15,
      paddingHorizontal: 10,
      alignSelf: 'center',
    },
    inputBoxContainer2: {
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 0.5,
      width: '140%',
      marginTop: 30,
      borderRadius: 15,
      paddingHorizontal: 10,
      alignSelf: 'center',
    },
    button: {
      padding: 5,
    },
    signupbutton: {
      borderRadius: 10,
      // padding: 10,
      marginLeft: 10,
      marginTop: 10,
    },
    dont: {
      fontSize: 11,
      marginLeft: 20,
      marginTop: 5,
      color: 'black',
      alignSelf: 'flex-end',
    },
    buttonText: {
      color: '#2196F3',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,
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
    btn: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 8,
      color: 'white',
    },
  });
  