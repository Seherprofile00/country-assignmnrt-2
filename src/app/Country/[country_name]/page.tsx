import "@/app/globals.css";
import Link from "next/link";
import Country from "@/app/component/Country";
export default function CountryName({ params }: {params:{country_name:string}}) {
  const countries: {
    name: string;
    population: number;
    capital: string;
  }[] = [
    {
      name: "Pakistan",
      population: 2166,
      capital: "Islamabad",
    },
    {
      name: "India",
      population: 765464,
      capital: "Delhi", },

      {name: "Japan",
      population: 765464,
      capital: "tokio", },

      {name: "Turky",
      population: 765464,
      capital: "Istambol", },

     
    ]
      
    

     

     
function findCountry(name: string): {name:string, population:number, capital:string} | undefined {


    return countries.find(
      (country) => name.toLowerCase() == country.name.toLowerCase()
    );
  }
 


  return (
    <div>

        
      <Country countryInfo = {findCountry(params.country_name)} url = {params.country_name} />
      
      <div>
        <li className="cust_button">
          <Link className="" href="/">
          <b style ={{color:"blue"}}>Back</b>
          </Link>
        </li>
        
      </div>
    </div>
  );
}