import { useEffect } from "react";
import styled from "styled-components";

const ProductsBrandRelatedWrapper = styled.div`
    width: 100%;
    border-style: ridge;
    background-color: white;
`;

export interface ProductInterface {
    id: number;
    name: string;
    price: number;
}

export const ProductsBrandRelated = (props: any) => {

    useEffect(() => {

    }, []);

    return (
        <>
            <ProductsBrandRelatedWrapper>
                <h2>Productos de {props.brand}</h2>
            </ProductsBrandRelatedWrapper>
        </>
    );

}