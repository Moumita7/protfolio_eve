
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex   alignItems={'center'} gap="10">
        <Heading  as="h3" fontSize="x" fontWeight="thin"><Link href="/">Moumita Das</Link></Heading>
         <Button><Link href="/projects">Projects</Link></Button>
         <Button><Link href="/experience">Experience</Link></Button>
         </Flex>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.githubusercontent.com/u/97180521?v=4'}
                  />
                </MenuButton>   
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}