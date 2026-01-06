'use client';

export const FeaturesSection = () => {
  const features = [
    {
      title: 'Unified Analytics',
      description: 'All platforms, one beautiful dashboard',
      icon: '📊',
    },
    {
      title: 'Deal Pipeline',
      description: 'Track every brand deal from pitch to payment',
      icon: '💰',
    },
    {
      title: 'Content Calendar',
      description: 'Plan, schedule, and never miss a post',
      icon: '📅',
    },
    {
      title: 'AI Assistant',
      description: 'Get suggestions, automate tasks, and grow faster',
      icon: '✨',
    },
  ];

  return (
    <section className="features-section py-20" aria-label="Features section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="badge px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm">Features</span>
          <h2 className="text-5xl font-bold mt-6 mb-4">Everything you need</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">From analytics to brand deals, we've got your entire creator business covered.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
