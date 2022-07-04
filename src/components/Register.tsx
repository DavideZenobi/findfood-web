import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { registerUserAndShop } from "../services/user-api-service";
import { nifRegex } from "./utils/RegExs";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useNavigate } from "react-router-dom";

const RegisterWrapper = styled.div`
    background-color: white;
    margin: auto;
    border: 1px light;
    width: 500px;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

export interface UserAndShop {
    nif: string;
    password: string;
    name: string;
    phoneNumber: string;
    email: string;
    shopName: string;
    address: string;
    autonomousCommunity: string;
    province: string;
    municipality: string;
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
};

export const Register = () => {

    const navigate = useNavigate();
    const [enabledButton, setEnabledButton] = useState<boolean>(false);
    const [registerSucceed, setRegisterSucceed] = useState<boolean>(false);

    const [openModal, setOpenModal] = useState<boolean>(false);
    const closeModal = () => { 
        setOpenModal(false); 
    }

    const [nif, setNif] = useState<string>("");
    const [password, setPassword] = useState<string>();
    const [repassword, setRepassword] = useState<string>();
    const [name, setName] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [email, setEmail] = useState<string>();

    const [shopName, setShopName] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [autonomousCommunity, setAutonomousCommunity] = useState<string>();
    const [province, setProvince] = useState<string>();
    const [municipality, setMunicipality] = useState<string>();

    const [nifError, setNifError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [repasswordError, setRepasswordError] = useState<boolean>(false);
    const [nameError, setNameError] = useState<boolean>(false);
    const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);

    const [shopNameError, setShopNameError] = useState<boolean>(false);
    const [addressError, setAddressError] = useState<boolean>(false);
    const [autonomousCommunityError, setAutonomousCommunityError] = useState<boolean>(false);
    const [provinceError, setProvinceError] = useState<boolean>(false);
    const [municipalityError, setMunicipalityError] = useState<boolean>(false);

    const onChangeNif = (event: any) => {
        const value = event.target.value.toUpperCase();
        setNif(value);
        validateNif(value);
    }

    const onChangePassword = (event: any) => {
        setPassword(event.target.value);
    }

    const onChangeRepassword = (event: any) => {
        setRepassword(event.target.value);
    }

    const onChangeName = (event: any) => {
        setName(event.target.value);
    }

    const onChangePhoneNumber = (event: any) => {
        setPhoneNumber(event.target.value);
    }

    const onChangeEmail = (event: any) => {
        setEmail(event.target.value);
    }

    const onChangeShopName = (event: any) => {
        setShopName(event.target.value);
    }

    const onChangeAddress = (event: any) => {
        setAddress(event.target.value);
    }

    const onChangeAutonomousCommunity = (event: any) => {
        setAutonomousCommunity(event.target.value);
    }

    const onChangeProvince = (event: any) => {
        setProvince(event.target.value);
    }

    const onChangeMunicipality = (event: any) => {
        setMunicipality(event.target.value);
    }

    const validateNif = (value: string) => {
        setNifError(!nifRegex.test(value) || value.length !== 9);
    }

    
    const validatePassword = () => {
        return true;
    }
    
    const validateRepassword = () => {
        return true;
    }

    const validateName = () => {
        return true;
    }

    const validatePhoneNumber = () => {
        return true;
    }

    const validateEmail = () => {
        return true;
    }

    const validateShopName = () => {
        return true;
    }

    const validateAddress = () => {
        return true;
    }

    const validateAutonomousCommunity = () => {
        return true;
    }

    const validateProvince = () => {
        return true;
    }

    const validateMunicipality = () => {
        return true;
    }
    
    const submitData = (event: any) => {
        event.preventDefault();
        const formInput = createFormInput();
        registerUserAndShop(formInput).then(response => {
            if (response.status === 200) {
                setRegisterSucceed(true);
                console.log(response.status);
            } else {
                setRegisterSucceed(false);
                console.log(response.status);
            }
            setOpenModal(true);
        });
    }

    const createFormInput = () => {
        return {
            nif: nif,
            password: password,
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            shopName: shopName,
            address: address,
            autonomousCommunity: autonomousCommunity,
            province: province,
            municipality: municipality
        }
    }

    const redirectToHome = () => {
        navigate("/home", { replace: true });
    }

    return (
        <>
            <RegisterWrapper>
                <h2>Register</h2>
                Todos los campos son obligatorios.
                <form onSubmit={submitData}>
                    <Box 
                        marginLeft="auto"
                        marginRight="auto"
                        display="flex" 
                        flexDirection="column"
                        width="300px"                    
                    >
                        <h4>Datos personales</h4>
                        <TextField 
                            size="small"
                            sx={{ marginTop: "20px" }} 
                            id="nif" 
                            label="NIF"
                            value={nif}
                            onChange={onChangeNif} 
                            error={nifError}
                        />
                        
                        <TextField 
                            size="small"
                            sx={{ marginTop: "20px" }} 
                            id="password"  
                            label="Password" 
                            type="password" 
                            variant="outlined"
                            onChange={onChangePassword} 
                            error={!validatePassword()}
                        />
                        <TextField
                            size="small" 
                            sx={{ marginTop: "20px" }} 
                            id="repassword" 
                            label="Repeat Password" 
                            type="password" 
                            variant="outlined"
                            onChange={onChangeRepassword}
                            error={!validateRepassword()}
                        />
                        <TextField 
                            size="small"
                            sx={{ marginTop: "20px" }} 
                            id="name" 
                            label="Nombre" 
                            onChange={onChangeName}
                            error={!validateName()}
                        />
                        <TextField 
                            size="small"
                            sx={{ marginTop: "20px" }} 
                            id="phoneNumber" 
                            label="Nº teléfono" 
                            variant="outlined" 
                            onChange={onChangePhoneNumber}
                            error={!validatePhoneNumber()}
                        />
                        <TextField 
                            size="small"
                            sx={{ marginTop: "20px" }} 
                            id="email" 
                            label="Email" 
                            type="email" 
                            variant="outlined" 
                            helperText="Usarás este campo para el login"
                            onChange={onChangeEmail}
                            error={!validateEmail()}
                        />
                    </Box>   
                    <Box 
                        marginLeft="auto"
                        marginRight="auto"
                        display="flex" 
                        flexDirection="column"
                        width="300px"
                    >
                        <h4>Datos de la tienda</h4>
                        <TextField 
                            size="small"
                            sx={{ marginTop: "20px" }} 
                            id="shopName" 
                            label="Nombre de la tienda" 
                            variant="outlined"
                            onChange={onChangeShopName}
                            error={!validateShopName()}
                        />
                        <TextField 
                            size="small"
                            sx={{ marginTop: "20px" }} 
                            id="address" 
                            label="Dirección" 
                            variant="outlined"
                            onChange={onChangeAddress}
                            error={!validateAddress()}
                        />
                        <TextField 
                            size="small"
                            sx={{ marginTop: "20px" }} 
                            id="autonomousCommunity" 
                            label="Comunidad autónoma" 
                            variant="outlined"
                            onChange={onChangeAutonomousCommunity}
                            error={!validateAutonomousCommunity()}
                        />
                        <TextField 
                            size="small"
                            sx={{ marginTop: "20px" }} 
                            id="province" 
                            label="Provincia" 
                            variant="outlined"
                            onChange={onChangeProvince}
                            error={!validateProvince()}
                        />
                        <TextField 
                            size="small"
                            sx={{ marginTop: "20px" }} 
                            id="municipality" 
                            label="Municipio" 
                            variant="outlined"
                            onChange={onChangeMunicipality}
                            error={!validateMunicipality()}
                        />
                    </Box>

                    <Button 
                        sx={{ marginTop: "20px" }}
                        type="submit" 
                        variant="contained"
                    >Registrar</Button>
                </form>
                {registerSucceed && 
                    <Modal
                        open={openModal}
                        onClose={redirectToHome}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                            <CheckCircleIcon color="success"></CheckCircleIcon>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Registro completado 
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Se ha enviado un email de confirmación al {email}. 
                                Una vez complete la autenticación, tendrá que esperar a la confirmación manual por parte del equipo.
                            </Typography>
                        </Box>
                    </Modal>
                }
                {!registerSucceed && 
                    <Modal
                        open={openModal}
                        onClose={closeModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                            <ErrorIcon color="error"></ErrorIcon>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Registro fallido 
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                El NIF/email introducido ya existe
                            </Typography>
                        </Box>
                    </Modal>
                }
            </RegisterWrapper>
        </>
    );
}

/*
<CheckCircleIcon color="success"></CheckCircleIcon>
<ErrorIcon color="error"></ErrorIcon>
*/