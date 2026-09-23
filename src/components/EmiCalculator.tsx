import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EmiCalculatorProps {
  onOpenEnquiryModal?: (item?: string) => void;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({ onOpenEnquiryModal }) => {
  const [loanAmount, setLoanAmount] = useState<number>(15000000); // 1.5 Cr default
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  const { monthlyEmi, totalPayment, totalInterest } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / (12 * 100);
    const n = tenureYears * 12;

    if (r === 0) {
      const emi = P / n;
      return { monthlyEmi: Math.round(emi), totalPayment: P, totalInterest: 0 };
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    const interest = total - P;

    return {
      monthlyEmi: Math.round(emi),
      totalPayment: Math.round(total),
      totalInterest: Math.round(interest)
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="rounded-2xl border border-[#d8e3f0] bg-white p-6 sm:p-10 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e1eef9] text-[#0077c8]">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <span className="section-kicker">Home Finance</span>
          <h3 className="font-display text-2xl font-bold text-[#002558]">Home Loan &amp; EMI Estimator</h3>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center">
        {/* Sliders on Left */}
        <div className="lg:col-span-7 space-y-6">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-[#002558] mb-2">
              <span className="uppercase tracking-wider">Loan Amount</span>
              <span className="text-base font-extrabold text-[#0077c8]">{formatCurrency(loanAmount)}</span>
            </div>
            <input
              type="range"
              min="2000000"
              max="100000000"
              step="500000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-[#0077c8] cursor-pointer h-2 bg-[#e1eef9] rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-[#4a5e7b] mt-1 font-semibold">
              <span>₹20 Lakhs</span>
              <span>₹5 Cr</span>
              <span>₹10 Cr</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-[#002558] mb-2">
              <span className="uppercase tracking-wider">Interest Rate (% per annum)</span>
              <span className="text-base font-extrabold text-[#0077c8]">{interestRate}%</span>
            </div>
            <input
              type="range"
              min="7.0"
              max="12.0"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#0077c8] cursor-pointer h-2 bg-[#e1eef9] rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-[#4a5e7b] mt-1 font-semibold">
              <span>7.0%</span>
              <span>9.5%</span>
              <span>12.0%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-[#002558] mb-2">
              <span className="uppercase tracking-wider">Loan Tenure</span>
              <span className="text-base font-extrabold text-[#0077c8]">{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-[#0077c8] cursor-pointer h-2 bg-[#e1eef9] rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-[#4a5e7b] mt-1 font-semibold">
              <span>5 Years</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#4a5e7b]">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#0077c8]" /> Pre-approved bank tie-ups</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#0077c8]" /> Special festive home loan schemes</span>
          </div>
        </div>

        {/* Breakdown Card on Right */}
        <div className="lg:col-span-5 rounded-2xl bg-[#002558] p-7 text-white text-center shadow-xl border border-[#003882]">
          <p className="text-xs uppercase tracking-wider text-[#38a7f4] font-bold">Estimated Monthly EMI</p>
          <p className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white">
            ₹{monthlyEmi.toLocaleString('en-IN')}
            <span className="text-sm font-normal text-white/70"> /mo</span>
          </p>

          <div className="mt-6 space-y-3 border-t border-white/15 pt-5 text-left text-xs">
            <div className="flex justify-between text-white/80">
              <span>Principal Loan Amount:</span>
              <span className="font-bold text-white">{formatCurrency(loanAmount)}</span>
            </div>
            <div className="flex justify-between text-white/80">
              <span>Total Interest Payable:</span>
              <span className="font-bold text-white">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between border-t border-white/15 pt-2 text-white font-semibold">
              <span>Total Payable Amount:</span>
              <span className="font-extrabold text-[#38a7f4]">{formatCurrency(totalPayment)}</span>
            </div>
          </div>

          <button
            onClick={() => onOpenEnquiryModal?.(`Home Loan Assistance for ${formatCurrency(loanAmount)}`)}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-[#0077c8] hover:bg-[#0090f0] text-white px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition duration-200 shadow-md"
          >
            Check Loan Eligibility &amp; Offers <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
