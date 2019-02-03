import React from 'react'

export default function Jobs(props){
    return(
        <div className="thumbnail">
            <div className="row">
                <div className="col-md-2">
                    {props.company_logo ? <img className="company-logo" src={props.company_logo} alt={props.company}/> : <span>{props.company}</span>}
                </div>
                <div className="col-md-10">
                    <h6 className="title">
                        {props.title}
                    </h6>
                    <strong className="strong">
                        <a href={props.company_url ? props.company_url : '#'}>@ {props.company}</a>
                        <a className="apply" target="_blank" rel="noopener noreferrer" style={props.apply === '#' ? {opacity: 0} : {opacity: 1}} href={props.apply !== '#' ? props.apply : '#'}>Apply Here</a>
                    </strong>
                    <small className="date">
                        Posted on {props.created_at}
                    </small>
                </div>
            </div>
        </div>
    )
}