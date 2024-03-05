import React, { useContext } from "react";
import { IntlContext } from "../../../util/context/Internationalization";

// ** Vars
const langTitles = {
  en: "English",
  de: "German",
  fr: "French",
};

// ** lang with directions
export const names = [{ lang: "en" }, { lang: "de" }, { lang: "fr" }];

const MultipleSelectPlaceholder = () => {
  const intlContext = useContext(IntlContext);

  // ** Function to switch Language
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    intlContext.switchLanguage(value);
  };

  return (
    <div>
      <div>
        <select onChange={handleChange} defaultValue={intlContext?.locale}>
          {names.map((name) => (
            <option key={name?.lang} value={name?.lang}>
              {/* <ReactCountryFlag
                countryCode={name?.lang === "en" ? "us" : name?.lang}
                svg
              /> */}
              {/* <span>{langTitles[name?.lang]}</span> */}
              {langTitles[name?.lang]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MultipleSelectPlaceholder;
