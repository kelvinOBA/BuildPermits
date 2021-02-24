import axios from 'axios'


export const getBuildingPermits = (
    data, nav) => {
        
  return (dispatch, getState) => {

    dispatch({type:'START_LOADER'})
    axios.get('https://data.cityofchicago.org/resource/building-permits.json?$LIMIT=10', {

      headers: {
          'X-App-Token': 'TGpleItvHxCZhMaQRMqDNGNBL',
          "Content-Type": "multipart/form-data",
        }
    })
  
      .then((response) => {
        console.log(response.data);
        let permits = response.data
        dispatch({type:'STOP_LOADER'})
        dispatch({type:'SAVE_BUILDING_PERMIT',permits})


      })

      .catch((error) => {
        dispatch({type:'STOP_LOADER'})

      
      });
  };
};