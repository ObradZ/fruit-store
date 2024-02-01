import { Button } from "@mui/material";
import { textColor } from "../consts/consts";

const MainButton = ({ children, action, primary = true }) => {
    return (
        <Button
            onClick={() => action && action()}
            sx={{
                color: textColor,
                backgroundColor: primary ? "#FF7170" : "#5F037E",
                padding: "12px 16px",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "16px",
                ":hover": {
                    background: primary ? "#FF9C9B" : "#6B048C",
                },
                ":active": {
                    background: primary ? "#FE5250" : "#540474",
                },
            }}
        >
            {children}
        </Button>
    );
};

export default MainButton;
