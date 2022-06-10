import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getShopsWithPriceByProductId } from "../services/api-service";
import { Shop } from "./Shop";

const ShopsListWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export interface ShopInterface {
    nif: string;
    name: string;
    address: string;
    price: number;
}

export const ShopsList = (props: any) => {

    const { id } = useParams();

    const [shops, setShops] = useState<ShopInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedShop, setSelectedShop] = useState<null | string>(null);

    useEffect(() => {
        getShopsWithPriceByProductId(parseInt(id!)).then(shops => {
            const shopsList = shops.map((shop: any) => {
                return {
                    nif: shop.nif,
                    name: shop.name,
                    address: shop.address,
                    price: shop.price,
                };
            });
            setShops(shopsList);
            setLoading(false);
        });
    }, []);

    const handleShopClick = (panel: string) => {
        if (panel === selectedShop) {
            setSelectedShop(null);
        } else {
            setSelectedShop(panel);
        }
    };

    return (
        <>
            <ShopsListWrapper>
                <h2>Tiendas</h2>
                {!loading && shops.map((shop) => (
                    <Shop shop={shop} key={shop.nif} onChange={handleShopClick} selectedShop={selectedShop}/>
                ))}
            </ShopsListWrapper>
        </>
    );
}