import React, { Component } from 'react';
import Navbar from './Navbar';
import Jobs from './Jobs';
import { connect } from 'react-redux'
import { fetchJobs } from '../actions'

import { AtomSpinner } from 'react-epic-spinners'

class App extends Component {

  fetchGithubJobs(description) {    
    this.props.dispatch(fetchJobs(description))
  }

  componentWillMount(){
    this.fetchGithubJobs()
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
    e.preventDefault()
    this.fetchGithubJobs(e.target.search.value)
  }

  render() {
    const { jobs, loading } = this.props
    if(loading === true)
      return <div><AtomSpinner color="#1D2B3B" style={{margin: '45vh auto'}} /></div>
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
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.loading)
  return {
    jobs: state.jobs,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);
