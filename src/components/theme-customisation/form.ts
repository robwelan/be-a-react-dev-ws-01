import { formAnatomy } from "@chakra-ui/anatomy";
//  https://github.com/chakra-ui/chakra-ui-docs/issues/212

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px) translateX(-10px)"
};

export default {
  parts: formAnatomy.keys,
  baseStyle: {},
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles
          }
        },
        "div.chakra-numberinput:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
          ...activeLabelStyles
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
          ...activeLabelStyles
        },
        "select:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
          ...activeLabelStyles
        },
        "textarea:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
          ...activeLabelStyles
        },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: "absolute",
          backgroundColor: 'var(--chakra-colors-chakra-body-bg)',
          mx: 3,
          px: 1,
          my: 2
        }
      }
    }
  }
};
