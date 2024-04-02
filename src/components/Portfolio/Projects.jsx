import { useEffect } from 'react';
import Link from 'next/link';
import projects from '@data/Portfolio/projects.json';
import projectsRTL from '@data/Portfolio/projects-rtl.json';

const Projects = ({ style = "4", rtl }) => {
  const projectsData = rtl ? projectsRTL : projects;

  useEffect(() => {
    setTimeout(() => {
      if (!mixitup) return;
      mixitup('.portfolio-projects')
    }, 0);
  }, []);

  return (
    <section className={`portfolio-projects section-padding pt-50 style-1 ${style === '5' ? '':'bg-white'}`}>
      <div className="container">
        <div className={`section-head text-center style-${style} ${style === '5' ? 'mb-60':'mb-40'}`}>
          {
            style === '4' && (<small className="title_small">portfolio</small>)
          }
          <h2 className="mb-20">{ rtl ? '' : 'Our' }  <span> { rtl ? 'مشاريعنا' : 'Projects' } </span> </h2>
          <p>{ rtl ? 'لدينا فريق من ذوي الخبرة من موظفي الإنتاج والتفتيش لضمان الجودة.' : 'We have an experienced team of production and inspection personnel to ensure quality.' }</p>
        </div>
        <div className="controls">
          {
            projectsData.filters.map((filter, i) => (<button key={i} type="button" className="control" data-filter={filter.filter}>{ filter.title }</button>))
          }
        </div>
        <section className="portfolio style-1">
          <div className="content">
            <div className="row mix-container">
              {
                projectsData.projects.map((project, i) => (
                  <div className={`col-lg-4 mix ${project.filter}`} key={i}>
                    <div className={`portfolio-card ${i !== projects.projects.length - 1 ? 'mb-50':''}`}>
                      <div className="img">
                        <img src={project.image} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <Link href={rtl ? "/rtl-page-single-project" : "/page-single-project-5"}>
                            <a>{ project.title }</a>
                          </Link>
                        </h5>
                        <small className="d-block color-main text-uppercase">{ project.type }</small>
                        <div className="text">
                          { project.details }
                        </div>
                        <div className="tags">
                          {
                            project.tags.map((tag, i) => (<a key={i} href="#" className="me-1">{ tag }</a>))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="text-center">
            <a href="#" className={`btn rounded-pill fw-bold ${style === '5' ? 'mt-30 sm-butn hover-blue2 blue5-3Dbutn':'me-4 text-white bg-blue4'}`} target="_blank">
              <small>{ rtl ? 'مشاهدة المزيد' : 'Show More' } (24)</small>
            </a>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Projects