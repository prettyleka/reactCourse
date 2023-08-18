import { createSlice } from '@reduxjs/toolkit';


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    //reducers equal to an object with a property inside with of toggleFavorite equal to a function passing favorites and action as parameters.
    reducers: { 
        toggleFavorite: (favorites, action) => {
            if(favorites.includes(action.payload) ){
                return favorites.filter(
                (favorite) => favorite !== action.payload
            );}
            //mutate the favorites array by calling push and passing in the action.payload.
            else{favorites.push(action.payload);}
        }
    }});

    export const { toggleFavorite } = favoritesSlice.actions;
    export const favoritesReducer = favoritesSlice.reducer;