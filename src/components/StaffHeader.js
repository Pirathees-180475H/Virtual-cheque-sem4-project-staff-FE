import React from 'react';
import { Flex, Box,Heading,Button, ReactRouterLink,Center,Menu,MenuItem,MenuGroup,MenuDivider,MenuButton,MenuList,Avatar} from '@chakra-ui/react';
import { HamburgerIcon, EditIcon,LockIcon,ExternalLinkIcon, SettingsIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import SampleProfile from './StaffPagePics/pro.jpg';

function Navbar(props) {
  const MenuItems = ({ children }) => (
    <Button
      mt={{ base: 4, md: 0 }}
      mr={6}
      display="block"
      colorScheme="teal.500"
      variant="link"
    >
      {children}
    </Button>
  );

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  



  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.6rem"
      bg="#171923"
      color="white"
      position="fixed"
      top="0"
      width="100%"
      zIndex="10000"
      borderTopColor="#3182CE"
      borderTopWidth="5px"
      borderBottomColor="#3182CE"
      borderBottomWidth="5px"

    >
      <Flex align="center" mr={5}>
        <Link as={ReactRouterLink} to="/StaffDashboard">
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
             Online Cheque
          </Heading>
          </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />


      </Box>
      

          <Box
            display={{ base: show ? 'block' : 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            pl="20px"
          >
            <MenuItems>
              <Link as={ReactRouterLink} to="/StaffDashboard">
                Dashboard
              </Link>
            </MenuItems>

            <MenuItems>
              <Link as={ReactRouterLink} to="/CustomerDetails">
              Customer Details
              </Link>
            </MenuItems>

            <MenuItems>
              <Link as={ReactRouterLink} to="/pinRequests">
              Pin Change Requests
              </Link>
            </MenuItems>


            <MenuItems>
              <Link as={ReactRouterLink} to="/NewRegisterRequests">
             New Join Requests
              </Link>
            </MenuItems>

            <MenuItems>
              <Link as={ReactRouterLink} to="/cheques">
            Get Cheque Requests
              </Link>
            </MenuItems>
          </Box>


      <Box marginRight="2rem">
      <Center mb="5px" mt="10px">
            <Avatar src={SampleProfile} />
      </Center>
      </Box>

      <Box marginRight="2rem">
      <Center mb="5px" mt="10px">
             ID: 475D
      </Center>
      </Box>
     
     
     

      
      <Box marginRight="2rem"> 

      <Menu  >
        <MenuButton as={SettingsIcon} colorScheme="pink">
          Profile
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile" color="#1A202C">
          <Link as={ReactRouterLink}  to="/StaffDashboard">
            <MenuItem color="#1A202C"><ExternalLinkIcon/> &nbsp; My Profile</MenuItem>
          </Link>
            <Link as={ReactRouterLink}  to="/StaffchangeDetails">
            <MenuItem color="#1A202C"> <EditIcon/> &nbsp; Change Profile</MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />

          <Link as={ReactRouterLink}  to="/StaffChangePassword">
            <MenuItem color="#1A202C"> <LockIcon/> &nbsp; Change Password</MenuItem>
          </Link>
         
          <Link as={ReactRouterLink}  to="/">
            <MenuItem color="#1A202C" > <SettingsIcon/> &nbsp; Log Out</MenuItem>
            </Link>
          
        </MenuList>
      </Menu>

      </Box>

    </Flex>
  );
}

export default Navbar;
