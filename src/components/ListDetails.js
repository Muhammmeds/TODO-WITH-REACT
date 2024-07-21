import React, { useState } from 'react';
import '../App.css';
import { MdDelete } from "react-icons/md";
import { FaRegFaceSadTear } from "react-icons/fa6";

const ListDetails = ({ list , setList }) => {
    const [modal, setModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleCheckboxChange = (id) => {
        setList((list) =>
            list.map(item =>
                item.id === id ? { ...item, isDone: !item.isDone } : item
            )
        );
    };

    const handleDelete = (id) => {
        setList((list) => list.filter(item => item.id !== id));
        setModal(false);
    };

    const CloseModalFromBackground = (e) => {
        if (e.target.classList.contains('modalbackground')) {
            setModal(false);
        }
    };

    return (
        <div className='listdetails'>
            {list.length ? list.map((item) => (
                <div key={item.id}>
                    <div className='eachlist'>
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
                            <MdDelete className='delete' onClick={() => { setModal(true); setItemToDelete(item.id); }}/>
                        </div>
                    </div>
                    <div className='hr'></div>
                </div>
            )) : (
                <p>No Todos Available<FaRegFaceSadTear className='sad'/>!!</p>
            )}

            {modal && (
                <div className='modalbackground' onClick={CloseModalFromBackground}>
                    <div className='modal'>
                        <p>Delete Todo List!!</p>
                        <div>
                            <button onClick={() => handleDelete(itemToDelete)}>Yes</button>
                            <button onClick={() => setModal(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListDetails;
