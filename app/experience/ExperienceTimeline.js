'use client'

import experienceData from "../../assets/experience.js"
import { usePalette } from "../../components/ProjectWrapper"

export default function ExperienceTimeline() {
  const palette = usePalette()
  // Default fallback colors if palette not provided
  const colors = palette || ["#EB5353", "#187498", "#36AE7C"]

  return (
    <div className="flex flex-col items-center justify-center mx-6 mt-10 grow">
      <div className="relative py-6 pl-10 sm:pl-12 max-w-2xl">
        {/* Timeline - 3 vertical lines as SVG */}
        <svg
          className="absolute left-0 top-0 w-[30px] opacity-50"
          style={{ height: '100%', filter: 'contrast(120%) brightness(120%)' }}
          preserveAspectRatio="none"
        >
          <rect x="0" y="0" width="10" height="100%" fill={colors[0]} />
          <rect x="10" y="0" width="10" height="100%" fill={colors[1]} />
          <rect x="20" y="0" width="10" height="100%" fill={colors[2]} />
        </svg>

        <ul className="space-y-8">
          {experienceData.map(({ title, company, date, description }, index) =>
            <li
              key={date}
            >
              {/* Content card */}
              <div className="p-4 sm:p-5 rounded-lg shadow-md bg-noise hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-slate-600">{company}</p>
                  </div>
                  <span
                    className="px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap w-fit"
                    style={{
                      backgroundColor: `${colors[index % 3]}20`,
                      color: colors[index % 3]
                    }}
                  >
                    {date}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed">{description}</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
