import * as React from 'react';

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate2: React.FC<Readonly<EmailTemplateProps>> = ({
  email
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
    <div
      style={{
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ color: '#333', margin: '0' }}>{email} downloaded the resume</h1>
    </div>
  </div>
);

