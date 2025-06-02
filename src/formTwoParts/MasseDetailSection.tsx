import React from "react";

interface Props {
  index: number;
  localisation: string;
  mesure: string;
  forme: string;
  contour: string;
  densite: string;
  orientation: string;
  comportement: string;
  calcification: string;
  onLocalisationChange: (index: number, value: string) => void;
  onMesureChange: (index: number, value: string) => void;
  onMassesDataChange: (
    index: number,
    type: "forme" | "contour" | "densite" | "orientation" | "comportement" | "calcification",
    value: string
  ) => void;
}

const MasseDetailSection: React.FC<Props> = ({
  index,
  localisation,
  mesure,
  forme,
  contour,
  densite,
  orientation,
  comportement,
  calcification,
  onLocalisationChange,
  onMesureChange,
  onMassesDataChange,
}) => {
  const handleRadioChange = (
    type: "forme" | "contour" | "densite" | "orientation" | "comportement" | "calcification", 
    value: string
  ) => {
    onMassesDataChange(index, type, value);
  };

  const handleLocalisationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLocalisationChange(index, e.target.value);
  };

  const handleMesureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onMesureChange(index, e.target.value);
  };

  return (
    <div className="additional-section border rounded-lg mt-4 p-4">
      {/* Localisation */}
      <label className="form-label">Localisation {index + 1}</label>
      <input
        type="text"
        value={localisation}
        onChange={handleLocalisationChange}
        className="form-input"
        placeholder="Ex: Quadrant supérieur externe"
      />

      {/* Mesure */}
      <label className="form-label mt-2">Mesure {index + 1} (mm)</label>
      <input
        type="text"
        value={mesure}
        onChange={handleMesureChange}
        className="form-input"
        placeholder="Ex: 15x20"
      />

      {/* Forme */}
      <div className="form-radio-section mt-4">
        <p className="form-label">Forme de la masse</p>
        {["ovale", "ronde", "irrégulière"].map((f) => (
          <label key={f} className="radio-label">
            <input
              type="radio"
              name={`forme-${index}`}
              checked={forme === f}
              onChange={() => handleRadioChange("forme", f)}
            />
            {f}
          </label>
        ))}
      </div>

      {/* Contours */}
      <div className="form-radio-section mt-4">
        <p className="form-label">Contours</p>
        {["circonscrits", "indistincts", "anguleux", "microlobulés", "spiculés"].map((c) => (
          <label key={c} className="radio-label">
            <input
              type="radio"
              name={`contour-${index}`}
              checked={contour === c}
              onChange={() => handleRadioChange("contour", c)}
            />
            {c}
          </label>
        ))}
      </div>

      {/* Densité */}
      <div className="form-radio-section mt-4">
        <p className="form-label">Densité</p>
        {["haute", "isoéchogène", "hypoéchogène", "anéchogène", "complexe"].map((d) => (
          <label key={d} className="radio-label">
            <input
              type="radio"
              name={`densite-${index}`}
              checked={densite === d}
              onChange={() => handleRadioChange("densite", d)}
            />
            {d}
          </label>
        ))}
      </div>

      {/* Orientation */}
      <div className="form-radio-section mt-4">
        <p className="form-label">Orientation</p>
        {["parallèle", "non parallèle"].map((o) => (
          <label key={o} className="radio-label">
            <input
              type="radio"
              name={`orientation-${index}`}
              checked={orientation === o}
              onChange={() => handleRadioChange("orientation", o)}
            />
            {o}
          </label>
        ))}
      </div>
      <div className="form-radio-section mt-4">
        <p className="form-label">Comportement </p>
        {["neutre", "renforcement postérieur", "atténuation postérieure", "combiné"].map((comp) => (
          <label key={comp} className="radio-label">
            <input
              type="radio"
              name={`comportement-${index}`}
              checked={comportement === comp}
              onChange={() => handleRadioChange("comportement", comp)}
            />
            {comp}
          </label>
        ))}
      </div>

      {/* Calcifications */}
      <div className="form-radio-section mt-4">
        <p className="form-label">Calcifications</p>
        {["dans la masse", "à distance de la masse", "intra-canalaire"].map((calc) => (
          <label key={calc} className="radio-label">
            <input
              type="radio"
              name={`calcification-${index}`}
              checked={calcification === calc}
              onChange={() => handleRadioChange("calcification", calc)}
            />
            {calc}
          </label>
        ))}
      </div>
    </div>
  );
};

export default MasseDetailSection;