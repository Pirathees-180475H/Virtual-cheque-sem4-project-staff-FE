import React from 'react';
import {
  Box,
  Image,
  Badge,
  Grid,
  GridItem,
  Center,
  Button,
  Heading,
  ReactRouterLink,
} from '@chakra-ui/react';
import { StarIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {
  MdArrowForward,
  MdSend,
  MdZoomIn,
  MdLOGIcon,
  MdAccountCircle,
} from 'react-icons/md';

function WelcomeCard(props) {
  return (
    <Box
      width="auto"
      overflow="hidden"
      p="10px"
      mb="10px"
      ml="20px"
      mr="20px"
      mt="-120px"
    >
      <Grid
        h="auto"
        templateColumns="repeat(8, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem
          colSpan={{ base: 8, md: 2 }}
          rowSpan={{ base: 3, md: 3 }}
          pt="12px"
        ></GridItem>

        <GridItem colSpan={{ base: 8, md: 5 }} rowSpan={{ base: 1, md: 3 }}>
          <Box p="6">
            <Box mt="0" mb="5" fontWeight="semibold" as="h4" lineHeight="tight">
              <Image
                src={props.imageUrl}
                alt={props.imageAlt}
                borderRadius="full"
                boxSize="300px"
              />

              <Heading as="h5" size="3xl" color="white">
                Login to start
              </Heading>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="white" fontSize="sm">
                You can now send and receive checks easily
              </Box>
            </Box>
            <Link as={ReactRouterLink} to="/usersignin">
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="solid"
                size="lg"
                mt="30px"
                rightIcon={<MdAccountCircle />}
              >
                Sign IN
              </Button>
            </Link>
          </Box>
        </GridItem>
        <GridItem
          colSpan={{ base: 8, md: 1 }}
          rowSpan={{ base: 1, md: 3 }}
          pt="50px"
        ></GridItem>
      </Grid>
    </Box>
  );
}

export default WelcomeCard;
