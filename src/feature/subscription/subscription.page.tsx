import { Plus } from "lucide-react";
import TopBar from "../Add-Community/components/top-bar";
import { PackagesDialog } from "./components/create-package-dialog";
import SubscriptionCard from "./components/subscription-card";

const benefits = [
  'Communication & Report',
  'Store management',
  'Marketing Operating',
  'Marketplace Advertising',
  'Marketing Operating'
]

function SubscriptionPage() {
  return (
    <section className="p-4">
      {/* top bar  */}
      <section>
        <TopBar
          title="Dashboard Overview"
          description="Welcome back! Here's yours system overview"
        />
      </section>

      <section className="p-10 bg-[#e6eaef] rounded-[20px] mt-10 space-y-4">
        <section className="flex justify-between">
          <div>
            <span className="text-2xl">All Packages</span>
          </div>
          <div>
            <PackagesDialog Icon={Plus} text={"Add Packages"} title={"Create Packages"} />
          </div>
        </section>

        {/* card  */}
        <section className="grid md:grid-cols-3 gap-8">
          <SubscriptionCard title={'Monthly Membership'} price={10} duration={'monthly'} benefits={benefits}/>
          <SubscriptionCard title={'Monthly Membership'} price={10} duration={'monthly'} benefits={benefits}/>
        </section>
      </section>
    </section>
  );
}

export default SubscriptionPage;
