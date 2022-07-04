import { useParams } from 'react-router-dom';
import '../css/ProductDetail.css';
import image from '../img/barilla.jpg'
import { useEffect, useState } from 'react';
import { addView, getProduct } from '../services/product-api-service';
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
    timesVisited: number;
}

export const ProductDetail = (props: any) => {

    return (
        <>          
            <ProductDetailContainer>
                <ProductDetailImageContainer>
                    <ProductDetailImage>
                        <img src={image} alt="IMAGEN" className='productDetailImage'></img>
                    </ProductDetailImage>
                </ProductDetailImageContainer>
                <ProductDetailInfoContainer>
                    <h2>{props.product!.name}</h2>
                    <h3>Desde {props.product!.price} € en {props.product!.shopsCount} tiendas</h3>
                    <ProductDetailChart product={props.product} />
                </ProductDetailInfoContainer>
            </ProductDetailContainer>
        </>
    );
}