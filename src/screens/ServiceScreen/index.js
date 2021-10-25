import React from 'react';
import {Box, Text, HStack, Pressable, ScrollView, Heading} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ServiceButton from '../../../components/ServiceButton';
import {COLORS} from '../../../constants';
import Adhar from '../../../assets/images/adhar.png';

const ServiceScreen = ({navigation}) => {
  return (
    <>
      <HStack alignItems="center" bg="emerald.500">
        <Pressable p="4" onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-left" size={30} color={COLORS.white} />
        </Pressable>
        <Text fontWeight="medium" fontSize="lg" color={COLORS.white}>
          Other Services
        </Text>
      </HStack>
      <Box h="40" p="5" bg="emerald.500" alignItems="center">
        <Heading color={COLORS.white}>PM-Kisan Yojana</Heading>
        <Heading size="md" color={COLORS.white}>
          अन्य सेवाएं
        </Heading>
      </Box>
      <Box
        flex="1"
        mt="-10"
        borderTopLeftRadius="30"
        borderTopRightRadius="30"
        alignItems="center"
        bg="emerald.50">
        <ScrollView showsVerticalScrollIndicator={false} width="full">
          <ServiceButton
            title="Pan Card Stutus"
            icon="address-card"
            iconSize={30}
            onPress={() => console.log('pressed')}
          />
          <ServiceButton
            title="Passport Status"
            icon="user-alt"
            iconSize={30}
            onPress={() => console.log('pressed')}
          />
          <ServiceButton
            title="PNR Status"
            icon="list-alt"
            iconSize={30}
            onPress={() => console.log('pressed')}
          />
          <ServiceButton
            title="Adhar Card Stutus"
            imageIcon={Adhar}
            iconSize={35}
            onPress={() => console.log('pressed')}
          />
        </ScrollView>
      </Box>
    </>
  );
};

export default ServiceScreen;
