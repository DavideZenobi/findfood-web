import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { RandomProducts } from '../components/RandomProducts';
import { isAuthenticated } from '../services/user-api-service';
import { useEffect } from 'react';

const HomeViewWrapper = styled.div`
    width: 1200px;
    max-width: 1200px;
    margin: auto;
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    overflow-y: auto
`;

export const HomeView = (props:any) => {

    useEffect(() => {
        isAuthenticated().then(authenticated => {
            console.log("Login: ");
            console.log(authenticated);
        });
    }, []);

    return (
        <HomeViewWrapper>
          <RandomProducts>
          </RandomProducts>
        </HomeViewWrapper>
    );
}