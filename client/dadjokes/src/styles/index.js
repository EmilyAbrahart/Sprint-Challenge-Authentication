// VARIABLES
// Colors
export const color_light = "#4b5052";
export const color_dark = "#1a2035";
export const color_primary = "#14282f";
export const color_accent = "#d97c3f";
export const color_accent_secondary = "#eb5372";
export const color_transparent = "rgba(0,0,0,0)";
export const shadow = "0px 4px 4px rgba(0, 0, 0, 0.3)";

// Fonts
export const text_font = "";

// FUNCTIONS
// Flexbox
export const FlexFunc = (direction, justifyC, alignI) => {
  return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};

// Button styling
export const Button = (backgroundColor, color) => {
  return `
  background-color: ${backgroundColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: ${color};
  cursor: pointer;
  font-weight: bold;
  border: 1px solid ${color}};
  outline: none;
  font-family: ${text_font};
  box-sizing: border-box;
  

  &:hover {
    color: ${backgroundColor};
    background-color: ${color};
    border-color:${backgroundColor};
  }
  `;
};

export const Input = (width) => {
    return `
    width: ${width};
    border-radius: 1rem;
    border: none;
    outline: none;
    text-align: center;
    font-size: 0.8rem;
    height: 1.5rem;
    border: none;

     &:focus {
       box-shadow: ${shadow};
     }
    `
}