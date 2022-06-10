import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const TopBarWrapper = styled.div`
    align-items: center;
    background-color: green;
    display: flex;
    height: 70px;
    width: 100vw;
    justify-content: center;
    position: sticky;
    top: 0;
`;

export const TopBar = (props:any) => {


    return (
        <>
            <TopBarWrapper>
                <Link to="/home"><h2>findfood</h2></Link>
            </TopBarWrapper>
        </>
    );
}