import { useForm, FieldErrors } from "react-hook-form";

interface FormFields {
  name: string;
  email: string;
  password: string;
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <
  FormFields >
  {
    mode: "onChange",
  };

  const onSubmit = (data: FormFields) => {
    console.log("Form Data", data);
  };

  const onError = (errors: FieldErrors) => {
    console.error("Form Errors", errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          {...register("name", {
            required: "Name is required",
          })}
          type="text"
          id="name"
          placeholder="Your Name"
        />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          id="email"
          placeholder="Your Email"
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 10,
              message: "Password must be at least 10 characters",
            },
          })}
          type="password"
          id="password"
          placeholder="Your Password"
        />
        <p>{errors.password?.message}</p>
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
}
