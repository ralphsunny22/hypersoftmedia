import React from 'react'

import Work from './work';

const Works = () => {

    const works = [
        {
          id: 1,
          logo: "work1.png",
          title: "Funnel",
          description: "Ebook generation and management. A web-app for generating ebooks in PDF format. The application comes handy with 5 different ways of doing so.",
          url: "funnel.hypersoftmedia.com",
        },
        {
            id: 2,
            logo: "work3.png",
            title: "Gwammu Africa",
            description: "Buy Smarter, Sell Faster! Classified Ads for Free. Post free classified advertising to attract buyers. Individuals who are real. Ads can be found quickly. Anything can be bought and sold. Registration is simple. Look for something in your area.",
            url: "gwammu.com",
        },
        {
            id: 3,
            logo: "work4.png",
            title: "eClat",
            description: "Health Solutions for everyone. AI-powered, Patient-inspired · Electronic Medical Records · Health Insurance Management · Smarthealth · ePharmacy",
            url: "mini.eclathealthcare.com/",
        },
        {
            id: 4,
            logo: "work5.png",
            title: "ShopNig",
            description: "Online store where you can purchase all your electronics, as well as books, home appliances, kiddies items, fashion items for men, women, and children; cool gadgets, computers, groceries, automobile parts, and more on the go. What more? You can have them delivered directly to you. Shop online with great ease as you",
            url: "shopnig.com/",
        },
        {
            id: 5,
            logo: "work6.png",
            title: "Lightgates",
            description: "A multi-school educational application that seeks to produce ICT outcomes that accelerate learning and school activities; bringing ICT results that enable them to flourish quickly and profitably while also increasing student development, ensuring a committed and workable relationship with all schools.",
            url: "lightgates.app/",
        },
        {
            id: 6,
            logo: "work7.png",
            title: "GUO Applications",
            description: "Access Books, Newspapers/Magazines & exam materials anytime, anywhere. Read & Listen to Success",
            url: "guoapplications.com/",
        },

    ]

    const imgStyle = {
        width:'30%',
        height:'100%',
        objectFit:'cover'
    }

    const inner_item = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
    }

  return (
    <>
        <section name="services" className="services section-padding bg-gray" data-scroll-index="2">
        <div className="container">
            <div className="row">
                
                <div className="section-head text-center col-sm-12">
                    <h4>My Works</h4>
                    <h6>Latest Projects</h6>
                </div>

                { works && works.map(work => (
                    <Work key={work.id} logo={work.logo} title={work.title} description={work.description} url={work.url} />
                ))}

                

            </div>
        </div>
        <div className="se-tring se-tring-rev">
            <span className="left"></span>
            <span className="right"></span>
        </div>
    </section>
    </>
  )
}

export default Works