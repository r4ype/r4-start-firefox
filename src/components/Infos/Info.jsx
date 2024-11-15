import PropTypes from "prop-types";
import Icons from "../Icons/Icons";
import { selectColor } from "../../helpers/helper";

export default function Info({ context, color, icon }) {
  const selectedColor = selectColor(color);
  return (
    <li
      className={`${selectedColor.bgColor} ${selectedColor.borderColor} border-2 rounded-lg px-3 py-2 md:px-4 md:py-2 flex items-center gap-2 text-xs md:text-base`}
    >
      <span>{Icons[icon](selectedColor.textColor)}</span>
      <span>{context}</span>
    </li>
  );
}

Info.propTypes = {
  context: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
