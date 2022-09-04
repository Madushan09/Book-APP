
import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function TheNebula ({ navigation }) {
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
          uri: 'https://christyscozycorners.com/wp-content/uploads/2018/09/ExAcad_cvr_hires-copy72-e1586882004465.jpg'
          }}
        />
        </View>
        <Text style={styles.title}>
        Book Name :- The Nebula Secret
        {'\n'}{'\n'}Author :- TRUDI TRUEIT
        {'\n'}{'\n'}Description :-To celebrate the release of Explorer Academy: The Nebula Secret by Trudi Trueit on September 4th, blogs across the web are featuring exclusive content from Trudi and the Explorer Academy team, as well as 10 chances to win a copy of Explorer Academy: The Nebula Secret and swag! This adventure book for kids is great! I know your middle grade readers will love it.
        {'\n'}{'\n'}Price :- Rs.1260.00
        <Text style={styles.Discount}>
        {'\n'}{'\n'}Discount :- 15%
        </Text>
        {'\n'}{'\n'}10,451 Ratings 
        
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

export default TheNebula;