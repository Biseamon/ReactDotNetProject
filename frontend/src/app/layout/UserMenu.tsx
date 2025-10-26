import { Add, Logout, Person } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";
import { useAccount } from "../../lib/hooks/useAccount";

export default function UserMenu() {

  const {currentUser, logoutUser} = useAccount();
  const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
        <Button
            onClick={handleClick}
            color="inherit"
            size="large"
            sx={{fontSize: '1.1rem'}}
        >
            <Box
                display='flex'
                alignItems='center'
                gap={2}
            >
                <Avatar />
                {currentUser?.displayName}
            </Box>
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{'aria-labelledby': 'basic-button'}}
        >
            <MenuItem
                component={Link} to='/createActivity'
            >
                <ListItemIcon>
                    <Add />
                </ListItemIcon>
                <ListItemText>Create Activity</ListItemText>
            </MenuItem>
            <MenuItem
                component={Link} to='/profile'
            >
                <ListItemIcon>
                    <Person />
                </ListItemIcon>
                <ListItemText>My Profile</ListItemText>
            </MenuItem>
            <Divider></Divider>
            <MenuItem
                onClick={() => {
                    logoutUser.mutate();
                    handleClose();
                }}
            >
                <ListItemIcon>
                    <Logout />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </MenuItem>
        </Menu>
    </>  
  )
}