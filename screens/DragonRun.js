
import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function DragonRun ({ navigation }) {
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
          uri: 'https://i979.photobucket.com/albums/ae277/coolmomphotos/2015-August-Picks/dragon-run_zps50qssufc.jpeg'
          }}
        />
        </View>
        <Text style={styles.title}>
        Book Name :- Dragon Run
        {'\n'}{'\n'}Author :- PATRICK MATTHEWS
        {'\n'}{'\n'}Description :-When we were at the library this week, my kids were complaining that they just wanted to goooo already, but then they saw Dragon Run by Patrick Matthews on the shelf on our way out and haven’t put it down since. In it, the world is run by mean, horrible dragons, who only want humans around to gather magic for them. Twelve-year-old Al Pilgrommor didn’t do well on Testing Day, which means the dragons have no need for him anymore. But he’s not going down without a fight. The book is fast paced, full of last-second escapes and edge-of-your-seat sword fights. Let’s just say your kids won’t be bored with this one.
        {'\n'}{'\n'}Price :- Rs.1090.00
        <Text style={styles.Discount}>
        {'\n'}{'\n'}Discount :- 25%
        </Text>
        {'\n'}{'\n'}12,381 Ratings 
        
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

export default DragonRun;