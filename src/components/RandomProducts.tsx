import { useEffect, useState } from "react";
import { getRandomProducts } from "../services/api-service"
import { Product } from "./Product";
import '../css/RandomProducts.css';

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
            <div className="container">
                {!loading && randomProducts.map((randomProduct) => (
                    <Product product={randomProduct} key={randomProduct.id}></Product>
                ))}

                {loading && (
                    <>
                        <h1>It's loading</h1>
                    </>
                )}
            </div>
        </>
    )
}