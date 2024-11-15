import PropTypes from "prop-types";
import Info from "./Info";

export default function InfoList({ infos }) {
  return (
    <ul className="flex flex-col md:flex-row gap-4 font-splineSansBold">
      {infos.map((info, i) => (
        <Info
          key={i}
          context={info.context}
          color={info.color}
          icon={info.icon}
        />
      ))}
    </ul>
  );
}

InfoList.propTypes = {
  infos: PropTypes.array.isRequired,
};
