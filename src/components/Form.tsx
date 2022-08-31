import { FC, PropsWithChildren, createContext, useContext } from "react";
import { useForm, ValidationError } from "@formspree/react";
import type { FormError } from "@formspree/react/dist/types/src/types";

const FormStatus = createContext<{
  submitting: boolean;
  succeeded: boolean;
  errors: FormError[];
}>({ submitting: false, succeeded: false, errors: [] });

const Input: FC<{
  label: string;
  name: string;
  type?: string;
  [x: string]: any;
}> = ({ label, name, type = "text", ...rest }) => {
  const status = useContext(FormStatus);
  const isError = status.errors.find((err) => err.field === name.toLowerCase());
  const Elem: FC<{ [x: string]: string }> = ({ children, ...rest }) =>
    type === "textarea" ? (
      <textarea {...rest} />
    ) : (
      <input type={type} {...rest} />
    );
  return (
    <div className="relative">
      <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
        {label}
      </label>
      <Elem
        className={`block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border ${
          isError ? "border-rose-700" : "border-gray-300"
        } rounded-md focus:outline-none focus:border-black`}
        name={name}
        {...rest}
      />
      <ValidationError
        className="mt-2 text-rose-700 font-bold text-xl"
        errors={status.errors}
        field={name.toLowerCase()}
        prefix={label}
      />
    </div>
  );
};

const Submit: FC<{ label?: string }> = ({ label = "Submit" }) => {
  const status = useContext(FormStatus);
  return (
    <div className="relative">
      <button
        className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-cyan-800 rounded-lg hover:bg-cyan-700 ease"
        disabled={status.submitting}
      >
        {label}
      </button>
    </div>
  );
};

const Form: FC<PropsWithChildren<{ [x: string]: any }>> & {
  Input: typeof Input;
  Submit: typeof Submit;
} = ({ children, className = "", ...rest }) => {
  const [status, submitHandler] = useForm("registration-form");
  if (status.succeeded) {
    return (
      <p className={className + " text-2xl"}>
        Thanks! We'll follow up with more information soon!
      </p>
    );
  }
  return (
    <form
      className={className + " relative w-full space-y-8"}
      onSubmit={submitHandler}
      {...rest}
    >
      <FormStatus.Provider value={{ ...status }}>
        {children}
      </FormStatus.Provider>
      <ValidationError
        errors={status.errors}
        className="text-rose-700 font-bold text-2xl"
      />
    </form>
  );
};

Form.Input = Input;
Form.Submit = Submit;

export default Form;
