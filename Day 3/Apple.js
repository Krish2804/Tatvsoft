import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export const Apple = () => {

    const Navigate = useNavigate();

    const onHomepageButtonClick = () => {
        // Navigate("/");
        alert("The button has been clicked");
    }

    return (
        <div>
            <div>
                Apple 🍎
            </div>

            {/* <button onClick={onHomepageButtonClick}>Navigate to HomePage </button> */}
            <Button variant="contained" onClick={onHomepageButtonClick}>Hello World</Button>
        </div>
    );
}