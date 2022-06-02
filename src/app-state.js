
export const initialState = {
  count: 0,
  bodyBackground: 'white', 
};

export const reducer = (state, action) => {
  switch (action.type) {
  
    case 'increaseCount': {
      return { ...state, count: state.count++ };
    }
    
    case 'decreaseCount': {
      return { ...state, count: state.count-- };
    }
    
    case 'setBackgroundOrange': {
      return { ...state, bodyBackground: 'orange' };
    } 
     
    case 'setBackgroundGreen': {
      return { ...state, bodyBackground: 'green' };
    }  
    
    case 'setDefaultBackground': {
      return { ...state, bodyBackground: 'white' };
    }  
        
    default: {
      return state;
    }
  }
}; 


