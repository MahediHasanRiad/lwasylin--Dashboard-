import { Button } from "@/components/ui/button";
import TopBar from "../Add-Community/components/top-bar";
import { ArrowLeft } from "lucide-react";
import { InputField } from "@/shared/input-field";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import type { SettingSchemaType } from "./schema/setting-schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function SettingPage() {
  const onChangeHandler = (data) => {
    console.log("image", data);
  };

  const { control, handleSubmit } = useForm<SettingSchemaType>();

  const onSubmitHandler: SubmitHandler<SettingSchemaType> = (data) => {
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

      <section className="py-18 px-8 bg-[#e6eaef] rounded-lg mt-10 space-y-4">
        <div className="flex justify-between p-4">
          <h1 className="text-xl">Edit Admin Profile</h1>
          <Button>
            <ArrowLeft /> Back to Profile
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="bg-white rounded-md grid md:grid-cols-3 gap-4 p-8">
            <div className="space-y-4">
              <Label>Name</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </div>
            <div className="space-y-4">
              <Label>Email</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </div>
            <div className="space-y-4">
              <Label>New Password</Label>
              <Controller
                name="newPassword"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </div>
            <div className="space-y-4">
              <Label>Confirm Password</Label>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </div>
            <div className="space-y-2">
              <InputField
                label="Profile Image"
                name="image"
                type="file"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <Button className="p-6 float-right mt-2" type="submit">
            Update
          </Button>
        </form>
        <div></div>
      </section>
    </section>
  );
}

export default SettingPage;
