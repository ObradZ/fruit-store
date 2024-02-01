import { useState } from "react";
import { TABS_KEYS } from "../consts/enums";
import useFruit from "./useFruits";
const useAddFruitForm = () => {
    const { addFruit } = useFruit();
    const [tab, setTab] = useState(TABS_KEYS[0]);
    const [country, setCountry] = useState("JP");
    const [fruitName, setFruitName] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [iconUrl, setIconUrl] = useState();
    const [description, setDescription] = useState();
    const [fruitError, setFruitError] = useState();

    const saveFruit = () => {
        if (!fruitName) {
            setFruitError("Fruit name is required");
            return false;
        }
        addFruit({ tab, country, name: fruitName, price, iconUrl, description });
        return true;
    };

    return {
        tab,
        country,
        fruitName,
        price,
        iconUrl,
        description,
        image,
        fruitError,
        setFruitError,
        setImage,
        setCountry,
        setDescription,
        setTab,
        setFruitName,
        setPrice,
        setIconUrl,
        saveFruit,
    };
};

export default useAddFruitForm;
