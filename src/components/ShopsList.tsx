import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getShopsWithPriceByProductId } from "../services/shop-api-service";
import { Shop } from "./Shop";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ShopsListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export interface ShopsListInterface {
    shops: ShopInterface[];
    shopsCount: number;
}

export interface ShopInterface {
    nif: string;
    name: string;
    address: string;
    price: number;
}

export const ShopsList = (props: any) => {

    const [shops, setShops] = useState<ShopInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedShop, setSelectedShop] = useState<null | string>(null);
    const [shopsPerPage, setShopsPerPage] = useState<number>(5);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        getShopsWithPriceByProductId(parseInt(props.productId!), currentPage).then(shops => {
            const shopsList = shops.shops.map((shop: any) => {
                return {
                    nif: shop.nif,
                    name: shop.name,
                    address: shop.address,
                    price: shop.price,
                };
            });
            setShops(shopsList);
            setTotalPages(Math.ceil(shops.shopsCount / shopsPerPage));
            setLoading(false);            
        });
    }, [currentPage]);

    const handleShopClick = (panel: string) => {
        if (panel === selectedShop) {
            setSelectedShop(null);
        } else {
            setSelectedShop(panel);
        }
    };

    const handlePageClick = (event: any, selectedPage: number) => {
        if (currentPage !== selectedPage) {
            setCurrentPage(selectedPage);
        }
    }

    return (
        <>
            <ShopsListWrapper>
                <h2>Tiendas</h2>
                {totalPages >= 2 &&
                    <Stack spacing={2}>
                        <Pagination count={totalPages} color="primary" onChange={handlePageClick} />
                    </Stack>
                }
                <div style={{marginTop: '10px'}}>
                    {!loading && shops.map((shop) => (
                        <Shop shop={shop} key={shop.nif} onChange={handleShopClick} selectedShop={selectedShop}/>
                    ))}
                </div>
            </ShopsListWrapper>
        </>
    );
}