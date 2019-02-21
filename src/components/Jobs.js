import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Jobs(props){
    const [description, setDescription] = useState(false)
    return(
        props.company_logo && (<div className="thumbnail">
            <div className="row">
                <div className="col-md-2">
                    {props.company_logo ? <img className="company-logo" src={props.company_logo} alt={props.company}/> : <span>{props.company}</span>}
                </div>
                <div className="col-md-10">
                    <h6 className="title">
                        {props.title}
                    </h6>
                    <strong className="strong">
                        <a target="_blank" rel="noopener noreferrer" href={props.company_url ? props.company_url : '#'}>@ {props.company}</a>
                        <a className="apply" target={props.apply !== '#' ? '_blank' : 'false'} rel="noopener noreferrer" style={props.apply === '#' ? {opacity: 0} : {opacity: 1}} href={props.apply !== '#' ? props.apply : '#'}>Apply Here</a>
                    </strong>
                    <small className="date">
                        Posted on {props.created_at} &nbsp; &nbsp;
                        <i className="fas fa-map-marker-alt"></i> {props.location} &nbsp; &nbsp;
                        <span className="read" onClick={() => setDescription(!description)}>
                        {description === false ? <span>Read More <i className="fa fa-angle-down"></i></span> :
                        <span>Read Less <i className="fa fa-angle-up"></i></span>}
                        </span>
                    </small>
                </div>
                {description === true && (
                    <div className="container desc">
                        <ReactMarkdown source={props.desc} />
                    </div>
                )}
            </div>
        </div>)
    )
}