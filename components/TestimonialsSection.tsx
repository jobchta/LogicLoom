'use client';

export const TestimonialsSection = () => {
  const testimonials = [
    { quote: 'Replaced 5 different tools. The deal pipeline alone is worth 10x the price.', author: 'Alex Chen', role: 'Tech • 250K', avatar: 'A', color: 'bg-rose-500' },
    { quote: 'The rate calculator helped me 3x my brand deals. Finally, data-backed negotiations.', author: 'Maya Jordan', role: 'Lifestyle • $50K+', avatar: 'M', color: 'bg-emerald-500' },
    { quote: 'Clean, fast, powerful. The only creator tool I\'ve actually stuck with.', author: 'Chris Park', role: 'Finance • 180K', avatar: 'C', color: 'bg-amber-500' },
  ];

  return (
    <section className="py-20" aria-label="Testimonials">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-white">Loved by </span><span className="text-emerald-400">creators</span></h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="testimonial-card p-8 rounded-2xl border border-gray-700 bg-gray-900/50 hover:border-gray-600 transition-all flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-xl">★★★★★</div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 flex-grow italic leading-relaxed">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-lg`}>{t.avatar}</div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.author}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
