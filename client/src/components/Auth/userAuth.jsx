import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SignupCard from './Signup'
import Login from './login'
const UserAuth= () => {
 
  return (
    <Tabs variant='enclosed'>
  <TabList mx='45%'>
    <Tab color='pink.400'>Signup</Tab>
    <Tab color='pink.400'>Login</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <SignupCard />
    </TabPanel>
    <TabPanel>
      <Login />
    </TabPanel>
  </TabPanels>
</Tabs>
    
  );
};

export default UserAuth;
