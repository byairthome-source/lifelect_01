export interface ValidationErrors {
  [field: string]: string;
}

export function validateEmail(email: string): string | null {
  if (!email.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address";
  return null;
}

export function validateRequired(value: string, fieldName: string): string | null {
  if (!value.trim()) return `${fieldName} is required`;
  return null;
}

export function validatePhone(phone: string): string | null {
  if (!phone.trim()) return null; // optional
  if (!/^[+]?[\d\s()-]{7,20}$/.test(phone)) return "Please enter a valid phone number";
  return null;
}

export function validateInquiryForm(data: {
  fullName: string;
  email: string;
  message: string;
  phone?: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};
  const nameErr = validateRequired(data.fullName, "Full name");
  if (nameErr) errors.fullName = nameErr;
  const emailErr = validateEmail(data.email);
  if (emailErr) errors.email = emailErr;
  const msgErr = validateRequired(data.message, "Message");
  if (msgErr) errors.message = msgErr;
  if (data.phone) {
    const phoneErr = validatePhone(data.phone);
    if (phoneErr) errors.phone = phoneErr;
  }
  return errors;
}
