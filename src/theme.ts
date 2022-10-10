import { createTheme } from "@mui/material/styles";

const colorSet = {
  primaryGreen: "#c1ff45",
  primaryRed: "#d24057",
  primaryViolet: "#c04fff",
  primaryBlue: "#151c97",
  primaryYellow: "#ffff45",
  primaryBlack: "#4b566b",
  primaryPink: "#FF45AE",
  primaryDarkBlack: "#091b3d",
  primaryLightBlack: "#7d879c",
  primaryWhite: "#ffffff",
  primaryGrey: "#ccc",
  primaryLightGrey: "rgba(204, 204, 204, 0.15)",
  secondaryGrey: "#fafbfe",
  secondaryGreen: "#01c38d",
  secondaryPink: "#FF99D3",
  opacityPrimaryRed: "#d2405621",
  opacitySecondaryGreen: "#01c38c18",
  primaryShadow: `
    0 0 0 0.5px rgba(50, 50, 93, 0.1),
    0 2px 5px 0 rgba(50, 50, 93, 0.1),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.07)
  `,
};
const mainColor = colorSet.primaryBlack;
const secondColor = colorSet.primaryWhite;
const typeForm = "standard";

const multiSelectItemStyle = {
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: 0,
  margin: "0 3px",
  height: "33px",
  backgroundColor: colorSet.primaryWhite,
  border: `1px solid ${colorSet.primaryGrey} !important`,
  borderRadius: `3px`,
};

const theme = createTheme({
  palette: {
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondColor,
    },
  },
  typography: {
    fontFamily: "inherit",
    fontSize: 14,
    h1: {
      fontWeight: 800,
      fontSize: "24px",
      marginBottom: "10px",
      display: "inline-block",
      "@media (max-width: 1200px)": {
        fontSize: "20px",
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "16px",
      marginBottom: "10px",
    },
    h3: {
      textTransform: "uppercase",
      fontWeight: 600,
      fontSize: "16px",
      marginBottom: "20px",
      "@media (max-width: 1200px)": {
        marginBottom: "14px",
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: "16px",
      marginBottom: "15px",
      "@media (max-width: 1200px)": {
        marginBottom: "14px",
      },
    },
    subtitle1: {
      wordWrap: "break-word",
    },
    subtitle2: {
      lineHeight: "155%",
      wordWrap: "break-word",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: "#4b566b",
          fontWeight: 500,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minHeight: "40px",
          fontFamily: "inherit",
          input: {
            padding: "5px 10px",
            transform: "translateY(2px)",
            boxSizing: "border-box",
          },
          // eslint-disable-next-line no-useless-computed-key
          ["& .outlinedInputClasses.notchedOutline}"]: {
            border: "1px solid #E3E3EA",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "8px",
          transform: "translateY(2px)",
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          overflowY: "scroll",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 3,
          "@media (max-width: 991px)": {
            padding: `0 6px`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "14px",
          color: colorSet.secondaryGreen,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colorSet.primaryRed,
          position: "absolute",
          right: 0,
          bottom: 8,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "40px",
          width: "100%",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: "-3px !important",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        actions: {
          Button: {
            display: "inline-flex",
            background: "transparent",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0",
          ":last-child": {
            padding: "0",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          borderRadius: "3px",
          padding: 0,
          paddingTop: 5,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          color: mainColor,
          fontSize: "14px",
          borderBottom: "1px solid #E3E3EA",
          padding: "8px 10px",
          ":last-child": {
            borderBottom: "none",
          },
          ":first-of-type": {
            borderTop: "none",
          },
          "@media (max-width: 991px)": {
            minHeight: "unset",
            height: "37px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "3px",
          boxSizing: "border-box",
          border: "1px solid #E3E3EA",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          ".MuiButtonBase-root": {
            marginRight: 0,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottom: `1px solid ${colorSet.primaryGrey} !important`,
          },
        },
        input: {
          fontWeight: 500,
          fontSize: "14px",
          padding: "8px",
          color: mainColor,
          minHeight: "inherit",
          transform: "translateY(2px)",
          "&:focus": {
            backgroundColor: "unset",
          },
        },
      },
    },
  },
});

export { colorSet, mainColor, secondColor, multiSelectItemStyle, typeForm };
export default theme;
