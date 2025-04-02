import axios from 'axios';

const baseUrl = 'https://api.data.gov.my/data-catalogue';

export function fetchData(callback: (data: any) => void){
axios.get(baseUrl, {
    params: {
      id: "births_annual"
    }
  })
  .then(function (response) {
    callback(response.data);
  })
  .catch(function (error) {
    console.log("gt Error!",error);
  })
  .finally(function () {
    // always executed
  }); 
}
