import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../services/user-api-service";
import { passwordRegex } from "./utils/RegExs";

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

    const navigate = useNavigate();

    const [enabledButton, setEnabledButton] = useState<boolean>(false);

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [usernameError, setUsernameError] = useState<boolean>(true);
    const [passwordError, setPasswordError] = useState<boolean>(true);

    const onChangeUsername = (event: any) => {
        const newValue = event.target.value;
        setUsername(newValue);
        validateUsername(newValue);
    }

    const onChangePassword = (event: any) => {
        const newValue = event.target.value;
        setPassword(newValue);
        validatePassword(newValue);
    }

    const validateUsername = (value: any) => {
        setUsernameError(false);
        validateButton();
    }

    const validatePassword = (value: any) => {
        setPasswordError(!passwordRegex.test(value) || value.length < 3 || value.length > 20);
        validateButton();
    }

    const validateButton = () => {
        if (usernameError || passwordError) {
            setEnabledButton(false);
        } else {
            setEnabledButton(true);
        }
    }

    const createForm = () => {
        return {
            username: username,
            password: password
        };
    }

    const submitLogin = (event: any) => {
        event.preventDefault();
        const formInput = createForm();
        login(formInput).then(response => {
            if (response.status === 200) {
                console.log("You are correctly logged in. GZ!");
                navigate("/home", { replace: true });
            }
        });
    }

    return (
        <>
            <LoginWrapper>
                <form onSubmit={submitLogin}>
                    <TextField sx={{marginTop: "40px"}} size="small" onChange={onChangeUsername} id="outlined-basic" label="Username" variant="outlined" />
                    <TextField sx={{marginTop: "20px"}} size="small" onChange={onChangePassword} id="outlined-basic" label="Password" type="password" variant="outlined" />
                    <Button sx={{marginTop: "20px"}} type="submit" variant="contained" disabled={!enabledButton}>Entrar</Button>      
                </form>          
            </LoginWrapper>
        </>
    );
}