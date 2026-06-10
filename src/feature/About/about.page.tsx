import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import ContentEditorQuill from "@/shared/content-editor";
=======
import ContentEditor from "@/shared/content-editor";
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
import { SelectField } from "@/shared/select";

function AboutPage() {
  const selectHandler = (data) => {
    console.log(data);
  };

<<<<<<< HEAD
=======
  const onChangeHandler = (data) => {
    console.log(data);
  };
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1

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
<<<<<<< HEAD
          <ContentEditorQuill />
=======
          <ContentEditor onChangeHandler={onChangeHandler} />
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
          <Button onClick={handleSubmit} className="float-right mt-4 p-6">
            Update
          </Button>
        </section>
      </div>
    </section>
  );
}

export default AboutPage;
