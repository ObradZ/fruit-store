import { Button, ListItem, ListSubheader, Typography, styled } from "@mui/material";
import { purplePrimary, textColor } from "../../../consts/consts";

export const FruitItem = styled(ListItem)({
    display: "flex",
    padding: 0,
});

export const FruiHeader = styled(ListSubheader)({
    display: "flex",
    margin: 0,
    padding: 0,
    top: -10,
    ">div": {
        background: purplePrimary,
    },
});

export const FruitProperty = styled(Typography)({
    textOverflow: "ellipsis",
    fontSize: "14px",
    color: textColor,
    fontWeight: 600,
    whiteSpace: "nowrap",
    textAlign: "center",
    padding: "8px 12px",
    overflow: "hidden",
    "-webkit-user-select": "none" /* Safari */,
    "-ms-user-select": "none" /* IE 10 and IE 11 */,
    "user-select": "none" /* Standard syntax */,
});

export const DeleteButton = styled(Button)({
    fontSize: "14px",
    color: "#FF7070",
    fontWeight: 400,
    whiteSpace: "nowrap",
    textAlign: "center",
    border: 0,
    textTransform: "capitalize",
    padding: "8px 12px",
    width: "100%",
    "-webkit-user-select": "none" /* Safari */,
    "-ms-user-select": "none" /* IE 10 and IE 11 */,
    "user-select": "none" /* Standard syntax */,
});
export const FruitPropertyWrapper = styled("div")({
    width: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});
