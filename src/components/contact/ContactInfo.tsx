import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Tech Street', 'Silicon Valley, CA 94025'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@thinktankit.com', 'support@thinktankit.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 2PM'],
  },
];

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {contactDetails.map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-3 bg-blue-100 rounded-lg">
              <item.icon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-gray-600">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;