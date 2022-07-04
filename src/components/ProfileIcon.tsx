import styled from 'styled-components';
import { PopperGuest } from './poppers/PopperGuest';

const ProfileIconWrapper = styled.div`

`;

export const ProfileIcon = (props: any) => {

    return (
        <>
            <ProfileIconWrapper>
                <PopperGuest />                           
            </ProfileIconWrapper>
        </>
    );
}