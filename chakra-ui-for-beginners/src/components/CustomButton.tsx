import { Button, chakra } from '@chakra-ui/react';

const CustomButton = chakra(Button, {
  baseStyle: {
    bgColor: '#6B46C1',
    size: 'lg',
    w: '282px',
    marginTop: '24px',
    padding: '1rem',
    position: 'relative',
    cursor: 'pointer',
    color: 'white',
    zIndex: 1,
    _after: {
      content: '""',
      background: '#7A59C7',
      position: 'absolute',
      top: 0,
      width: '100%',
      left: 0,
      right: 0,
      bottom: 0,
      clipPath: 'circle(0% at 50% 50%)',
      transition: 'all cubic-bezier(0, 0.96, 0.58, 1.1) 0.8s',
      zIndex: -1,
    },
    _hover: {
      _after: {
        clipPath: 'circle(100% at 50% 50%)',
        transition: 'all cubic-bezier(0, 0.96, 0.58, 1.1) 2s',
        rounded: 'md',
      },
    },
  },
});

export default CustomButton;
