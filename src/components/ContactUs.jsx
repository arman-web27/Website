import { useState } from 'react'

const contactFaqs = [
  ['Best Practices for Keyword Density?', 'Google has said for years that the most important single factor is high quality content. We help ambitious businesses generate more profits by building awareness, driving web traffic, and connecting with customers.'],
  ['Best SEO Practices for Page Layouts?', 'Use a clear structure, helpful headings, accessible spacing, and a smooth experience across every device.'],
  ['What is off page SEO link building?', 'It is the process of earning relevant links and growing your website authority beyond your own pages.'],
  ['Best SEO Practices for High Quality Content?', 'Create original, useful content that answers real customer questions and demonstrates your expertise.'],
]

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 h-4 w-4"><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>
}

function ContactUs() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section id="contact-us" className="contact-dark relative overflow-hidden bg-[#060605] px-6 py-24 text-white lg:px-8">
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#d4af57]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl"><p className="font-bold uppercase tracking-[0.25em] text-white">Get In Touch</p><h2 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">Ready to <span className="text-[#e0bd68]">Get Started?</span></h2><p className="mt-6 text-lg leading-8 text-neutral-300">Give us a call or drop by anytime. We endeavour to answer all enquiries within 24 hours on business days.</p></div>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#171717] p-8 text-white shadow-xl sm:p-10"><p className="font-bold uppercase tracking-widest text-[#e0bd68]">Contact AdyGuru</p><h3 className="mt-4 text-3xl font-black">Let&apos;s make your next big move.</h3><p className="mt-5 leading-7 text-neutral-300">We will be happy to answer your questions and help you find the right growth strategy.</p><div className="mt-10 space-y-6"><div><p className="text-sm font-bold uppercase tracking-widest text-[#e0bd68]">Visit us</p><p className="mt-2 leading-6 text-neutral-300">Kharbas Complex, Poonam Market,<br />Sirsi Rd, Bichpadi, Panchyawala,<br />Jaipur, Rajasthan 302012</p></div><div><p className="text-sm font-bold uppercase tracking-widest text-[#e0bd68]">Call us</p><a href="tel:+918003850652" className="mt-2 block text-lg font-bold hover:text-neutral-200">+91 80038 50652</a></div><div><p className="text-sm font-bold uppercase tracking-widest text-[#e0bd68]">E-Mail</p><a href="mailto:info@adyguru.com" className="mt-2 block text-lg font-bold hover:text-neutral-200">info@adyguru.com</a></div></div></div>
          <form className="rounded-[2rem] bg-[#141411] p-8 shadow-xl sm:p-10" onSubmit={(event) => event.preventDefault()}><h3 className="text-2xl font-black">Submit Query</h3><p className="mt-2 text-neutral-400">Tell us a little about your goals and we&apos;ll be in touch.</p><div className="mt-8 grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">Name<input required className="mt-2 w-full rounded-xl border border-[#d4af57]/25 px-4 py-3 font-normal outline-none transition focus:border-neutral-500 focus:ring-2 focus:ring-neutral-100" placeholder="Your name" /></label><label className="text-sm font-bold">Email<input required type="email" className="mt-2 w-full rounded-xl border border-[#d4af57]/25 px-4 py-3 font-normal outline-none transition focus:border-neutral-500 focus:ring-2 focus:ring-neutral-100" placeholder="you@example.com" /></label></div><label className="mt-5 block text-sm font-bold">Phone<input className="mt-2 w-full rounded-xl border border-[#d4af57]/25 px-4 py-3 font-normal outline-none transition focus:border-neutral-500 focus:ring-2 focus:ring-neutral-100" placeholder="+91" /></label><label className="mt-5 block text-sm font-bold">Your message<textarea required rows="5" className="mt-2 w-full resize-none rounded-xl border border-[#d4af57]/25 px-4 py-3 font-normal outline-none transition focus:border-neutral-500 focus:ring-2 focus:ring-neutral-100" placeholder="How can we help?" /></label><button type="submit" className="mt-6 inline-flex items-center whitespace-nowrap rounded-full bg-[#0A0A0A] px-7 py-3.5 font-bold text-white transition hover:bg-neutral-800">Submit Query <ArrowIcon /></button></form>
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"><div className="rounded-[2rem] bg-[#141411] p-8 text-white"><p className="font-bold uppercase tracking-widest">Free Consultation</p><h3 className="mt-3 text-3xl font-black">Receive a FREE Consultation Today!</h3><a href="#contact-us" className="mt-7 inline-flex items-center whitespace-nowrap rounded-full bg-[#0A0A0A] px-6 py-3 font-bold text-white hover:bg-[#171717]">Book a call <ArrowIcon /></a></div><div><p className="font-bold uppercase tracking-[0.25em] text-white">Some Faq&apos;s</p><h3 className="mt-3 text-3xl font-black">Work with a Dedicated Digital Guru</h3><p className="mt-4 leading-7 text-neutral-300">Our approach to SEO is uniquely built around what we know worksâ€”and what we know doesn&apos;t workâ€”with over 200 verified factors in play.</p><div className="mt-6 space-y-3">{contactFaqs.map(([question, answer], index) => <div key={question} className="overflow-hidden rounded-xl border border-[#d4af57]/25 bg-[#141411]"><button type="button" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold hover:bg-[#252116]" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><span className="text-xl text-white">{openFaq === index ? '−' : '+'}</span></button>{openFaq === index && <p className="border-t border-[#d4af57]/15 px-5 pb-4 pt-3 leading-6 text-neutral-300">{answer}</p>}</div>)}</div></div></div>
      </div>
    </section>
  )
}

export default ContactUs



