import React, { Component } from 'react'
import configAxios from './ConfigAxios'





export const DataContex = React.createContext()
const DataContexNew = React.createContext()


class Context extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetchData: [],
            demoValue: '',


            // anotherKey:'56',
            // passChild: [1, 2, 3, "hello string"]
        }
    }


    componentDidMount() {
        configAxios.get('/posts')
            .then(response => {
                // console.log(response.data);
                this.setState({ fetchData: response.data })
            })

            .catch(error => {
                console.log(error);
            })
    }








    handleChange = (key, val) => {
        this.setState({ [key]: val })
    }


    render() {
        return (
            <>

            
                <DataContex.Provider value={[this.state, this.handleChange]}>
                    {this.props.children}
                </DataContex.Provider>
            </>
        )
    }
}

export default Context


// HTTP client that allows us to make GET and POST requests from the browser.
// Therefore, we can use Axios with React to make requests to an API, return data from the API,
//  and then do things with that data in our React app.