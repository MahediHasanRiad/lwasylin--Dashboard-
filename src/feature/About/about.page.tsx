import { Button } from "@/components/ui/button";
import ContentEditor from "@/shared/content-editor";
import { SelectField } from "@/shared/select";

function AboutPage() {
  const selectHandler = (data) => {
    console.log(data);
  };

  const onChangeHandler = (data) => {
    console.log(data);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <section className="p-4">
      {/* top bar  */}
      <div>
        <h1 className="text-4xl">About</h1>

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
        <section>
          <ContentEditor onChangeHandler={onChangeHandler} />
          <Button onClick={handleSubmit} className="float-right mt-4 p-6">
            Update
          </Button>
        </section>
      </div>
    </section>
  );
}

export default AboutPage;
