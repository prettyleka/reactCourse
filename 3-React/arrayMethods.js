// const things = [
//     {
//         id: 0,
//         title: 'whiskers on kittens',
//         favorite: true,
//         points: 97
//     },
//     {
//         id: 1,
//         title: 'raindrops on roses',
//         favorite: true,
//         points: 77
//     },
//     {
//         id: 2,
//         title: 'brown paper packages tied up with string',
//         favorite: true,
//         points: 87
//     },
//     {
//         id: 3,
//         title: 'dog bite',
//         favorite: false,
//         featured: 'true',
//         points: 12
//     },
//     {
//         id: 4,
//         title: 'bee sting',
//         favorite: false,
//         points: 6
//     }
// ];

// // const myFavoriteThings = things.filter((thing) => thing.favorite);
// // console.log(myFavoriteThings);

// // const thingsWithOverFiftyPoints = things.filter((thing) => thing.points > 50);
// // console.log(thingsWithOverFiftyPoints);

// // const selectThingByID = (id) => {
// //     return things.find((thing) => thing.id === id)
// // };
// // const selectedThing = selectThingByID(2);
// // console.log(selectedThing);

// // const pets = ["goldfish", "dog", "turtle", "tiger"];
// // const petsShortNames = pets.filter((pet) => pet.includes("t"));
// // // The below line should console.log: ["dog", "tiger"]
// // console.log(petsShortNames);



// const drinkOrders = [
//     { id: 0, customerName: 'Zachary', drinkName: 'Dirty Martini'},
//     { id: 1, customerName: 'Juan', drinkName: 'Zombie'},
//     { id: 2, customerName: 'Kayla', drinkName: 'Mojito'},
//     { id: 3, customerName: 'Zachary', drinkName: 'Mojito'}
//   ]


//   console.log(drinkOrders.filter((order) => order.customerName === 'Zachary').find((order)=>
//   order.drinkName==='Mojito').id);

// const numbers = [3, 5, 4, 10];
// const reducedValue = numbers.reduce((acc, cur) => acc + cur, 50);
// console.log(reducedValue);

// const users = [
//     {
//         username: 'edie',
//         location: 'seattle'
//     },
//     {
//         username: 'tomah',
//         location: 'portland'
//     },
//     {
//         username: 'jerome',
//         location: 'oakland'
//     },
//     {
//         username: 'solace',
//         location: 'oakland'
//     }
// ];

// const usersByCity = users.reduce(
//     (acc, user) => ({
//         ...acc,
//         [user.location]: (acc[user.location] || 0) + 1
//     }),
//     { oakland: 100, byzantium: 1000 }
// );

// console.log(usersByCity);



const gems = [
    { type: 'amethyst', price: 8 },
    { type: 'turquoise', price: 50 },
    { type: 'selenite', price: 2 },
    { type: 'topaz', price: 10 },
    { type: 'emerald', price: 500 }
]

const gemsOverTen = gems.reduce((acc, cur) => {
  if (cur.price >= 10){
      acc.push(cur);
  }
   return acc;
}, []);

console.log(gemsOverTen)



const actions = [
  { type: 'update_hp', payload: -200 },
  { type: 'update_pos', payload: { x: 5, y: -10 } }
];

const initialState = {
  hp: 1000,
  xPosition: 200,
  yPosition: 200
};

const reducer = (state, action) => {
  switch (action.type) {
   case 'update_hp':
       return {
           ...state,
           hp:  initialState.hp + action.payload
       }
   case 'update_pos':
         return {
             ...state,
             xPosition:  initialState.xPosition + action.payload.x,
             yPosition: initialState.yPosition + action.payload.y
         }
 };
};

const state = actions.reduce(reducer, initialState);
console.log(state);

