import React, {Component} from 'react';

const axios = require('axios');

class DetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: {
                name: "",
                animal: "",
                breed: "",
                description: ""
            }
        }
    }

    componentDidMount() {
        const {params} = this.props.match
        let sql1 = "http://localhost:5000/getPetDetail?id=" + params.id;
        axios.get(sql1).then(response => {
            const res = response.data.data
            this.setState(
                {
                    details: res[0]
                }
            )
        })
    }

    render() {
        const {params} = this.props.match
        return (
            <div className="details">
                <h3>Details of pet are </h3>
                <span> Name : {this.state.details.name}</span><br/>
                <span> Animal : {this.state.details.animal}</span><br/>
                <span> Breed : {this.state.details.breed}</span><br/>
                <span> Description : {this.state.details.description}</span><br/>
                <span> Id : {params.id} </span>
            </div>
        );
    }
}

export default DetailsPage;