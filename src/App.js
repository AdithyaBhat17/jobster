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

  fetchJobs = () => {
    fetch('https://jobs.github.com/positions.json?markdown=true')
    .then(res => res.json())
    .then(jobs => this.setState({jobs}))
  }

  componentWillMount(){
    this.fetchJobs()
  }

  createdDate = (date) => {
    let postedDate = date.split(' ')
    return `${postedDate[0]}, ${postedDate[2]} ${postedDate[1]}, ${postedDate[5]}`
  }

  render() {
    const { jobs } = this.state
    return (
      <div className="App">
        <Navbar /> <br/>
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
            apply={job.how_to_apply}
            location={job.location}
            type={job.type}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
