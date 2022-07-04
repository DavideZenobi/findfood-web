import { useEffect, useState } from "react";
import { getRandomProducts } from "../services/product-api-service"
import { ProductCard } from "./ProductCard";
import styled from "styled-components";

const RandomProductsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-style: ridge;
    background-color: white;
`;

export interface ProductInterface {
    id: number;
    name: string;
    brand: string;
    price: number;
    shopsCount: number;
}

export const RandomProducts = (props: any) => {

    const [randomProducts, setRandomProducts] = useState<ProductInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRandomProducts().then(products => {
            const randomProducts = products.map((product: any) => {
                return {
                    id: product.id,
                    name: product.name,
                    brand: product.brand,
                    price: product.price,
                    shopsCount: product.shopsCount,
                };
            });
            setRandomProducts(randomProducts);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <h1>Random Products</h1>
            <RandomProductsWrapper>               
                {!loading && randomProducts.map((randomProduct) => (
                    <ProductCard product={randomProduct} key={randomProduct.id}></ProductCard>
                ))}
                {loading && (
                    <>
                        <h1>It's loading</h1>
                    </>
                )}
            </RandomProductsWrapper>
        </>
    )
}