import React from "react";

interface Props {
  conduite: string;
  setConduite: (value: string) => void;
}

const ConduiteSection: React.FC<Props> = ({ conduite, setConduite }) => {
  return (
    <div className="form-three-section">
      <p className="form-label">Conduite à tenir</p>
      <label className="checkbox-label">
        <input
          type="radio"
          name="conduite"
          value="Option 1"
          checked={conduite === "Option 1"}
          onChange={(e) => setConduite(e.target.value)}
        />
        Option 1
      </label>
    </div>
  );
};

export default ConduiteSection;
