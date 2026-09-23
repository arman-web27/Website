
const seoServices = [
  ['Keyword Research', '70%'],
  ['Technical SEO Audit', '80%'],
  ['Content Optimization', '60%'],
]

const marketingServices = [
  ['Content Marketing', 'âœ¦', 'Build authority with content that educates, engages, and converts.'],
  ['Social Media Marketing', 'â—Ž', 'Create meaningful conversations and keep your brand top of mind.'],
  ['Facebook Advertising', 'f', 'Reach your ideal customers with campaigns built for performance.'],
  ['Google Ads', 'âŒ•', 'Capture high-intent searches and turn clicks into valuable customers.'],
]

function ArrowIcon({ className = 'h-4 w-4' }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>
}

function ServiceIcon({ name }) {
  if (name === 'Content Marketing') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7"><path d="M5 19.5h14" /><path d="M7 16V7.5L12 4l5 3.5V16" /><path d="M9.5 16v-4h5v4" /><path d="m15.5 5.5 2-2" /></svg>
  if (name === 'Google Ads') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7"><path d="m7 4 5 8.5-4 7" /><path d="M12 12.5h7l-4 7" /><path d="M7 4h4l4 7" /></svg>
  return <span className="text-lg font-black">{name === 'Facebook Advertising' ? 'f' : '◉'}</span>
}

function Services() {
  return (
    <section id="services" className="services-dark relative overflow-hidden bg-[#060605] px-6 py-24 text-white lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#d4af57]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-bold uppercase tracking-[0.25em] text-[#e0bd68]">Our Services</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">WHY CHOOSE <span className="text-[#e0bd68]">Us</span></h2>
          <p className="mt-5 text-lg leading-8 text-neutral-600">We dedicate ourselves to helping companies grow with SEO work and digital marketing that delivers measurable results.</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#171717] p-8 text-white shadow-xl sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-[#A3A3A3]">SEO expertise</p>
            <h3 className="mt-4 text-3xl font-black">We dedicate for Company with SEO work</h3>
            <p className="mt-5 leading-7 text-neutral-300">From keyword research to technical auditing to site migration, our team of technical SEOs are true experts in their field.</p>
            <div className="mt-9 space-y-6">
              {seoServices.map(([name, value]) => <div key={name}><div className="mb-2 flex justify-between text-sm font-bold"><span>{name}</span><span className="text-[#A3A3A3]">{value}</span></div><div className="h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full rounded-full bg-gradient-to-r from-neutral-300 to-neutral-400" style={{ width: value }} /></div></div>)}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {marketingServices.map(([name, icon, description], index) => <article key={name} className="group rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl"><div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-[#f2c94c] ${index % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#0A0A0A]'}`}><ServiceIcon name={name} /></div><h3 className="mt-6 text-xl font-black">{name}</h3><p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p><a href="#contact-us" className="mt-5 inline-flex text-sm font-bold text-[#0A0A0A] transition group-hover:text-[#0A0A0A]">Explore service <ArrowIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></a></article>)}
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-7 rounded-[2rem] bg-[#0A0A0A] p-8 text-white shadow-xl sm:p-12 md:flex-row md:items-center"><div><p className="font-bold uppercase tracking-widest text-neutral-200">Generate Sales With Us</p><h3 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">Generate 1000&apos;s Leads Using Paid Marketing And SEO</h3></div><a href="#contact-us" className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 font-bold text-[#0A0A0A] transition hover:bg-neutral-200">Let&apos;s grow <ArrowIcon /></a></div>
      </div>
    </section>
  )
}

export default Services

