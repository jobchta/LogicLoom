'use client';

export const FeaturesSection = () => {
  const features = [
    { title: 'Unified Analytics', description: 'All platforms, one beautiful dashboard', icon: '📊', color: 'from-rose-500 to-pink-500' },
    { title: 'Deal Pipeline', description: 'Track every brand deal from pitch to payment', icon: '💰', color: 'from-emerald-500 to-teal-500' },
    { title: 'Content Calendar', description: 'Plan, schedule, and never miss a post', icon: '📅', color: 'from-cyan-500 to-blue-500' },
    { title: 'AI Assistant', description: 'Get suggestions, automate tasks, and grow faster', icon: '✨', color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section className="py-20" aria-label="Features">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">Features</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Everything you need</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">From analytics to brand deals, we've got your entire creator business covered.</p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card p-8 rounded-2xl border border-gray-700 bg-gray-900/50 hover:border-gray-600 hover:bg-gray-900/80 transition-all group">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} mb-6`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
