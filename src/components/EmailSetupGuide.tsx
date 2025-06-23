
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Settings, Key } from 'lucide-react';

const EmailSetupGuide = () => {
  return (
    <Card className="max-w-4xl mx-auto m-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Mail className="h-6 w-6 mr-2" />
          EmailJS Setup Guide for GlobalWork Pass
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Quick Setup Steps:</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Go to <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="underline">EmailJS.com</a> and create a free account</li>
            <li>Create an email service (Gmail recommended)</li>
            <li>Create an email template</li>
            <li>Get your credentials and update the Apply.tsx file</li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                Service Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>Connect your Gmail account (globalworkpass@gmail.com) to EmailJS service.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Template Creation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>Create a template with variables like applicant_name, applicant_email, etc.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center">
                <Key className="h-4 w-4 mr-2" />
                Credentials
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>Replace YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, and YOUR_TEMPLATE_ID in Apply.tsx</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-medium text-yellow-900 mb-2">Sample Email Template:</h4>
          <pre className="text-xs text-yellow-800 bg-yellow-100 p-2 rounded overflow-x-auto">
{`Subject: New Job Application - {{applicant_name}}

Dear GlobalWork Pass Team,

You have received a new job application:

Personal Information:
- Name: {{applicant_name}}
- Email: {{applicant_email}}
- Phone: {{applicant_phone}}
- Nationality: {{nationality}}
- Current Location: {{current_location}}

Experience:
- Previous Jobs: {{previous_jobs}}
- Skills: {{skills}}
- Languages: {{languages}}
- Work Preference: {{work_preference}}

Documents:
- CV: {{documents_cv}}
- Passport: {{documents_passport}}
- ID: {{documents_id}}
- Education: {{documents_education}}

Job ID: {{job_id}}
Application Date: {{application_date}}

Best regards,
GlobalWork Pass Application System`}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailSetupGuide;
