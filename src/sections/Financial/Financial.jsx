import FinancialOverview from "../../components/FinancialOverview";
import Payments from "../../components/Payments";
import Analytics from "../../components/Analytics";
import { createTheme, ThemeProvider } from "@mui/material";
const Financial = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#0f1b33",
        paper: "#000d27",
      },
      text: {
        primary: "#fff",
      },
      primary: {
        main: "#00FF00",
      },
      secondary: {
        main: "#FFA500",
      },
    },
  });
  return (
    <div className="Financial">
      <FinancialOverview />
      <ThemeProvider theme={theme}>
        <Analytics />

        <Payments />
      </ThemeProvider>
    </div>
  );
};

export default Financial;
