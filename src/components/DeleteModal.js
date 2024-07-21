import '../App.css'

const DeleteModal = () =>{
    
    return(
        <div className='modalbackground'>
            <div className='modal'>
                <p>Are you sure?</p>
                <div>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>

        </div>
    )
}

export default DeleteModal