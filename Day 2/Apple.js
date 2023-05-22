import { useNavigate } from "react-router-dom";

export const Apple = () => {

    const Navigate = useNavigate();

    const onHomepageButtonClick = () => {
        Navigate("/");
    }

    return (
        <div>
            <div>
                Apple 🍎
            </div>

            <button onClick={onHomepageButtonClick}>Navigate to HomePage </button>
        </div>
    );
}