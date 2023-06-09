import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../Pages/Error/NotFound";
import KingDetail from "@src/Members/MDK/Rooms/King/KingDetail";
import StandardDetail from "@src/Members/MDK/Rooms/Standard/StandardDetail";
import DoubleDetail from "@src/Members/MDK/Rooms/Double/DoubleDetail";
import Services from "@src/Members/MDK/Services";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/" element={<Signin />} />
        <Route path="/dash-board" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route> */}
        <Route path="/" element={<Services />} />
        <Route path="/standard-detail" element={<StandardDetail />} />
        <Route path="/double-detail" element={<DoubleDetail />} />
        <Route path="/king-detail" element={<KingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
