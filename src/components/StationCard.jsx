import PropTypes from "prop-types";
import { useState } from "react";
import Headphones from "../assets/headphones.jpg";

function StationCard({ station }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-2 sm:m-4 lg:m-6 pb-4">
      <img
        src={station.favicon || Headphones}
        alt={`Logo of ${station.name}`}
        className="w-24 h-24 md:w-32 md:h-32 object-cover mx-auto p-2"
        onError={(e) => (e.target.src = Headphones)} // Sets default image if loading fails
      />
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          {station.name}
        </h3>
        <p className="text-sm md:text-base text-gray-700">
          Country: {station.country}
        </p>
        {/* <p className="text-sm text-gray-600 italic">Tags: {station.tags}</p> */}
        <div>
          {loading && <div>Loading audio...</div>}
          {error && <div>Error loading audio. Try again later.</div>}
          <audio
            controls
            src={station.url}
            preload="auto"
            className="mt-2 w-full"
            onCanPlayThrough={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setError(true);
            }}
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}

StationCard.propTypes = {
  station: PropTypes.object.isRequired,
};

export default StationCard;
