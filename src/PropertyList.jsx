import Property from "./Property";
import "./PropertyList.css";

function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((property) => {
        return <Property key={property.id} {...property} />;
      })}
    </div>
  );
}

export default PropertyList;
