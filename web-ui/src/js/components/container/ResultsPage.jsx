import React, {Component} from 'react';
import {PetAppContext} from "../../../appContext";
import {Link} from 'react-router-dom';

const axios = require('axios');

class ResultsPage extends Component {
    static contextType = PetAppContext

    constructor(props) {
        super(props);
        this.loadDetails = this.loadDetails.bind(this);
        this.state = {
            listOfItems: []
        };
    }

    loadDetails() {
        const {state} = this.context
        console.log("state in details page", state)
        let sql1 = "http://localhost:5000/animalList";
        let body = {
            location: state.location,
            animal: state.animal,
            breed: state.breed,
            age: state.age
        };
        axios.post(sql1, body).then(response => {
            const res = response.data.data
            this.setState(
                {
                    listOfItems: res
                }
            )
        })
    }

    submit(id) {
        console.log("on submit called")
        if(id !== undefined)
        this.props.history.push(`/details/${id}`)
    }

    componentDidMount() {
        this.loadDetails();
    }

    render() {
        console.log("list of items", this.state.listOfItems)
        const listItems = this.state.listOfItems.length > 0 ? this.state.listOfItems.map((d) =>
            <li key={d.id}>name: {d.name} age: {d.age} location: {d.location}}
                <br/>
                <img src={'data:image/jpeg;base64,' + d.picture.data.toString('base64')}/>
                <Link to={`details/${d.id}`}>Click for details</Link>
            </li>) : [];
        return (
            <div>
                <br/>
                <ol>
                    {listItems}
                </ol>
            </div>
        );
    }
}


export default ResultsPage;