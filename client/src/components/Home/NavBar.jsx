import React from "react";
import { useState } from "react";
import {
  Box,
  Image,
  Button,
  Link,
  Text,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  useDisclosure,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";

// import Logo from "./Assets/nykaa.svg"
import { SearchIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { MdCardGiftcard } from "react-icons/md";
import { FiSmartphone, FiHelpCircle } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

var link = "https://adn-static1.nykaa.com/media/wysiwyg/2021/topstrips17.jpg";
function NavBar() {
  const [isShown, setIsShown] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box position="fixed" w="100%" h="40px" backgroundImage={link}>
        <Box h="100%" mx="6%">
          <Flex>
            <Box my="5px">
              <Text color="black.700">
                Mega Republic Day Sale - Upto 50% Off
              </Text>
            </Box>
            <Spacer />
            <Box pt="5px">
              <Flex>
                {" "}
                <Icon mt="7%" as={FiSmartphone} />{" "}
                <Text>&nbsp;&nbsp;Get App |&nbsp;</Text>{" "}
              </Flex>
            </Box>
            <Box pt="5px">
              <Flex>
                {" "}
                <Icon mt="4%" as={GoLocation} />{" "}
                <Text>&nbsp;Store & Events |&nbsp;</Text>{" "}
              </Flex>
            </Box>
            <Box pt="5px">
              <Flex>
                {" "}
                <Icon mt="5%" as={MdCardGiftcard} />{" "}
                <Text>&nbsp; Gift Card |&nbsp;</Text>{" "}
              </Flex>
            </Box>
            <Box pt="5px">
              <Flex>
                {" "}
                <Icon mt="10%" as={FiHelpCircle} /> <Text>&nbsp; Help</Text>{" "}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box
        w="100%"
        h="70px"
        bg="white"
        position="fixed"
        mt="40px"
        // mb="70px"
        boxShadow="0 5px 5px 0 #00000038"
      >
        <Flex
          h="100%"
          mx="2.5%"
          // pt="1%"
          // bg="blackAlpha.100"
        >
          <Flex
            h="80%"
            //    pt="%"
            // my="5"
            // bg="blue.400"
          >
            <Image src="./nykaa.svg" h="90%" mt="5px"></Image>
            <Link mt="4%" fontSize="md" color="blackAlpha.900" mx="10px">
              CATEGORIES
            </Link>
            <Link mt="4%" fontSize="md" color="blackAlpha.900" mx="10px">
              BRANDS
            </Link>
            <Link mt="4%" fontSize="md" color="blackAlpha.900" mx="10px">
              NYKAA&nbsp;FASHION
            </Link>
            <Link mt="4%" fontSize="md" color="blackAlpha.900" mx="10px">
              BEAUTY&nbsp;ADVICE
            </Link>
          </Flex>
          <Spacer />
          <Box mt="1.5%" mr="30px">
            <InputGroup size="md">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input type="text" placeholder="Search on Nykaa" />
            </InputGroup>
          </Box>
          <Flex mt="2%" ml="10px" mr="70px">
            <Icon as={AiOutlineUser} w={5} h={5}></Icon>
            <Text>User</Text>
            <Icon
              as={BiShoppingBag}
              ml="10px"
              w={5}
              h={5}
              onClick={onOpen}
            ></Icon>
          </Flex>
        </Flex>
      </Box>
      <Box w="100%" pt="110px" h="160px" boxShadow="0 1px 1px 0 #00000038">
        <Flex mt="1%" mx="6%">
          <Box
            mx="2%"
            pb="2%"
            fontSize="md"
            onMouseEnter={() => setIsShown(true)}
            _hover={{
              color: "#fc3e87",
            }}
            onMouseLeave={() => setIsShown(false)}
          >
            Makeup
          </Box>
          <Box
            mx="2%"
            fontSize="md"
            onMouseEnter={() => setIsShown(true)}
            _hover={{
              color: "#fc3e87",
            }}
            onMouseLeave={() => setIsShown(false)}
          >
            Skin
          </Box>
          <Box
            mx="2%"
            fontSize="md"
            onMouseEnter={() => setIsShown(true)}
            _hover={{
              color: "#fc3e87",
            }}
            onMouseLeave={() => setIsShown(false)}
          >
            Hair
          </Box>
          <Box
            mx="2%"
            fontSize="md"
            onMouseEnter={() => setIsShown(true)}
            _hover={{
              color: "#fc3e87",
            }}
            onMouseLeave={() => setIsShown(false)}
          >
            Appliances
          </Box>
          <Box
            mx="2%"
            fontSize="md"
            onMouseEnter={() => setIsShown(true)}
            _hover={{
              color: "#fc3e87",
            }}
            onMouseLeave={() => setIsShown(false)}
          >
            Personal&nbsp;Care
          </Box>
          <Box
            mx="2%"
            fontSize="md"
            onMouseEnter={() => setIsShown(true)}
            _hover={{
              color: "#fc3e87",
            }}
            onMouseLeave={() => setIsShown(false)}
          >
            Natural
          </Box>
          <Box
            mx="2%"
            fontSize="md"
            onMouseEnter={() => setIsShown(true)}
            _hover={{
              color: "#fc3e87",
            }}
            onMouseLeave={() => setIsShown(false)}
          >
            Mom&nbsp;&&nbsp;Baby
          </Box>
          <Box
            mx="2%"
            fontSize="md"
            onMouseEnter={() => setIsShown(true)}
            _hover={{
              color: "#fc3e87",
            }}
            onMouseLeave={() => setIsShown(false)}
          >
            Health&nbsp;&&nbsp;Wellness
          </Box>
          <Box
            mx="2%"
            fontSize="md"
            onMouseEnter={() => setIsShown(true)}
            _hover={{
              color: "#fc3e87",
            }}
            onMouseLeave={() => setIsShown(false)}
          >
            Men
          </Box>
          <Box
            mx="2%"
            fontSize="md"
            onMouseEnter={() => setIsShown(true)}
            _hover={{
              color: "#fc3e87",
            }}
            onMouseLeave={() => setIsShown(false)}
          >
            Fragnance
          </Box>
        </Flex>
      </Box>
      {isShown && (
        <Box
          onMouseLeave={() => setIsShown(false)}
          onMouseEnter={() => setIsShown(true)}
          w="100%"
        >
          <HStack
            position="fixed"
            w="88%"
            mx="6%"
            spacing="0%"
            boxShadow="0 5px 10px 0 #00000038"
          >
            <Box w="16.5%" p="1%" h="400px" bg="white">
              <VStack align="left">
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="md"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  as="u"
                >
                  FACE
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Face Primer
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Concealer
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Foundation
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Compact
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Contour
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Loose Powder
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Blush
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Bronzer
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  BB & CC Cream
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Highlighters
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Setting Spray
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Makeup Remover
                </Text>
              </VStack>
            </Box>
            <Box w="16.5%" p="1%" h="400px" bg="gray.100">
              <VStack align="left">
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="md"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  as="u"
                >
                  EYES
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Kajal
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Eyeliner
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Mascara
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Eye Shadow
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Eye Brow Enhancer
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Eye Primer
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  False Eyelashes
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Eye Makeup Remover
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Under Eye Concelear
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Contact Lenses
                </Text>
              </VStack>
            </Box>
            <Box w="16.5%" p="1%" h="400px" bg="white">
              <VStack align="left">
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="md"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  as="u"
                >
                  MAKEUP KITS
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  // as='u'
                >
                  Eye Palettes
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Face Palettes
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Customize Your Palette
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="md"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  as="u"
                >
                  LIPS
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Lipstick
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Liquid Lipstick
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Lip Crayon
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Lip Gloss
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Lip Liner
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Lip Plumper
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Lip Stain
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Lip Balm
                </Text>
              </VStack>
            </Box>
            <Box w="16.5%" p="1%" h="400px" bg="gray.100">
              <VStack align="left">
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="md"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  as="u"
                >
                  NAILS
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Nail Polish
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Nail Arts Kits
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Nail Polish Sets
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Nail Care
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Nail Polish Remover
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Manicure & Pedicure Kits
                </Text>
              </VStack>
            </Box>
            <Box w="16.5%" p="1%" h="400px" bg="white">
              <VStack align="left">
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="md"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  as="u"
                >
                  TOOLS & BRUSHES
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Face Brush
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Blush Brush
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Eye Brush
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Lip Brush
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  {" "}
                  Brush Sets
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Sponges & Applicators
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Eyelash Curlers
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Tweezers
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Sharpners
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Mirrors
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Makeup Pouches
                </Text>
              </VStack>
            </Box>
            <Box w="16.5%" p="1%" h="400px" bg="gray.100">
              <VStack align="left">
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="md"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                  as="u"
                >
                  TOP BRANDS
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Kay Beauty
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Huda
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Charlotte Tilbury
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  M.A.C
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Maybelline New York
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  L'Oreal Paris
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Lakme
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Nykaa Cosmetics
                </Text>
                <Text
                  _hover={{ color: "#fc3e87" }}
                  fontSize="sm"
                  color="blackAlpha.700"
                  justifyContent="flex-start"
                  textAlign={"start"}
                >
                  Nyx Pro.Makeup
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default NavBar;
