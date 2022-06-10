import '../css/Product.css';
import { Link, useParams } from "react-router-dom";

export const Product = (props: any) => {

    return (
        <>
            <div className="item">
                <Link to={`/product/${props.product.id}`}><p>{props.product.name}</p></Link>
                <p>Since {props.product.price}€</p>
                <p>Shops: {props.product.shopsCount}</p>
            </div>            
        </>
    )
}