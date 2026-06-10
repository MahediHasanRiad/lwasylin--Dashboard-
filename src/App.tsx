import MainLayout from "./layout/main.layout";
<<<<<<< HEAD
import { Routes, Route, Navigate } from "react-router";
=======
import { Routes, Route } from "react-router";
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
import OverviewPage from "./feature/overview/overview.page";
import AddCommunity from "./feature/Add-Community/add-community.page";
import HouseDatabase from "./feature/House-Database(Assets)/house-database.page";
import LoginPage from "./feature/auth/login.page";
import HousingManager from "./feature/Housing-Manager/housing-manager";
import ContractorPage from "./feature/contractor/contractor.page";
import WorkPage from "./feature/work/work.page";
import SubscriptionPage from "./feature/subscription/subscription.page";
import PrivacyPolicyPage from "./feature/privacy-policy/privacy-policy.page";
import TermsAndCondition from "./feature/terms-condition/terms-condition.page";
import AboutPage from "./feature/About/about.page";
import FAQpage from "./feature/FAQ/faq.page";
import IssuePage from "./feature/issue/issue.page";
import SettingPage from "./feature/setting/setting.page";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store/store";
import { adminDataThunk } from "./feature/auth/redux/admin.thunk";
import { toast } from "sonner";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("access-token");
  if (!token) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function App() {
  const { data } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("access-token");
        if (token && data.user.role === "SUPER_ADMIN") {
          await dispatch(adminDataThunk()).unwrap();
        }
      } catch (error: any) {
        const status = error?.status ?? error?.response?.status;
        if (status === 401 || status === 403) {
          toast.error("Session expired, please login again.");
          localStorage.removeItem("access-token");
        }
      } finally {
        setChecked(true);
      }
    })();
  }, []);

  // Wait until auth check is done before rendering routes
  if (!checked) return null;

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/*"
        element={
          <ProtectedRoute>
=======


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
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
            <MainLayout>
              <Routes>
                <Route path="" element={<OverviewPage />} />
                <Route path="/add-community" element={<AddCommunity />} />
                <Route path="/house-database" element={<HouseDatabase />} />
                <Route path="/housing-manager" element={<HousingManager />} />
                <Route path="/contractor" element={<ContractorPage />} />
                <Route path="/jobs" element={<WorkPage />} />
                <Route path="/subscription" element={<SubscriptionPage />} />
<<<<<<< HEAD
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndCondition />}
                />
=======

                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<FAQpage />} />
                <Route path="/issue" element={<IssuePage />} />
                <Route path="/setting" element={<SettingPage />} />
<<<<<<< HEAD
                <Route path="*" element={<div>Page Not Found</div>} />
              </Routes>
            </MainLayout>
          </ProtectedRoute>
        }
      />
=======


                <Route path="*" element={<div>Page Not Found</div>} />
              </Routes>
            </MainLayout>
          }
        />
      </Route>
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
    </Routes>
  );
}

export default App;
