import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import NavbarRTL from '@components/Navbars/StartupNav/RTLNav';
import AllNews from '@components/SinglePost/AllNews';
import PopularPosts from '@components/SinglePost/PopularPosts';
import Footer from '@components/Startup/Footer';

const RTLPageSinglePost = () => {
  return (
    <>
      <Head>
        <title>Iteck - تفاصيل الخبر</title>
      </Head>

      <MainLayout isRTL>
        <NavbarRTL whiteNotRounded />
        <main className="blog-page style-5">
          <AllNews style="5" rtl />
          <PopularPosts style="5" rtl />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default RTLPageSinglePost;