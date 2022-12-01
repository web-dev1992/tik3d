




const Input: React.FC<{
  type: string;
  inputName: String;
  id: string;
  placeholder: string;
  value: string;
  onChange: () => void;
  pattern:string;
  required:boolean;
  size:number;
  maxLength:number;
  className:String;
  error:string;
}> = ({
    type?:"text",
    inputName,
    id,
    placeholder='',
    value='',
    onChange,
    pattern='',
    required,
    size,
    maxLength,
    className,
    error='',
  })=> {
  return (
    <input
      type={type}
      name={inputName}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      pattern={pattern}
      required={required}
      size={size}
      maxLength={maxLength}
      className={className}
    />
  );
};

export default Input;
