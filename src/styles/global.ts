import { Flex, chakra, Input, Button, FormLabel} from '@chakra-ui/react';

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
      w: '100%',
      borderColor: 'Primary.02',
      bg: 'White.02',
      color: 'Primary.01',
      border: '1px solid',
      borderRadius: '8px',      
      fontSize: '12px',
      height: '48px',
      alignItems: 'center'
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
      h: '32px',
      bg: 'transparent',
      fontWeight: '600',
      color: 'Primary.02',
      fontSize: '12px',
      lineHeight: '120%',
      border: '1px solid',
      borderRadius: '4px',
      backgroundColor: 'White.02',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '6px 16px',
      marginTop: '8px',
      marginRight: '16px',
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
      mr: '100px',
      my: 'auto',
      _hover: {
        cursor: 'pointer',
        button: {
          bg: 'Primary.02',
          color: 'White.02'
        }
      }
    }
  });

  /** Label upload button, needs to be used with UploadButton to work */
export const RemoveLabel = chakra(FormLabel, {
    baseStyle: {
      maxW: '105px',
      textStyle: 'caption2',
      fontWeight: 600,
      zIndex: 1,
      alignItems: 'center',
      mr: '50px',
      my: 'auto',
      button: {
        bg: '#FF0D0D',
        color: 'White.02'
      },
      _hover: {
        cursor: 'pointer',
        button: {
          bg: 'White.02',
          color: '#FF0D0D'
        }
      }
    }
  });