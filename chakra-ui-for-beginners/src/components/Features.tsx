import { Box, HStack, Icon, StackProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import MoneyBackGuaranteeIcon from '../Icons/MoneyBackGuaranteeIcon';
import HassleFreeIcon from '../Icons/HassleFreeIcon';
import MonthlySubscriptionIcon from '../Icons/MonthlySubscriptionIcon';

interface FeatureProps extends StackProps {
  icon: ElementType;
}

export const Feature = (props: FeatureProps) => {
  const { children, icon, ...rest } = props;

  return (
    <HStack {...rest} spacing='6'>
      <Icon as={icon} boxSize='12'></Icon>
      <Text textAlign='left' fontSize='lg' fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box maxW='1024px' m='auto' pt='7' pb='8'>
      <HStack px='12' color='black' spacing='5'>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
};

export default Features;
