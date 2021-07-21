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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                        consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
                        sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
                        gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
                        turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
                        tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
                        quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
                        volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
                        mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
                        tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
                        </p>
                        <p>
                        Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
                        malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
                        ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
                        nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
                        Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
                        porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
                        </p>
                        <p>
                        Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
                        tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
                        sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
                        Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
                        congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
                        vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
                        nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
                        Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
                        libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
                        eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
                        interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
                        massa.
                        </p>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
