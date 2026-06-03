import MainLayout from "./layout/main.layout";
import { Routes, Route } from "react-router";
import OverviewPage from "./feature/overview/overview.page";
import AddCommunity from "./feature/Add-Community/add-community.page";
import HouseDatabase from "./feature/House-Database(Assets)/house-database.page";
import LoginPage from "./feature/auth/login.page";


function App() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route>
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="" element={<OverviewPage />} />
                <Route path="/add-community" element={<AddCommunity />} />
                <Route path="/house-database" element={<HouseDatabase />} />
                <Route path="*" element={<div>Page Not Found</div>} />
              </Routes>
            </MainLayout>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
