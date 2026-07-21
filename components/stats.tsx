const stats = [
  { value: '250+', label: 'Engagements delivered' },
  { value: '99.9%', label: 'Threat containment rate' },
  { value: '15 min', label: 'Median incident response' },
  { value: '40+', label: 'Industries served' },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-14 md:grid-cols-4 md:px-6 md:py-20">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <span className="font-mono text-3xl font-semibold text-primary md:text-5xl">
              {stat.value}
            </span>
            <span className="max-w-[10rem] text-xs leading-relaxed text-muted-foreground md:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
