//Computed property names
//At times, you will find it useful to be able to create objects and pass in variables to 
//dynamically create property names, instead of hard-coding the property names.
const myProperty = "foo";
const myObject = {
    [myProperty]: "This is a test"
};
console.log(myObject);
//spread syntax with arrays
//The spread syntax lets you access and "spread" out copies of the contents of an array 
//or object, using an ellipsis (a set of three dots, ...) in front of an array or object. 

const landVehicles = ["sedan", "truck", "van"];
const waterVehicles = ["canoe", "sailboat", "submarine"];
//combine variables
const vehicles = [...landVehicles, ...waterVehicles];
console.log(vehicles);
// make new arrays from a combination of spread arrays 
//and any other kind of data you can normally store in an array
const moreLandVehicles = [...landVehicles, "tank"];
console.log(moreLandVehicles);
//spread and recombine multiple arrays along with other types of data
const mixNMatch = [...landVehicles, "banana", 3, 3, { someObjProperty: "someObjPropertyValue" }, ...waterVehicles];
console.log(mixNMatch);

//spread syntax with objects
const objOne = {color: "blue", height: 12};
const objTwo = {material: "ceramic", width: 6};
const objThree = {color: "red", width: 7};
//combined into a third object
const objOneAndTwoCombined = {...objOne, ...objTwo};
console.log(objOneAndTwoCombined);
const objOneAndThreeCombined = {...objOne, ...objThree};
console.log(objOneAndThreeCombined);
const objThreeAndOneCombined1 = {...objThree, ...objOne};
console.log(objThreeAndOneCombined1);
const objOneUpdatedHeight = {...objOne, height: 300};
console.log(objOneUpdatedHeight);
