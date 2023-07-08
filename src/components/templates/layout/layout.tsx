import { Flex, useTheme } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

import { CtfToolboxDynamic } from '@src/_ctf-private';
import { SignupBanner } from '@src/_ctf-private/ctf-sign-up-banner';

interface LayoutPropsInterface {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutPropsInterface) => {
  const router = useRouter();
  const theme = useTheme();

  const isHomePage = router.pathname === '/';

  return (
    <>
      <SignupBanner />
      <Header
        borderBottom={isHomePage ? '' : '1px'}
        borderColor={isHomePage ? null : theme.f36.gray200}
      />
      <Flex flexGrow="1" flexDirection="column" width="100%" as="main" pb={{ base: 8, lg: 12 }}>
        {children}
      </Flex>
      <CtfToolboxDynamic />
      <Footer />
    </>
  );
};
