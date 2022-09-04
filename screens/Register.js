import React from 'react';
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet,View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';



function Register ({ navigation }) {
 
    return (

      <View style={styles.container}>

      <Text style={styles.title}>
        Book Master
      </Text>

      <View style={styles.image}>
        <Image source={{
          width: 200,
          height: 200,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-15/512/Amazon-Kindle-icon.png'
          }}
        />
         <StatusBar style="auto" />
        </View>
        <View style={styles.container1}>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Comfirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        </View>
        
      
      
      </View>
        
   
      
 <ScrollView style={styles.scrollView}>
          
 

            <Card.Content>
             
            
              <Button style={{backgroundColor:"#009999",borderRadius: 30}} mode="contained" onPress={() => navigation.navigate('DashBoard')}>
                Go To DashBoard
              </Button>
            
            </Card.Content>
           
         

          
        </ScrollView>

        </View>
        
        
        
      )
      
}



const styles = StyleSheet.create({
container:{
  height: -5,
},
    container1: {
      flex: 1,
        marginTop:-30,
        marginBottom:160,
        alignItems: "center",
        justifyContent: "center",
      },

  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginbottom:'50%',
  },
  image:{
   
    alignItems: 'center',
    marginBottom:200,
    marginTop:50
    
 

  },
  title:{
    fontSize:35,
    textAlign:'center',
    marginTop:30,
    color:'#006666',
    fontWeight:'bold',
    fontFamily:"italic",
    
    
 
   },
   inputView: {
    backgroundColor: "#99ff99",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
  
});

export default Register;