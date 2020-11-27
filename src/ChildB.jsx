import React, { Component } from 'react'
import {DataContex} from './Context'

export class ChildB extends Component {
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


ChildB.contextType = DataContex
export default ChildB
