import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import Row from "../../components/Row";
import Container from "../../components/Container";
import Column from "../../components/Column";

class Employees extends Component {
  state = {
    parsedResult: [],
    result: [],
    allResults: []
  };
  componentMount() {
    API.searchEmployees().then(res => {
      this.setState({
        allResults: res.data.result,
        parsedResult: res.data.result,
        result: res.data.result

      });
    });
  };
  // search first name event
  searchFirst = (event) => {
    const firstName = event.target.value;
    this.sortFirstName(firstName)
  };

  // search last name event
  searchLast = (event) => {
    const lastName = event.target.value;
    this.sortFirstName(lastName)
  }
  // first name results
  employeeFirstName = (value) => {
    let searchResults = this.state.allResults.filter((placeholder) => {

      return placeholder.name.first.toLowerCase().includes(value);
    })
    this.setState({
      parsedResult: searchResults
    })
  }
  // last name results
  employeeLastName = (value) => {
    let searchResults = this.state.allResults.filter((placeholder) => {

      return placeholder.name.last.toLowerCase().includes(value);
    })
    this.setState({
      parsedResult: searchResults
    })
  }
  // // add handleinpuntchange function here
  // handleInpuntchange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  //   // add handleformSubmit function here
  //   // eslint-disable-next-line no-undef
  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //     this.searchEmployees(this.state.search)
  //   }


  // };



  render() {
    const result = this.state.parsedResult;
    return (
      <div>
        <h1> Find an Employee</h1>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              // have to use functions to trigger events on the page 

              name="search"
              type="text"
              className="form-control"
              placeholder="Search For a Employee's last name"
              id="search"
            //onChange={this.searchLast}
            />
            <br />
            <button className="btn btn-primary">
              Search
        </button>
          </div>
        </form>
        <Container>
          <Row>
          {
              result.map((employees, i) => (
                <Column key={i}>
                  <Card
                    image={employees.picture.large}
                    fullname = {employees.name.first + employees.name.last}
                    firstName={employees.name.first}
                    lastName={employees.name.last}
                    age={employees.dob.age}
                    DOB={employees.dob.date}
                    phoneNum={employees.phone}
                    email={employees.email}
                    
                  />
                </Column>
              ))
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Employees;

