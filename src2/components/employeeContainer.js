import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import employeeFinder from "../utils/API";

class employeeContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  searchEmployees = query => {
    employeeFinder.search(query)
    console.log(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };
  // add handleinpuntchange function here
  handleInpuntchange= event =>{
    const value =event.target.value;
    const name = event.target.name;
    this.setState({
      [name]:value
    });
    // add handleformSubmit function here
    // eslint-disable-next-line no-undef
    handleFormSubmit= event =>{
      event.preventDefault();
      this.searchEmployees(this.state.search)
    }


  };

   

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.name || "Search for a Employee to Begin"}
            >
              <EmployeeDetail
                name={this.state.result.name}
                src={this.state.result.picture}
                first={this.state.result.first}
                last={this.state.result.last}
                email={this.state.result.email}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default employeeContainer;
