import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useParams } from "react-router-dom";

function ProductDetail(){
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    let { productId } = useParams();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+productId).then(res=>res.json()).then(json=>setProducts(json))
    }, [count]);

    function addCart(x){
        if(!count && x<0) return;
        setCount(count+x);
    }

    return (
        <Grid  container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
        >
            <Box display="flex"
                justifyContent="left"
                alignItems="left"
                minWidth="100vh"
                className="prodDetails">
                <img src={products.image} alt={products.title} className="prodImg" />
                <div>
                    <h3>{products.title}</h3>
                    <h1>${products.price}</h1>
                    <p>{products.description}</p>
                    <div>
                        <div className="addCartBtn" onClick={()=>{addCart(-1)}}>+</div>
                        <div className="addCartTxt">{count}</div>
                        <div className="addCartBtn" onClick={()=>{addCart(1)}}>+</div>
                        <Button variant="contained" onClick={()=>{addCart(1)}}>Add To Cart</Button>
                        <Link to="/" variant="contained" className="backBtn">Back</Link>
                    </div>
                </div>
            </Box>
        </Grid>
    );
}

export default ProductDetail;