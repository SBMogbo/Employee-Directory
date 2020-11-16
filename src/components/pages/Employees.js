import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import Row from "../../components/Row";
import Container from "../../components/Container";
import Column from "../../components/Column";
import "./style.css";

class Employees extends Component {
  state = {
    allResults: [],
    allResultsParsed: [],
    results: []
  };
  componentDidMount() {
    API.searchEmployees().then(res => {
      this.setState({
        allResults: res.data.results,
        allResultsParsed: res.data.results,
        results: res.data.results
      });
    });
  }
  // search first name event
  handleSearchFirst = (event) => {
    const firstName = event.target.value;
    this.sortPeopleFirst(firstName);
  }
  // search last name event
  handleSearchLast = (event) => {
    const lastName = event.target.value;
    this.sortPeopleLast(lastName);
  }
  // first name results
  sortPeopleFirst = (value) => {
    let searchResults = this.state.allResults.filter((doe) => {
      return doe.name.first.toLowerCase().includes(value);
    })
    this.setState({
      allResultsParsed: searchResults
    })
  }
  // function last name results
  sortPeopleLast = (value) => {
    let searchResults = this.state.allResults.filter((doe) => {
      return doe.name.last.toLowerCase().includes(value)
    })
    this.setState({
      allResultsParsed: searchResults
    })
  }
  render() {
    const results = this.state.allResultsParsed;
    return (
      <div>
        <h1 className='text-center'>Employees Finder</h1>
        <form className='search-form form-inline'>
          <div>

            <input className="employeeSearch" placeholder="Search for a Last Name" onChange={this.handleSearchLast} />
          </div>
        </form>
        <Container>
          <Row>
            {
              results.map((employees, i) => (
                <Column key={i}>
                  <Card
                    image={employees.picture.large}
                    fullname={employees.name.first + employees.name.last}
                    firstName={employees.name.first}
                    lastName={employees.name.last}
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