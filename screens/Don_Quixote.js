import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Don_Quixote ({ navigation }) {
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
          uri: 'https://top15.in/wp-content/uploads/Don-Quixote-878x1024.jpg'
          }}
        />
        </View>
        <Text style={styles.title}>
        Book Name :- Don_Quixote 
        {'\n'}{'\n'}Author :- MIGUEL CERVANTES
        {'\n'}{'\n'}Description :- The most influential and well-known work of Spanish literature, published in 1615, it tells a story of a man who takes the name “Don Quixote de la Mancha” and sets off in a fit of obsession over romantic novels that hail chivalry to revive the custom and become a hero himself. The character, Don Quixote has become an idol, influencing many major works of art, music, and literature. The text has been so influential that the word Quixote was created to describe someone who is “foolishly impractical, especially in the pursuit of ideals”.
        {'\n'}{'\n'}Price :- Rs.1000.00
        <Text style={styles.Discount}>
        {'\n'}{'\n'}Discount :- 45%
        </Text>
        {'\n'}{'\n'}3,4341 Ratings 
        
      </Text>
        </View>
        
            <Card.Content>
              <Button style={{backgroundColor:"#009999"}} mode="contained" onPress={() => navigation.navigate('Cart')}>
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

export default Don_Quixote;