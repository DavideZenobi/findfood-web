import { useState } from "react";
import styled from "styled-components";
import { getProductsWithPriceV2 } from "../services/product-api-service";

const SearchBarV2Wrapper = styled.div`
    display: flex;
`;

export interface ProductOption {
    id: number;
    name: string;
    weight: number;
}

export const SearchBarV2 = (props: any) => {

    const [products, setProducts] = useState<ProductOption[]>([]);

    const onInputChange = (event: any) => {
        let text = event.target.value;
        text = text.trim();
        if (text.length >= 3) {
            getProductsOptions(text);
        } else {
            setProducts([]);
        }
    }

    const getProductsOptions = (input: string) => {
        getProductsWithPriceV2(input).then(products => {
            const productsList = products.map((product: any) => {
                return {
                    id: product.id,
                    name: product.name,
                    weight: product.weight,
                };
            });
            setProducts(productsList);
        });
    }

    return (
        <>
            <SearchBarV2Wrapper>
                <input onChange={onInputChange} list="products" type="text" placeholder="Write here!" size={30}></input>
                <datalist id="products">
                    {products.map((product) => (
                        <option key={product.id}>{product.name} / {product.weight}gr</option>
                    ))}
                </datalist>
                <button>Click Me!</button>
            </SearchBarV2Wrapper>
            
        </>
    );
}