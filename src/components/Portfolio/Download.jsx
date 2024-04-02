import Link from 'next/link';

const Download = ({ style = "4", rtl }) => {
  return (
    <section className={`download section-padding style-5 ${style==='4' ? 'bg-light':''}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="content text-center">
              <div className={`section-head text-center ${style === '4' ? 'style-4':''}`}>
                <h2 className="mb-20"> { rtl ? 'قم بالوصول إلى إمكانات عملك اليوم وابحث عن فرصة لتحقيق' : 'Access your business potentials today & find opportunity for ' } 
                  <span>
                    { rtl ? 'نجاح أكبر' : 'bigger success' }
                    {
                      style === '5' && (
                        <>
                          <img src="/assets/img/header/head5_line.png" alt="" className="head-line"></img>
                          <img src="/assets/img/header/head5_pen.png" alt="" className="head-pen"></img>
                        </>
                      )
                    }
                  </span> 
                </h2>
              </div>
              <div className="butns mt-70">
                <Link href={rtl ? "/rtl-page-contact" : "/page-contact-app" }>
                  <a className={`btn rounded-pill fw-bold ${style === '4' ? 'bg-blue4 text-white' : 'blue5-3Dbutn hover-blue2 sm-butn mx-1'}`} target="_blank">
                    <small>{ rtl ? 'ابدأ مشروعاً الان' : 'Start A Project Now' }</small>
                  </a>
                </Link>
                <Link href={rtl ? "/rtl-page-about" : "/page-about-app" }>
                  <a className={`btn rounded-pill fw-bold ${style === '4' ? 'bg-blue4 text-white' : 'blue5-3Dbutn hover-blue2 sm-butn mx-1'}`} target="_blank">
                    <small>{ rtl ? 'انظر التسعير و الخطة' : 'See Pricing & Plan' }</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/contact_globe.svg" alt="" className="contact_globe" />
    </section>
  )
}

export default Download