import * as React from 'react';
import { View, Text, StatusBar, Image,Linking, Dimensions,FlatList, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ImageSlider } from "react-native-image-slider-banner";

const Colors = {
    theme: "#DCDCDC",
    white: '#fff',
    greyish: '#a4a4a4',
  
  };

  const image = { uri: "https://www.winmate.com/image/Technologyimg/Touch_Screen_img_01.jpg" };

export default function HomeScreen() {
const rnsUrl= 'www.google.com'
  const handleClick = () => {
    Linking.canOpenURL(rnsUrl).then(supported => {
      if (supported) {
        Linking.openURL(rnsUrl);
      } else {
        console.log(`Don't know how to open URI: ${rnsUrl}`);
      }
    });
  };
    return (

        <ScrollView>
        <View style={styles.container}>
        <View style={styles.header}>
        <ImageBackground
            source={image} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{textAlign:'center',fontSize:30}}>HELLO</Text>
        </ImageBackground>
        </View>
        <Image style={styles.avatar} source={{uri: 'data:image/jpeg;base64,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'}}/>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
              <Text style={styles.name}>Amit</Text>
              <Text style={styles.info}>Reactjs Developer/ Mobile Developer</Text>
              <Text style={styles.description}>Hi, My name is Amit </Text>
              
                <TouchableOpacity style={styles.buttonContainer} onPress={handleClick}>
                  <Text>EDUCATION DETAILS</Text>  
                </TouchableOpacity>              
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text>EXPERIANCE</Text> 
                </TouchableOpacity>
                
          </View>

      </View>
    </View>

    </ScrollView>















//       <ScrollView style={{ flex: 1 }}>
//         <StatusBar
//           translucent={true}
//           barStyle="light-content"
//           backgroundColor={Colors.theme}
//         />
  
//         <View
//           style={{
//             backgroundColor: Colors.theme
//           }}>
//           <ImageBackground
//             source={image} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }}>
            
//             <Text
//               style={{
//                 textAlign: 'center',
//                 fontSize: 30,
//                 color: 'red',
//                 fontWeight: 'bold',
//                 textAlign: 'center',
//                 marginTop:20,
//               }}>
//               Welcome to my Profile
//             </Text>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 paddingHorizontal: 122,
//                 marginVertical: 36,
//                 alignItems: 'center',
//                 justifyContent: 'flex-start',
//               }}>
//               <Image
//                 source={require('../../assets/images/amit.png')}
//                 style={{ width: 150, height: 150, borderRadius: 75, marginRight: 36 }}
//               />
//             </View>
//             <View>
//               <Text
//                 style={{
//                   textAlign: 'center',
//                   fontSize: 30,
//                   color: 'black',
//                   fontWeight: 'bold',
//                   textAlign: 'center'
//                 }}>
//                 AMIT
//               </Text>
//               <Text
//                 style={{
//                   color: 'black',
//                   fontWeight: 'bold',
//                   fontSize: 15,
//                   textAlign: 'center'
//                 }}>
//                 REACT NATIVE DEVELOPER
//               </Text>
//             </View>
//             <ImageSlider 
//       data={[
//           {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
//           {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
//           {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
//       ]}
//       autoPlay={false}
//       onItemChanged={(item) => console.log("item", item)}
//       closeIconColor="#fff"
//   />
//             <View style={{ backgroundColor: 'white', height: 300, alignItems: 'center', marginTop: 30 }}>
//               <Image style={{ height: 250, width: 250 }} source={require('../../assets/images/image6.jpeg')} />
//             </View>
//           </ImageBackground>
//         </View>
        
  
//       </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130,
      elevation:350
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {

      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "lightgreen",
    },
  });