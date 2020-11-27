import React, { useState, useEffect } from 'react'
import configAxios from './ConfigAxios'


export default function Hooks(props) {

    const [update, setUpdate] = useState([])
    const [DemoName, updateName] = useEffect('')




    useEffect(() => {
        configAxios.get('/posts/1/comments')
            .then(response => {
                setUpdate({ update: response.data })
            })
    },[])


    const CustName =(event)=>{
        updateName({DemoName:event.target.value})

    }

    const ValueUpdate =()=>{
        configAxios.post('/posts/1/comments',[{name:DemoName}])
        .then(res=>{
            

        })
    }




    return
    <>
    <div>
        <input onChange={CustName} ></input>
        <button>Add Post</button>
        {update.map((item,index)=>{
            return <h1 key={index}>{item.id}</h1>
        })}
    </div>

    </>


}


