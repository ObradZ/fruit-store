import { Typography } from "@mui/material";
import Header from "./components/Header";
import TabsNavigation from "./components/TabsNavigation";
import "react-tabs/style/react-tabs.css";
import { textColor } from "./consts/consts";

function App() {
    return (
        <div className="App">
            <Header />
            <Typography
                sx={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px", marginTop: "72px", color: textColor }}
            >
                Fruit List
            </Typography>

            <TabsNavigation />
        </div>
    );
}

export default App;
