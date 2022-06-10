import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from "styled-components";

const ShopWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 60px;
    border: 1px solid;
    border-radius: 20px;
`;

export const Shop = (props: any) => {

    const nif = props.shop.nif;

    const handleChange = () => {
        props.onChange(nif);
    }

    return (
        <>
            <Accordion expanded={props.selectedShop === nif} onChange={handleChange}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id={nif+"-bh-header"}
                >
                    <Typography sx={{ width: '33%'}}>
                        {props.shop.name}
                    </Typography>
                    <Typography>Price: {props.shop.price}€</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}