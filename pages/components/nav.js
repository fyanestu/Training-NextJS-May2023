import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {Object} props
 * @param {String} props.name
 * @param {(Number|null|undefined)} props.age
 * @returns
 */
export default function Nav(props) {
  console.log(props);
  const { name, age, data } = props;

  return (
    <div className="h-20 text-teal-500">
      Nav: {name}
      <br />
      Age: {5 + age}
      <div>
        {data.map((job) => {
          return (
            <>
              {job.id + "" + job.tim}
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}

Nav.propType = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

Nav.defaultPps = {
  name: "Dono",
  age: 15,
  data: [{ id: 1, tim: "CDS" }],
};
