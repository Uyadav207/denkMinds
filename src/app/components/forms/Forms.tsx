// src/app/components/forms/Forms.tsx

'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
  comments: Yup.string().min(5, 'Comments must be at least 5 characters').required('Comments are required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().min(10, 'Phone number must be at least 10 characters').required('Phone number is required'),
  company: Yup.string().min(4, 'Company name must be at least 4 characters').required('Company name is required'),
});

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  comments: string;
}

const Forms: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    comments: '',
    email: '',
    phone: '',
    company: '',
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    console.log('Form values:', values); 
    setIsModalOpen(true); 
    resetForm();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Together We Thrive – Tell Us What You Think!</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full text-left">
            <div className="mb-4 w-full">
              <label htmlFor="name" className="block font-semibold text-gray-700 text-left">Full Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="email" className="block font-semibold text-gray-700 text-left">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="phone" className="block font-semibold text-gray-700 text-left">Phone Number</label>
              <Field
                type="text"
                name="phone"
                id="phone"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="company" className="block font-semibold text-gray-700 text-left">Company Name</label>
              <Field
                type="text"
                name="company"
                id="company"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <ErrorMessage name="company" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="comments" className="block font-semibold text-gray-700 text-left">Comments</label>
              <Field
                as="textarea"
                name="comments"
                id="comments"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ minHeight: '70px' }}
                required
              />
              <ErrorMessage name="comments" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg shadow transition duration-400 ${isSubmitting ? 'bg-gray-400' : 'bg-violet-500 hover:bg-violet-700'} text-white`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Forms;
