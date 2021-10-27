import React from 'react';
import {
  Box,
  HStack,
  Text,
  Pressable,
  Image,
  Heading,
  VStack,
  ScrollView,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../constants';
import {ListContainer} from '../../../components';
//import Images
import Modi from '../../../assets/images/modi.png';
import Document from '../../../assets/images/document.png';
import Adhar from '../../../assets/images/adhar.png';
import Awas from '../../../assets/images/awas.png';
import Nrega from '../../../assets/images/nrega.png';
import Pension from '../../../assets/images/pension.png';
import Panchayat from '../../../assets/images/panchayat.png';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <HStack alignItems="center" bg="emerald.500">
        <Pressable p="4" onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color={COLORS.white} />
        </Pressable>
        <Text fontWeight="medium" fontSize="lg" color={COLORS.white}>
          PM-Kisan Yojana
        </Text>
      </HStack>
      <Box bg="emerald.500" h="200" flexDirection="row">
        <Image source={Modi} alt="image not found" size="xl" ml="3" />
        <Box mt="5" ml="-8">
          <Heading numberOfLines={1} size="sm" color={COLORS.white}>
            PM-Kisan Samman Nidhi Yojana 2021
          </Heading>
          <Text numberOfLines={1} color={COLORS.white}>
            किसानो की समृद्धि हमारी जिम्मेदारी
          </Text>
        </Box>
      </Box>
      <Box
        flex="1"
        mt="-20"
        borderTopLeftRadius="30"
        borderTopRightRadius="30"
        overflow="hidden"
        alignItems="center"
        bg="emerald.50">
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack px="5">
            <HStack space="6" alignSelf="center">
              <ListContainer
                hTitle="मुख्य पेज"
                eTitle="Main Page"
                icon="home"
                onPress={() =>
                  navigation.navigate('ContentScreen', {
                    hTitle: 'मुख्य पेज',
                    link: 'https://pmkisan.gov.in/',
                  })
                }
              />
              <ListContainer
                hTitle="नया पंजीकरण करे"
                eTitle="New Farmer Registration"
                icon="person-add"
                onPress={() =>
                  navigation.navigate('ContentScreen', {
                    hTitle: 'नया पंजीकरण करे',
                    link: 'https://pmkisan.gov.in/RegistrationFormnew.aspx',
                  })
                }
              />
            </HStack>
            <HStack space="6" alignSelf="center">
              <ListContainer
                hTitle="अपना खाता देखें"
                eTitle="View Your Account"
                iconImage={Document}
                tintColor={COLORS.white}
                onPress={() =>
                  navigation.navigate('ContentScreen', {
                    hTitle: 'अपना खाता देखें',
                    link: 'https://pmkisan.gov.in/BeneficiaryStatus.aspx',
                  })
                }
              />
              <ListContainer
                hTitle="आधार नंबर बदलें"
                eTitle="Change Adhaar Number "
                iconImage={Adhar}
                iconSize={16}
                tintColor={COLORS.white}
                onPress={() =>
                  navigation.navigate('ContentScreen', {
                    hTitle: 'आधार नंबर बदलें',
                    link: 'https://pmkisan.gov.in/UpdateAadharNoByFarmer.aspx',
                  })
                }
              />
            </HStack>
            <HStack space="6" alignSelf="center">
              <ListContainer
                hTitle="आवास योजना"
                eTitle="PM-Awas Yojana"
                iconImage={Awas}
                tintColor={COLORS.white}
                iconSize={100}
                onPress={() =>
                  navigation.navigate('ContentScreen', {
                    hTitle: 'आवास योजना',
                    link: 'https://pmaymis.gov.in/Track_Application_Status.aspx',
                  })
                }
              />
              <ListContainer
                hTitle="नरेगा जॉब कार्ड"
                eTitle="Nrega Job Card"
                iconImage={Nrega}
                iconSize={16}
                tintColor={COLORS.white}
                onPress={() =>
                  navigation.navigate('ContentScreen', {
                    hTitle: 'नरेगा जॉब कार्ड',
                    link: 'https://nregade.nic.in/netnrega/statepage.aspx?check=D&level=HomeGP&Digest=vl8QJFBEIKDKUDyg+d5PPQ',
                  })
                }
              />
            </HStack>
            <HStack space="6" alignSelf="center">
              <ListContainer
                hTitle="पेंशन योजना"
                eTitle="Pension Yojana"
                iconImage={Pension}
                tintColor={COLORS.white}
                iconSize={12}
                onPress={() =>
                  navigation.navigate('ContentScreen', {
                    hTitle: 'पेंशन योजना',
                    link: 'https://sspy-up.gov.in/HindiPages/index_h.aspx',
                  })
                }
              />
              <ListContainer
                hTitle="ग्राम पंचायत रिपोर्ट"
                eTitle="Panchayat Report"
                iconImage={Panchayat}
                iconSize={12}
                tintColor={COLORS.white}
                onPress={() =>
                  navigation.navigate('ContentScreen', {
                    hTitle: 'ग्राम पंचायत रिपोर्ट',
                    link: 'https://egramswaraj.gov.in/actionPlanReportForGP.do',
                  })
                }
              />
            </HStack>
            <Pressable
              borderWidth="1"
              borderColor="emerald.500"
              rounded="md"
              p="3"
              alignItems="center"
              mt="5"
              onPress={() =>
                navigation.navigate('ContentScreen', {
                  hTitle: 'अपने गांव की लिस्ट देखे',
                  link: 'https://pmkisan.gov.in/Rpt_BeneficiaryStatus_pub.aspx',
                })
              }>
              <Text color="emerald.600" fontSize="md">
                अपने गांव की लिस्ट देखे
              </Text>
            </Pressable>
            <Pressable
              borderWidth="1"
              borderColor="emerald.500"
              rounded="md"
              p="3"
              alignItems="center"
              my="5"
              onPress={() =>
                navigation.navigate('ContentScreen', {
                  hTitle: 'PM-किसान सम्मान निधि योजना क्या है',
                  link: 'https://pmkisan.gov.in/NewHome3.aspx#About',
                })
              }>
              <Text color="emerald.600" fontSize="md">
                PM-किसान सम्मान निधि योजना क्या है
              </Text>
            </Pressable>
            <Pressable
              borderWidth="1"
              borderColor="emerald.500"
              rounded="md"
              p="3"
              alignItems="center"
              mb="5"
              onPress={() => navigation.navigate('ServiceScreen')}>
              <HStack alignItems="center">
                <MaterialIcon
                  name="lightning-bolt"
                  size={40}
                  color="#10b981"
                  style={{
                    borderRightWidth: 1,
                    borderColor: '#10b981',
                    padding: 5,
                  }}
                />
                <Box flex="1">
                  <Text
                    color="emerald.500"
                    w="90%"
                    fontSize="lg"
                    textAlign="center"
                    mb="1">
                    अन्य सेवाएं
                  </Text>
                  <Text
                    color="emerald.800"
                    w="90%"
                    fontSize="lg"
                    textAlign="center">
                    Other Services
                  </Text>
                </Box>
              </HStack>
            </Pressable>
          </VStack>
        </ScrollView>
      </Box>
    </>
  );
};

export default HomeScreen;
