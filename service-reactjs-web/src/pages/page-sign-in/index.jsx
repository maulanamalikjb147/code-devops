import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import SignIn from '@components/Style2/Signin';

const PageSignin = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Sign in</title>
      </Head>

      <MainLayout>
        <main className="signin-page style-5">
          <SignIn />
        </main>
      </MainLayout>
    </>
  )
}

export default PageSignin;