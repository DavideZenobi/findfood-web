import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { ProfileIcon } from "./ProfileIcon";
import { SearchBar } from "./SearchBar";
import { SearchBarV2 } from "./SearchBarV2";

const TopBarWrapper = styled.div`
    align-items: center;
    background-color: green;
    display: flex;
    justify-content: space-around;
    height: 70px;
    width: 100vw;
    position: sticky;
    top: 0;
`;

export const TopBar = (props:any) => {


    return (
        <>
            <TopBarWrapper>
                <Link to="/home"><h2>findfood</h2></Link>
                <SearchBarV2 />
                <ProfileIcon />
            </TopBarWrapper>
        </>
    );
}