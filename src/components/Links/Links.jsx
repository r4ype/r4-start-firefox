import PropTypes from "prop-types";
import Icons from "../Icons/Icons";

export default function Links({ link, icon }) {
  return (
    <li className="group bg-ctp-base col-span-1 flex items-center justify-center w-full h-48 rounded-xl border border-transparent shadow-2xl hover:bg-ctp-surface0/50 hover:border-rose-500 transition-colors duration-300 ease-linear cursor-pointer">
      <a href={link} className="w-full h-full flex items-center justify-center">
        {Icons[icon]()}
      </a>
    </li>
  );
}

Links.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
