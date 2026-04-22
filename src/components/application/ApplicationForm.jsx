import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Section from '../common/Section';
import { getThemeColors } from '../../config/theme';

const ApplicationForm = ({ formData, setFormData, onFormSubmit, showSuccessPopup, closeSuccessPopup, onBackClick }) => {
    const themeColors = getThemeColors();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    // Replace with your Formspree form ID
    const FORMSPREE_FORM_ID = 'mjgjador';

    const validateName = (name) => {
        if (!name.trim()) return 'Name is required';
        if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name should only contain letters and spaces';
        return '';
    };

    const validatePhone = (phone) => {
        if (!phone.trim()) return 'Phone number is required';
        if (!/^[\d\s\-\+\(\)]+$/.test(phone)) return 'Phone number should only contain digits and allowed symbols (+, -, (, ), spaces)';
        if (!/^[\d\-\+\(\)]{10,15}$/.test(phone.replace(/\s/g, ''))) return 'Please enter a valid phone number (10-15 digits)';
        return '';
    };

    const validateEmail = (email) => {
        if (!email.trim()) return ''; // Email is optional
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Please enter a valid email address';
        return '';
    };

    const validateLookingFor = (lookingFor) => {
        if (!lookingFor || lookingFor === '') return 'Please select an option';
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nameError = validateName(formData.name);
        const phoneError = validatePhone(formData.phone);
        const emailError = validateEmail(formData.email);
        const lookingForError = validateLookingFor(formData.lookingFor);

        const newErrors = {
            name: nameError,
            phone: phoneError,
            email: emailError,
            lookingFor: lookingForError
        };

        setErrors(newErrors);

        if (nameError || phoneError || emailError || lookingForError) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    lookingFor: formData.lookingFor,
                }),
            });

            if (response.ok) {
                onFormSubmit(e);
            } else {
                alert('There was an error submitting your application. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error submitting your application. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen selection:text-white pb-20" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: themeColors.background, color: themeColors.text, '--theme-background': themeColors.background, '--theme-text': themeColors.text, '--theme-primary': themeColors.primary, '--theme-secondary': themeColors.secondary, '--theme-card-background': themeColors.cardBackground, '--theme-border': themeColors.border, selectionBackgroundColor: themeColors.primary }}>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                    
                    .input-group {
                        position: relative;
                    }
                    
                    .floating-label {
                        position: absolute;
                        left: 1.5rem;
                        top: 50%;
                        transform: translateY(-50%);
                        color: var(--theme-text);
                        opacity: 0.6;
                        font-size: 1rem;
                        pointer-events: none;
                        transition: all 0.2s ease;
                        background-color: var(--theme-card-background);
                        padding: 0 0.5rem;
                        z-index: 10;
                    }
                    
                    .input-field:focus ~ .floating-label,
                    .input-field:not(:placeholder-shown) ~ .floating-label {
                        top: 0;
                        font-size: 0.75rem;
                        opacity: 1;
                        color: var(--theme-primary);
                        font-weight: 500;
                        background-color: var(--theme-card-background);
                        padding: 0 0.25rem;
                        box-shadow: 0 0 0 10px var(--theme-card-background);
                    }
                    
                    .input-field {
                        width: 100%;
                        border: 2px solid var(--theme-border);
                        border-opacity: 0.1;
                        border-radius: 1rem;
                        padding: 1.5rem 1.5rem 0.5rem 1.5rem;
                        outline: none;
                        transition: all 0.2s ease;
                        background-color: var(--theme-card-background);
                        color: var(--theme-text);
                        font-size: 1rem;
                    }
                    
                    .input-field:focus {
                        border-color: var(--theme-primary);
                        border-opacity: 1;
                        box-shadow: 0 0 0 3px var(--theme-primary)15;
                    }
                    
                    .input-field::placeholder {
                        color: transparent;
                    }
                `}
            </style>

            {/* Back Navigation */}
            <div className="max-w-4xl mx-auto pt-12 px-6">
                <button
                    onClick={onBackClick}
                    className="flex items-center space-x-2 font-bold hover:translate-x-[-4px] transition-transform"
                    style={{ color: 'var(--theme-primary)' }}
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Website</span>
                </button>
            </div>

            <Section className="pt-4">
                <div className="rounded-[2rem] shadow-xl border overflow-hidden max-w-2xl mx-auto" style={{ backgroundColor: 'var(--theme-card-background)', borderColor: 'var(--theme-border)', borderOpacity: 0.1 }}>
                    <div className="p-6 md:p-8 text-center text-white" style={{ backgroundColor: 'var(--theme-primary)' }}>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">Application Form</h1>
                        <p className="opacity-80 text-sm">Tell us a bit about yourself to get started on your transformation journey.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                        <div className="input-group">
                            <input
                                type="text"
                                id="name"
                                placeholder=" "
                                value={formData.name}
                                onChange={(e) => {
                                    setFormData({ ...formData, name: e.target.value });
                                    setErrors({ ...errors, name: validateName(e.target.value) });
                                }}
                                className={`input-field focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--theme-primary)] ${errors.name ? 'border-red-500' : ''}`}
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? 'name-error' : undefined}
                            />
                            <label htmlFor="name" className="floating-label">Full Name *</label>
                            {errors.name && (
                                <p id="name-error" className="text-red-500 text-sm flex items-center mt-2">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="input-group">
                            <input
                                type="tel"
                                id="phone"
                                placeholder=" "
                                value={formData.phone}
                                onChange={(e) => {
                                    setFormData({ ...formData, phone: e.target.value });
                                    setErrors({ ...errors, phone: validatePhone(e.target.value) });
                                }}
                                className={`input-field focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--theme-primary)] ${errors.phone ? 'border-red-500' : ''}`}
                                aria-invalid={!!errors.phone}
                                aria-describedby={errors.phone ? 'phone-error' : undefined}
                            />
                            <label htmlFor="phone" className="floating-label">Phone Number *</label>
                            {errors.phone && (
                                <p id="phone-error" className="text-red-500 text-sm flex items-center mt-2">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                        <div className="input-group">
                            <select
                                id="lookingFor"
                                value={formData.lookingFor || ''}
                                onChange={(e) => {
                                    setFormData({ ...formData, lookingFor: e.target.value });
                                    setErrors({ ...errors, lookingFor: validateLookingFor(e.target.value) });
                                }}
                                className={`input-field focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--theme-primary)] ${errors.lookingFor ? 'border-red-500' : ''}`}
                                style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem' }}
                                aria-invalid={!!errors.lookingFor}
                                aria-describedby={errors.lookingFor ? 'lookingFor-error' : undefined}
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="Personal">Personal</option>
                                <option value="Group Workshop">Group Workshop</option>
                            </select>
                            <label htmlFor="lookingFor" className="floating-label" style={{ top: '0', fontSize: '0.75rem', opacity: 1, color: 'var(--theme-primary)', fontWeight: 500 }}>I am Looking for *</label>
                            {errors.lookingFor && (
                                <p id="lookingFor-error" className="text-red-500 text-sm flex items-center mt-2">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.lookingFor}
                                </p>
                            )}
                        </div>

                        <div className="input-group">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value });
                                    setErrors({ ...errors, email: validateEmail(e.target.value) });
                                }}
                                className={`input-field focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--theme-primary)] ${errors.email ? 'border-red-500' : ''}`}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                            <label htmlFor="email" className="floating-label">Email Address</label>
                            {errors.email && (
                                <p id="email-error" className="text-red-500 text-sm flex items-center mt-2">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-2xl text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                style={{ backgroundColor: 'var(--theme-primary)' }}
                            >
                                <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
                                {!isSubmitting && <Send className="w-4 h-4" />}
                            </button>
                        </div>
                    </form>
                </div>
            </Section>

            {/* Success Popup Modal */}
            {showSuccessPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeSuccessPopup}></div>
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 max-w-md w-full text-center shadow-2xl transform animate-in zoom-in slide-in-from-bottom-4 duration-300">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--theme-primary)15' }}>
                            <CheckCircle2 className="w-10 h-10" style={{ color: 'var(--theme-primary)' }} />
                        </div>
                        <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--theme-text)' }}>Thank You!</h2>
                        <p className="mb-8 leading-relaxed text-base" style={{ color: 'var(--theme-text)', opacity: 0.7 }}>
                            We have received your application. We will reach out to you soon to discuss your next steps!
                        </p>
                        <button
                            onClick={closeSuccessPopup}
                            className="w-full py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-300"
                            style={{ backgroundColor: 'var(--theme-primary)' }}
                        >
                            Back to Website
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplicationForm;
