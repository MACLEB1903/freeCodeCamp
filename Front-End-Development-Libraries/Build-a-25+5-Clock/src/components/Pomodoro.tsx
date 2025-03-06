import { Delete } from "../icons/Delete";
import { Clock } from "../icons/Clock";

export default function Pomodoro() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-[1rem]">
        <button
          id="sesstion-label"
          className="text-[2rem] bg-zinc-500 p-[0.25rem] rounded-[1rem]"
        >
          <Clock />
        </button>
        <button
          id="sesstion-label"
          className="text-[2rem] bg-zinc-500   p-[0.25rem] rounded-[0.75rem]"
        >
          <Delete />
        </button>
      </div>
      <div className="buttons-wrapper mt-[3rem] gap-[2rem] flex flex-row justify-center">
        <button
          id="sesstion-label"
          className="text-[2rem] bg-zinc-500  px-[1rem] py-[0.5rem] rounded-[1rem]"
        >
          Break Length
        </button>
        <button
          id="break-label"
          className="text-[2rem]  bg-zinc-500 px-[1rem] py-[0.5rem] rounded-[1rem]"
        >
          Session Length
        </button>
      </div>
      <h2 className="time-count text-[clamp(8rem,10vw,15rem)] text-center">
        45:00
      </h2>
    </div>
  );
}
