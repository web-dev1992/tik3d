const MethodButton: React.FC<{
  text: string;
  method: string;
  className: string;
  changeMethodhandler: (state: string) => void;
}> = ({ text, className, method, changeMethodhandler }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={changeMethodhandler.bind(this, method)}
    >
      {text}
    </button>
  );
};
export default MethodButton;
