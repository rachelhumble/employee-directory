import axios from "axios";

export default {
  getEmployees: function() {
    return axios
      .get("https://alper.dev/employees")
      .then(res => {
        const employees = res.data;
        return employees.map(emp => {
          return {
            id: emp.id,
            firstName: emp.firstName,
            lastName: emp.lastName,
            department: emp.department
          };
        });
      });
  }
};
