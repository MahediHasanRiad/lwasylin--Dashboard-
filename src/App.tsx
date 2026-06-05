import MainLayout from "./layout/main.layout";
import { Routes, Route } from "react-router";
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
                <Route path="/housing-manager" element={<HousingManager />} />
                <Route path="/contractor" element={<ContractorPage />} />
                <Route path="/jobs" element={<WorkPage />} />
                <Route path="/subscription" element={<SubscriptionPage />} />

                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<FAQpage />} />


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
