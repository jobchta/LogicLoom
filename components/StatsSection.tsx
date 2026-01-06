'use client';

export const StatsSection = () => {
  const stats = [
    { label: 'Revenue tracked', value: '$5M+' },
    { label: 'Creators', value: '12K+' },
    { label: 'Posts scheduled', value: '500K+' },
    { label: 'Average rating', value: '4.9★' },
  ];

  return (
    <section className="stats-section py-16 border-t border-gray-800" aria-label="Statistics section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
