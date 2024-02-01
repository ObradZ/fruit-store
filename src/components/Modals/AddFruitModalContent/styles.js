import { InputLabel, MenuItem, Select, TextField, Typography, styled } from "@mui/material";
import { textColor } from "../../../consts/consts";

export const MainSelect = styled(Select)({
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "16px",
    color: textColor,
    background: "#5F037E",
    borderRadius: "8px",
    marginBottom: "24px",

    ".MuiSelect-select": {
        padding: 12,
    },
    ".MuiOutlinedInput-notchedOutline": {
        borderColor: "#5F037E",
        color: "#AF08F2",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#AF08F2",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#AF08F2",
        color: "#AF08F2",
    },
    ".MuiSvgIcon-root ": {
        fill: "#AF08F2 !important",
    },
    "& .MuiList-root": {
        paddingTop: "0 !important",
    },
});

export const SelectLabel = styled(InputLabel)({
    "&.MuiInputLabel-shrink": {
        color: textColor,
        fontSize: "16px",
    },
    color: textColor,
});

export const Item = styled(MenuItem)({
    fontSize: "14px",
    fontWeight: 600,
    color: textColor,
    background: "#5F037E",
    pading: "12px",
    ":hover": {
        background: "#7805A6",
    },
    "&.Mui-focusVisible": {
        background: "#7805A6",
    },
    "&.Mui-selected": {
        background: "#7805A6",
        ":hover": {
            background: "#7805A6",
        },
    },
});

export const TextInput = styled(TextField)({
    marginBottom: "24px",
    background: "#5F037E !important",
    borderRadius: "8px",
    borderColor: "#5F037E",

    ".MuiInputBase-input": {
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "16px",
        color: textColor,
        background: "#5F037E !important",
        borderRadius: "8px",
        padding: 12,
        borderColor: "#5F037E",
    },
    ".Mui-focused": {
        color: textColor,
    },
    ".MuiInputLabel-root": {
        color: textColor,
    },
    ".MuiOutlinedInput-notchedOutline": {
        borderColor: "#5F037E",
        color: "#AF08F2",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#AF08F2",
    },
    ":hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#AF08F2 !important",
        color: "#AF08F2",
    },
    ".MuiSvgIcon-root ": {
        fill: "#AF08F2 !important",
    },
    "& .MuiList-root": {
        paddingTop: "0 !important",
    },

    "& label.Mui-focused": {
        color: textColor,
    },

    "&:focus .MuiOutlinedInput-notchedOutline": {
        borderColor: "#AF08F2",
        color: "#AF08F2",
    },

    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "#AF08F2",
        },
    },
});

export const ErrorText = styled(Typography)({
    fontSize: "12px",
    lineHeight: "14px",
    color: "#d32f2f",
    marginTop: "-20px",
    marginBottom: "24px",
});
