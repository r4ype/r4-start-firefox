import PropTypes from "prop-types";
import Links from "./Links";

export default function LinksList({ links }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center w-full h-full">
      {links.map((data, i) => (
        <Links key={i} link={data.link} icon={data.icon} />
      ))}
    </ul>
  );
}

LinksList.propTypes = {
  links: PropTypes.string,
};
