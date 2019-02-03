import React, { Component } from 'react';
import Navbar from './Navbar';
import Jobs from './Jobs';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      jobs: []
    }
  }

  fetchJobs = (description) => {
    console.log(description)
    fetch(`https://jobs.github.com/positions.json?markdown=true&description=${description === undefined ? '' : description}`)
    .then(res => res.json())
    .then(jobs => this.setState({jobs}))
  }

  componentWillMount(){
    this.fetchJobs()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchterm !== this.state.searchterm)
      this.fetchJobs(this.state.searchterm)
  }

  apply = (data, company) => {
    let applyLink= data.substring(data.indexOf('(')+1, data.indexOf(')'))
    return applyLink !== '' ? applyLink : company !== null ? company : '#'
  }

  createdDate = (date) => {
    let postedDate = date.split(' ')
    return `${postedDate[0]}, ${postedDate[2]} ${postedDate[1]}, ${postedDate[5]}`
  }

  searchJob = (e) => {
    this.setState({searchterm: e.target.value})
  }

  render() {
    const { jobs, linkerror } = this.state
    console.log(jobs)
    return (
      <div className="App">
        <Navbar 
          searchJob={this.searchJob}
        /> <br/>
        <div className="container">
          {jobs && jobs.map(job => (
            <Jobs 
            id={job.id}
            key={job.id}
            title={job.title}
            desc={job.description}
            company={job.company} 
            company_url={job.company_url}
            created_at={this.createdDate(job.created_at)}
            company_logo={job.company_logo}
            apply={this.apply(job.how_to_apply, job.company_url)}
            location={job.location}
            type={job.type}
            linkerror={linkerror}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
