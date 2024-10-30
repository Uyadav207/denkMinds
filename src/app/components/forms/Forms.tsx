"use client"
import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import SendRoundedIcon from "@mui/icons-material/SendRounded"
import CircularProgress from '@mui/material/CircularProgress';

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Name must be at least 2 characters"),
  comments: Yup.string().min(5, "Comments must be at least 5 characters"),
  email: Yup.string().email("Invalid email format"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 characters"),
  company: Yup.string().min(4, "Company name must be at least 4 characters"),
})

interface FormValues {
  name: string
  email: string
  phone: string
  company: string
  comments: string
}

const Forms: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    comments: "",
    email: "",
    phone: "",
    company: "",
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void },
  ) => {
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      console.log("Email sent successfully")
      setIsSuccess(true)
      setSuccessMessage('Your message has been submitted successfully!');
      setIsModalOpen(true)
      resetForm()
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error)
      setIsSuccess(false)
      setErrorMessage(
        "There was an error sending your message. Please try again.",
      );
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      
      setIsModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="container mx-auto p-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Full Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone Number", name: "phone", type: "text" },
                { label: "Company Name", name: "company", type: "text" },
              ].map(({ label, name, type }) => (
                <div className="mb-4 w-full" key={name}>
                  <label
                    htmlFor={name}
                    className="block text-white text-sm font-medium"
                  >
                    {label} <span className="text-white">*</span>
                  </label>
                  <Field
                    as={type === "textarea" ? "textarea" : "input"}
                    name={name}
                    id={name}
                    className="w-full px-4 py-2 bg-violet-700 text-white border-b-2 border-black outline-none focus:outline-none focus:border-black"
                    required
                    style={{ boxShadow: "none" }}
                  />
                  <ErrorMessage
                    name={name}
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              ))}
            </div>

            <div className="mb-4 w-full flex flex-col">
              <label
                htmlFor="comments"
                className="block text-white text-sm font-medium"
              >
                Your Message <span className="text-white">*</span>
              </label>
              <Field
                as="textarea"
                name="comments"
                id="comments"
                className="w-full px-4 py-2 bg-violet-700 text-white border-b-2 border-black outline-none focus:outline-none focus:border-black resize-none"
                required
                style={{ boxShadow: "none" }}
              />
              <ErrorMessage
                name="comments"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4 w-full flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-full border-2 border-black shadow transition duration-400 ${
                  isSubmitting ? 'bg-transparent' : 'bg-violet-700 hover:bg-violet-600'
                } text-black flex items-center`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-4 border-black border-t-transparent rounded-full animate-spin mr-2" />
                ) : (
                  <SendRoundedIcon />
                )}
              </button>
            </div>

            {successMessage && (
              <div className="mt-4 text-center font-bold text-green-500">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mt-4 text-center font-bold text-red-500">
                {errorMessage}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Forms
