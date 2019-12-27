import Input from "../presentational/Input.jsx";
import Select from "react-select";
import React from "react";
import {PetAppContext} from "../../../appContext";

const axios = require('axios');

class SearchFormPage extends React.Component {
    static contextType = PetAppContext

    constructor() {
        super();
        this.state = {
            zip_code: "",
            max_age: "",
            selectedAnimal: "",
            selectedBreed: "",
            disabledSubmit: true,
            response: [],
            responseBreed: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
        this.validate()
    }

    validate() {
        if (Number(this.state.zip_code) !== undefined
            && Number(this.state.max_age) !== undefined
            && this.state.selectedAnimal !== "") {
            this.setState(
                {
                    disabledSubmit: false
                }
            )
        }
    }

    onSelectChanged(optionSelected) {
        let sql1 = "http://localhost:5000/getList?type=" + 'BREED' + "&animal=" + optionSelected.value;
        axios.get(sql1).then(response => {
            this.setState(
                {
                    selectedAnimal: optionSelected.value,
                    responseBreed: response.data.data
                }
            )
        })
        this.validate()
    }

    onSelectChangedBreed(optionSelected) {
        this.setState(
            {
                selectedBreed: optionSelected.value
            })
        this.validate()
    }

    componentDidMount() {
        let sql = "http://localhost:5000/getList?type=" + 'ANIMAL';
        axios.get(sql).then(response => {
            this.setState(
                {
                    response: response.data.data
                }
            )
        })
    }

    submit() {
        const {dispatch} = this.context
        dispatch({type: "set-animal", animal: this.state.selectedAnimal})
        dispatch({type: "set-location", location: Number(this.state.zip_code)})
        dispatch({type: "set-breed", breed: this.state.selectedBreed})
        dispatch({type: "set-age", age: Number(this.state.max_age)})
        this.props.history.push('/results')
    }

    render() {
        const {max_age, zip_code, response, responseBreed} = this.state;
        if (response.length >= 0) {
            var options = [];
            for (var i = 0; i < response.length; i++) {
                var animalOptions = {
                    value: response[i].animal,
                    label: response[i].animal
                };
                options.push(animalOptions);
            }

        }
        if (responseBreed.length >= 0) {
            var options1 = [];
            for (var i = 0; i < responseBreed.length; i++) {
                var breedOptions = {
                    value: responseBreed[i].breed,
                    label: responseBreed[i].breed
                };
                options1.push(breedOptions);
            }
        }
        return (
            <>
                <div>
                    <Input
                        text="Maximum Age"
                        label="max_age"
                        type="text"
                        id="max_age"
                        value={max_age}
                        handleChange={this.handleChange}
                    />
                    <Input
                        text="Zip Code"
                        label="zip_code"
                        type="text"
                        id="zip_code"
                        value={zip_code}
                        handleChange={this.handleChange}
                    />
                    <div>
                        <div><span>Animal</span></div>
                        <Select
                            name="form-field-name"
                            value={this.state.brandSelect}
                            options={options}
                            placeholder="Select an animal"

                            onChange={e => this.onSelectChanged(e)}

                        />
                    </div>
                    <div>
                        <div><span>Breed</span></div>
                        <Select
                            name="form-field-name"
                            value={this.state.brandSelect}
                            options={options1}
                            placeholder="Select a Breed"
                            searchable={false}
                            onChange={e => this.onSelectChangedBreed(e)}
                        />

                    </div>
                </div>
                <button disabled={this.state.disabledSubmit} onClick={this.submit}>Submit</button>
            </>
        );
    }
}

export default SearchFormPage;