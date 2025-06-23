import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, ArrowLeft, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Apply = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('job');
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      nationality: '',
      currentLocation: ''
    },
    documents: {
      cv: null,
      passport: null,
      id: null,
      education: null
    },
    experience: {
      previousJobs: '',
      skills: '',
      languages: '',
      workPreference: ''
    }
  });

  const steps = [
    { number: 1, title: 'Personal Information', icon: '👤' },
    { number: 2, title: 'Document Upload', icon: '📄' },
    { number: 3, title: 'Experience & Skills', icon: '💼' },
    { number: 4, title: 'Review & Submit', icon: '✅' }
  ];

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file
      }
    }));
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const applicationDate = new Date().toLocaleString();
      const applicantName = `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}`;
      
      // Prepare file information
      const fileInfo = {
        cv: formData.documents.cv ? `${formData.documents.cv.name} (${(formData.documents.cv.size / 1024).toFixed(2)} KB)` : 'Not uploaded',
        passport: formData.documents.passport ? `${formData.documents.passport.name} (${(formData.documents.passport.size / 1024).toFixed(2)} KB)` : 'Not uploaded',
        id: formData.documents.id ? `${formData.documents.id.name} (${(formData.documents.id.size / 1024).toFixed(2)} KB)` : 'Not uploaded',
        education: formData.documents.education ? `${formData.documents.education.name} (${(formData.documents.education.size / 1024).toFixed(2)} KB)` : 'Not uploaded'
      };

      // Send email using EmailJS
      const templateParams = {
        applicant_name: applicantName,
        applicant_email: formData.personalInfo.email,
        applicant_phone: formData.personalInfo.phone,
        date_of_birth: formData.personalInfo.dateOfBirth,
        nationality: formData.personalInfo.nationality,
        current_location: formData.personalInfo.currentLocation,
        previous_jobs: formData.experience.previousJobs || 'Not provided',
        skills: formData.experience.skills || 'Not provided',
        languages: formData.experience.languages || 'Not provided',
        work_preference: formData.experience.workPreference || 'Not specified',
        documents_cv: fileInfo.cv,
        documents_passport: fileInfo.passport,
        documents_id: fileInfo.id,
        documents_education: fileInfo.education,
        job_id: jobId || 'Not specified',
        application_date: applicationDate,
        to_email: 'globalworkpass@gmail.com'
      };

      console.log('Sending email with params:', templateParams);

      await emailjs.send(
        'service_6elkq6u',
        'template_0i775tg',
        templateParams,
        'BVScmUn287nNyRyZq'
      );

      toast({
        title: "Application Submitted Successfully!",
        description: "Your application has been sent to GlobalWork Pass. We'll review it and get back to you soon.",
      });

      console.log('Application submitted successfully:', {
        personalInfo: formData.personalInfo,
        experience: formData.experience,
        documents: {
          cv: formData.documents.cv?.name || 'Not uploaded',
          passport: formData.documents.passport?.name || 'Not uploaded',
          id: formData.documents.id?.name || 'Not uploaded',
          education: formData.documents.education?.name || 'Not uploaded'
        },
        jobId,
        submissionDate: applicationDate
      });

      // Reset form after successful submission
      setFormData({
        personalInfo: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          nationality: '',
          currentLocation: ''
        },
        documents: {
          cv: null,
          passport: null,
          id: null,
          education: null
        },
        experience: {
          previousJobs: '',
          skills: '',
          languages: '',
          workPreference: ''
        }
      });
      
      setCurrentStep(1);

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            to="/jobs"
            className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Job Application</h1>
          <p className="text-gray-600 mt-2">Complete your application in 4 simple steps</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
                  currentStep >= step.number 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    step.number
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-blue-900' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-full h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-blue-900' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">{steps[currentStep - 1].icon}</span>
                {steps[currentStep - 1].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {
                currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          required
                          value={formData.personalInfo.firstName}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, firstName: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          required
                          value={formData.personalInfo.lastName}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, lastName: e.target.value }
                          }))}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.personalInfo.email}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, email: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.personalInfo.phone}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, phone: e.target.value }
                          }))}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          required
                          value={formData.personalInfo.dateOfBirth}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, dateOfBirth: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="nationality">Nationality</Label>
                        <Input
                          id="nationality"
                          required
                          value={formData.personalInfo.nationality}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, nationality: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="currentLocation">Current Location</Label>
                        <Input
                          id="currentLocation"
                          required
                          value={formData.personalInfo.currentLocation}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, currentLocation: e.target.value }
                          }))}
                        />
                      </div>
                    </div>
                  </div>
                )
              }

              {
                currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { key: 'cv', label: 'CV/Resume', required: true },
                        { key: 'passport', label: 'Passport Copy', required: true },
                        { key: 'id', label: 'National ID', required: true },
                        { key: 'education', label: 'Education Certificates', required: false }
                      ].map((doc) => (
                        <div key={doc.key} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <div className="text-sm text-gray-600 mb-2">
                            {doc.label} {doc.required && <span className="text-red-500">*</span>}
                          </div>
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            onChange={(e) => handleFileUpload(doc.key, e.target.files?.[0] || null)}
                            className="hidden"
                            id={`file-${doc.key}`}
                          />
                          <label
                            htmlFor={`file-${doc.key}`}
                            className="cursor-pointer bg-blue-50 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-100 transition-colors"
                          >
                            Choose File
                          </label>
                          {formData.documents[doc.key as keyof typeof formData.documents] && (
                            <div className="mt-2 text-sm text-green-600 flex items-center justify-center">
                              <FileText className="h-4 w-4 mr-1" />
                              File uploaded
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Document Requirements:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• All documents must be clear and readable</li>
                        <li>• Accepted formats: PDF, JPG, PNG, DOC, DOCX</li>
                        <li>• Maximum file size: 5MB per document</li>
                        <li>• Documents should be in English or officially translated</li>
                      </ul>
                    </div>
                  </div>
                )
              }

              {
                currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="previousJobs">Previous Work Experience</Label>
                      <textarea
                        id="previousJobs"
                        rows={4}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Describe your previous work experience..."
                        value={formData.experience.previousJobs}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          experience: { ...prev.experience, previousJobs: e.target.value }
                        }))}
                      />
                    </div>

                    <div>
                      <Label htmlFor="skills">Skills & Qualifications</Label>
                      <textarea
                        id="skills"
                        rows={3}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="List your relevant skills and qualifications..."
                        value={formData.experience.skills}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          experience: { ...prev.experience, skills: e.target.value }
                        }))}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="languages">Languages Spoken</Label>
                        <Input
                          id="languages"
                          placeholder="e.g., English (Fluent), French (Basic)"
                          value={formData.experience.languages}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            experience: { ...prev.experience, languages: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="workPreference">Preferred Work Location</Label>
                        <select
                          id="workPreference"
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                          value={formData.experience.workPreference}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            experience: { ...prev.experience, workPreference: e.target.value }
                          }))}
                        >
                          <option value="">Select preference</option>
                          <option value="canada">Canada</option>
                          <option value="usa">USA</option>
                          <option value="both">Both Canada and USA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )
              }

              {
                currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-4">Application Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Name:</strong> {formData.personalInfo.firstName} {formData.personalInfo.lastName}
                        </div>
                        <div>
                          <strong>Email:</strong> {formData.personalInfo.email}
                        </div>
                        <div>
                          <strong>Phone:</strong> {formData.personalInfo.phone}
                        </div>
                        <div>
                          <strong>Nationality:</strong> {formData.personalInfo.nationality}
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium mb-3">Documents Uploaded:</h4>
                      <div className="space-y-2 text-sm">
                        {Object.entries(formData.documents).map(([key, file]) => (
                          <div key={key} className="flex items-center">
                            <CheckCircle className={`h-4 w-4 mr-2 ${file ? 'text-green-500' : 'text-gray-300'}`} />
                            <span className={file ? 'text-gray-900' : 'text-gray-500'}>
                              {key.toUpperCase()}: {file ? 'Uploaded' : 'Not uploaded'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Next Steps:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Your application will be reviewed within 2-3 business days</li>
                        <li>• You'll receive an email confirmation shortly</li>
                        <li>• If selected, we'll contact you for an interview</li>
                        <li>• Our team will assist with visa and documentation process</li>
                      </ul>
                    </div>

                    <div className="flex items-start">
                      <input type="checkbox" required className="mt-1 rounded border-gray-300" />
                      <label className="ml-2 text-sm text-gray-600">
                        I confirm that all information provided is accurate and I agree to the{' '}
                        <Link to="/terms" className="text-blue-600 hover:text-blue-500">Terms of Service</Link>
                      </label>
                    </div>
                  </div>
                )
              }

              <div className="flex justify-between mt-8 pt-6 border-t">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={isSubmitting}
                  >
                    Previous
                  </Button>
                )}
                <div className="ml-auto">
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-blue-900 hover:bg-blue-800"
                      disabled={isSubmitting}
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Apply;
