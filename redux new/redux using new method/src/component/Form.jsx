import React from 'react'
import { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';


export default function Form2() {
    
     const dispatch=useDispatch();
     const {value} = useSelector((state)=>state.custom)



    const [name, setName] = useState("");
    // const [Value, setValue] = useState([]);
    const [Update, setUpdate] = useState(true);
    const [selectedid, setselectedid] = useState(null);


    const func = (event) => {
        event.preventDefault();
        if (!name) {
            alert("please enter some value");
        }

        else {

            // const alldata = { id: new Date().getTime().toString(), data: name }
           dispatch({
               type: "addvalue",
               payload:name


           });


           

            setName('');
        }
    }



    // const del = (index) => {

       

    //     const newtodos = [...Value];
    //     newtodos.splice(index, 1);
    //     setValue(newtodos);

    // }

    // const edit = (index) => {
       
    //     const newtodos = [...Value];

    //     setName(newtodos[index]);
    //     setValue(newtodos);
    //     setUpdate(false);
    //     setselectedid(newtodos[index]);

    // }

    // const update = (event) => {
    //     event.preventDefault();
       
    //     let selectedvalue = Value.findIndex((item) => {
    //         return item === selectedid;
    //     })
    //     console.log(selectedvalue);
    //     const newtodos = [...Value];
    //     newtodos[selectedvalue] = name;
    //     setValue(newtodos);
    //     setUpdate(true);
    //     setName('');
    // }



    return (
        <>
            <form className='form'>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button onClick={func}>showit</button>
                {/* {Update ?  : */}

                    {/* // <button onClick={update}>update</button> */}
                {/* } */}


            </form>

            <div>
                {value.map((item, index) => {
                    return (

                        <div key={index}>
                            <div>{item}
                             {/* <button onClick={() => del(index)}>delete</button> */}
                                {/* <button onClick={() => edit(index)}>edit</button> */}


                            </div>
                        </div>

                    )
                }

                )}

            </div>
        </>
    )
}