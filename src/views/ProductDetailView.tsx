import styled from 'styled-components';
import { ProductDetail } from "../components/ProductDetail";
import { ShopsList } from '../components/ShopsList';

const ProductDetailViewWrapper = styled.div`
    width: 1100px;
    max-width: 1100px;
    margin: auto;
    height: 800px;
    border: 2px solid;
    display: flex;
    flex-direction: column;
`;

export const ProductDetailView = (props: any) => {

    return (
        <>
            <ProductDetailViewWrapper>
                <ProductDetail />
                <ShopsList />
            </ProductDetailViewWrapper>
        </>
    );
}