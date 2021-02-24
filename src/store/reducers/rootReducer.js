const initState = {

    loader:false,
    permits:[]
}

const rootReducer = (state = initState, action) => {
    if (action.type == "SAVE_BUILDING_PERMIT") {
        return {
          ...state,
          permits: action.permits,
          loader: false,
        };
      } 

      else if(action.type == "START_LOADER"){
        return {
            ...state,
        loader:true
      }
    }

    else if(action.type == "STOP_LOADER"){
        return {
            ...state,
        loader:false
      }
    }
      else{
        return state;


      }
}

export default rootReducer