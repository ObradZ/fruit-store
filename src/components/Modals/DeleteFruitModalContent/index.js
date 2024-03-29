import { List, Popover, Typography } from "@mui/material";
import useFruit from "../../../hooks/useFruits";
import { FruitItem, FruitProperty, FruitPropertyWrapper, FruiHeader, DeleteButton } from "./styles";
import { useState } from "react";
import MainButton from "../../Button";
import { Box } from "@mui/system";
import { COUNTRIES, textColor } from "../../../consts/consts";
import WarningImage from "../../../assets/warning-icon.svg";
import sortBy from "lodash/sortBy";
import { FixedSizeList } from "react-window";

const getColor = (index) => {
    if (index === 0) {
        return "#5F037E";
    }
    if (index === 1) {
        return "#6B048C";
    }
    return index % 2 === 0 ? "#5F037E" : "#6B048C";
};

const Row = ({ data, index, style, setTargetId, setAnchorEl }) => {
    const fr = data.fruit[index];

    return (
        <FruitItem sx={{ background: getColor(index) }} style={style} key={fr.id}>
            <FruitPropertyWrapper>
                <FruitProperty>{fr.tab}</FruitProperty>
            </FruitPropertyWrapper>
            <FruitPropertyWrapper>
                <FruitProperty>{COUNTRIES.find((item) => item.code === fr.country).name}</FruitProperty>
            </FruitPropertyWrapper>
            <FruitPropertyWrapper>
                <FruitProperty textOverflow="ellipsis">{fr.name}</FruitProperty>
            </FruitPropertyWrapper>
            <FruitPropertyWrapper>
                <DeleteButton
                    onClick={(e) => {
                        data.setTargetId(fr.id);
                        data.setAnchorEl(e.currentTarget);
                    }}
                >
                    Delete
                </DeleteButton>
            </FruitPropertyWrapper>
        </FruitItem>
    );
};

const DeleteFruitModalContent = ({ closeModal }) => {
    const { fruit, deleteFruit } = useFruit();
    const [anchorEl, setAnchorEl] = useState(null);
    const [targetId, setTargetId] = useState(null);
    const isPopoverOpen = Boolean(anchorEl);

    const handleClosePopover = () => {
        setAnchorEl(null);
        setTargetId(null);
    };

    const handleDeleteFruit = () => {
        if (targetId !== null) {
            deleteFruit(targetId);
            handleClosePopover();
        }
    };

    const sortedFruit = sortBy(fruit, "tab");

    return (
        <div>
            <List>
                <FruiHeader>
                    <FruitPropertyWrapper>
                        <FruitProperty>Tab</FruitProperty>
                    </FruitPropertyWrapper>
                    <FruitPropertyWrapper>
                        <FruitProperty>Country</FruitProperty>
                    </FruitPropertyWrapper>
                    <FruitPropertyWrapper>
                        <FruitProperty textOverflow="ellipsis">Name</FruitProperty>
                    </FruitPropertyWrapper>
                    <FruitPropertyWrapper>
                        <FruitProperty>Action</FruitProperty>
                    </FruitPropertyWrapper>
                </FruiHeader>
                <FixedSizeList
                    itemSize={40}
                    itemCount={sortedFruit.length}
                    height={sortedFruit.length < 11 ? sortedFruit.length * 40 : 440}
                    itemData={{ fruit: sortedFruit, setTargetId, setAnchorEl }}
                    itemKey={(index, data) => data.fruit[index].id}
                >
                    {Row}
                </FixedSizeList>
            </List>
            <Popover
                id={"delete-popover"}
                open={isPopoverOpen}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                slotProps={{ paper: { style: { borderRadius: "0" } } }}
            >
                <Box sx={{ background: "#3C0054", display: "flex", alignItems: "center", padding: "14px 14px 0 14px" }}>
                    <Box component="img" alt="Warning" src={WarningImage} sx={{ position: "relative", top: "-1px" }} />
                    <Typography
                        sx={{
                            color: textColor,
                            fontSize: "16px",
                            lineHeight: "20px",
                            marginLeft: "10px",
                        }}
                    >
                        Are you sure to delete this Fruit?
                    </Typography>
                </Box>

                <Box sx={{ padding: "14px", background: "#3C0054", display: "flex", justifyContent: "flex-end" }}>
                    <MainButton primary={false} action={() => handleClosePopover()}>
                        Cancel
                    </MainButton>
                    <div style={{ width: "16px" }}></div>
                    <MainButton action={handleDeleteFruit}>Ok</MainButton>
                </Box>
            </Popover>
        </div>
    );
};

export default DeleteFruitModalContent;
