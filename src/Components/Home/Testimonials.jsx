import React from "react";
import { testimonialsData } from "../../data/homeData";


const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <p className="text-primary text-blue-500 font-semibold">TESTIMONIALS</p>
        <h2 className="text-4xl font-bold">The Trust From Clients</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="space-y-4">
            <div className="p-4 border rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <img
                  src={testimonial.photo}
                  alt={`Photo of ${testimonial.name}`}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-secondary-foreground">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;