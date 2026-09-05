import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Client Partner',
    role: 'Head of Growth, FinTech Enterprise',
    avatar: 'CP',
    text: 'Zion Marketing has transformed our customer communication. Their SMS and WhatsApp Business solutions have significantly improved our OTP delivery speed, engagement rates and customer satisfaction.',
    rating: 5,
    highlight: '99.8% On-Time OTP SLA'
  },
  {
    name: 'Client Partner',
    role: 'Operations Director, E-Commerce Platform',
    avatar: 'CP',
    text: 'The reliability and scalability of Zion\'s platform is exceptional. We process millions of transactional messages monthly with consistent sub-second delivery and rock-solid SMPP connectivity.',
    rating: 5,
    highlight: '10M+ Messages / Mo'
  },
  {
    name: 'Client Partner',
    role: 'CTO, Healthcare Group',
    avatar: 'CP',
    text: 'Outstanding technical support and robust REST API integration. Zion Marketing made our transition to omnichannel communication seamless, compliant, and highly cost-effective.',
    rating: 5,
    highlight: 'Seamless API Migration'
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] mb-4">
            <span className="w-2 h-2 rounded-full bg-zion-orange shadow-[0_0_6px_#FF6B00]"></span>
            <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-5 tracking-tight">
            What Our Clients <span className="text-zion-orange">Say</span>
          </h2>
          <p className="text-base sm:text-lg text-zion-dark-gray font-normal">
            Trusted by fast-growing enterprises and brands for mission-critical customer communication.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative reveal">
          <div className="relative p-8 md:p-12 rounded-3xl border border-[#D6E4FF] bg-white shadow-card relative">
            {/* Orange Quote Icon Badge */}
            <div className="absolute -top-5 left-8 md:left-12 w-11 h-11 rounded-xl bg-zion-orange flex items-center justify-center shadow-md shadow-orange-500/30">
              <Quote className="w-5 h-5 text-white fill-white" />
            </div>

            <div className="min-h-[190px] flex flex-col justify-center pt-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-zion-orange fill-zion-orange" />
                  ))}
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFF4ED] text-zion-orange border border-[#FFD9C2]">
                  {testimonials[activeIndex].highlight}
                </span>
              </div>
              
              <p className="text-lg md:text-xl text-zion-deep-blue font-medium leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#F1F5F9]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EEF4FF] border border-[#D6E4FF] flex items-center justify-center text-zion-blue font-bold text-base">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div>
                    <h4 className="text-zion-deep-blue font-bold text-base">{testimonials[activeIndex].name}</h4>
                    <p className="text-zion-slate text-xs sm:text-sm font-medium">{testimonials[activeIndex].role}</p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] flex items-center justify-center text-zion-blue hover:bg-zion-orange hover:text-white hover:border-zion-orange transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] flex items-center justify-center text-zion-blue hover:bg-zion-orange hover:text-white hover:border-zion-orange transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-8 bg-zion-orange' : 'w-2 bg-[#D6E4FF] hover:bg-zion-blue'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
