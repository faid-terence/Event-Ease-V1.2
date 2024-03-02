import React from "react";
import Flags from "react-flags-select";

const EastAfricanCountries = [
  { code: "BI", label: "Burundi" },
  { code: "KE", label: "Kenya" },
  { code: "RW", label: "Rwanda" },
  { code: "TZ", label: "Tanzania" },
  { code: "UG", label: "Uganda" },
];
const EastAfricanFlags = ({ selected, onSelect }) => {
  return (
    <Flags
      selected={selected}
      onSelect={onSelect}
      countries={EastAfricanCountries.map((country) => country.code)}
      customLabels={{}}
      showSelectedLabel={true}
      className="flag-select"
    />
  );
};

export default EastAfricanFlags;
