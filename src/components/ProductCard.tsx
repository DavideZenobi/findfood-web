import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import image from '../img/barilla.jpg'

export const ProductCard = (props: any) => {
    return (
        <Card sx={{ maxWidth: 345, flex: '0 0 24%', margin: 0 }} variant="outlined">
            <CardActionArea component={Link} to={`/product/${props.product.id}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Desde {props.product.price}€
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


//<Link to={`/product/${props.key}`}></Link>