import FocusIcon from "../icons/Focus";
import TimerOffIcon from "../icons/TimerOff";
import DarkIcon from "../icons/Dark";

export default function Navigation() {
  return (
    <nav className="navigation-wrapper self-center rounded-full ">
      <button className="p-[0.75rem] br-50% rounded-full">
        <FocusIcon />
      </button>
      <button className="p-[0.75rem] br-50% rounded-full">
        <TimerOffIcon />
      </button>
      <button className="p-[0.75rem] br-50% rounded-full">
        <DarkIcon />
      </button>
    </nav>
  );
}
