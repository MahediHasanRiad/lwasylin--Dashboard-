import ContentEditor from "@/shared/content-editor";
import { SelectField } from "@/shared/select";

function PrivacyPolicyPage() {
  const selectHandler = (data) => {
    console.log(data);
  };

  const onChangeHandler = (data) => {
    console.log(data)
  }

  return (
    <section>
      {/* top bar  */}
      <div>
        <h1 className="text-4xl">Privacy Policy</h1>

        {/* select  */}
        <section className="w-[50%] md:w-[20%] my-4">
          <p className="text-lg mb-2">For who</p>
          <SelectField
            name="privacyPolicy"
            selectHandler={selectHandler}
            items={["House Manager", "Contractor", "Other"]}
          />
        </section>

        {/* editor  */}
        <ContentEditor onChangeHandler={onChangeHandler} />
      </div>
    </section>
  );
}

export default PrivacyPolicyPage;
