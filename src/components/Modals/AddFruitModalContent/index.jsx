import { Box, Button, FormControl } from "@mui/material";
import { TABS } from "../../../consts/enums";
import { COUNTRIES, textColor } from "../../../consts/consts";
import MainButton from "../../Button";
import { ErrorText, Item, MainSelect, SelectLabel, TextInput } from "./styles";
import IconPreview from "../../../assets/icon-preview.png";
import useAddFruitForm from "../../../hooks/useAddFruitForm";
const AddFruitModalContent = ({ closeModal }) => {
    const {
        tab,
        image,
        country,
        fruitName,
        price,
        iconUrl,
        description,
        fruitError,
        setImage,
        setCountry,
        setDescription,
        setTab,
        setFruitName,
        setPrice,
        setIconUrl,
        saveFruit,
        setFruitError,
    } = useAddFruitForm();

    const onImageChange = (event) => {
        if (
            event.target.files[0].type === "image/jpeg" ||
            event.target.files[0].type === "image/jpg" ||
            event.target.files[0].type === "image/png" ||
            event.target.files[0].type === "image/webp"
        ) {
            if (event.target.files && event.target.files[0]) {
                setImage(URL.createObjectURL(event.target.files[0]));
            }
        }
    };

    const handleSave = () => {
        if (saveFruit()) {
            closeModal();
        }
    };

    return (
        <Box component="div">
            <FormControl fullWidth>
                <SelectLabel shrink id="fruit-tab">
                    Tab
                </SelectLabel>
                <MainSelect id="fruit-tab" label="Tab" value={tab} onChange={(e) => setTab(e.target.value)}>
                    {Object.keys(TABS).map((key) => (
                        <Item value={key}>{TABS[key]}</Item>
                    ))}
                </MainSelect>
            </FormControl>
            <FormControl fullWidth>
                <SelectLabel shrink id="fruit-country">
                    Country
                </SelectLabel>
                <MainSelect
                    id="fruit-country"
                    label="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    {COUNTRIES.map((country) => (
                        <Item value={country.code}>{country.name}</Item>
                    ))}
                </MainSelect>
            </FormControl>
            <TextInput
                InputLabelProps={{ shrink: true }}
                fullWidth
                type="fruit"
                id="fruit"
                autoComplete="off"
                label="Fruit"
                variant="outlined"
                required
                error={fruitError}
                value={fruitName || ""}
                onChange={(e) => {
                    const fruit = e.target.value;
                    if (fruit) {
                        setFruitError("");
                    }
                    setFruitName(e.target.value);
                }}
            />
            {fruitError && <ErrorText>* {fruitError}</ErrorText>}
            <TextInput
                InputLabelProps={{ shrink: true }}
                fullWidth
                type="number"
                id="price"
                autoComplete="off"
                label="Price"
                variant="outlined"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <Box sx={{ display: "flex", flexDirection: "column", marginBottom: "24px" }}>
                <div>
                    <Button
                        variant="contained"
                        component="label"
                        sx={{
                            color: textColor,
                            backgroundColor: "#5F037E",
                            padding: "12px 16px",
                            fontSize: "14px",
                            fontWeight: 600,
                            lineHeight: "16px",
                            marginBottom: "10px",
                            ":hover": {
                                background: "#6B048C",
                            },
                            ":active": {
                                background: "#540474",
                            },
                        }}
                    >
                        Upload Image
                        <input type="file" onChange={onImageChange} hidden />
                    </Button>
                </div>
                <Box
                    sx={{
                        width: "100%",
                        maxHeight: "140px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#3C0054",
                        borderRadius: "8px",
                        height: "140px",
                    }}
                >
                    <Box
                        component="img"
                        sx={{ maxWidth: "400px", maxHeight: "120px", borderRadius: "8px" }}
                        alt="preview"
                        src={image || IconPreview}
                    />
                </Box>
            </Box>
            <TextInput
                fullWidth
                InputLabelProps={{ shrink: true }}
                id="iconUrl"
                autoComplete="off"
                label="Icon URL"
                placeholder="If you don't have local picture, please input icon URL."
                variant="outlined"
                value={iconUrl}
                onChange={(e) => setIconUrl(e.target.value)}
            />
            <TextInput
                fullWidth
                InputLabelProps={{ shrink: true }}
                multiline
                autoComplete="off"
                id="description"
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ ".MuiInputBase-input": { padding: 0 } }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "36px" }}>
                <MainButton primary={false} action={closeModal}>
                    Cancel
                </MainButton>
                <div style={{ width: "16px" }}></div>
                <MainButton action={() => handleSave()}>Save</MainButton>
            </Box>
        </Box>
    );
};

export default AddFruitModalContent;
