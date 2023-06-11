import { Flex, chakra, Input, Button, FormLabel, Radio} from '@chakra-ui/react';

export const Content = chakra(Flex, {
    baseStyle: {
        maxWidth: '1440px',
        width: '100%',
        m: 'auto',        
        flexDirection: { sm: 'column', md: 'row' },
    }
})

export const FormInput = chakra(Input, {
    baseStyle: {
      variant: 'filled'
    }
  });

/** Button Send data */
export const UploadFormInput = chakra(FormInput, {
    baseStyle: {
      _disabled: {
        opacity: 100,
        cursor: 'default',
        _hover: {
          borderColor: 'Primary.01'
        }
      }
    }
  });

  /** Upload button */
export const UploadButton = chakra(Button, {
    baseStyle: {
      w: '100%',
      maxW: '105px',
      h: '28px',      
      fontWeight: '600',
      color: '#FFFFFF',
      fontSize: '12px',
      lineHeight: '120%',
      border: '1px solid',
      borderRadius: '4px',
      backgroundColor: '#000000',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '3px 8px',
      marginTop: '0px',
      marginRight: '8px',
      gap: '4px'
    }
  });

  /** Label upload button, needs to be used with UploadButton to work */
export const UploadLabel = chakra(FormLabel, {
    baseStyle: {
      maxW: '105px',
      textStyle: 'caption2',
      fontWeight: 600,
      zIndex: 1,
      alignItems: 'center',
      mr: '60px',
      my: 'auto',
      _hover: {
        cursor: 'pointer',
        button: {
          bg: '#FFFFFF',
          color: '#000000'
        }
      }
    }
  });

  /** Label upload button, needs to be used with UploadButton to work */
export const RemoveLabel = chakra(FormLabel, {
  baseStyle: {
    maxW: "105px",
    textStyle: "caption2",
    fontWeight: 600,
    zIndex: 1,
    alignItems: "center",
    mr: "20px",
    my: "auto",
    button: {
      bg: "#FF0D0D",
      color: "#FFFFFF",
    },
    _hover: {
      cursor: "pointer",
      button: {
        bg: "#FFFFFF",
        color: "#FF0D0D",
      },
    },
  },
});

  const DatepickerStyles = chakra(Input, {
    baseStyle: {
        variant: 'filled'
    },
});
