import React, { Component } from 'react'
import { DataContex } from './Context'
import configAxios from './ConfigAxios'

export class ChildA extends Component {




    itemDelete = (id) => {
        let myIndex
        const [a, b] = this.context
        const findingValue = a.fetchData.find((item, index) => {
            if (item.id == id) { myIndex = index; return true }
            else { return false }
        })
        configAxios.delete(`${'/posts/'}${id}`)
            .then(response => {

                b('fetchData', [...a.fetchData.slice(0, myIndex), ...a.fetchData.slice(myIndex + 1)])
            })
    }







    render() {
        const [s, f] = this.context
        const [a, b] = this.context
        console.log(a, b);
        return (
            <div>

                {a.fetchData.map((item, index) =>
                    <p key={index}>{`My user id ${item.title} this is my description ${item.body}`} <button onClick={() => { this.itemDelete(item.id) }}  >Delete Me!!</button></p>

                )}
                <button onClick={() => { b('passChild', [...a.passChild, 4]) }}>Push Value 4</button>
                <button onClick={() => { b('anotherKey', 60) }} >Click Me!!</button>
            </div>
        )
    }
}


ChildA.contextType = DataContex
export default ChildA



// import React, { useEffect, useState } from 'react'
// import Dummy from './Dummy'
// import ProductDetails from './JsonStub'
// import secureAxios from './secureAxios'
 
// export default function ItemDetailsIndepth(props) {
//     const [myItems, setMyItems ] = useState({ myItem: ProductDetails, currentProduct: {}})
//     const [count, setCount ] =  useState([])
//     const [myInput, setMyInput] = useState('')
 
//     const handleClick = () => {
//         setMyItems({...myItems, myItem: myItems.myItem.slice(0, 3)})
//     }
 
//     const handleUpdate = (id, val) => {
//         let index
//         const findItem = count.find( (item, ind) => {
//             if(item.id == id) { 
//                 index = ind
//                 return true
//             }
//             return false
//         })
//         setCount([...count.slice(0, index), {...findItem, title: val}, ...count.slice(index + 1)])
//     }
 
//     // subscribing
//     // componentDidMount
//     useEffect(() => {
//         secureAxios.get('/todos').then(res => {
//             setCount(res.data)
//         })
 
//         return () => {
//             console.log('I am being unmounted!')
//         }
//     }, [])
 
//     return <>
//                 <div>
//                     <input type="text" value={myInput} onChange={(evt) => { setMyInput(evt.target.value) }} />
//                     <div>{count.map(item => {
//                     return (<div>
//                         <div>{item.title}</div>
//                         <input type="button" value="Update Me" onClick={() => { handleUpdate(item.id, myInput) }} />
//                         </div>)})}</div>
//                     <input type="button" onClick={() => { handleClick()  }} value="Update My Product"/>
//                 </div>
//             </>
// }
 
// export default class ItemDetailsIndepth extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             myItems: ProductDetails,
//             currentProduct: {}
//         }
//     }
 
//     componentDidMount() {
//         const product = this.state.myItems.find(items => items.id == this.props.match.params.productId)
//         this.setState({ currentProduct: product})
//     }
 
//     render() {
//         const { currentProduct } = this.state
//         console.log(this.props, 'ItemDetailsindepth')
//         return <><div>
//                     <div>{currentProduct.itemName}</div>
//                     <div>{currentProduct.price}</div>
//                     <div>{currentProduct.desc}</div>
//                 </div>
//                 </>
//     }
// }