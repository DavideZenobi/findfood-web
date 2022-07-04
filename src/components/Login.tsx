import { Button, FormControl, TextField } from "@mui/material";
import styled from "styled-components";

const LoginWrapper = styled.div`
    background-color: white;
    position: relative;
    width: 300px;
    height: 400px;
    border: 1px solid;
    margin: auto;
    text-align: center;
    
`;

export const Login = () => {

    return (
        <>
            <LoginWrapper>
                <TextField sx={{marginTop: "40px"}} id="outlined-basic" label="Username" variant="outlined" />
                <TextField sx={{marginTop: "20px"}} id="outlined-basic" label="Password" type="password" variant="outlined" />
                <Button sx={{marginTop: "20px"}} variant="contained" disabled>Entrar</Button>                
            </LoginWrapper>
        </>
    );
}