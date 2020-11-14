import axios from "axios";

//api gets 10 people
export default {
  employeeFinder: function () {
    return axios.get("https://randomuser.me/api/?results=1&nat=US")
  },
};
// export default {
//   search: function(query) {
//     console.log(query);
//     return axios.get("https://randomuser.me/api/?results=10&nat=US");
//   }
// };

