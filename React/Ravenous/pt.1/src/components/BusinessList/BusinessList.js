import React from "react";
import './BusinessList.css';
import { Business } from "../Business/Business";

export class BusinessList extends React.Component {
    render() {
        
        return (
            <div className="BusinessList">
                {this.props.businesses.map(mappedBusiness =>{
                    return <Business business={mappedBusiness} />
                })}
            </div>
        )
    }
}


