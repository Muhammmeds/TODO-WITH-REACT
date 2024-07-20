import { FaPlus } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { useState } from "react";



const Header = ({list , setList}) =>{
    const [todo , setTodo] = useState('')
    const [id , setId] = useState(1)


    const upperCase = (str) =>{
        return str[0].toUpperCase() + str.slice(1, str.length )
    }


    const addTodo = () => {
        if (todo === "") {
            toast.error('Input a task!!', {
                autoClose: 1000,
            });} 
            else {
            let obj = {
                id: id,
                todo: upperCase(todo),
                isDone: false
            };
            setId(id + 1);
            setList([...list , obj])
            setTodo('')           
        }
    };

    return(
        <>
        <div className="header">
            <div className="todo">
                <p>TODO LIST</p>
            </div>
            <div className="addtodo">
                <div className="inputtext">
                <input type="text" placeholder="add todo..."  value={todo} className="textinput" onChange={(e)=>setTodo(e.target.value)} />
                </div>
                <div className="logocontainer" onClick={addTodo}>
                <FaPlus className="logo" />
                </div>

            </div>
        </div>
    
        </>
    )
}
export default Header