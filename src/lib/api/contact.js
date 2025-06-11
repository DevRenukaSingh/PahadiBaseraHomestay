
export async function sendEmailUsingEmailJS(formElement) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  const formData = new FormData(formElement);
  formData.append('service_id', serviceId);
  formData.append('template_id', templateId);
  formData.append('user_id', userId);

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: 'POST',
    body: formData,
    contentType: false, // auto-detection
    processData: false 
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText?.errorText || 'EmailJS failed');
  }

  return res.text();
}
