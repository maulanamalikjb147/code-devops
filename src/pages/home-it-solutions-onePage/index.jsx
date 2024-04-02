import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/ITNav/OnePageNav';
import Header from '@components/IT/Header';
import Services from '@components/IT/Services';
import ChooseUs from '@components/IT/ChooseUs';
import Reviews from '@components/IT/Reviews';
import Pricing from '@components/IT/Pricing';
import Blog from '@components/IT/Blog';
import Contact from '@components/IT/Contact';
import Footer from '@components/IT/Footer';

const HomeITSolutionsOnePage = () => {
  return (
    <>
      <Head>
        <title>Iteck - IT Solutions One Page</title>
      </Head>

      <MainLayout scrollTopText>
        <Navbar />
        <Header />
        <main>
          <Services />
          <ChooseUs />
          <Reviews />
          <Pricing />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default HomeITSolutionsOnePage;