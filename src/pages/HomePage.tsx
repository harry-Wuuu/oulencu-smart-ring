import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Activity,
  BedDouble,
  Bluetooth,
  Brain,
  CircleGauge,
  Droplets,
  Flame,
  HeartPulse,
  ShieldCheck,
  Waves,
} from 'lucide-react'
import { faqs } from '../data/site'

const trust = ['No App Subscription', 'IP68 Water Resistant', 'Apple Health Compatible', 'Strava Sync', '3–7 Day Battery']

const featureCards = [
  { icon: BedDouble, title: 'Sleep Insights', copy: 'Understand your sleep patterns with Sleep Index, sleep stages, and nightly wellness trends.' },
  { icon: HeartPulse, title: 'Heart Rate Tracking', copy: 'Follow daily heart rate trends and workout intensity from a lightweight ring.' },
  { icon: Droplets, title: 'SpO2 Monitoring', copy: 'View blood oxygen wellness trends to better understand your nightly and daily recovery.' },
  { icon: Brain, title: 'Stress Monitoring', copy: 'Track stress signals and use guided relaxation tools to help you reset.' },
  { icon: Activity, title: 'Activity Tracking', copy: 'Track steps, calories, METs, and daily movement without wearing a bulky watch.' },
  { icon: Waves, title: 'Temperature Trends', copy: 'Monitor relative body temperature changes during sleep compared with your personal baseline.' },
]

function HeroVisual() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative mx-auto h-[390px] w-full max-w-[560px]">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: 'linear' }} className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="ring-cinematic absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2" />
      {[
        ['Sleep Score', '88', 'left-2 top-8'],
        ['Heart Rate', '62 bpm', 'right-2 top-12'],
        ['SpO2', '97%', 'right-8 bottom-16'],
        ['Steps', '8,240', 'left-8 bottom-10'],
        ['Stress', 'Low', 'left-1/2 top-1/2 -translate-x-1/2 translate-y-32'],
      ].map(([k, v, pos], i) => (
        <motion.div key={k} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: [0, -5, 0] }} transition={{ delay: 0.2 + i * 0.12, y: { repeat: Infinity, duration: 3.5 + i * 0.3 } }} className={`metric-float ${pos}`}>
          <p className="text-xs text-slate-300">{k}</p>
          <p className="text-sm font-semibold text-white">{v}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <main className="relative overflow-hidden">
      <section id="home" className="hero-noise relative border-b border-white/10 pb-20 pt-20 md:pb-28 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(226,232,240,0.13),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(15,23,42,0.8),transparent_60%)]" />
        <div className="container-padded relative grid items-center gap-12 lg:grid-cols-2">
          <motion.div style={{ y: heroY }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-200">Luxury wellness technology</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-7xl">Smarter Wellness, Right on Your Finger.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Track sleep, activity, heart rate, SpO2, stress, and daily wellness insights with a sleek smart ring designed for everyday life — with no app subscription.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="btn-primary" href="https://www.amazon.com/" aria-label="Shop OULENCU Smart Ring on Amazon">Shop on Amazon</a>
              <a className="btn-secondary" href="#features">Explore Features</a>
            </div>
          </motion.div>
          <HeroVisual />
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/90"><div className="container-padded grid grid-cols-2 gap-4 py-6 text-sm md:grid-cols-5">{trust.map((t) => <div key={t} className="flex items-center gap-2 text-slate-300"><ShieldCheck size={16} className="text-cyan-300" />{t}</div>)}</div></section>

      <section id="features" className="container-padded py-24"><h2 className="section-title">Everything You Need for Everyday Wellness</h2><p className="section-copy max-w-3xl">Designed with premium materials and modern wellness intelligence, the OULENCU experience brings your daily metrics into one calm, cinematic view.</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{featureCards.map((f, i) => <motion.article key={f.title} whileHover={{ y: -8, scale: 1.01 }} className="premium-card group p-7" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * 0.06 }}><f.icon className="text-cyan-300 transition group-hover:text-white" /><h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3><p className="mt-2 text-slate-300">{f.copy}</p></motion.article>)}</div></section>

      <section id="sleep" className="container-padded py-24"><div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]"><div><h2 className="section-title">Wake Up With Better Sleep Awareness</h2><p className="section-copy">A richer sleep dashboard highlights stages, quality trends, and recovery signals in an elegant nightly timeline.</p></div><div className="premium-card p-6"><div className="grid gap-3 sm:grid-cols-2">{['Sleep Index 88','Deep 1h 42m','REM 1h 30m','Light 4h 10m','Awake 28m','Nightly trend +6%'].map((x) => <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">{x}</div>)}</div><motion.div initial={{ opacity: 0.4 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} className="mt-5 h-36 rounded-2xl bg-[linear-gradient(90deg,#0ea5e9_0%,#818cf8_36%,#22d3ee_70%,#38bdf8_100%)] p-4 text-sm text-white/95">Dynamic sleep quality waveform</motion.div></div></div></section>

      <section id="fitness" className="container-padded py-24"><h2 className="section-title">Designed for Movement</h2><p className="section-copy">From daily steps to workout heart rate feedback, OULENCU Smart Ring helps you stay aware of your activity while keeping your style simple and clean.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{[['Steps','8,240',Activity],['Calories','560',Flame],['Workout HR','141 bpm',HeartPulse],['Intensity','Moderate',CircleGauge],['Strava Sync','Connected',Bluetooth]].map(([t,v,Icon]) => <motion.div whileHover={{ y: -4 }} key={t as string} className="premium-card p-4"><Icon className="text-cyan-300"/><p className="mt-2 text-slate-300">{t as string}</p><p className="text-xl font-semibold text-white">{v as string}</p></motion.div>)}</div></section>

      <section id="app" className="container-padded py-24"><h2 className="section-title">Simple App. Clear Insights. No Subscription.</h2><p className="section-copy">The companion app brings your wellness data together in a clean, easy-to-read dashboard. Sync activity data with Strava and connect with Apple Health for a more complete wellness view.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{['Sleep','Activity','Wellness','Meditation'].map((s, i) => <motion.div key={s} whileHover={{ y: -6 }} initial={{ opacity: 0.7 }} whileInView={{ opacity: 1 }} transition={{ delay: i*0.08 }} className="premium-card p-4"><p className="font-medium text-white">{s}</p><div className="mt-3 h-44 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.22),rgba(15,23,42,0.2))]" /></motion.div>)}</div></section>


      <section id="sizing" className="container-padded py-24"><h2 className="section-title">Find Your Best Fit</h2><p className="section-copy">Choose the size that fits comfortably but securely. For best tracking performance, the ring should stay close to your skin without feeling too tight.</p><ul className="mt-4 space-y-2 text-slate-300"><li>US Size 7: approximately 17.2 mm inner diameter, close to a U.S. dime reference</li><li>US Size 9: approximately 18.9 mm inner diameter, close to a U.S. $1 coin reference</li><li>US Size 11: approximately 20.6 mm inner diameter, close to a U.S. nickel reference</li></ul><p className="mt-4 text-sm text-slate-400">If your finger is slightly larger than the reference, consider sizing up.</p></section>

      <section className="container-padded py-24"><h2 className="section-title">Why Choose OULENCU Smart Ring?</h2><div className="mt-7 overflow-x-auto premium-card p-4"><table className="w-full min-w-[720px] text-left text-sm"><thead><tr className="text-slate-300"><th className="p-3">Feature</th><th className="p-3">OULENCU Smart Ring</th><th className="p-3">Traditional Smartwatch</th><th className="p-3">Subscription-Based Rings</th></tr></thead><tbody className="text-slate-200">{[['No App Subscription','Yes','Sometimes','Often No'],['Lightweight Ring Form','Yes','No','Yes'],['Sleep Tracking','Yes','Yes','Yes'],['SpO2 Tracking','Yes','Yes','Yes'],['Stress Monitoring','Yes','Yes','Yes'],['Apple Health Support','Yes','Yes','Varies'],['Strava Sync','Yes','Yes','Varies'],['Comfortable for Sleep','Yes','Often limited','Yes'],['Stylish Everyday Wear','Yes','Varies','Yes']].map((r)=><tr key={r[0]} className="border-t border-white/10"><td className="p-3">{r[0]}</td><td className="p-3">{r[1]}</td><td className="p-3">{r[2]}</td><td className="p-3">{r[3]}</td></tr>)}</tbody></table></div></section>

      <section className="container-padded py-24"><h2 className="section-title">Sample Customer Feedback</h2><p className="mt-2 text-sm text-slate-400">Sample testimonials for layout purposes only.</p><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{['Comfortable enough to sleep with.','I like that there is no subscription.','Great alternative to wearing a bulky watch.','The sleep insights are easy to understand.'].map((q)=><blockquote key={q} className="premium-card p-5 text-slate-200">“{q}”</blockquote>)}</div></section>

      <section id="faq" className="container-padded py-24"><h2 className="section-title">Frequently Asked Questions</h2><div className="mt-7 space-y-3">{faqs.map((f) => <details key={f.q} className="premium-card p-5"><summary className="cursor-pointer font-medium text-white">{f.q}</summary><p className="mt-2 text-slate-300">{f.a}</p></details>)}</div></section>

      <section className="container-padded pb-24 pt-16"><div className="premium-card cinematic-cta p-10 text-center"><p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300">Conversion ready</p><h2 className="section-title">Ready to Track Wellness in a Smarter Way?</h2><p className="section-copy mx-auto max-w-2xl">Simple, stylish, and subscription-free. Meet the smart ring built for everyday life.</p><a href="https://www.amazon.com/" className="btn-primary mt-7 inline-block">Shop OULENCU Smart Ring</a></div></section>
    </main>
  )
}
