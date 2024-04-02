import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import NavbarRTL from '@components/Navbars/StartupNav/RTLNav';
import BlogSlider from '@components/Blog/BlogSlider';
import PopularPosts from '@components/Blog/PopularPosts';
import AllNews from '@components/Blog/AllNews';
import Footer from '@components/Startup/Footer';

const RTLPageBlog = () => {
  return (
    <>
      <Head>
        <title>Iteck - المدونة</title>
      </Head>

      <MainLayout isRTL>
        <NavbarRTL whiteNotRounded />
        <main className="blog-page style-5">
          <BlogSlider style="5" rtl />
          <PopularPosts style="5" rtl />
          <AllNews style="5" rtl />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default RTLPageBlog;