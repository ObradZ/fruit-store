import { Box, Modal, Typography } from "@mui/material";
import { textColor } from "../consts/consts";

const MainModal = ({ children, isOpen, close, title }) => {
    return (
        <Modal
            open={isOpen}
            onClose={() => close()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                component="div"
                sx={{
                    width: "568px",
                    left: "50vw",
                    top: "40px",
                    transform: "translate(-50%)",
                    position: "absolute",
                    padding: "36px 0 0",
                    borderRadius: "12px",
                    background: "#4A0267",
                }}
            >
                <Typography
                    sx={{
                        color: textColor,
                        fontSize: "24px",
                        fontWeight: 600,
                        marginBottom: "14px",
                        padding: "0 36px",
                    }}
                >
                    {title}
                </Typography>
                <Box
                    component="div"
                    sx={{
                        maxHeight: "calc(100vh - 200px)",
                        overflowY: "auto",
                        padding: "10px 36px 36px",
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Modal>
    );
};

export default MainModal;
