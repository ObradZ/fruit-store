import { atom, useAtom } from "jotai";
import mockdata from "../data/mock-data.json";
const fruitAtom = atom([]);
const loadingFruitAtom = atom(false);

const useFruit = () => {
    const [fruit, setFruit] = useAtom(fruitAtom);
    const [isFruitLoading, setIsFruitLoading] = useAtom(loadingFruitAtom);

    const loadFruit = async () => {
        setIsFruitLoading(true);
        const loadfruitPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                // Set only initial data
                if (fruit.length === 0) {
                    setFruit(mockdata);
                }
                resolve("loaded");
            }, 1500);
        });

        await loadfruitPromise;
        setIsFruitLoading(false);
    };

    const addFruit = (item) => {
        const tempFruit = [...fruit];
        tempFruit.push(item);
        setFruit(tempFruit);
    };

    const deleteFruit = (fruitId) => {
        const tempFruit = [...fruit];
        const targetIndex = tempFruit.findIndex((fr) => fr.id === fruitId);
        tempFruit.splice(targetIndex, 1);
        setFruit(tempFruit);
    };

    return { fruit, loadFruit, addFruit, deleteFruit, isFruitLoading };
};

export default useFruit;
