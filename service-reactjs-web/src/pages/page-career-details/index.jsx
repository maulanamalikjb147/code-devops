import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/SaasNav';
import Header from '@components/Style2/Header';
import JobDetails from '@components/Style2/CareerDetails/JobDetails';
import CareerPositions from '@components/Style2/CareerDetails/CareerPositions';
import CareerForm from '@components/Style2/CareerDetails/CareerForm';
import Footer from '@components/Saas/Footer';

const PageCareerDetails = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Career Details</title>
      </Head>

      <MainLayout>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} />
        <Header page="Career Details" title="Product Designer" />
        <main className="career-details-page style-5 pt-100">
          <JobDetails />
          <CareerPositions />
          <CareerForm />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageCareerDetails;