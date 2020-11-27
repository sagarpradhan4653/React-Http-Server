import React, { Component } from 'react'
import axios from 'axios'


class PostList extends Component {
    constructor() {
        super()
        this.state = {
            postitems: [],

        }
    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log(response);
                this.setState({ postitems: response.data })
            })

            .catch(error => {
                console.log(error);
                this.setState({ errorMsg: 'Something Error getting while fetching' })
            })
    }



    render() {
        const { postitems,errorMsg } = this.state
        return (
            <>
                <div>hello PostList</div>
                {
                    postitems.length ?
                        postitems.map(item => <div key={item.id}>{item.title}</div>) : null
                }
                {errorMsg ? <div>{errorMsg}</div> : null}


            </>

        )
    }
}


export default PostList;

