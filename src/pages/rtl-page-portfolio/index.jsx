import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import NavbarRTL from '@components/Navbars/StartupNav/RTLNav';
import Projects from '@components/Portfolio/Projects';
import Download from '@components/Portfolio/Download';
import Footer from '@components/Startup/Footer';

const RTLPagePortfolio = () => {
  return (
    <>
      <Head>
        <title>Iteck - المشاريع</title>
      </Head>

      <MainLayout isRTL>
        <NavbarRTL whiteNotRounded />
        <main className="portfolio-page style-1">
          <Projects style="5" rtl />
          <Download style="5" rtl />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default RTLPagePortfolio;