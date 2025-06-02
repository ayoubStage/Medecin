import React from "react";

interface Props {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const ConclusionRadiologueSection: React.FC<Props> = ({ selected, setSelected }) => {
  const options = ["ACR1", "ACR2", "ACR3", "ACR4", "ACR5"];

  const handleChange = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="form-three-section">
      <p className="form-label">Conclusion radiologue</p>
      {options.map((acr) => (
        <label key={acr} className="checkbox-label">
          <input
            type="checkbox"
            value={acr}
            checked={selected.includes(acr)}
            onChange={() => handleChange(acr)}
          />
          {acr}
        </label>
      ))}
    </div>
  );
};

export default ConclusionRadiologueSection;
