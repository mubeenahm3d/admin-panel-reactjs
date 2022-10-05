import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router";
import LeftHeader from "./components/LeftHeader";
import TopHeader from "./components/TopHeader";
import Dealers from "./pages/Dealers";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AlertBar from "./components/AlertBar";
import SubDealers from "./pages/SubDealers";
import Plumbers from "./pages/Plumbers";
import Shops from "./pages/Shops";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddPlumber from "./pages/AddPlumber";
import AddDealer from "./pages/AddDealer";
import AddSubDealer from "./pages/AddSubDealer";
import Detail from "./components/Detail";


function App() {

  const reduxStates = useSelector((state) => state);
  const location = useLocation()
  console.log("location", location.state)
  const muiTheme = createTheme({
    palette: {
      text: {
        primary: "#080808",
      },
    },
    props: {
      'MuiCheckbox': {
        color: "rgb(55, 55, 55)",
        background: "rgb(90, 90, 90)"
      }
    },
    typography: {
      fontSize: 25,
      color: "white",
    },
  });
  return (
    <ThemeProvider theme={muiTheme}>
      <GlobalStyles {...reduxStates.theme.theme}></GlobalStyles>
      <div className="root-left">
        <LeftHeader />
      </div>
      <div className="root-right">
        <TopHeader />
        {reduxStates.alert.alertState !== false && (
          <AlertBar alertStates={reduxStates.alert} />
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/dealers" element={<Dealers />} />
          <Route path="/admin/dealers/add" element={<AddDealer />} />
          <Route path="/admin/dealers/detail" element={<Detail />} />
          <Route path="/admin/sub-dealers" element={<SubDealers />} />
          <Route path="/admin/sub_dealers/add" element={<AddSubDealer />} />
          <Route path="/admin/sub_dealers/detail" element={<Detail />} />
          <Route path="/admin/plumbers" element={<Plumbers />} />
          <Route path="/admin/plumbers/add" element={<AddPlumber />} />
          <Route path="/admin/plumbers/detail" element={<Detail />} />
          <Route path="/admin/shops" element={<Shops />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
