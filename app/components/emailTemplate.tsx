import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,subject,message
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
    <div
      style={{
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ color: '#333', margin: '0' }}>Mail from, {email}!</h1>
      <h2 style={{ color: '#555', marginTop: '10px' }}>
      {subject}
      </h2>
      <h3 style={{ color: '#666' }}>
        {message}
      </h3>
    </div>
  </div>
);

