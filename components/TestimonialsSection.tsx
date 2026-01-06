'use client';

export const TestimonialsSection = () => {
  const testimonials = [
    { quote: 'Best tool ever.', author: 'Alex Chen', role: 'Tech', verified: true },
    { quote: 'Data-backed negotiations.', author: 'Maya Jordan', role: 'Lifestyle', verified: true },
    { quote: 'Most powerful creator tool.', author: 'Chris Park', role: 'Finance', verified: true },
  ];

  return (
    <section className="py-20" aria-label="Testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Loved by creators</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="p-6 rounded-lg border border-gray-700">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-300 mb-4 italic">"{t.quote}"</p>
              <p className="font-semibold">{t.author}</p>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
