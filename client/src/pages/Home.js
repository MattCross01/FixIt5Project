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
<<<<<<< HEAD
                        Welcome to the Fix it Five website! We are five dedicated handymen that can come up with different amazing solutions
                        to your at home problems! Whether its about plumbing, landscaping, or even fixing random household appliances, look
                        no further, we have the guy for you!
                        </p>
                        <p>
                        Asking for a job is as simple as clicking a link! Fill out our job request form and fill in the requirements you need
                        from us. One of our five amazing handyman will pick up your job and fullfill it for you! The best part of this is that
                        prices are up to you and are completely negotiable! We pride ourselves in our work and you surely will not be 
                        dissappointed!
=======
                        Who is FIXIT5?
FIXIT5 isn't the guy offering home repair services from the back of his pickup truck. FIXIT5 is your personal home improvement consultant and a trusted, knowledgeable resource that is part of a leading national service franchise. 
Our experienced, professional home repair and improvement technicians are skilled craftsmen with an average of 10 years of experience in the trades. We’re so confident in the work we perform that each job we do, whether a repair, installation, assembly or organization task, is backed by our Done Right Guarantee.
You don’t have time to spend on a service that’s less than reliable and dependable, and you shouldn’t let just anyone in your home. When you need professional handyman services you can trust and depend on to get it done right, you can count on FIXIT5.
                        </p>
                        <p>
                        Repeat customers from across the country love the convenience of working with us, and we love nothing better than improving your home; making it safer, more functional and simply a more comfortable place to live. Contact your local FIXIT5 today.
                        </p>
                        <p>
                        FIXIT5 is your one-call solution for a wide range of home maintenance and repair needs. Our uniformed technicians are fully insured professionals. We arrive on time in uniform and a marked van with the tools to complete the job right.

FIXIT5 technicians are highly skilled craftsmen with an average of 10 years’ experience in the trades. We’re home repair and improvement experts, and we are known for the quality of our workmanship and professional reliability so you know the job will be done correctly and efficiently.

FIXIT, was founded in 2010 and has served nearly 1 million customers across North America. Here are a few reasons why our customers recommend FIXIT5 to their friends.

One simple call provides easy scheduling
On time arrival
Job is done right the first time
Wide variety of repair, maintenance and improvements services
Technicians have an average of 10 years’ experience in the trades and are fully insured for your safety
We promise to clean up when we’re done
Our quality workmanship is guaranteed
>>>>>>> 392aefa3587dc4c8f1695345fa549a5d89bbd585
                        </p>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
