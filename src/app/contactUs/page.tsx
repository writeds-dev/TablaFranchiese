'use client';

import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const subjectOptions = ['Franchise', 'Partnership'];

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required.'),
    lastName: Yup.string().required('Last name is required.'),
    email: Yup.string()
      .email('Invalid email address.')
      .required('Email is required.'),
    phone: Yup.string().required('Phone number is required.'),
    subject: Yup.string()
      .oneOf(subjectOptions, 'Invalid subject selected.')
      .required('Subject is required.'),
    message: Yup.string().required('Message is required.'),
  });

  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'Franchise',
    message: '',
  };

  const onSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log('Form submitted', values);
    alert('Message sent successfully!');
    resetForm();
  };

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-xl">
    
        <div className="relative bg-[#7D0C0C] text-white p-12 flex flex-col justify-between overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-800 rounded-full opacity-20" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500 rounded-full opacity-30" />

          <div>
            <h2 className="text-3xl font-extrabold mb-4">Contact Information</h2>
            <p className="text-purple-200 mb-8">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-pink-300" />
                <span className="font-medium">+1 (689) 698-9212</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-pink-300" />
                <span className="font-medium">info@tablafranchise.com</span>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-pink-300" />
                <span className="font-medium">
                  5829 Grand National Drive, Orlando, FL 32819
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-12 bg-white">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Questions? Proposals? We’d love to hear from you. Send us a message.
          </p>

          <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['firstName', 'lastName'].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 mb-1 capitalize">
                    {field === 'firstName' ? 'First Name' : 'Last Name'}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type="text"
                    value={formik.values[field as keyof FormValues]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-b-2 pb-2 placeholder-gray-400 focus:outline-none ${
                      formik.touched[field as keyof FormValues] &&
                      formik.errors[field as keyof FormValues]
                        ? 'border-red-600'
                        : 'border-gray-300 focus:border-purple-700'
                    }`}
                  />
                  {formik.touched[field as keyof FormValues] &&
                    formik.errors[field as keyof FormValues] && (
                      <p className="text-red-600 text-sm mt-1">
                        {formik.errors[field as keyof FormValues]}
                      </p>
                    )}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['email', 'phone'].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 mb-1 capitalize">
                    {field === 'email' ? 'Email' : 'Phone'}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={formik.values[field as keyof FormValues]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-b-2 pb-2 placeholder-gray-400 focus:outline-none ${
                      formik.touched[field as keyof FormValues] &&
                      formik.errors[field as keyof FormValues]
                        ? 'border-red-600'
                        : 'border-gray-300 focus:border-purple-700'
                    }`}
                  />
                  {formik.touched[field as keyof FormValues] &&
                    formik.errors[field as keyof FormValues] && (
                      <p className="text-red-600 text-sm mt-1">
                        {formik.errors[field as keyof FormValues]}
                      </p>
                    )}
                </div>
              ))}
            </div>
            <div>
              <p className="text-gray-700 mb-2">What type of franchise?</p>
              <div className="flex flex-wrap gap-6">
                {subjectOptions.map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="subject"
                      value={opt}
                      checked={formik.values.subject === opt}
                      onChange={formik.handleChange}
                      className="accent-purple-700 w-5 h-5"
                    />
                    <span className="text-gray-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border-b-2 pb-2 placeholder-gray-400 focus:outline-none ${
                  formik.touched.message && formik.errors.message
                    ? 'border-red-600'
                    : 'border-gray-300 focus:border-purple-700'
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-600 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 bg-[#7D0C0C] hover:bg-purple-800 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 justify-center"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
