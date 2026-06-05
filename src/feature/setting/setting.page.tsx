import { Button } from "@/components/ui/button";
import TopBar from "../Add-Community/components/top-bar";
import { ArrowLeft } from "lucide-react";
import { InputField } from "@/shared/input-field";

function SettingPage() {
  const onChangeHandler = (data) => {
    console.log(data);
  };

  return (
    <section>
      <section>
        {/* top bar  */}
        <TopBar
          title="Update Profile"
          description="Welcome back! Here's your profile data"
        />
      </section>

      <section className="p-4 bg-[#e6eaef] rounded-lg mt-10 space-y-4">
        <div className="flex justify-between p-4">
          <h1 className="text-xl">Edit Admin Profile</h1>
          <Button>
            <ArrowLeft /> Back to Profile
          </Button>
        </div>

        <div className="bg-white p-4 rounded grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
          <InputField label="Name" name="name" onChange={onChangeHandler} />
          <InputField label="Email" name="email" onChange={onChangeHandler} />
          <InputField
            label="New Password"
            name="newPassword"
            type="password"
            onChange={onChangeHandler}
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            onChange={onChangeHandler}
          />
          <InputField
            label="Profile Image"
            name="image"
            type="file"
            onChange={onChangeHandler}
          />
        </div>
        <div>
            <Button className="p-6 float-right">Update</Button>
        </div>
      </section>
    </section>
  );
}

export default SettingPage;
