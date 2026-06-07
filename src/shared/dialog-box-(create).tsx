import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectField } from "./select";
import { useState, type ChangeEvent, } from "react";
import { toast } from "sonner";


export interface CreateFAQInitialValueType {
  question: string;
  answer: string;
  category: any;
  getId?: number | null,
  text?: string
}

const initialValue: CreateFAQInitialValueType  = {
  question: "",
  answer: "",
  category: "Buying",
};

export function DialogBoxField({ question, answer, category, text = 'ADD' }: CreateFAQInitialValueType) {

  const [inputValue, setInputValue] = useState(initialValue);


  const selectHandler = (categoryValue: string) => {
    setInputValue((prev) => ({
      ...prev,
      category: categoryValue,
    }));
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit handler
  const createSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // await dispatch(createFAQthunk(inputValue))
      toast.success('Successfully create an FAQ !!!')
    } catch (error) {
      toast.error('Failed to create FAQ !!!')
    }
    
    
    setInputValue(initialValue);
    console.log("Submitting final data object:", inputValue);
  };

  return (
    <Dialog>
      <form id="faq-creation-form" onSubmit={createSubmitHandler}>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-secondary-0 border-none px-4 text-md ">{text}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Frequently Asked Questions</DialogTitle>
            <DialogDescription className="sr-only">
              Form to add a new FAQ question and answer.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="question">Question</Label>
              <Input
                id="question"
                name="question"
                defaultValue={question}
                onChange={onChangeHandler}
              />
            </Field>
            <Field>
              <Label htmlFor="answer">Answer</Label>
              <Input
                id="answer"
                name="answer"
                defaultValue={answer}
                onChange={onChangeHandler}
              />
            </Field>
            <Field>
              <SelectField name="MANAGER" selectHandler={selectHandler} defaultValue={category} items={[]} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" variant="outline" form="faq-creation-form">
              {text == 'Edit' ? 'Save' : 'Create' }
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
