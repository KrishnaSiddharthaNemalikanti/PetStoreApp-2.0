
import {PetAppContextProvider} from "./appContext";
import ResultsPage from "./js/components/container/ResultsPage.jsx"
import DetailsPage from "./js/components/container/DetailsPage.jsx"
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';
import SearchFormPage from "./js/components/container/SearchFormPage.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PetAppContextProvider>
                <Router>
                    <Link to="/home">Search Form </Link>
                    <Link to="/results">Results</Link>
                    <Switch>
                        <Route path="/home" component={SearchFormPage} exact/>
                        <Route path="/results" component={ResultsPage}/>
                        <Route path="/details/:id" component={DetailsPage}/>
                    </Switch>
                </Router>
            </PetAppContextProvider>
        );
    }
}

const wrapper = document.getElementById('create-article-form');
wrapper ? ReactDOM.render(<App/>, wrapper) : false;