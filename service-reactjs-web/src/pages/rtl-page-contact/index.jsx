import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import NavbarRTL from '@components/Navbars/StartupNav/RTLNav';
import Form from '@components/Contact/Form';
import Map from '@components/Contact/Map';
import Footer from '@components/Startup/Footer';

const RTLPageContact = () => {
  return (
    <>
      <Head>
        <title>Iteck - اتصل بنا</title>
      </Head>

      <MainLayout isRTL>
        <NavbarRTL whiteNotRounded />
        <main className="contact-page style-5">
          <Form style="5" rtl />
          <Map />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default RTLPageContact;