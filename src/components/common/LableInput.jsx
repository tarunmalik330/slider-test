export const Lable = ({ className, lableName }) => {
  return (
    <label
      htmlFor={lableName}
      className={`${className} text-black font-semibold text-4xl`}
    >
      {lableName}
    </label>
  );
};
