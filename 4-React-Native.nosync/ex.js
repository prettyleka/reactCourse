const INSTRUMENT_TYPE_STRING = 0;
const INSTRUMENT_TYPE_PERCUSSION = 1;
const INSTRUMENT_TYPE_WIND = 2;

const instruments = [
  { 
    id: 0,
    name: 'guitar',
    type: INSTRUMENT_TYPE_STRING
  },
  { 
    id: 1,
    name: 'xylophone',
    type: INSTRUMENT_TYPE_PERCUSSION
  },
  {
    id: 2,
    name: 'zither',
    type: INSTRUMENT_TYPE_STRING
  },
  { 
    id: 3,
    name: 'bagpipes',
    type: INSTRUMENT_TYPE_WIND
  },
];

const sortItems = (objArr) => {
    let newArr = [...objArr];
    return(
        newArr.sort((a, b) => { 
            return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
        }
        )
    )
}

// console.log(sortItems(instruments));
// console.log(instruments); 
const getType = (objArr, type) => {
    let newArr = [...objArr];
    return(
        newArr.filter((el)=>el.type===type)    )
}
// console.log(getType(instruments, INSTRUMENT_TYPE_STRING));
const getNames = (objArr) =>  {
    let newArr = [...objArr];
      return(
          newArr.map((el)=>el.name))
  }
console.log(getNames(getType(instruments, INSTRUMENT_TYPE_STRING)));
console.log("hi");
