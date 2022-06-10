import classNames from 'classnames';
import { useState } from 'react';
import styled from 'styled-components';
import '../css/ProductDetailChart.css';

const ProductDetailChartWrapper = styled.div`
    
`;

export const ProductDetailChart = (props: any) => {

    const tabsContent = document.getElementsByClassName("tabcontent");

    const [selectedTab, setSelectedTab] = useState("general");

    function openTab(tab: string) {
        setSelectedTab(tab);
        for(var i = 0; i < tabsContent.length; i++) {
            tabsContent[i].setAttribute('style', 'display: none');
        }
        
        document.getElementById(tab)?.setAttribute('style', 'display: block');
    }

    return (
        <>
            <ProductDetailChartWrapper>
                <div className="tab">
                    <button className={classNames("tablinks", {active: selectedTab === "general"})} onClick={() => openTab("general")}>General</button>
                    <button className={classNames("tablinks", {active: selectedTab === "especificaciones"})} onClick={() => openTab("especificaciones")}>Especificaciones</button>
                    <button className={classNames("tablinks", {active: selectedTab === "etiquetas"})} onClick={() => openTab("etiquetas")}>Etiquetas</button>
                </div>
                <div id='general' className={classNames("tabcontent", {active: selectedTab === "general"})}>
                    <ul>
                        <li><b>Marca: </b>{props.product.brand}</li>
                        <li><b>Peso: </b>{props.product.weight} gr</li>
                        <li><b>Descripción: </b>{props.product.description}</li>
                        <li><b>Nº visitas: </b>{props.product.visits}</li>
                    </ul>
                </div>
                <div id='especificaciones' className='tabcontent'>
                    <h3>Esto es especificaciones</h3>
                </div>
                <div id='etiquetas' className='tabcontent'>
                    <h3>Hola! Me llamo etiquetas</h3>
                </div>
            </ProductDetailChartWrapper>
        </>
    );
}