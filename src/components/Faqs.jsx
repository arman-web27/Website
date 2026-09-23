import { useState } from 'react'

const questions = [
  ['Best Practices for Keyword Density?', 'Google has said for years that the most important single factor to them is high quality content. We help ambitious businesses generate more profits by building awareness, driving web traffic, and connecting with customers.'],
  ['What is off page SEO link building?', 'Off-page SEO is the work done outside your website to improve its authority, reputation, and visibility in search results.'],
  ['What is domain authority?', 'Domain authority is a comparative score that estimates how likely a website is to rank in search engine results.'],
  ['What is broken link building?', 'Broken link building is finding dead links on relevant websites and offering useful replacement content from your own site.'],
  ['How do I conduct keyword research?', 'Start by understanding your audience, then use search trends, competitor research, and intent-focused keyword tools to build a focused list.'],
  ['Best SEO Practices for Page Layouts?', 'Use a clear hierarchy, descriptive headings, readable spacing, and a layout that makes your most important content easy to find.'],
  ['Best SEO Practices for High Quality Content?', 'Create original, helpful content that answers real questions and demonstrates expertise while staying easy to read.'],
  ['Which SEO techniques are popular?', 'Technical SEO, content optimization, internal linking, local SEO, digital PR, and ethical link building remain effective growth foundations.'],
  ['Are SEO meta tags important?', 'Title tags and meta descriptions help search engines and people understand your pages, making them important parts of a healthy SEO strategy.'],
  ['Where do I start my SEO strategy?', 'Begin with a technical audit, audience research, competitor review, and clear goals you can measure over time.'],
]

function FaqIcon({ name = 'arrow' }) {
  const paths = {
    arrow: 'M7 17 17 7M7 7h10v10',
    pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    phone: 'M7 3l3 2-2 3a14 14 0 0 0 8 8l3-2 2 3-2 3c-8 0-15-7-15-15l3-2Z',
    mail: 'M3 5h18v14H3ZM3 6l9 7 9-7',
  }
  return <svg className="mr-2 inline-block h-5 w-5 shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}

function Faqs() {
  const [openQuestion, setOpenQuestion] = useState(0)

  return (
    <section id="faqs" className="faqs-dark relative overflow-hidden bg-[#060605] px-6 py-24 text-white lg:px-8">
      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#d4af57]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6"><div><p className="font-bold uppercase tracking-[0.25em] text-[#e0bd68]">Some Faq&apos;s</p><h2 className="mt-4 text-4xl font-black sm:text-6xl">Work with a Dedicated <span className="text-[#e0bd68]">Facebook Ad Company</span></h2></div><p className="max-w-md leading-7 text-neutral-300">Our approach to Facebook Ads is uniquely built around what we know works—and what we know doesn&apos;t work—with over 200 verified factors in play.</p></div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">{questions.map(([question, answer], index) => <div key={question} className="overflow-hidden rounded-2xl border border-[#d4af57]/25 bg-[#141411] shadow-sm"><button type="button" className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-bold transition hover:bg-[#262115]" onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)} aria-expanded={openQuestion === index}><span>{question}</span><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d4af57]/15 text-xl text-[#e0bd68] transition ${openQuestion === index ? 'rotate-45' : ''}`}>+</span></button>{openQuestion === index && <p className="border-t border-[#d4af57]/15 px-5 pb-5 pt-4 leading-7 text-neutral-300">{answer}</p>}</div>)}</div>
          <div className="h-fit rounded-[2rem] bg-[#171717] p-8 text-white shadow-xl sm:p-10"><p className="font-bold uppercase tracking-widest text-[#e0bd68]">Your Question</p><h3 className="mt-4 text-4xl font-black">Tell Us Any Question</h3><p className="mt-4 leading-7 text-neutral-300">We provide the best service for our customers. Check the list now or send us your own question.</p><form className="mt-8 space-y-4" onSubmit={(event) => event.preventDefault()}><input className="w-full rounded-xl border border-[#d4af57]/25 bg-[#090908] px-4 py-3 text-white outline-none placeholder:text-neutral-300 focus:ring-2 focus:ring-[#e0bd68]" placeholder="Your name" aria-label="Your name" /><input type="email" className="w-full rounded-xl border border-[#d4af57]/25 bg-[#090908] px-4 py-3 text-white outline-none placeholder:text-neutral-300 focus:ring-2 focus:ring-[#e0bd68]" placeholder="Your email" aria-label="Your email" /><textarea rows="4" className="w-full resize-none rounded-xl border border-[#d4af57]/25 bg-[#090908] px-4 py-3 text-white outline-none placeholder:text-neutral-300 focus:ring-2 focus:ring-[#e0bd68]" placeholder="Ask your question" aria-label="Ask your question" /><button type="submit" className="w-full rounded-xl bg-[#e0bd68] px-5 py-3 font-bold text-[#0A0A0A] transition hover:bg-[#f0d486]">Send Question <span className="ml-2"><FaqIcon /></span></button></form></div>
        </div>
        <div className="mt-16 rounded-[2rem] bg-[#0A0A0A] p-8 text-white sm:p-12"><p className="font-bold uppercase tracking-widest text-[#e0bd68]">More With Us</p><div className="mt-3 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h3 className="max-w-2xl text-3xl font-black sm:text-4xl">You Want to Showcase Your Business in <span className="text-[#e0bd68]">Top?</span> Join With Us</h3><a href="/contact-us" className="inline-flex shrink-0 rounded-full bg-[#e0bd68] px-7 py-3.5 font-bold text-[#0A0A0A] hover:bg-[#f0d486]">Join Us <span className="ml-2"><FaqIcon /></span></a></div><div className="mt-10 grid gap-4 border-t border-white/10 pt-7 text-neutral-300 sm:grid-cols-3"><p><FaqIcon name="pin" />Pink City, Jaipur, Rajasthan</p><a href="tel:+918003850652" className="hover:text-white"><FaqIcon name="phone" />+91 80038 50652<br /><span className="text-sm text-neutral-400">Give us a call</span></a><a href="mailto:info@adyguru.com" className="hover:text-white"><FaqIcon name="mail" />info@adyguru.com<br /><span className="text-sm text-neutral-400">Get in Touch</span></a></div></div>
      </div>
    </section>
  )
}

export default Faqs
