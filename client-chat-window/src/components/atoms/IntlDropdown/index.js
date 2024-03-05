import React, { useContext } from "react";
import ReactCountryFlag from "react-country-flag";
import { IntlContext } from "../../../util/context/Internationalization";
// import { Box, MenuItem, FormControl, OutlinedInput } from '@mui/material';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// ** Internationalization Context
// import { useRTL } from '../../utility/hooks';
// import { MUIWrapperContext } from '../MUIWrapper';

// ** Vars
const langTitles = {
  en: "USA",
  de: "Germany",
  fr: "France",
};

// ** lang with directions
export const names = [
  { lang: "en", direction: "ltr" },
  { lang: "de", direction: "ltr" },
  { lang: "fr", direction: "ltr" },
];

const MultipleSelectPlaceholder = () => {
  const intlContext = useContext(IntlContext);
  // const [, setIsRtl] = useRTL();
  // const { setLocale } = React.useContext(MUIWrapperContext);
  // const { updateTheme } = React.useContext(MUIWrapperContext);

  // ** Function to switch Language
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    intlContext.switchLanguage(value);
    // updateTheme(Themes?.[value]);

    // const _locale = names.find((name: { [Key: string]: string }) => name.lang === value);
    // setLocale(_locale);

    // ** Update language Direction
    // setIsRtl(!!(_locale?.direction === "rtl"));
  };

  return (
    <div>
      <div>
        <select
          // displayEmpty
          onChange={handleChange}
          // value={langTitles[intlContext?.locale]}
          defaultValue={intlContext?.locale}
          // input={<input />}
          // renderValue={() => (
          //   <Box display="flex" alignItems="center">
          //     <ReactCountryFlag countryCode={intlContext?.locale === 'en' ? 'us' : intlContext?.locale} svg />
          //     <Box mx={2}>{langTitles[intlContext?.locale]}</Box>
          //   </Box>
          // )}
        >
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
