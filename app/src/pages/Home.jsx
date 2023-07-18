import React from "react";
import { Box, Container, Flex, Heading, Image, Text, HStack, Link, Mark } from "@chakra-ui/react";
import me from '../assets/logo.png'
import arrow from '../assets/icons/arrow.svg'
import icon from '../assets/icons/icon2.png'
import sign from '../assets/sign.png'
import myWork from '../assets/my-works.png'
import gFonts from '../assets/gfonts.png'
import camera from '../assets/icons/camera.svg'
import mobile from '../assets/icons/mobile.svg'
import pencil from '../assets/icons/pencil.svg'
import react from '../assets/icons/react.svg'



function Home() {
  return (
    <div>

      <Container
        maxWidth={'full'}
        bg={"#0F0F0F"}
        py={'80px'}
        >

          {/* ==================== Hero Section Start ================= */}

        <Container maxWidth={["container.sm", "container.md", "container.lg", "container.xl"]} p={0} >

            {/* ===================== First Row Start ======================== */}

            <Box className='firstRow' display={'flex'} gap={5}>
                <Flex className='firstRowLeft' flex={1} gap={5} p={10} borderRadius={'40px'} borderColor={'red.600'} bg={'gray.500'} border={'2px'} >
                    <Box className='firstRow__innerLeft' flex={1}>
                        <Image src={me} bg={'blue.500'} borderTopLeftRadius={'40px'} borderBottomRightRadius={'40px'} width={'200px'} />
                    </Box>
                    <Box className='firstRow__innerRight' flex={2} alignSelf={''} justifyContent={'space-around'} display={'flex'} flexDirection={'column'} gap={10} >
                    <Box display={'flex'} flexDir={'column'} gap={2}>
                        <Text fontFamily={'rubik'} >A WEB DEVELOPER</Text>
                            <Heading fontFamily={'source code pro'} >AFFI AFRIDI</Heading>
                            <Text fontFamily={'rubik'} fontWeight={'light'}>I am a Web Designer based in san francisco.</Text>    
                    </Box>
                        <Flex justifyContent={'end'}>
                            <Link>
                            <Image src={arrow}/>
                            </Link>
                        </Flex>
                    </Box>
                </Flex>
                <Flex className='firstRowRight' flexDir={'column'} flex={1} gap={5}>
                    <Flex className="firstRowRight__top" flexDir={'column'} alignContent={'center'} >
                        <Box py={3} px={5} maxW={'full'} borderRadius={'20px'} bg={'#718096'}>
                            <Text fontFamily={'rubik'} fontSize='13px'>LATEST WORK AND FEATURED .</Text>
                        </Box>
                    </Flex>
                    <Flex className="firstRowRight__second" gap={5}>
                        <Flex className="firstRowRight__secondLeft" flexDir={'column'} alignContent={'center'}  flex={1} border={'1px'} borderRadius={'40px'} py={5} bg={'#718096'}>
                            <Image src={sign} align={'center'} alignSelf={'center'}/>
                            <Flex justifyContent={'space-around'} alignItems={'center'}>
                                <Box>
                                    <Text fontFamily={'rubik'} fontSize='13px' >MORE ABOUT ME</Text>
                                    <Text fontFamily={'rubik'} fontSize='19px' fontWeight={'500'}>Credentials</Text>
                                </Box>
                                <Box>
                                    <Image src={arrow}/>
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex className="firstRowRight__secondRight" flexDir={'column'} alignContent={'center'}  flex={1} border={'1px'} borderRadius={'40px'} py={5} bg={'#718096'}>
                        <Image src={myWork} align={'center'} alignSelf={'center'}/>
                            <Flex justifyContent={'space-around'} alignItems={'center'}>
                                <Box>
                                    <Text fontFamily={'rubik'} fontSize='13px' >SHOWCASE</Text>
                                    <Text fontFamily={'rubik'} fontSize='19px' fontWeight={'500'}>Credentials</Text>
                                </Box>
                                <Box>
                                    <Image src={arrow}/>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
            {/* ================ First Row End =====================*/}
            
            {/* ================== Second Row Start ====================*/}
            <Flex className="secondRow" gap={5} mt={5}>
                <Flex className="secondRowLeft" flex={1} flexDir={'column'} alignContent={'center'} border={'1px'} borderRadius={'40px'} py={5} bg={'#718096'}>
                <Image src={gFonts} align={'center'} alignSelf={'center'}/>
                            <Flex justifyContent={'space-around'} alignContent={'center'} alignItems={'center'}>
                                <Box>
                                    <Text fontFamily={'rubik'} fontSize='13px' >MORE ABOUT ME</Text>
                                    <Text fontFamily={'rubik'} fontSize='19px' fontWeight={'500'}>Credentials</Text>
                                </Box>
                                <Box>
                                    <Image src={arrow}/>
                                </Box>
                            </Flex>
                </Flex>

                <Flex className="secondRowCenter"  flex={2} flexDir={'column'} justifyContent={'space-between'} borderRadius={'40px'} pt={12} pb={5} bg={'#718096'}>
                    <Box>
                    <Flex gap={20} justifyContent={'center'}>
                        <Image src={camera}/>
                        <Image src={pencil}/>
                        <Image src={react}/>
                        <Image src={mobile}/>
                    </Flex>
                    </Box>
                    <Box>
                    <Flex justifyContent={'space-between'} alignItems={'center'} px={10}>
                        <Box display={'flex'} flexDir={'column'}>
                            <Text fontFamily={'rubik'} fontSize='13px' alignItems={'center'}>SPECIALIZATION</Text>
                            <Text fontFamily={'rubik'} fontSize='19px' fontWeight={'500'}>Services Offering</Text>
                        </Box>
                        <Box>
                            <Image src={arrow} />
                        </Box>
                    </Flex>
                    </Box>
                </Flex>

                <Flex className="secondRowRight" flex={1} flexDir={'column'} justifyContent={'space-between'} borderRadius={'40px'} pt={12} pb={5} bg={'#718096'}>
                    <Flex justifyContent={'center'} gap={5}>
                        <Image src={pencil} border={'1px'} borderRadius={50} borderColor={'yellow.50'} p={5}/>
                        <Image src={react} border={'1px'} borderRadius={50} borderColor={'yellow.50'} p={5}/>
                    </Flex>
                            <Flex justifyContent={'space-around'}>
                                <Box>
                                    <Text fontFamily={'rubik'} fontSize='13px'>LET'S CONNECT</Text>
                                    <Text fontFamily={'rubik'} fontSize='19px' fontWeight={'500'}>Profiles</Text>
                                </Box>
                                <Box>
                                    <Image src={arrow}/>
                                </Box>
                            </Flex>
                </Flex>
            </Flex>
            {/* ==================== Second Row End =================== */}

            {/* ==================== Third Row Start =================== */}
            <Flex className="thirdRow" mt={5} gap={5}>
                <Flex className="thirdRowLeft" flex={1} bg={'#718096'} p={6} gap={5} borderRadius={'40px'}>
                <Flex gap={5} width={'full'}>

                <Flex className="thirdRowLeft__left" width={'33.33%'} flexDir={'column'} alignContent={'center'} alignItems={'center'} gap={3}  px={10} py={10} bg={'gray.400'} borderRadius={'40px'}>
                    <Text fontFamily={'rubik'} fontSize='32px' fontWeight={'500'}>01</Text>
                    <Text fontFamily={'rubik'} fontSize='13px' textAlign={'center'}>YEARS EXPERIENCE</Text>
                </Flex>
                <Flex className="thirdRowLeft__center" width={'33.33%'} flexDir={'column'} alignContent={'center'} alignItems={'center'} gap={3} px={10} py={10} bg={'gray.400'} borderRadius={'40px'}>
                    <Text fontFamily={'rubik'} fontSize='32px' fontWeight={'500'}>12+</Text>
                    <Text fontFamily={'rubik'} fontSize='13px' textAlign={'center'}>CLIENTS WORLDWIDE</Text>
                </Flex>
                <Flex className="thirdRowLeft__right" width={'33.33%'} flexDir={'column'} alignContent={'center'} alignItems={'center'} gap={3} px={10} py={10} bg={'gray.400'} borderRadius={'40px'}>
                    <Text fontFamily={'rubik'} fontSize='32px' fontWeight={'500'}>30+</Text>
                    <Text fontFamily={'rubik'} fontSize='13px' textAlign={'center'}>TOTAL PROJECTS</Text>
                </Flex>

                </Flex>
                </Flex>

                <Flex className="thirdRowRight" flexDir={'column'} flex={1} justifyContent={'flex-end'} position={'relative'} bg={'#718096'} p={6} gap={5} borderRadius={'40px'}>
                    <Box>
                        <Image src={icon} height={'70'} position={'absolute'} top={0}/>
                    </Box>
                    <Flex>
                        <Flex flex={1}>
                            <Text fontFamily={'rubik'} fontSize='40px' fontWeight={'500'}>Let's <br /> work <Mark color={'blue.200'}> together.</Mark></Text>
                        </Flex>
                        <Flex alignContent={'center'} alignItems={'center'}>
                            <Image src={arrow}/>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            {/* ==================== Third Row End =================== */}

            {/* ==================== FOOTER START =================== */}
            
            <Flex pt={'120px'} flexDir={'column'} alignContent={'center'} alignItems={'center'} gap={7}>
                <Box>
                    <Link top={"#"} _hover={{ textDecor: "none" }}>
                        <Heading fontSize={[16, 20, 24, 28, 32]} fontFamily={'source code pro'} color={"whiteAlpha.900"}>AFFI.</Heading>
                    </Link>
                </Box>
                <Box>
                <HStack fontSize={[10, 10, 14, 16, 16]} spacing={[3, 4, 5, 10]} fontFamily={'source code pro'} fontWeight={500} color={"whiteAlpha.500"}>
                  <Link display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}>HOME</Link>
                  <Link display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}>ABOUT</Link>
                  <Link display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}>WORK</Link>
                  <Link display={'flex'} gap={2} _hover={{ textDecoration: "none", color: 'gray.400' }}>CONTACT</Link>
                </HStack>
                </Box>
                <Box>
                    <Text fontFamily={'rubik'} fontSize='13px' color={'whiteAlpha.600'} textAlign={'center'}>2023 © All rights reserved by</Text>
                </Box>
            </Flex>
            
            {/* ==================== FOOTER END =================== */}
            
        </Container>
      {/* ======================= Hero Section End =========================== */}
      </Container>
    </div>
  );
}

export default Home;
