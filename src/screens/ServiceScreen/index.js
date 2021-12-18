import React from 'react';
import {
  Box,
  Text,
  HStack,
  Pressable,
  ScrollView,
  Heading,
  StatusBar,
} from 'native-base';
import {BannerView} from 'react-native-fbads';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ServiceButton from '../../../components/ServiceButton';
import {appId, COLORS} from '../../../constants';
import Adhar from '../../../assets/images/adhar.png';

const ServiceScreen = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#10b981" barStyle="light-content" />
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
            title="Adhar Card Stutus"
            imageIcon={Adhar}
            iconSize={35}
            onPress={() =>
              navigation.navigate('ContentScreen', {
                hTitle: 'Adhar Card Stutus',
                link: 'https://resident.uidai.gov.in/check-aadhaar',
              })
            }
          />
          <ServiceButton
            title="Pan Card Stutus"
            icon="address-card"
            iconSize={30}
            onPress={() =>
              navigation.navigate('ContentScreen', {
                hTitle: 'Pan Card Stutus',
                link: 'https://tin.tin.nsdl.com/pantan/StatusTrack.html',
              })
            }
          />
          <ServiceButton
            title="Passport Status"
            icon="user-alt"
            iconSize={30}
            onPress={() =>
              navigation.navigate('ContentScreen', {
                hTitle: 'Passport Status',
                link: 'https://passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew',
              })
            }
          />
          {/* <ServiceButton
            title="PNR Status"
            icon="list-alt"
            iconSize={30}
            onPress={() =>
              navigation.navigate('ContentScreen', {
                hTitle: 'PNR Status',
                link: 'http://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html',
              })
            }
          /> */}
        </ScrollView>
      </Box>
      <Box>
        <BannerView
          placementId={appId.bottom_banner}
          type="standard"
          onPress={() => console.log('click')}
          onLoad={() => console.log('loaded')}
          onError={err => console.log('error', err)}
        />
      </Box>
    </>
  );
};

export default ServiceScreen;
