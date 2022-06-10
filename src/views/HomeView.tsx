import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { RandomProducts } from '../components/RandomProducts';

const HomeViewWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    overflow-y: auto
`;

export const HomeView = (props:any) => {

    return (
        <HomeViewWrapper>
          <SearchBar>
          </SearchBar>
          <RandomProducts>
          </RandomProducts>
        </HomeViewWrapper>
    );
}