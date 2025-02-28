import { useContext } from "react";
import { QuotesContext } from "../../context/QuotesContext";

export default function Nextcon() {
  const { fillColor } = useContext(QuotesContext);

  if (!fillColor) {
    throw new Error("Context Error at Next.tsx");
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={fillColor}
    >
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </svg>
  );
}
