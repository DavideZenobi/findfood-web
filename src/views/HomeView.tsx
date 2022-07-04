import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { RandomProducts } from '../components/RandomProducts';

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

    return (
        <HomeViewWrapper>
          <RandomProducts>
          </RandomProducts>
        </HomeViewWrapper>
    );
}