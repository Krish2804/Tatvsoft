import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';

export const Apple = () => {
    const [name, setName] = useState("kp");
    const [email, setEmail] = useState("kp@test.com");
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const Navigate = useNavigate();

    const onHomepageButtonClick = () => {
        // alert("The button has been clicked");
        console.log("Hello !!!");
        console.log("Name: ", name);
        console.log("Email: ", email);
        Navigate("/");
    }

    const handleClick = (event) => {
        console.log(123);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <div style={{
            padding: 5,
        }}>
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer",
            }}

            >
                <div onClick={handleClick} style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    columnGap: 5,
                }}>
                    <Avatar sx={{ bgcolor: "blue" }}>KP</Avatar>
                </div>
            </div>
            <div>
                {/* Apple 🍎 */}
            </div>
            <div style={{
                padding: 5,
                display: "flex",
                flexDirection: "column",
                rowGap: 10,
            }}>
                <TextField type="text" label="Name" value={name} placeholder="Name" variant="outlined" onChange={(e) => {
                    setName(e.target.value);
                }} />
                <TextField type="email" label="Email" value={email} placeholder="email" variant="outlined" onChange={(e) => {
                    setEmail(e.target.value);
                }} />

                {/* <button onClick={onHomepageButtonClick}>Navigate to HomePage </button> */}
                <Button variant="contained" onClick={onHomepageButtonClick} className="">
                    Submit
                </Button>
            </div>

            <Popover open={open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                <div style={{
                    padding: 5,
                }}>
                    <h5>Krish Patel</h5>
                    <LogoutIcon onClick={onHomepageButtonClick} />
                </div>
            </Popover>
        </div>
    );
};