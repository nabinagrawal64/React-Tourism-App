import ProductForm from './ProductForm';

function NewProduct(props){
    function saveProduct(product){
        console.log("i am inside the neew product");
        console.log(product);

        //calling parent function
        props.printProduct(product);
    }
    return(
        <div>
            <ProductForm onSaveProduct = {saveProduct} />
        </div>
    );
}

export default NewProduct







