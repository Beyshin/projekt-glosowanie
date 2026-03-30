import DashboardPage from "./pages/DashboardPage";
import {Routes, Route} from 'react-router-dom';
import ElectionPage from "./pages/ElectionPage.jsx";


export default function App() {
    return(
        <Routes>
          <Route path="/" element={<DashboardPage/>}/>
          <Route path="/election" element={<ElectionPage/>}/>
        </Routes>
    )
}
