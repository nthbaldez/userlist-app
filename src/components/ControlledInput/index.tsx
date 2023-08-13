import {Control, Controller, FieldError} from 'react-hook-form';

type Props = {
  control: Control<any>;
  name: string;
  className: string;
  placeholder: string;
  error?: FieldError;
  type?: string
};

export default function ControlledInput({
  control,
  name,
  className,
  placeholder,
  error,
  type
}: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <input
            onChange={onChange}
            value={value}
            className={className}
            placeholder={placeholder}
            type={type}
          />
        )}
      />
      {
        error && <div className="text-red-700 font-semibold">{error.message}</div>
      }
    </>
  );
}
