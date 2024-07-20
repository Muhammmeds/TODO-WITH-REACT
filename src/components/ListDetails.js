import React, { useState } from 'react';
import '../App.css';
import { MdDelete } from "react-icons/md";
import { FaRegFaceSadTear } from "react-icons/fa6";


const ListDetails = ({ list , setList }) => {
    // const [items, setItems] = useState(list);

    const handleCheckboxChange = (id) => {
        setList((list) =>
            list.map(item =>
                item.id === id ? { ...item, isDone: !item.isDone } : item
            )
        );
    };

    const handleDelete = (id) => {
    let confirm = window.confirm('Are you sure you want to delete task?')

    if(confirm){
        setList((list) => list.filter(item => item.id !== id))
    }

    };

    return (
        <div className='listdetails'>
            {list.length ? list.map((item) => (
                <>
                <div className='eachlist' key={item.id}>
                    <div>
                    <input className='checkbox'
                        type='checkbox'
                        checked={item.isDone}
                        onChange={() => handleCheckboxChange(item.id)}
                    />
                    <p
                        style={{ textDecoration: item.isDone ? 'line-through' : 'none', color: item.isDone ? 'grey' : 'black' }}
                    >
                        {item.todo}
                    </p>
                    </div>
                  
                    <div>
                        {!item.isDone ?
                        <MdDelete className='delete'
                             onClick={() => handleDelete(item.id)} 
                         /> : <p className='done'>Done</p>
                        }
                   
                    </div>

                </div>
                <div className='hr'> </div>
                </>

            )) : <p>No Todos Available<FaRegFaceSadTear className='sad'/>!!</p>}
        </div>
    );
};

export default ListDetails;
