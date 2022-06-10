import { useParams } from 'react-router-dom';
import '../css/ProductDetail.css';
import image from '../img/barilla.jpg'
import { useEffect, useState } from 'react';
import { getProduct } from '../services/api-service';
import { ProductDetailChart } from './ProductDetailChart';
import styled from 'styled-components';

const ProductDetailContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const ProductDetailImageContainer = styled.div`
    width: 50%;
    margin-left: 10px;
    margin-top: 10px;
`;

const ProductDetailImage = styled.div`
    background-color: darkgrey;
    width: 450px;
    height: 350px;
    border: 1px solid;
`;

const ProductDetailInfoContainer = styled.div`
    width: 50%;
    margin-right: 20px;
`;

export interface ProductInterface {
    id: number;
    name: string;
    brand: string;
    weight: number;
    description: string;
    price: number;
    shopsCount: number;
}

export const ProductDetail = (props: any) => {

    //Get ID from URL
    const { id } = useParams();

    const [product, setProduct] = useState<ProductInterface>();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getProduct(id).then(product => {
            setProduct(product);
            setLoading(false);
        });
    }, []);

    return (
        <>          
            <ProductDetailContainer>
                <ProductDetailImageContainer>
                    <ProductDetailImage>
                        <img src={image} alt="IMAGEN" className='productDetailImage'></img>
                    </ProductDetailImage>
                </ProductDetailImageContainer>
                <ProductDetailInfoContainer>
                    {!loading && (
                        <>
                            <h2>{product!.name}</h2>
                            <h3>Desde {product!.price} € en {product!.shopsCount} tiendas</h3>
                            <ProductDetailChart product={product} />
                        </>
                    )}
                </ProductDetailInfoContainer>
            </ProductDetailContainer>
        </>
    );
}