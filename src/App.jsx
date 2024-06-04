import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import Sidebar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Financial from "./sections/Financial/Financial";

function App() {
  return (
    <Router>
      <Box display="flex">
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Header />
          <Box sx={{ p: 2 }}>
            <Routes>
              <Route path="/financial" element={<Financial />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
