import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { Avatar, Popover } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const Apple = () => {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const Navigate = useNavigate();

    const onHomepageButtonClick = () => {
        Navigate("/");
    }

    useEffect(() => {
        // console.log("This is the new value of the name: ", name);

        // return () => {
        //     console.log("This is the old value of the name: ", name);
        // }
    }, []);

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Please make sure you would have enter atleast 3 character"),
        email: Yup.string().email("Please enter the valid email address"),
    });

    const initialValues = {
        name: "",
        email: "",
    };

    const onFormSubmit = (values) => {
        console.log("On the form submitted", values);
        alert("Form Submitted");
        Navigate("/");
    };

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
            }}>
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
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onFormSubmit}>
                    {({ value,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit, }) => (
                        <form onSubmit={handleSubmit}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                marginBottom: 5,
                            }}>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="Name"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    style={{
                                        paddingBottom: 5,
                                    }} />
                                {touched.name && errors.name && <span style={{
                                    padding: 5,
                                    color: "red",
                                    fontSize: 16,
                                    fontWeight: 500
                                }}>{errors.name}</span>}

                                <TextField
                                    variant="outlined"
                                    type="email"
                                    label="Email"
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    style={{
                                        paddingBottom: 5,
                                    }} />
                                {console.log("email validation: ", errors)}
                                {touched.email && errors.email && <span style={{
                                    padding: 5,
                                    color: "red",
                                    fontSize: 16,
                                    fontWeight: 500
                                }}>{errors.email}</span>}

                                {/* <button onClick={onHomepageButtonClick}>Navigate to HomePage </button> */}
                                <Button variant="contained" type="submit" className="">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
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