import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Anna_Karenina ({ navigation }) {
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
          uri: 'https://top15.in/wp-content/uploads/Anna-Karenina-939x1024.jpg'
          }}
        />
        </View>
        <Text style={styles.title}>
        Book Name :- Anna_Karenina
        {'\n'}{'\n'}Author :- LEO TOLSTOY
        {'\n'}{'\n'}Description :-People interested in reading classic novels must involve Anna Karenina on their bookshelves. Russian novelist Leo Tolstoy, who moulds together thoughtful discussions on love, pain, and family in Russian society wrote this. The novel was revolutionary in its treatment of women, depicting prejudices, and social hardships of the time with vivid emotions.
        {'\n'}{'\n'}Price :- Rs.2560.00
        <Text style={styles.Discount}>
        {'\n'}{'\n'}Discount :- 18%
        </Text>
        {'\n'}{'\n'}33,451 Ratings 
        
      </Text>
      
        </View>
        
            <Card.Content>
              <Button style={{backgroundColor:"#009999"}}mode="contained" onPress={() => navigation.navigate('Cart')}>
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
    marginBottom:15,
    
    
 
   },
   Discount:{
     color:"red"
   }
  
});

export default Anna_Karenina;