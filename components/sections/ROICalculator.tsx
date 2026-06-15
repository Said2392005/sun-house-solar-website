'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useMemo } from 'react'
import { ArrowRight, IndianRupee, Zap, Sun, TrendingDown } from 'lucide-react'

const COST_PER_KW = 55000
const UNITS_PER_KW_PER_DAY = 4
const MSEDCL_RATE = 8.5

const subsidyFor = (kw: number) => {
  if (kw <= 1)  return 30000
  if (kw <= 2)  return 60000
  return 78000
}

export default function ROICalculator() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [monthlyBill, setMonthlyBill] = useState(3000)

  const calc = useMemo(() => {
    const monthlyUnits = monthlyBill / MSEDCL_RATE
    const systemKw = Math.max(1, Math.ceil(monthlyUnits / (UNITS_PER_KW_PER_DAY * 30)))
    const grossCost = systemKw * COST_PER_KW
    const subsidy = subsidyFor(Math.min(systemKw, 3))
    const netCost = grossCost - subsidy
    const monthlySavings = Math.min(monthlyBill, systemKw * UNITS_PER_KW_PER_DAY * 30 * MSEDCL_RATE)
    const paybackMonths = Math.ceil(netCost / monthlySavings)
    const paybackYears = (paybackMonths / 12).toFixed(1)
    const annualSavings = monthlySavings * 12
    const lifetimeSavings = annualSavings * 25 - netCost
    return { systemKw, grossCost, subsidy, netCost, monthlySavings, paybackYears, annualSavings, lifetimeSavings }
  }, [monthlyBill])

  const fmt = (n: number) =>
    n >= 100000
      ? `₹${(n / 100000).toFixed(1)} L`
      : `₹${n.toLocaleString('en-IN')}`

  return (
    <section id="calculator" className="page-section bg-[#0D2F2A]">
      <div ref={ref} className="content-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="label-text mb-4">Solar Savings</p>
          <h2 className="h2 max-w-xl">How Much Will You Save?</h2>
          <p className="body-text mt-4 max-w-xl">
            Enter your monthly electricity bill to see estimated system size, installation cost, government subsidy and payback period.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="card p-8"
          >
            <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-3">
              Monthly Electricity Bill (₹)
            </label>
            <div className="flex items-center gap-3 mb-4">
              <IndianRupee className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <input
                type="range"
                min={500}
                max={30000}
                step={500}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="flex-1 accent-[#10B981] h-2 rounded-full"
              />
              <span className="text-xl font-bold text-white font-poppins w-28 text-right">
                ₹{monthlyBill.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {[1000, 2000, 3000, 5000, 10000].map((v) => (
                <button
                  key={v}
                  onClick={() => setMonthlyBill(v)}
                  className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-colors border ${
                    monthlyBill === v
                      ? 'border-[#10B981]/50 text-[#10B981]'
                      : 'border-white/[0.07] text-slate-500 hover:text-slate-300'
                  }`}
                  style={{ background: monthlyBill === v ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)' }}
                >
                  ₹{(v / 1000).toFixed(0)}k
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl" style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.18)' }}>
              <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#34D399' }}>
                PM Surya Ghar Subsidy
              </div>
              <div className="text-2xl font-bold text-white font-poppins">
                {fmt(calc.subsidy)} <span className="text-sm font-normal text-slate-400">government subsidy</span>
              </div>
              <div className="text-[12px] text-slate-500 mt-1">
                Applicable for systems up to 3 kW residential
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-4"
          >
            {[
              { Icon: Sun,         label: 'Recommended System',     value: `${calc.systemKw} kW`,        sub: 'rooftop solar system' },
              { Icon: IndianRupee, label: 'Approx. Net Cost After Subsidy', value: `~${fmt(calc.netCost)}`,        sub: `~Gross: ${fmt(calc.grossCost)} − Subsidy: ${fmt(calc.subsidy)}` },
              { Icon: TrendingDown,label: 'Approx. Monthly Savings',       value: `~${fmt(calc.monthlySavings)}`, sub: 'estimated reduction in electricity bill' },
              { Icon: Zap,         label: 'Approx. Payback Period',        value: `~${calc.paybackYears} years`,  sub: `Then ~${fmt(calc.annualSavings)}/yr savings` },
            ].map(({ Icon, label, value, sub }, i) => (
              <div key={i} className="card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(16,185,129,0.1)' }}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: '#10B981' }} />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] text-slate-500 uppercase tracking-widest mb-0.5">{label}</div>
                  <div className="text-xl font-bold font-poppins text-white">{value}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{sub}</div>
                </div>
              </div>
            ))}

            <a href="/#contact" className="btn-primary w-full justify-center">
              Get Exact Quote for Your Property <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-slate-600 text-center">
              Estimates based on Solapur solar irradiance and 2026 MSEDCL tariffs. Actual results vary.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
