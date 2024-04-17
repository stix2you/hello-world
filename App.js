import { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert, ScrollView } from 'react-native';

const App = () => {
   const [text, setText] = useState('');

   // alert the user input (`text` state's value)
   const alertMyText = () => {
      Alert.alert(text);
   }

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={setText}
            placeholder='Enter your name'
         />
         <Text style={styles.textDisplay}>You wrote: {text}</Text>
         <Button
            onPress={() => {
               alertMyText();
            }}
            title="Press Me"
         />
         <ScrollView>
            <Text style={{ fontSize: 110 }}>This text is so big! And so long! You have to scroll!</Text>
         </ScrollView>
      </View>
   );
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   textInput: {
      fontSize: 20,
      width: '88%',
      borderWidth: 1,
      borderColor: 'black',
      height: 50,
      padding: 10,
      margin: 10,
      width: 200,
   },
   textDisplay: {
      color: 'darkslateblue',
      fontSize: 20,
   }
});

export default App;



// *** STYLING PRACTICE BELOW, ERASED ENTIRE APP.JS AND RESTARTED ***

// import { StyleSheet, Text, View } from 'react-native';

// const App = () => {
//    return (    //styles.container is a reference to the container style object, see below
//       <View style={styles.container}>
//          <View style={styles.box1}></View>
//          <View style={styles.box2}></View>
//          <View style={styles.box3}></View>
//       </View>
//    );
// }

// // styles can also be defined inline, use double curly braces:
// // <View>
// //    <View style={{width: 50, height: 50}}></View>
// // </View>

// // Note: the app's viewport itself has a flexbox layout by default, default direction is column

// // Stylesheet for the App component, use camel case for the property names
// const styles = StyleSheet.create({
//    container: {
//       flex: 1,  // flex: 1 means the box will take up all the available space
//       // flexDirection: 'row',  // default is column, this arranges flex items in a row (horizontal direction)
//       backgroundColor: '#fff',
//       // alignItems: 'center',
//       // justifyContent: 'center',
//    },
//    box1: {
//       // flex: 1,  // flex of 1 for box1, 12 for box2, 5 for box3 means 1/(1+12+5) --- this is how it divides the space
//       width: 50,
//       height: 50,
//       backgroundColor: 'tomato',
//    },
//    box2: {
//       flex: 1,  
//       // width: 100,
//       // height: 100,
//       backgroundColor: 'skyblue',
//    },
//    box3: {
//       // flex: 5,  
//       width: '50%',
//       height: 500,
//       backgroundColor: 'darkblue',
//    },
//    text: {
//       color: 'darkslateblue',
//       fontSize: 30,
//    }

// // use flexDirection, alignItems, and justifyContent, just as you would in CSS

// });

// export default App;
