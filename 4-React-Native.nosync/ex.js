// const INSTRUMENT_TYPE_STRING = 0;
// const INSTRUMENT_TYPE_PERCUSSION = 1;
// const INSTRUMENT_TYPE_WIND = 2;

// const instruments = [
//   { 
//     id: 0,
//     name: 'guitar',
//     type: INSTRUMENT_TYPE_STRING
//   },
//   { 
//     id: 1,
//     name: 'xylophone',
//     type: INSTRUMENT_TYPE_PERCUSSION
//   },
//   {
//     id: 2,
//     name: 'zither',
//     type: INSTRUMENT_TYPE_STRING
//   },
//   { 
//     id: 3,
//     name: 'bagpipes',
//     type: INSTRUMENT_TYPE_WIND
//   },
// ];

// const sortItems = (objArr) => {
//     let newArr = [...objArr];
//     return(
//         newArr.sort((a, b) => { 
//             return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
//         }
//         )
//     )
// }

// // console.log(sortItems(instruments));
// // console.log(instruments); 
// const getType = (objArr, type) => {
//     let newArr = [...objArr];
//     return(
//         newArr.filter((el)=>el.type===type)    )
// }
// // console.log(getType(instruments, INSTRUMENT_TYPE_STRING));
// const getNames = (objArr) =>  {
//     let newArr = [...objArr];
//       return(
//           newArr.map((el)=>el.name))
//   }
// console.log(getNames(getType(instruments, INSTRUMENT_TYPE_STRING)));
// console.log("hi");
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
    const [thingToSay, setThingToSay] = useState('Hello Nucamp');

    useEffect(() => { 
        (async () => {
          const voices = await Speech.getAvailableVoicesAsync();
          console.log(voices)
        })(); /* note: the final pair of parentheses at the end of this async
                function uses a JavaScript concept called an immediately invoked    
                function expression (IIFE) to call the code inside the async function 
                immediately. you do not need to know about this for this code 
                challenge, but in case you were wondering! */
    },[]);

    const speak = () => {
        Speech.speak(thingToSay);
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setThingToSay} defaultValue='Hello Nucamp' />
            <Button title="SPEAK" onPress={speak} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});