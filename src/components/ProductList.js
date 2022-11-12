import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";



function Product(props){
    return (
        <Grid>
            <div className="prodList">
                <img src={props.data.image} alt={props.data.title} />
                <div className="prodTitle">{props.data.title.substring(0, 50)}</div>
                <h5>${props.data.price}</h5>
                <Link to={`/product/${props.data.id}`} variant="contained">Details</Link>
            </div>
        </Grid>
    );
}

function ProductList(){
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

        useEffect(() => {
            fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>setProducts(json))
        }, [count]);


    console.log(products);

    return (
        <Grid  container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
        >
            {products.map((val) => {
                return <Product data={val} />;
            })}
        </Grid>
    );
}

export default ProductList;