import React from 'react'
import PageContactForm from '@/components/PageContactForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GetQuoteForm from '@/components/GetQuoteForm'
import Link from 'next/link'
import WhyUs from '@/components/WhyUs'

const electricalServices = () => {
  return (
    <>
      <Header />
      <div className="bg-[url('https://images.pexels.com/photos/942316/pexels-photo-942316.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-center bg-no-repeat bg-cover h-40"></div>
      <section>
        <div className="container mx-auto w-5xl py-10 flex px-6 justify-center items-center">
          <div className="basis-12/12 lg:basis-6/12">
            <h1 className="text-6xl font-bold tracking-tight sm:text-8xl pb-6">
              24-Hour Emergency Electrician
            </h1>
            <p className="py-2 text-xl">
              At Electrify Electric, we understand the importance of prompt and
              reliable service, especially in times of electrical emergencies
              that could potentially compromise the safety of your home. We aim
              to win your confidence by approaching every task with utmost
              professionalism and delivering top-notch, efficient service that
              does not break the bank.
            </p>
            <p className="py-2 text-xl">
              Our squad consists of skilled electricians, rigorously trained to
              specialize in emergency electrical services, ensuring that every
              crisis is resolved correctly and swiftly. We are ready to meet
              your urgent electrical needs with a dedication to accuracy and
              outstanding service quality.
            </p>
            <p className="py-2 text-xl font-bold">
              For emergency support don’t hesitate to call us at 240-555-0199 to
              initiate your service with specialists who genuinely care.
            </p>
            <div className="mt-20 mb-10">
              <a
                href="#"
                className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                Don't Wait Call Us Now <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="sm:basis-4/12">
            <GetQuoteForm />
          </div>
        </div>
      </section>
      <section>
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="py-20">
            <h2
              id="residential"
              className="text-4xl font-bold tracking-tight text-black lg:text-6xl leading-10 py-6"
            >
              What is Considered an Electrical Emergency?
            </h2>
            <p className="py-2 text-xl">
              There are many instances that are considered to be an electrical
              emergency.
            </p>
            <p className="py-2 text-xl">They include:</p>
            <div className="grid lg:grid-cols-2 gap-10 my-10 lg:my-5 text-lg">
              <div>
                <p className="font-bold">Lights flickering repeatedly</p>
                <p className="py-2">
                  Flickering lights can be a sign of a serious electrical
                  problem such as an overloaded circuit or faulty wiring,
                  necessitating immediate professional attention to prevent
                  further issues or damage.
                </p>
              </div>
              <div>
                <p className="font-bold">Hot Outlet</p>
                <p className="py-2">
                  A hot or warm outlet can signify a potentially dangerous
                  situation like an overloaded circuit or faulty wiring,
                  requiring urgent inspection and intervention from a licensed
                  electrician to mitigate the risk of fire.
                </p>
              </div>
              <div>
                <p className="font-bold">Hot Switch</p>
                <p className="py-2">
                  A hot or warm switch often indicates an unsafe condition,
                  possibly due to loose wiring or an overload, and it’s crucial
                  to have it assessed and repaired by a qualified electrician
                  promptly to avoid any electrical mishaps.
                </p>
              </div>
              <div>
                <p className="font-bold">Buzzing Outlet or Switch</p>
                <p className="py-2">
                  A buzzing sound from an outlet or switch is a warning sign of
                  faulty wiring or a loose connection, signaling an immediate
                  need for examination and resolution by a certified electrician
                  to prevent electrical hazards.
                </p>
              </div>
              <div>
                <p className="font-bold">Frequent Circuit Breaker Trip</p>
                <p className="py-2">
                  If a circuit breaker trips multiple times, it’s often
                  indicative of an overloaded circuit or a short circuit,
                  warranting immediate attention and rectification by a
                  professional electrician to ensure the safety of the
                  electrical system.
                </p>
              </div>
              <div>
                <p className="font-bold">Partial Power Loss</p>
                <p className="py-2">
                  Experiencing partial power loss in your home could be a sign
                  of a tripped breaker or a fault in the electrical circuit,
                  necessitating swift evaluation and correction by a licensed
                  electrician to restore full power safely.
                </p>
              </div>
              <div>
                <p className="font-bold">Shorted or Frayed Wire</p>
                <p className="py-2">
                  A wire that shorts out or appears frayed is a potential fire
                  hazard and a serious electrical emergency that requires
                  immediate inspection and repair by a qualified electrician to
                  prevent accidents and maintain safety.
                </p>
              </div>
              <div>
                <p className="font-bold">Burning Smell</p>
                <p className="py-2">
                  Detecting a burning smell in your home is a critical sign of a
                  possible electrical malfunction or overheating, necessitating
                  immediate shutdown of the suspected circuit and urgent
                  attention from a licensed electrician to prevent a fire or
                  other dangerous outcomes.
                </p>
              </div>
              <div>
                <p className="font-bold">Burnt Outlet or Light Socket</p>
                <p className="py-2">
                  A burnt appearance on an outlet or light socket indicates a
                  severe risk due to potential internal arcing or overheating,
                  and immediate discontinuation of its use, along with prompt
                  inspection and repair by a professional electrician, is
                  crucial to prevent further damage or fire.
                </p>
              </div>
              <div>
                <p className="font-bold">Wet Electrical Panel</p>
                <p className="py-2">
                  A wet electrical panel poses an immediate risk of short
                  circuits and electrical shocks and necessitates urgent
                  attention to dry out and possibly replace components, under
                  the guidance of a licensed electrician, to reinstate a secure
                  electrical environment.
                </p>
              </div>
              <div>
                <p className="font-bold">Smell of Burning Plastic</p>
                <p className="py-2">
                  The smell of burning plastic is a serious warning sign of a
                  potential electrical fire hazard, such as overheating or
                  malfunctioning wiring or devices, requiring the immediate
                  de-energizing of the suspected circuit and urgent intervention
                  by a licensed electrician to resolve the issue safely.
                </p>
              </div>
              <div>
                <p className="font-bold">Power Outages or Surges</p>
                <p className="py-2">
                  Experiencing frequent power outages or surges can signal
                  issues with the electrical supply or internal wiring,
                  necessitating a comprehensive evaluation and timely
                  intervention by a skilled electrician to maintain the
                  reliability and safety of your electrical system.
                </p>
              </div>
              <div>
                <p className="font-bold">Aluminium Wiring</p>
                <p className="py-2">
                  Aluminium wiring, used in some homes built in the mid-20th
                  century, can pose a fire risk due to its tendency to oxidize
                  and its incompatibility with some modern devices and fixtures,
                  necessitating an inspection and possible upgrade by a licensed
                  electrician.
                </p>
              </div>
              <div>
                <p className="font-bold">Frequently Blown Fuses</p>
                <p className="py-2">
                  Regularly experiencing blown fuses is usually a symptom of
                  overloaded circuits or faulty electrical devices, requiring
                  immediate attention and corrective measures by a qualified
                  electrician to ensure a stable and safe electrical setup.
                </p>
              </div>
              <div>
                <p className="font-bold"> Sparks or Smoke from Outlets</p>
                <p className="py-2">
                  The presence of sparks or smoke coming from outlets can
                  indicate severe electrical issues and potential fire risks,
                  making it imperative to seek immediate assistance from a
                  certified electrician to address and rectify the underlying
                  problem promptly.
                </p>
              </div>
              <div>
                <p className="font-bold">Mild Shock from Switches</p>
                <p className="py-2">
                  Receiving a mild shock when touching switches is a significant
                  safety concern, possibly due to faulty wiring or grounding
                  issues, and it requires immediate assessment and resolution by
                  a professional electrician to ensure a secure electrical
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-6 mb-20">
          <div className="max-w-5xl mx-auto px- bg-green-600 py-16 px-10 rounded">
            <p className="text-3xl text-white">
              If you have any of these signs, reach out to our emergency
              electrical service technicians at{' '}
              <a href="tel:12404765116" className="hover:text-yellow-400">
                (240) 476-5116
              </a>{' '}
              to dispatch a licensed, insured, and highly trained electrician to
              your home or business in ASAP.
            </p>
            <div className="mt-10 text-center ">
              <a
                href="#"
                className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                Don't Wait, Call Us Now<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <section>
        <div className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold py-10 text-center">
            FAQs about Electrical Emergencies
          </h2>
          <div className="lg:grid grid-cols-2 gap-10">
            <div>
              <h3 className="py-5 text-3xl">
                What constitutes an electrical emergency?
              </h3>
              <p className="text-xl max-w-2xl pb-4">
                An electrical emergency typically involves any situation where
                there is an immediate danger due to exposure to or contact with
                electrical components, such as electrical fires, power lines
                down, exposed wiring, or electrical shock.
              </p>
            </div>
            <div>
              <h3 className="py-5 text-3xl">
                What should I do if I experience an electrical shock?
              </h3>
              <p className="text-xl max-w-2xl pb-4">
                Seek immediate medical attention, even if the shock seems minor,
                as internal injuries can occur.
              </p>
            </div>
            <div>
              <h3 className="py-5 text-3xl">
                Who should I call in the event of an electrical emergency?
              </h3>
              <p className="text-xl max-w-2xl pb-4">
                Call your local emergency number immediately in life-threatening
                situations, followed by a licensed electrician to address the
                root cause.
              </p>
            </div>
            <div>
              <h3 className="py-5 text-3xl">
                Can I use a fire extinguisher on an electrical fire?
              </h3>
              <p className="text-xl max-w-2xl pb-4">
                Yes, but only if it's a Class C fire extinguisher, specifically
                designed for electrical fires. Never use water on an electrical
                fire.
              </p>
            </div>
            <div>
              <h3 className="py-5 text-3xl">
                Should I attempt to repair electrical issues myself?
              </h3>
              <p className="text-xl max-w-2xl pb-4">
                Unless you are qualified, you should never attempt to repair
                electrical issues yourself as it can be very dangerous. Always
                consult with or hire a licensed electrician.
              </p>
            </div>
            <div>
              <h3 className="py-5 text-3xl">
                What steps should I take if I smell burning or see smoke coming
                from an outlet?
              </h3>
              <p className="text-xl max-w-2xl pb-4">
                Immediately turn off power at the breaker and call your local
                fire department. After ensuring safety, have the issue inspected
                by a licensed electrician.
              </p>
            </div>
            <div>
              <h3 className="py-5 text-3xl">
                Is a flickering light a sign of an electrical emergency?
              </h3>
              <p className="text-xl max-w-2xl pb-4">
                It can be. While it might simply be a bulb issue, it could also
                indicate a more serious problem like faulty wiring or overload,
                requiring professional inspection.
              </p>
            </div>
            <div>
              <h3 className="py-5 text-3xl">
                What do I do if I have a power outage only in my home?
              </h3>
              <p className="text-xl max-w-2xl pb-4">
                Check your circuit breakers for a tripped switch. If you cannot
                restore power or it keeps tripping, call a licensed electrician
                to inspect the issue.
              </p>
            </div>
            <div>
              <h3 className="py-5 text-3xl">
                How do I identify overloaded circuits?
              </h3>
              <p className="text-xl max-w-2xl pb-4">
                Overloaded circuits may cause frequent breaker trips, dimming
                lights, buzzing noises, or even a burning smell. If suspected,
                reduce the load and consult with an electrician.
              </p>
            </div>
            <div>
              <h3 className="py-5 text-3xl">
                Should I attempt to repair electrical issues myself?
              </h3>
              <p className="text-xl max-w-2xl pb-4">
                Unless you are qualified, you should never attempt to repair
                electrical issues yourself as it can be very dangerous. Always
                consult with or hire a licensed electrician.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto py-10">
            <p className="text-xl text-center">
              Always remember to prioritize safety and consult with a licensed
              professional or your local authorities in any situation you
              believe to be an electrical emergency.
            </p>
          </div>
          <div className="mt-10 text-center ">
            <Link
              href="#"
              className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
            >
              Don't Wait, Call Us Now<span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default electricalServices
