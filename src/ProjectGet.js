import { Component } from 'react';
import configAxios from './ConfigAxios'



export default class ProjectGet extends Component{
    constructor(props){
        super(props)
        this.state={
            storeValue:[],
        }
    }



    componentDidMount(){
        configAxios.get('/posts/1/comments')
        .then(res=>{
            // this.setState({storeValue:res.data})
            console.log(res.data);
    
        })
    }
    

}











