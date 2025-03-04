interface ResultProps {
  value: number | null;
  valueType: string;
  convertedValue: number | null;
  convertedValueType: string;
}

export default function Result({
  value,
  valueType,
  convertedValue,
  convertedValueType,
}: ResultProps) {
  if (value === null || convertedValue === null) return null;

  return (
    <div
      className="result-wrapper flex-1 mt-[3rem] p-[1.5rem] rounded-xl"
      style={{ backgroundColor: "#3078c6", color: "#fcf6e6" }}
    >
      <p className="text-[2rem]">
        {value} {valueType[0].toUpperCase() + valueType.slice(1)}
      </p>
      <p className="text-[2rem]">is equal to</p>
      <p className="text-[2rem]">
        {convertedValue.toFixed(2)} {convertedValueType}
      </p>
    </div>
  );
}
