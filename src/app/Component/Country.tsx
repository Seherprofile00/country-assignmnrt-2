import "@/app/globals.css";



interface CountryInfo {
    name: string;
    population: number;
    capital: string;
  }
  interface CountryDetailsProps {
    countryInfo?: CountryInfo;
    url: string;
  }
  // data -> countryInfo prop
  export default function CountryDetails(data: CountryDetailsProps) {
    return (
      <div>
        {data.countryInfo ? (
          <div>
            <h1 style ={{color:"purple"}} ><i>Country Name </i>: {data.countryInfo.name}</h1>
            <h1 style ={{color:"purple"}} ><i>Country Population</i>: {data.countryInfo.population}</h1>
            <h1 style ={{color:"purple"}} ><i>Country Capital</i>: {data.countryInfo.capital}</h1>
          </div>
        ) : (
          <div>
            <h1 style ={{color:"red"}}>{data.url} Not Found</h1>
          </div>
        )}
      </div>
    );
  }



