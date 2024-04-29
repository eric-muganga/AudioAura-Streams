import { useParams } from "react-router-dom";

import RadioStations from "../components/RadioStations";
import { fetchStationsByContinent } from "../utils";
import { useQuery } from "react-query";
import { queryClient } from "../utils";

function ContinentPage() {
  const params = useParams();
  const continent = params.continent.replace(/-/g, "");
  const {
    data: stations,
    isError,
    error,
  } = useQuery({
    queryKey: ["stations", continent],
    queryFn: async () => await fetchStationsByContinent(continent),
    staleTime: 2 * 60 * 1000,
  });

  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      {console.log("ContinentPage rendering")}
      <RadioStations stations={stations} />;
    </>
  );
}

export default ContinentPage;

export async function loader({ params }) {
  const continent = params.continent.replace(/-/g, "");
  console.log("Loader function for", continent);
  return queryClient.fetchQuery({
    queryKey: ["stations", continent],
    queryFn: async () => await fetchStationsByContinent(continent),
  });
}
