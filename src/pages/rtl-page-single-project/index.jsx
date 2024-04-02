import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import NavbarRTL from '@components/Navbars/StartupNav/RTLNav';
import About from '@components/SingleProject/About';
import Challenge from '@components/SingleProject/Challenge';
import Screenshots from '@components/App/Screenshots';
import About2 from '@components/SingleProject/About2';
import Projects from '@components/SingleProject/Projects';
import Footer from '@components/Startup/Footer';

const RTLPageSingleProject = () => {
  return (
    <>
      <Head>
        <title>Iteck - تفاصيل المشروع</title>
      </Head>

      <MainLayout isRTL>
        <NavbarRTL whiteNotRounded />
        <main className="single-project pt-50 style-5">
          <About style="5" rtl />
          <Challenge style="5" rtl />
          <Screenshots />
          <About2 style="5" rtl />
          <Projects style="5" rtl />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default RTLPageSingleProject;