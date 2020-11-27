import axios from 'axios'
import React, { Component } from 'react'
import './Display.css';

class InputDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NewArry: [],


        }
    }






    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response => {
                // console.log(response);
                this.setState({
                    NewArry: response.data.map(item => {
                        return { ...item, editAble: false }
                    })
                })
            })

            .catch(error => {
                console.log(error);
                this.setState({
                    error: "There is Something Error Going On"
                })
            })
    }


    handEdit = (id) => {
        let newIndex
        const FindEditable = this.state.NewArry.find((item, index) => {
            if (item.id == id) { newIndex = index; return true }
            else { return false }
        })
        this.setState({
            NewArry: [...this.state.NewArry.slice(0, newIndex), { ...FindEditable, editAble: true }, ...this.state.NewArry.slice(newIndex + 1)]
        })
    }






    // DeleteItem = (id) => {
    //     const putInGarbage = ([], this.state.NewArry)
    //     putInGarbage.splice(index, 1);
    //     this.setState({
    //         NewArry: putInGarbage
    //     })
    // }

    // finding the item by it's id then spread index before  and after  that element then delete that item

    DeleteItem = (id) => {
        let myIndex = -1
        const FindArry = this.state.NewArry.find((item, index) => {
            if (item.id == id) { myIndex = index; return true }
            else { return false }
        })
        this.setState({ NewArry: [...this.state.NewArry.slice(0, myIndex), ...this.state.NewArry.slice(myIndex + 1)] })
    }









    // FindingPlace = (id) => {
    //     const PlaceFind = this.state.NewArry.find(item => item.id == id)
    //     this.setState({
    //         name: PlaceFind.name,
    //         email: PlaceFind.email
    //     })
    // }







    render() {
        const { NewArry } = this.state
        return (
            <>
                <div className="container_body">
                    {NewArry.map(item => { return <h2 onBlur={(event) => { console.log(event.target.innerHTML) }} contentEditable={item.editAble} key={item.id}>{`I'm ${item.name}`} <button onClick={() => { this.DeleteItem(item.id) }} type="button">Delete Me!!</button><button onClick={(event) => { this.handEdit(item.id) }} type="button">Edit!!</button><input type='text'></input> </h2> })}
                </div>
            </>

        )
    }
}

{/* <div>
    {NewArry.length ? NewArry.map((item, index) => { return <p key={item.id}>{item.email}<h1>{item.name}</h1><button type='button' value='delete' onClick={(event)=>{this.DeleteItem.bind(item.id)}} >Delete this!!</button><button onClick={this.FindingPlace}>Edit!!</button></p> }) : null}
</div>
{error ? <div>{error}</div> : null}
<input type='text' onChange={this.ChanceHandler}></input>
<button onClick={this.DisplayIt}>Click Me</button>
<ul>
    <li>{Arr.map((item, index) => { return <p key={item.index}>{item}</p> })}</li>
</ul> */}
export default InputDisplay;