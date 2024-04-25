import * as React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import {firebase} from '../config';
import {Picker} from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TextInput, Card} from 'react-native-paper';
const SignupButton = ({navigation}) => {
  const todoRef = firebase.firestore().collection('Users');
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [designation, setDesignation] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [role, setrole] = useState('Datacell');

  const handleRoleChange = itemValue => {
    setSelectedRole(itemValue);
  };
  const handleSignUp = () => {
    try {
        const data = {
            Email: email,
            Name: name, 
        };
        todoRef.add(data).then(()=>{
            setemail('');
            setName('');
            console.log('Data Added');
            navigation.navigate('Home');
        })
        }catch (err) {
        alert(err.message);
        return;
    }


    // navigation.navigate('Tabs')
};
 
  return (
    <View style={{flex: 1, padding: 16, backgroundColor:'#1D1160'}}>
      <ScrollView>
        <View
          style={{
            backgroundColor:'#1D1160',
            width: 150,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0.1,
            alignSelf:'center',
            marginTop:10
          }}>
          {/* <Text style={{color: 'white',fontWeight:'bold',fontSize:20}}>Sign Up</Text> */}
        </View>
        <Card
          style={{
            marginVertical: 10,
            alignItems: 'center',
            borderRadius: 20,
            marginTop: 40,
            backgroundColor: 'white',
          }}>
          <Card.Content>
            <Image
              source={require('../images/logo.png')}
              style={{height: 180, width: 180, alignSelf: 'center'}}
            />
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#5d0076',
                  width: 150,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 0.1,
                }}>
                <Text style={{color: 'white'}}> Child</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#5d0076',
                  width: 150,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 0.1,
                }}>
                <Text style={{color: 'white'}}> Parent</Text>
              </View>
            </View> */}
            <View style={styles.inputBoxContainer}>
              <FontAwesome5 style={{color: 'black'}} name="user" size={25} />
              <TextInput
                style={styles.inputBox}
                placeholder="Enter Your name"
                onChangeText={setName}
                value={name}
              />
            </View>
            {/* <View style={styles.inputBoxContainer}>
              <FontAwesome5
                style={{color: 'black'}}
                name="graduation-cap"
                size={25}
              />
              <TextInput
                style={styles.inputBox}
                placeholder="Enter Your Designation"
                onChangeText={setDesignation}
                value={designation}
              />
            </View> */}
            <View style={styles.inputBoxContainer}>
              <FontAwesome5
                style={{color: 'black'}}
                name="envelope-open"
                size={25}
              />
              <TextInput
                style={styles.inputBox}
                placeholder="Enter Your Email"
                onChangeText={setemail}
                value={email}
              />
            </View>
            <View style={styles.inputBoxContainer}>
              <FontAwesome5 style={{color: 'black'}} name="lock" size={25} />
              <TextInput
                style={styles.inputBox}
                placeholder="Enter Your Password"
                onChangeText={setpassword}
                value={password}
                secureTextEntry={hidePassword}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => setHidePassword(!hidePassword)}>
                <FontAwesome5
                  name={hidePassword ? 'eye-slash' : 'eye'}
                  size={18}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
                marginTop: 20,
              }}>
              <View style={{marginHorizontal: 20, marginLeft: -10}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    marginLeft: 10,
                  }}>
                  Role
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 15,
                  paddingHorizontal: 10,
                  marginBottom: 10,
                  backgroundColor: '#f8f8ff ',
                }}>
                <Picker
                  selectedValue={role}
                  style={{
                    height: 50,
                    width: 200,
                    color: 'black',
                  }}
                  onValueChange={handleRoleChange}
                  mode="dropdown">
                  <Picker.Item label="Parent" value="Parent" />
                  <Picker.Item label="Auntie" value="Auntie" />
                </Picker>
              </View>
            </View>
            <TouchableOpacity style={styles.buttons} onPress={handleSignUp}>
              <Text style={styles.buttonText1}>Sign up</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText1: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'white',
  },
  inputBoxContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    width: '100%',
    marginTop: 30,
    borderRadius: 40,
    paddingHorizontal: 10,
  },
  inputBox: {
    marginHorizontal: 10,
    flex: 2,
    backgroundColor: 'transparent',
    opacity: 0.4,
  },
  opacity: {
    width: 90,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#232b2b',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  button: {
    padding: 5,
  },
  signupbutton: {
    borderRadius: 10,
    padding: 10,
    marginLeft: 200,
    marginTop: 10,
  },
  buttonText: {
    color: '#2196F3',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignupButton;
