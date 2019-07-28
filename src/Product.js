import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }));
    }


    render() {
        const postItems = this.state.posts.map(item => (
            <ul key={item.id}>
                <li><h3>{item.title}</h3></li>
                <li>{item.body}</li>
            </ul>
        ));
        return (
            <div>
                <h1>Products</h1>
                {postItems}
            </div>
        )
    }
}

export default Product