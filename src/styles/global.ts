import { Flex, chakra } from '@chakra-ui/react';

export const Content = chakra(Flex, {
    baseStyle: {
        maxWidth: '1440px',
        width: '100%',
        m: 'auto',
        justifyContent: 'space-around',
        flexDirection: { sm: 'column', md: 'row' },
    }
})