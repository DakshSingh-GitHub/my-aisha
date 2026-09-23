"use client";

import React from "react";
import Link from "next/link";

export default function DevContractPage() {
  return (
    <div className="min-h-screen w-full bg-[#0b0512] text-zinc-200 py-8 px-4 sm:px-6 lg:px-8">
      {/* Top Nav Action Bar */}
      <div className="max-w-4xl mx-auto flex items-center justify-between pb-6 mb-8 border-b border-white/10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-editorial-meta tracking-[0.15em] text-amber-300 hover:text-amber-200 transition-colors uppercase"
        >
          <span>←</span> Back to Celebration
        </Link>
        <button
          onClick={() => window.print()}
          className="px-4 py-1.5 rounded-lg text-xs font-editorial-meta tracking-[0.15em] uppercase border border-amber-400/40 bg-amber-400/10 text-amber-200 hover:bg-amber-400/20 transition-colors cursor-pointer"
        >
          Print / Save PDF 🖨️
        </button>
      </div>

      {/* Contract Document Card */}
      <article className="max-w-4xl mx-auto bg-[#140a1e] border border-amber-400/25 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl space-y-8 font-sans leading-relaxed">
        {/* Document Header */}
        <header className="border-b border-amber-400/20 pb-6 text-center space-y-2">
          <span className="text-[10px] sm:text-xs font-editorial-meta tracking-[0.2em] text-amber-300 uppercase">
            Official Legal Agreement • SOW Reference 2026
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-editorial-heading font-medium tracking-wide text-amber-100 uppercase">
            INDEPENDENT SOFTWARE CONTRACTOR AGREEMENT
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            Governed under Indian Contract Act, 1872 & MIT Open Source Guidelines
          </p>
        </header>


        {/* Preamble */}
        <p className="text-sm sm:text-base text-zinc-300">
          This Independent Contractor Agreement (the &ldquo;Agreement&rdquo;) is entered into on this 22nd day of September
          , 2026 (the &ldquo;Effective Date&rdquo;), by and between:
        </p>

        {/* Parties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1a0f26] border border-white/10 p-5 rounded-xl text-sm">
          {/* Client */}
          <div className="space-y-2">
            <h3 className="font-editorial-meta text-xs tracking-[0.18em] text-amber-300 uppercase font-semibold">
              Client:
            </h3>
            <p className="text-zinc-200 font-medium">
              Name: <span className="text-white font-semibold">Krrish Raj</span>
            </p>
            <p className="text-zinc-300">
              Email:{" "}
              <a
                href="mailto:
                "
                className="text-amber-300 hover:underline"
              >
                krrishska@gmail.com
              </a>
            </p>
            <p className="text-xs text-zinc-400 italic pt-1">
              (Hereinafter referred to as the &ldquo;Client&rdquo;)
            </p>
          </div>

          {/* Contractor */}
          <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <h3 className="font-editorial-meta text-xs tracking-[0.18em] text-amber-300 uppercase font-semibold">
              Contractor:
            </h3>
            <p className="text-zinc-200 font-medium">
              Name: <span className="text-white font-semibold">Daksh Singh</span>
            </p>
            <p className="text-zinc-300">
              Location: Bareilly, Uttar Pradesh, India
            </p>
            <p className="text-zinc-300">
              Email:{" "}
              <a
                href="mailto:daksh.dts.fc.1312@gmail.com"
                className="text-amber-300 hover:underline"
              >
                daksh.dts.fc.1312@gmail.com
              </a>
            </p>
            <p className="text-zinc-300">
              GitHub:{" "}
              <a
                href="https://www.github.com/DakshSingh-GitHub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:underline break-all"
              >
                https://www.github.com/DakshSingh-GitHub/
              </a>
            </p>
            <p className="text-xs text-zinc-400 italic pt-1">
              (Hereinafter referred to as the &ldquo;Contractor&rdquo;)
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-2 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200">
            1. Scope of Work &amp; Deliverables
          </h2>
          <p className="text-zinc-300">
            The Contractor agrees to provide software engineering, architectural design, frontend and backend development, and API integration services as outlined in Schedule A (Statement of Work / SOW).
          </p>
          <p className="text-zinc-300">
            Any feature additions, third-party integrations, or modifications beyond the deliverables specified in Schedule A require a mutually agreed written change order.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-2 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200">
            2. Independent Contractor Status
          </h2>
          <p className="text-zinc-300">
            The Contractor operates solely as an independent contractor.
          </p>
          <p className="text-zinc-300">
            Contractor retains complete technical autonomy over developer tooling, local environments, workflows, libraries, and scheduling.
          </p>
          <p className="text-zinc-300">
            This Agreement does not create a partnership, joint venture, agency, or employer-employee relationship.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-2 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200">
            3. Intellectual Property &amp; MIT Licensing Terms
          </h2>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Licensing Model:</strong> The deliverables, source code, and application architecture developed under this Agreement shall be released and governed under the standard terms of the MIT License (as set forth in Schedule B).
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Rights Granted:</strong> In accordance with the MIT License, the Client is granted free, perpetual, non-exclusive rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to preserving the Contractor&apos;s original copyright notice.
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Code Delivery &amp; Repository Access:</strong> Repository transfer or distribution via the Contractor&apos;s GitHub repository route (
            <a
              href="https://www.github.com/DakshSingh-GitHub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:underline"
            >
              https://www.github.com/DakshSingh-GitHub/
            </a>
            ) shall be completed upon delivery and clearance of the agreed milestone payments.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-2 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200">
            4. Compensation &amp; Invoicing Terms
          </h2>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Payment Milestones:</strong> All compensation shall follow the payment schedule defined in Schedule A.
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Payment Terms:</strong> Invoices are due and payable within 14 calendar days of receipt.
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Fee Structure &amp; Courtesy Waiver:</strong> Individual phase rates are itemized in Schedule A totaling 8,637 INR. Contractor has applied a courtesy waiver (-8,637 INR), establishing the effective net payable amount as 0 INR.
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Late Payments &amp; Suspension:</strong> Unpaid invoices past the due date may accrue interest at 1.5% per month (or the maximum permitted by applicable law). Contractor reserves the right to pause active development, staging environments, and repository synchronization if invoices remain overdue.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-2 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200">
            5. Review Period &amp; Acceptance Testing
          </h2>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Review Window:</strong> Upon deployment or pull request delivery, the Client has 7 business days to review and test the deliverables.
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Bug Fixes:</strong> Each phase includes up to two (2) iterations of bug fixing and adjustments strictly within the agreed project specifications.
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Deemed Acceptance:</strong> Deliverables are deemed fully accepted if no actionable bugs or issues are reported in writing within the 7-day review window.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-2 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200">
            6. Confidentiality
          </h2>
          <p className="text-zinc-300">
            Both parties agree to treat non-public business strategies, access tokens, API credentials, and proprietary data with strict confidentiality, using reasonable measures to prevent unauthorized disclosure.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-2 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200">
            7. Limitation of Liability &amp; Third-Party Services
          </h2>
          <p className="text-zinc-300">
            Contractor is not responsible for operational downtimes, rate limits, breaking updates, or policy shifts caused by third-party services, APIs, databases, or cloud infrastructure providers.
          </p>
          <p className="text-zinc-300">
            In no event shall Contractor&apos;s aggregate liability exceed the total fees actually paid to Contractor by Client under this Agreement.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-2 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200">
            8. Termination
          </h2>
          <p className="text-zinc-300">
            Either party may terminate this Agreement with 7 days&apos; prior written notice. Upon termination, Client shall immediately settle payment for all completed milestones and prorated work performed up to the date of notice.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-2 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200">
            9. Governing Law &amp; Dispute Resolution
          </h2>
          <p className="text-zinc-300">
            This Agreement shall be governed by and construed under the laws of India. Any disputes arising under or in connection with this Agreement shall be subject to the exclusive jurisdiction of the competent courts in Uttar Pradesh / New Delhi, India.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3 text-sm sm:text-base bg-[#190e25] border border-amber-400/20 p-5 rounded-xl">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200">
            10. Mandatory In-App Billing Disclosure &amp; Personal-Use Compliance Protocol
          </h2>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">10.1 Commercial Valuation Disclosure Mandate:</strong> Under the Contractor&apos;s standard engineering compliance and open-source licensing protocol, any software application, customized website, or interactive digital platform commissioned or deployed for private, individual, or personal-use celebrations is strictly required to incorporate an accessible, embedded statement of developmental scope, commercial valuation, and phase billing.
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">10.2 Professionalism &amp; Valuation Integrity:</strong> The explicit presentation of development rates, milestone schedules, and associated courtesy waivers within the deployed web application serves as a standard transparent auditing measure to establish the verified commercial fair-market value of bespoke engineering deliverables, validate MIT licensing provenance, and prevent informal undervaluation of technical labor. Such in-app disclosure constitutes mandatory professional compliance and shall under no circumstances be construed as informal, inappropriate, or unprofessional conduct.
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">10.3 Institutional &amp; Enterprise Webapp Exemption:</strong> This mandatory in-app billing publication policy applies exclusively to individual, private, and personal-use web deployments. Web applications and enterprise platforms developed for registered organizations, institutional bodies, corporate entities, or commercial clients are explicitly exempt from embedded billing disclosures and remain governed under separate, confidential corporate Master Service Agreements (MSAs).
          </p>
        </section>

        {/* Signatures */}
        <section className="pt-6 border-t border-white/10 space-y-6">
          <h2 className="text-base sm:text-lg font-editorial-heading font-medium text-amber-200 uppercase tracking-wide">
            Signatures &amp; Execution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            {/* Client Signature Box */}
            <div className="border border-white/10 bg-[#190f25] p-5 rounded-xl space-y-4">
              <h3 className="font-editorial-meta text-xs tracking-[0.18em] text-amber-300 uppercase font-semibold">
                Client
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div className="pt-8 border-b border-white/30 text-zinc-400">
                  Signature: <span className="font-serif italic text-amber-200 text-sm">Krrish Raj</span>
                </div>
                <div className="border-b border-white/30 py-1 text-zinc-300">
                  Printed Name: <span className="text-white font-semibold">Krrish Raj</span>
                </div>
                <div className="border-b border-white/30 py-1 text-zinc-300">
                  Email: krrishska@gmail.com
                </div>
                <div className="border-b border-white/30 py-1 text-zinc-300">
                  Date: 22 September 2026
                </div>
              </div>
            </div>

            {/* Contractor Signature Box */}
            <div className="border border-white/10 bg-[#190f25] p-5 rounded-xl space-y-4">
              <h3 className="font-editorial-meta text-xs tracking-[0.18em] text-amber-300 uppercase font-semibold">
                Contractor
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div className="pt-8 border-b border-white/30 text-zinc-400">
                  Signature: <span className="font-serif italic text-amber-200 text-sm">Daksh Singh</span>
                </div>
                <div className="border-b border-white/30 py-1 text-zinc-300">
                  Printed Name: <span className="text-white font-semibold">Daksh Singh</span>
                </div>
                <div className="border-b border-white/30 py-1 text-zinc-300">
                  Email: daksh.dts.fc.1312@gmail.com
                </div>
                <div className="border-b border-white/30 py-1 text-zinc-300">
                  Date: 22 September 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCHEDULE A */}
        <section className="pt-8 border-t border-amber-400/20 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-editorial-meta text-amber-400 tracking-[0.18em] uppercase">
              Schedule A
            </span>
            <h2 className="text-xl sm:text-2xl font-editorial-heading font-medium text-amber-100 uppercase">
              Statement of Work (SOW)
            </h2>
          </div>

          <div className="bg-[#180e24] p-4 rounded-xl border border-white/10 space-y-2 text-xs sm:text-sm font-mono">
            <p>
              <span className="text-zinc-400">Project Title:</span>{" "}
              <span className="text-amber-200 font-semibold">
                Doctor Aisha Sahiba Interactive Birthday Presentation
              </span>
            </p>
            <p>
              <span className="text-zinc-400">Target Delivery Date:</span>{" "}
              <span className="text-white font-semibold">22 sept, 2026</span>
            </p>
            <p>
              <span className="text-zinc-400">Tech Stack:</span>{" "}
              <span className="text-amber-300">NextJS, TailwindCSS</span>
            </p>
          </div>

          {/* SOW Table */}
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#241338] text-amber-300 font-editorial-meta tracking-wider uppercase text-[11px] border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Phase / Milestone</th>
                  <th className="py-3 px-4">Deliverable Description</th>
                  <th className="py-3 px-4">Target Date</th>
                  <th className="py-3 px-4 text-right">Standard Fee (INR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs text-zinc-300">
                <tr className="hover:bg-white/2">
                  <td className="py-3 px-4 font-semibold text-amber-200">Phase 1</td>
                  <td className="py-3 px-4 font-sans text-zinc-200">
                    Project setup, boilerplate architecture, and schema design
                  </td>
                  <td className="py-3 px-4 text-zinc-400">Day 1</td>
                  <td className="py-3 px-4 text-right text-zinc-100 font-semibold">
                    840 INR
                  </td>
                </tr>
                <tr className="hover:bg-white/2">
                  <td className="py-3 px-4 font-semibold text-amber-200">Phase 2</td>
                  <td className="py-3 px-4 font-sans text-zinc-200">
                    Core backend logic, database endpoints, and migrations{" "}
                    <span className="text-[11px] text-amber-300/80 font-mono italic">
                      (minimal logic used)
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-400">Day 1</td>
                  <td className="py-3 px-4 text-right text-zinc-100 font-semibold">
                    3,999 INR
                  </td>
                </tr>
                <tr className="hover:bg-white/2">
                  <td className="py-3 px-4 font-semibold text-amber-200">Phase 3</td>
                  <td className="py-3 px-4 font-sans text-zinc-200">
                    Frontend UI components, state management, and API integration
                  </td>
                  <td className="py-3 px-4 text-zinc-400">Day 1</td>
                  <td className="py-3 px-4 text-right text-zinc-100 font-semibold">
                    2,199 INR
                  </td>
                </tr>
                <tr className="hover:bg-white/2">
                  <td className="py-3 px-4 font-semibold text-amber-200">Phase 4</td>
                  <td className="py-3 px-4 font-sans text-zinc-200">
                    Testing, bug fixing, final build, and GitHub repository handoff
                  </td>
                  <td className="py-3 px-4 text-zinc-400">Day 1</td>
                  <td className="py-3 px-4 text-right text-zinc-100 font-semibold">
                    1,599 INR
                  </td>
                </tr>
                <tr className="hover:bg-white/2">
                  <td className="py-3 px-4 font-semibold text-amber-200">Phase 4</td>
                  <td className="py-3 px-4 font-sans text-zinc-200">
                    Overworking Charges
                  </td>
                  <td className="py-3 px-4 text-zinc-400">Day 2</td>
                  <td className="py-3 px-4 text-right text-zinc-100 font-semibold">
                    2,099 INR
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Total Bill, Discounted Bill & Commercial Reconciliation */}
          <div className="bg-[#190e25] border border-amber-400/30 rounded-xl p-5 space-y-3 font-mono text-xs sm:text-sm shadow-inner">
            <h3 className="font-editorial-meta text-xs tracking-[0.18em] text-amber-300 uppercase font-semibold pb-1 border-b border-white/10">
              Commercial Valuation &amp; Billing Reconciliation
            </h3>
            <div className="flex items-center justify-between text-zinc-300 pt-1">
              <span className="font-sans">Total Gross Valuation (Sum of Phases 1–4):</span>
              <span className="text-zinc-100 font-semibold">10,736 INR</span>
            </div>
            <div className="flex items-center justify-between text-rose-300">
              <span className="font-sans">
                Courtesy Waiver:
              </span>
              <span className="font-semibold">-10,736 INR</span>
            </div>
            <div className="border-t border-white/10 pt-3 flex items-center justify-between text-sm sm:text-base">
              <span className="font-editorial-heading font-medium text-amber-200">
                Net Effective Bill Payable:
              </span>
              <span className="font-bold text-emerald-400 text-base sm:text-lg">
                0 INR
              </span>
            </div>
            <div className="pt-3 border-t border-white/5">
              <p className="text-[11px] font-sans text-zinc-400 leading-relaxed">
                <strong className="text-amber-300">Auditing &amp; Transparency Notice:</strong> In accordance with <span className="text-amber-200 underline">Section 10 (Mandatory In-App Billing Disclosure Protocol)</span>, this project explicitly displays its baseline commercial valuation (8,637 INR) to formally establish engineering market rates and protect technical intellectual property. A courtesy waiver has been applied by the Contractor, rendering the final effective invoice obligation as <strong>0 INR</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* SCHEDULE B */}
        <section className="pt-8 border-t border-amber-400/20 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-editorial-meta text-amber-400 tracking-[0.18em] uppercase">
              Schedule B
            </span>
            <h2 className="text-xl sm:text-2xl font-editorial-heading font-medium text-amber-100 uppercase">
              MIT License
            </h2>
          </div>

          <div className="bg-[#0e0717] border border-amber-400/20 rounded-xl p-5 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto space-y-4">
            <p className="text-amber-200 font-semibold">
              Copyright (c) 2026 Daksh Singh (https://www.github.com/DakshSingh-GitHub/)
            </p>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the &ldquo;Software&rdquo;), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>
            <p className="uppercase text-zinc-400">
              THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </p>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-zinc-400">
            End of Independent Software Contractor Agreement • Executed in Bareilly / Rishihood University
          </p>
        </footer>
      </article>
    </div>
  );
}

