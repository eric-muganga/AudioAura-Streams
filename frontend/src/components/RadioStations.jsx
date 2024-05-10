import PropTypes from "prop-types";

import StationCard from "./StationCard";

function RadioStations({ stations }) {
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {stations.map((station) => (
        <StationCard key={station.uuid} station={station} />
      ))}
    </div>
  );
}

RadioStations.propTypes = {
  stations: PropTypes.array.isRequired,
};

export default RadioStations;
