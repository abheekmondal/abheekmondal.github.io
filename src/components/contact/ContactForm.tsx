import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema)
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS service, template, and user ID values should be replaced with your actual values
      const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
      const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID 
      const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key
      
      console.log('Sending form data via EmailJS:', data);
      
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message
        },
        publicKey
      );
      
      console.log('EmailJS result:', result);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={`w-full bg-cyber-darker border ${
            errors.name ? 'border-red-500' : 'border-gray-700'
          } text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green/50`}
          placeholder="Your name"
          disabled={isSubmitting}
        />
        {errors.name && (
          <div className="flex items-center text-red-500 text-sm mt-1">
            <AlertCircle size={14} className="mr-1" />
            <span>{errors.name.message}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`w-full bg-cyber-darker border ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          } text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green/50`}
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <div className="flex items-center text-red-500 text-sm mt-1">
            <AlertCircle size={14} className="mr-1" />
            <span>{errors.email.message}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject')}
          className={`w-full bg-cyber-darker border ${
            errors.subject ? 'border-red-500' : 'border-gray-700'
          } text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green/50`}
          placeholder="What is this regarding?"
          disabled={isSubmitting}
        />
        {errors.subject && (
          <div className="flex items-center text-red-500 text-sm mt-1">
            <AlertCircle size={14} className="mr-1" />
            <span>{errors.subject.message}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className={`w-full bg-cyber-darker border ${
            errors.message ? 'border-red-500' : 'border-gray-700'
          } text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green/50 resize-none`}
          placeholder="Your message here..."
          disabled={isSubmitting}
        ></textarea>
        {errors.message && (
          <div className="flex items-center text-red-500 text-sm mt-1">
            <AlertCircle size={14} className="mr-1" />
            <span>{errors.message.message}</span>
          </div>
        )}
      </div>
      
      <button
        type="submit"
        className="btn-cyber w-full justify-center py-3"
        disabled={isSubmitting}
      >
        <Send size={18} className="mr-2" />
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
      </button>
    </form>
  );
};

export default ContactForm;
