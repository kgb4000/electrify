import React from 'react'
import Header from '@/components/Header'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'

const Testimonials = () => {
  return (
    <>
      <Header />
      {/* <Hero
        Hero
        h1text="Electrical Contractors and Electricians in Waldorf, MD"
        subtext="We're electricians serving residential
            and commerical customers in Waldorf, Maryland"
      /> */}
      <div className="bg-blend-overlay bg-[url('https://images.pexels.com/photos/5693405/pexels-photo-5693405.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-center bg-no-repeat bg-cover backdrop-saturate-50 bg-black/30">
        <div className="mx-auto max-w-6xl py-40 sm:py-30 px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">
              Testimonials
            </h1>
            <p className="mt-6 text-2xl leading-10 text-white">
              Reviwes From Our Customers
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-yellow-400 w-50 py-2.5 px-4 text-base font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Call (240) 476-5116
              </a>
              <a
                href="#"
                className="text-base font-semibold leading-6 text-white"
              >
                Get Your Quote Today <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="m-20 text-center">
        <div className="text-center w-4xl px-6">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600 text-center">
            See what more than 240 customers on Google had to say about our
            services.
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <section className="mb-32 text-center grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            <Testimonial
              name="Robert Rafford"
              text="Extremely professional and efficient! Had a ground wire put in between my garage and shed to get power out to the shed. Have used these guys twice now and would HIGHLY recommend them! Ronald is quick to let you know if there is going to be any delay or issues. Everything these guys have done for me has been top notch!!"
            />
            <Testimonial
              name="K West"
              text="Ron and Hezekiah did excellent work installing lights throughout our entire home. They were on time, quick with a long project, and kept the work area clean and cleaned up upon departure. They were both professional and pleasant. I am so happy to be able to see in what use to be a dark home. Jerome provided competitive rates, and will look to using them again for any lighting or electrical work that I might need"
            />
            <Testimonial
              name="Fontella Moody"
              text="I am so impressed with Jerome and his team. From the quote process to the site visit and the completion of the work they were professional, knowledgeable and quick. They communicated every step of the process. They are simply the best!"
            />
            <Testimonial
              name="Jade Johnson"
              text="Very pleasant and professional workers came to my door wearing  the company logo, so I knew who I was letting in my home.   They work well together and when the job was done. My old electric sockets are brand new and up to date with GFCI's as well as other electric work  that was done.  I will be calling this company for all my electric work."
            />
            <Testimonial
              name="Kortney Gonzalez"
              text="Ronald and his assistant (sorry I didn’t catch his name) were both awesome! They arrived on time, were more than pleasant and worked diligently to stay within our two hour time frame. They solved some wiring and lighting issues that others were stumped by for years. Will definitely be using this company again in the future and highly recommend their services!"
            />
            <Testimonial
              name="Severine Lupi"
              text="Very professional and courteous. Jerome the owner answered my call right away and provided me with a quote right after. Scheduling was fast and the repair was very effective. I will recommend and use them again in the future."
            />
            <Testimonial
              name="Karen Gray"
              text="I can ALWAYS count on Electrify Electric, LLC to understand my vision and deliver quality service. It's not always easy to find a company that isn't looking to drain your pockets but I've found that company with Electrify Electric, LLC."
            />
            <Testimonial
              name="Erica Crim"
              text="Very knowledgeable and professional. They came in and went straight to work. The technician explained everything perfectly concerning best and worse case scenarios. Both fans work perfectly!"
            />
            <Testimonial
              name="Liesl Peterson"
              text="I was so impressed by the quality and professionalism of the service we received. There was a slight language barrier but our technician whipped out his phone and we used google translator. I have never been so impressed at this type of service,"
            />
            <Testimonial
              name="Vin Gee"
              text="This company provided the best service and installation process for a 240v connection from my breaker box to an electric range. Cable routing was clean and professional. The price was very reasonable for the level of service provided."
            />
            <Testimonial
              name="Dorothy M."
              text="Excellent work! Ron and Hez did an amazing job! Knowledgeable and professional team. Had some outlets not functioning properly. They recognized the issues (different issue for each outlet) and got everything working like new! I trust them with keeping my home functional and safe! Thank you!"
            />
            <Testimonial
              name="Aaron Haas"
              text="I requested a quote for a 200 amp upgrade at around 10pm on a Sunday night. I got a response at around 6am the next morning from Jerome saying that he could be there as early as 7:30 that same morning! He was on time, professional, and made recommendations that made sense instead of just overselling what I actually needed. I received an official quote about an hour later. I highly recommend Electrify Electric, and will be using them for any future work I need done."
            />
            <Testimonial
              name="Chad Faison"
              text="Erik and Ethan were very professional, knowledgeable, and resolved the issue in a timely manner. Electrify Electric will be our first call whenever we have electrical issues in the future!"
            />
            <Testimonial
              name="Nick Newlin"
              text="Very happy with professionalism and knowledge. They fixed the switch, looked over our other issues and gave specific recommendations, listened, great work. Will keep using! They do small jobs too at reasonable rates. Highly recommend!"
            />
            <Testimonial
              name="Queen Alexander"
              text="The team did an excellent job. They kept me posted on issues and provided great service. Definitely recommend to anyone looking for a good company with great work ethics."
            />
            <Testimonial
              name="Teresa Stevenson"
              text="Arrived on time, courteous, and neat. I would recommend this company to anyone wanting to get electrical work done."
            />
            <Testimonial
              name="Tonjala Ponds"
              text="We are extremely pleased with our new chandeliers and exterior light fixtures. The owner Jerome, and his team extended superior service. The quality of their work exceeded our expectations. Electrify Electric, LLC is simply the best!!"
            />
            <Testimonial
              name="Queen Alexander"
              text="The team did an excellent job. They kept me posted on issues and provided great service. Definitely recommend to anyone looking for a good company with great work ethics."
            />
            <Testimonial
              name="Teresa Stevenson"
              text="Arrived on time, courteous, and neat. I would recommend this company to anyone wanting to get electrical work done."
            />
            <Testimonial
              name="Cyndie"
              text="Jerome and the team are phenomenal! They were upfront about the costs and communicated if I would incur additional charges. They thoroughly explained my problem and worked quickly to resolve it. Looking forward to hiring them for other projects!"
            />
            <Testimonial
              name="David Small"
              text="They were on time and very professional,  and finished the job on time. Reasonable rates, would definitely recommend them."
            />
            <Testimonial
              name="Clarence Mitchell"
              text="From the initial job quote to the job completion, Electrify Electric, LLC (EE, LLC) demonstrated the highest level of professionalism and pride in the quality of work they have done in my home. It is not easy finding companies you can trust, to not only just get the job done. You can trust EE, LLC’s exceptional quality of work having a high-level of attention-to-detail, getting the job completed right, the first time. Not only can you trust the quality of work, most important, you can trust the fair pricing. EE, LLC  completed a major upgrade/update to our main electric panel box and related switches/plugs throughout the home, replacing a 40-year-old panel box which had a few major safety issues. In addition, they install a new wired EV charger, wired Ring Floodlights and other external home lighting. My wife and I are extremely happy with their work and would highly recommend them to others without any doubts or hesitation. Outstanding job and customer service!"
            />
            <Testimonial
              name="Aaron Haas"
              text="I requested a quote for a 200 amp upgrade at around 10pm on a Sunday night. I got a response at around 6am the next morning from Jerome saying that he could be there as early as 7:30 that same morning! He was on time, professional, and made recommendations that made sense instead of just overselling what I actually needed. I received an official quote about an hour later. I highly recommend Electrify Electric, and will be using them for any future work I need done."
            />
            <Testimonial
              name="Zo"
              text="Let me start by saying that as of now, Electrify Electric is the only place that I'll use when I need any type of electrical work done. Big shout out to Jerome, who came out late on a Thursday when he didn't have to to try and help us understand why our brand new Dryer was immediately tripping the breaker. He came out promptly and evaluated both our breaker and the socket the dryer was plugged into. He was ultimately able to confirm that both the socket and the breaker were functioning properly. This allowed us to quickly engage the manufacturer for an immediate replacement and to also eliminate the step of them sending their technician out before they could schedule a replacement because Jerome had already confirmed that the electrical system was not the issue."
            />
          </section>
        </div>
        <div className="mt-20">
          <a
            href="#"
            className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
          >
            Get Your Quote Today <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Testimonials
