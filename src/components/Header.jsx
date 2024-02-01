import { Box, Typography } from "@mui/material";
import { useState } from "react";
import MainModal from "./MainModal";
import AddFruitModalContent from "./Modals/AddFruitModalContent";
import { textColor } from "../consts/consts";
import MainButton from "./Button";
import useFruit from "../hooks/useFruits";
import DeleteFruitModalContent from "./Modals/DeleteFruitModalContent";

const Header = () => {
    const [isAddFruitModalOpen, setIsAddFruitModalOpen] = useState(false);
    const [isDeleteFruitModalOpen, setIsDeleteFruitModalOpen] = useState(false);
    const { loadFruit } = useFruit();

    return (
        <header>
            <Typography
                variant="h1"
                sx={{
                    marginBottom: "36px",
                    fontSize: "56px",
                    color: textColor,
                    lineHeight: "68px",
                    fontWeight: 600,
                }}
            >
                Fruit Store
            </Typography>
            <Box
                sx={{
                    marginTop: "36px",
                    marginBottom: "36px",
                    width: "259px",
                    justifyContent: "space-between",
                    display: "flex",
                }}
            >
                <MainButton action={() => loadFruit()}>Load</MainButton>
                <MainButton
                    action={() => {
                        setIsAddFruitModalOpen(true);
                    }}
                >
                    Add
                </MainButton>
                <MainButton
                    action={() => {
                        setIsDeleteFruitModalOpen(true);
                    }}
                    variant="contained"
                >
                    Delete
                </MainButton>
            </Box>
            <MainModal isOpen={isAddFruitModalOpen} close={() => setIsAddFruitModalOpen(false)} title={"Add Fruit"}>
                <AddFruitModalContent closeModal={() => setIsAddFruitModalOpen(false)} />
            </MainModal>
            <MainModal
                isOpen={isDeleteFruitModalOpen}
                close={() => setIsDeleteFruitModalOpen(false)}
                title={"Delete Fruit"}
            >
                <DeleteFruitModalContent />
            </MainModal>
        </header>
    );
};

export default Header;
