import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popper } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


export const PopperGuest = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleClick = (event: any) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }

    return (
        <>
            <IconButton onClick={handleClick}>
                <AccountCircleIcon fontSize='large' />
            </IconButton>
            <Popper open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, bgcolor: 'background.paper' }}>
                    <List disablePadding>
                        <ListItem component={Link} to={`/login`} disablePadding divider>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LoginIcon />
                                </ListItemIcon>
                                <ListItemText primary="Login" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem component={Link} to={`/register`} disablePadding divider>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Register" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Popper>
        </>
    );
}