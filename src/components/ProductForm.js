import { useState } from "react";

function ProductForm(props){

    const [newtitle,setTitle] = useState('');
    const [neweDate,setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:newtitle,
            date:neweDate
        }
        // console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={newtitle} onChange={titleChangeHandler}></input>
            </div>
            <div>
                <label>Date</label>
                <input type="date" value={neweDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    );
}

export default ProductForm;


