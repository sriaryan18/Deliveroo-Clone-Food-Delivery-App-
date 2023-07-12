import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state,action) => {
      state.items =[...state.items,action.payload]
    },
    removeItems: (state,action) => {
      const index=state.items.findIndex(item => item.id === action.payload.id);
      let newBasket=[...state.items];
      if(index>-1){
        newBasket.splice(index,1);
      }else{
        console.warn("Cant delete");
      }
      state.items=newBasket;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItems, removeItems } = basketSlice.actions

export const selectBasketItems= (state)=>state.basket.items;

export const selectBasketItemsWithId = (state,id)=>{ return state.basket.items.filter(item => item.id == id)};

export const getTotalSum = (state)=>
     state.basket.items.reduce((total,item)=>
        total+=item.price,0)

export default basketSlice.reducer
