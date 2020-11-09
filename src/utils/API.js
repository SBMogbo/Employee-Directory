import axios from "axios";
// const BASEURL = "https://randomuser.me/api/?exc=login";
// const APIKEY = "&apikey=trilogy";
function employeeFinder(){
  return axios.get("https://randomuser.me/api/?results=1&nat=US")
}
// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   search: function(query) {
//     console.log(query);
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default{
  employeeFinder
};