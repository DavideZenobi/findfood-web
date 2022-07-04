import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Shop = (props: any) => {

    const nif = props.shop.nif;

    const handleChange = () => {
        props.onChange(nif);
    }

    return (
        <>
            <Accordion sx={{width: '100%'}} expanded={props.selectedShop === nif} onChange={handleChange}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id={nif+"-bh-header"}
                >
                    <Typography sx={{fontWeight: 'bold', width: '50%'}}>
                        {props.shop.name}
                    </Typography>
                    <Typography> Precio: {props.shop.price}€</Typography>           
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Dirección: {props.shop.address}
                        Dirección: {props.shop.address}
                        Dirección: {props.shop.address}
                        Dirección: {props.shop.address}
                        Dirección: {props.shop.address}
                        Dirección: {props.shop.address}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}