import MainLayout from "./layout/main.layout";
import { Routes, Route } from "react-router";
import OverviewPage from "./feature/overview/overview.page";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={""} />
      </Route>

      <Route>
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="" element={<OverviewPage />} />
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
