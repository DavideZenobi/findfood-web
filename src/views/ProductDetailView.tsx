import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProductDetail } from "../components/ProductDetail";
import { ProductsBrandRelated } from '../components/ProductsBrandRelated';
import { ShopsList } from '../components/ShopsList';
import { addView, getProduct } from '../services/product-api-service';

const ProductDetailViewWrapper = styled.div`
    width: 1200px;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const ProductShopWrapper = styled.div`
    width: 100%;
    margin: auto;
    border-style: ridge;
    background-color: white;
    display: flex;
    flex-direction: column;
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

export const ProductDetailView = (props: any) => {

    const { id } = useParams();

    const [product, setProduct] = useState<ProductInterface>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProduct(id).then(product => {
            setProduct(product);
            setLoading(false);
        });

        addView(parseInt(id!));
    }, []);

    return (
        <>
            <ProductDetailViewWrapper>
                <ProductShopWrapper>
                    {!loading && (
                        <ProductDetail product={product}/>
                    )}
                    <ShopsList productId={id}/>
                </ProductShopWrapper>
                {!loading && (
                    <ProductsBrandRelated brand={product!.brand} style="margin-top: 200px" />
                )}    
            </ProductDetailViewWrapper>
        </>
    );
}