import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Space_Academy ({ navigation }) {
    return (
      


      
        <ScrollView style={styles.scrollView}>
          <Card style={styles.card}>
          
            
            <View style={styles.container}>
            <View style={styles.image}>
        <Image source={{
           width: 250,
           height: 370,
           
          padding: 50,
          alignItems: 'center',
          uri: 'https://m.media-amazon.com/images/I/41K8NV99juL.jpg'
          }}
        />
        </View>
        <Text style={styles.title}>
        Book Name :- Space Academy
        {'\n'}{'\n'}Author :-  MARTIN BLOCK
        {'\n'}{'\n'}Description :- When Jayden first arrives at the Galactic Academy, he is understandably excited. He’s the first Terran to ever attend the prestigious school, so he’s making history with everything he does.
                  A couple weeks after he arrives at the Academy, however, things suddenly turn sour. The daughter of a powerful alien warlord has been kidnapped, and all the evidence points to Jayden as her abductor.
        {'\n'}{'\n'}Price :- Rs.2000.00
        <Text style={styles.Discount}>
        {'\n'}{'\n'}Discount :- 5%
        </Text>
        {'\n'}{'\n'}23,391 Ratings 
        
      </Text>
        </View>
        
            <Card.Content>
              <Button   style={{backgroundColor:"#009999"}}mode="contained" onPress={() => navigation.navigate('Cart')}>
              Add to Cart
              </Button>
              
            
            </Card.Content>
            
          </Card>

          
        </ScrollView>
        
      )
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  image:{
   
    alignItems: 'center',
    marginBottom:10,
    marginTop:5
    
 

  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor:'black'
    
    
  },
  title:{
    fontSize:16,
    textAlign:'left',
    marginTop:10,
    color:'white',
    fontWeight:'bold',
    marginBottom:15
    
 
   },
   Discount:{
    color:"red"
  }
  
});

export default Space_Academy;