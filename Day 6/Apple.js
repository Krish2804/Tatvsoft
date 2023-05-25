import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { Avatar, Popover } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Apple = () => {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, setUser] = useState([]);

    const Navigate = useNavigate();

    const onHomepageButtonClick = () => {
        Navigate("/");
    }

    useEffect(() => {
        // console.log("This is the new value of the name: ", name);

        // return () => {
        //     console.log("This is the old value of the name: ", name);
        // }
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            console.log("User Details: ", res.data);
            setUser(res.data);
        });
    }, []);

    // const containsNumericValue = /\d/.test(values);

    // if (containsNumericValue) {
    //   console.log('Form name contains a numeric value!');

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Please make sure you would have enter atleast 3 character")
            .matches(/^[a-zA-Z\s]+$/, "Name doesnot contains numeric values")
            .required("Please enter your name"),
        email: Yup.string()
            .email("Please enter the valid email address")
            .required("Please enter your email"),
    });

    const initialValues = {
        name: "",
        email: "",
    };

    const onFormSubmit = async (values) => {
        console.log("On the form submitted", values);
        // alert("Form Submitted");
        // Navigate("/");

        const requestData = {
            userName: values.name,
            userEmail: values.email,
        };

        // call API to post submit the form
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts", requestData);
        if (res.status === 201) {
            console.log(res.data.id);
            toast.success('Api call is completed succesfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
            if (res.status === 200) {
                console.log(res.data.id);
                toast.success('Api is deleted succesfully', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        })
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
            <div>
                {user.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <span>{item.body}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};