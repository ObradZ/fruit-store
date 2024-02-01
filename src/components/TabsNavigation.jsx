import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FruitList from "./FruitList";
import { TABS, TABS_KEYS } from "../consts/enums";
import { useEffect, useState } from "react";
import { purplePrimary } from "../consts/consts";

const TabsNavigation = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const selectTab = (index) => {
        setTabIndex(index);
        window.location.hash = TABS[TABS_KEYS[index]];
    };
    useEffect(() => {
        if (window.location.hash) {
            const locationPar = window.location.hash.substring(1);
            const tabFromUrl = TABS_KEYS.findIndex((key) => key.toLowerCase() === locationPar.toLowerCase());
            setTabIndex(tabFromUrl);
        }
    }, []);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={selectTab}>
            <TabList style={{ background: purplePrimary }}>
                {TABS_KEYS.map((key) => (
                    <Tab
                        key={key}
                        value={key}
                        style={{
                            background: "#4E036C",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "14px",
                            padding: "16px 24px",
                            opacity: "0.64",
                        }}
                    >
                        {TABS[key]}
                    </Tab>
                ))}
            </TabList>
            {TABS_KEYS.map((key) => (
                <TabPanel key={key} style={{ background: purplePrimary }}>
                    <FruitList selectedTab={key} />
                </TabPanel>
            ))}
        </Tabs>
    );
};

export default TabsNavigation;
