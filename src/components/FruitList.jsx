import { useMemo } from "react";
import { Box, LinearProgress, List, ListItem, ListSubheader, Typography } from "@mui/material";
import { TABS } from "../consts/enums";
import groupBy from "lodash/groupBy";
import sortBy from "lodash/sortBy";
import { COUNTRIES, purplePrimary, textColor } from "../consts/consts";
import ReactCountryFlag from "react-country-flag";
import useFruit from "../hooks/useFruits";
import IconPreview from "../assets/icon-preview.png";
import { FixedSizeList } from "react-window";

const Row = ({ data, index, style }) => {
    const fruit = data[index];

    return (
        <ListItem
            key={fruit.id}
            disablePadding
            style={style}
            sx={{
                paddingTop: "16px",
                paddingBottom: "16px",
            }}
        >
            <Box
                component="img"
                src={fruit.iconUrl || IconPreview}
                alt={fruit.name}
                sx={{
                    height: "128px",
                    width: "128px",
                    objectFit: "contain",
                    background: "white",
                    borderRadius: "8px",
                    marginRight: "16px",
                    color: "black",
                }}
            />
            <Box component="div" sx={{ padding: "8px" }}>
                <Typography
                    sx={{
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: textColor,
                        fontWeight: 600,
                        marginBottom: "12px",
                    }}
                >
                    {fruit.name}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: textColor,
                        opacity: "0.72",
                        fontWeight: 400,
                        marginBottom: "24px",
                        minheight: "34px",
                    }}
                >
                    {fruit.description}
                </Typography>
                <Typography
                    sx={{
                        marginTop: "auto",
                        fontSize: "18px",
                        lineHeight: "22px",
                        color: "#209B25",
                        fontWeight: 700,
                    }}
                >
                    $ {fruit.price}
                </Typography>
            </Box>
        </ListItem>
    );
};

const FruitList = ({ selectedTab = "" }) => {
    const { fruit, isFruitLoading } = useFruit();
    const visibleTodos = useMemo(() => {
        if (!selectedTab || selectedTab.toLowerCase() === TABS.ALL.toLowerCase()) {
            return groupBy(sortBy(fruit, "name"), "country");
        }
        const filtered = fruit.filter((f) => f.tab.toLowerCase() === selectedTab.toLowerCase());
        return groupBy(sortBy(filtered, "name"), "country");
    }, [selectedTab, fruit]);

    return (
        <>
            <Box component="div" sx={{ background: purplePrimary, minWidth: "200px" }}>
                {isFruitLoading ? (
                    <LinearProgress color="secondary" sx={{ maring: "36px" }} />
                ) : (
                    <List
                        sx={{
                            width: "100%",
                            bgcolor: purplePrimary,
                            position: "relative",
                            overflow: "auto",
                            padding: "16px 24px",
                            "& ul": { padding: 0 },
                        }}
                    >
                        {Object.keys(visibleTodos).map((key) => (
                            <li key={key}>
                                <ListSubheader
                                    disableSticky
                                    sx={{
                                        fontSize: "16px",
                                        lineHeight: "19px",
                                        color: textColor,
                                        marginBottom: "32px",
                                        marginTop: "32px",
                                        paddingBottom: "8px",
                                        borderBottom: "1px solid #8A06BF",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <ReactCountryFlag
                                        style={{
                                            fontSize: "16px",
                                            lineHeight: "16px",
                                            color: "#000",
                                        }}
                                        countryCode={key}
                                    />
                                    <span style={{ marginLeft: "6px" }}>
                                        {COUNTRIES.find((item) => item.code === key).name}
                                    </span>
                                </ListSubheader>
                                <Box component={"div"} sx={{ width: "100%", maxHeight: "480px" }}>
                                    <FixedSizeList
                                        itemSize={160}
                                        itemCount={visibleTodos[key].length || 0}
                                        height={visibleTodos[key].length < 3 ? visibleTodos[key].length * 160 : 480}
                                        itemData={visibleTodos[key]}
                                        itemKey={(index, data) => data[index].id}
                                    >
                                        {Row}
                                    </FixedSizeList>
                                </Box>
                            </li>
                        ))}
                    </List>
                )}
            </Box>
        </>
    );
};
export default FruitList;
