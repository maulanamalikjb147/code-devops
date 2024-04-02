import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import NavbarRTL from '@components/Navbars/StartupNav/RTLNav';
import AboutHeader from '@components/Saas/AboutHeader';
import Community from '@components/Saas/Community';
import Philosophy from '@components/Saas/Philosophy';
import ChooseUs from '@components/Saas/ChooseUs';
import Clients from '@components/Saas/Clients';
import Numbers from '@components/Saas/Numbers';
import Culture from '@components/Saas/Culture';
import Team from '@components/Saas/Team';
import Contact from '@components/Saas/Contact';
import Footer from '@components/Startup/Footer';

const RTLPageAbout = () => {
  return (
    <>
      <Head>
        <title>Iteck - من نحن</title>
      </Head>

      <MainLayout isRTL>
        <NavbarRTL whiteNotRounded />
        <main className="about-page style-5">
          <AboutHeader rtl paddingTop />
          <Community rtl />
          <Philosophy rtl />
          <ChooseUs rtl />
          <Clients padding rtl />
          <Numbers rtl />
          <Culture rtl />
          <Team rtl />
          <Contact rtl />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default RTLPageAbout;