'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
  comments: Yup.string().min(5, 'Comments must be at least 5 characters').required('Comments are required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().matches(/^\d+$/, 'Phone number must only contain digits').min(10, 'Phone number must be at least 10 characters').required('Phone number is required'),
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      console.log('Email sent successfully');
      setIsSuccess(true);
      setIsModalOpen(true);
      resetForm();
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSuccess(false);
      setErrorMessage('There was an error sending your message. Please try again.');
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Together We Thrive – Tell Us What You Think!</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full text-left">
            {[
              { label: 'Full Name', name: 'name', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Phone Number', name: 'phone', type: 'text' },
              { label: 'Company Name', name: 'company', type: 'text' },
              { label: 'Comments', name: 'comments', type: 'textarea' },
            ].map(({ label, name, type }) => (
              <div className="mb-4 w-full" key={name}>
                <label htmlFor={name} className="block font-semibold text-gray-700 text-left">{label}</label>
                <Field
                  as={type === 'textarea' ? 'textarea' : 'input'}
                  name={name}
                  id={name}
                  className={`mt-1 w-full px-4 py-2 border border-gray-300 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 ${type === 'textarea' ? 'resize-none' : ''}`}
                  required
                />
                <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
              </div>
            ))}

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

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        isSuccess={isSuccess} 
        message={errorMessage} 
      />
    </div>
  );
};

export default Forms;
