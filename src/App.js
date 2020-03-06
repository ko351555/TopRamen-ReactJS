import React from "react";
import { Container } from 'semantic-ui-react'
import TopramenList from "./TopRamenList";
import SearchBox from "./Search"
class App extends React.Component {

  state = {
    contacts: [],
    countries: [],
    searchYear: ''
  }

  componentDidMount() {
    fetch('http://starlord.hackerearth.com/TopRamen')
      .then(response => response.json())
      .then(jsondata => {
        this.setState({ contacts: jsondata })
        console.log(this.state.contacts)
      })
      .catch(function (e) { console.log(e); });
  }
  handleInput = (event) => {
    console.log(event.target.value)
    this.setState({ searchYear: event.target.value })
  }

  render() {
    let filteredtopramen = this.state.contacts.filter((topramen) => {
      return topramen["Top Ten"].includes(this.state.searchYear)
    })
    return (
      <section style={{background: 'cadetblue'}}className="fullbackground">
        <Container >
          <h3 class="ui block header" style={{
            textAlign: 'center',
            backgroundColor: 'brown'
          }}>Top Ramen List</h3>

          <SearchBox handleInput={this.handleInput} />
          <TopramenList filteredtopramen={filteredtopramen} />


        </Container>
      </section>
    );
  }
}
export default App;
