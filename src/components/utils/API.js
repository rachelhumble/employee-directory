import axios from "axios";

const url = "https://randomuser.me/api/?results=";
const resultNumber = "100";
const queryParams= "&seed=fea8be3e64777240&inc=gender,picture,name,email,phone,nat,id&nat=us";

export default {

  getEmployees: function() {
    return axios
      .get(url + resultNumber + queryParams)
      .then(res => {
        const employees = res.data.results;
        return employees.map(emp => {
          return {
            id: emp.id.value,
            email: emp.email,
            gender: emp.gender,
            firstName: emp.name.first,
            lastName: emp.name.last,
            img: emp.picture.thumbnail
          };
        });
      });
  }

  // getEmployees: function() {
  //   return axios
  //     .get("https://alper.dev/employees")
  //     .then(res => {
  //       const employees = res.data;
  //       return employees.map(emp => {
  //         return {
  //           id: emp.id,
  //           firstName: emp.firstName,
  //           lastName: emp.lastName,
  //           department: emp.department
  //         };
  //       });
  //     });
  // }
}
