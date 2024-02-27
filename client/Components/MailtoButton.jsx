import React from 'react';

const EmailButton = () => {
  const recipientEmail = 'pavlinamiklasoova@gmail.com'; // Replace with recipient email address
  const subject = "Let's do a project together"; // Replace with desired subject
  const body = "Ahoj Pavlina! Nice to meet you. I'd love to collaborate!"; // Replace with desired body

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  return (
    <div>
      <button onClick={handleEmailClick}>Let's talk bussiness &#8594;</button>
    </div>
  );
}

export default EmailButton;
