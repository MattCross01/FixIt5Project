import React, { Component } from "react";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Row from "../components/Row";
import Col from "../components/Col";
// import {Input, SubmitBtn} from "../components/Search/Search";
import API from "../utils/API";
// import ResultList from "../components/ResultList/ResultList";

class Home extends Component {

    state = {
        books: [],
        search: ""
    };

    // Search function for books through Google API
    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                console.log("This is res.data", res.data.items)
                this.setState({
                books: res.data.items,
                search: ""
            })})
            .catch(err => console.log(err));
            
    };

    // Function to handle input data
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    // Function to handle form data submission
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    saveGoogleBook = currentBook => {
        console.log("This is the current book", currentBook);
        API.saveBook({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
        .then(res => console.log("Successfully POSTED to DB!", res))
        .catch(err => console.log("this is the error", err));
    }

    render() {
        return (
            <div>
                <Jumbotron/>
                <Container fluid>  
                    <Row>
                    <Col size="md-12">
                        <h1>Welcome To Fix It 5!</h1>
                    </Col>
                    </Row>
                    <Row>
                    <Col size="md-12">
                        <p>
                        Welcome to the Fix it Five website! We are five dedicated handymen that can come up with different amazing solutions
                        to your at home problems! Whether its about plumbing, landscaping, or even fixing random household appliances, look
                        no further, we have the guy for you!
                        </p>
                        <p>
                        Asking for a job is as simple as clicking a link! Fill out our job request form and fill in the requirements you need
                        from us. One of our five amazing handyman will pick up your job and fullfill it for you! The best part of this is that
                        prices are up to you and are completely negotiable! We pride ourselves in our work and you surely will not be 
                        dissappointed!
                        </p>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
