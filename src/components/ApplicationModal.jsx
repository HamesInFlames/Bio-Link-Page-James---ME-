import React, { useState } from 'react';
import { APPLICATION, FORM_CONFIG } from '../config/content';
import { Icons } from './Icons';

export default function ApplicationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [friendType, setFriendType] = useState('');
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Calculate total steps and progress
  // Step 0: friend type, Step 1: dynamic Q, Steps 2-6: additional Qs, Step 7: contact
  const totalSteps = 8;

  const getProgress = () => {
    return Math.round((step / (totalSteps - 1)) * 100);
  };

  const reset = () => {
    setStep(0);
    setFriendType('');
    setAnswers({});
    setContact('');
    setConsent(false);
    setIsSubmitted(false);
    setSubmitError(null);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Prepare the data
    const formData = {
      type: 'friend',
      friendType: friendType,
      answers: answers,
      contact: contact,
      consent: consent,
      timestamp: new Date().toISOString(),
    };

    // Check if Google Apps Script URL is configured
    if (FORM_CONFIG.scriptUrl && FORM_CONFIG.scriptUrl !== "YOUR_GOOGLE_APPS_SCRIPT_URL") {
      try {
        const response = await fetch(FORM_CONFIG.scriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Required for Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        // With no-cors, we can't read the response, but if no error thrown, assume success
        setIsSubmitted(true);
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitError('Something went wrong. Please try again.');
      }
    } else {
      // Fallback: open mailto link
      const body = `
NEW APPLICATION
===============
Type: 👋 Friend
Friend Type: ${friendType}

ANSWERS
-------
${Object.entries(answers).map(([q, a]) => `Q: ${q}\nA: ${a}`).join('\n\n')}

CONTACT INFO
------------
Email: ${contact}
Consent to contact: ${consent ? 'Yes ✓' : 'No'}
      `.trim();

      const subject = encodeURIComponent(`New friend application 💌`);
      const mailBody = encodeURIComponent(body);
      window.open(`mailto:${FORM_CONFIG.fallbackEmail}?subject=${subject}&body=${mailBody}`, '_blank');
      setIsSubmitted(true);
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="modal-backdrop animate-fade-in-soft"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="modal-content relative z-10">
        <div className="sm:hidden">
          <div className="handle" />
        </div>

        <div className="p-6">
          {/* Header with progress */}
          <div className="flex items-center justify-between mb-2">
            {step > 0 && !isSubmitted && (
              <button
                onClick={() => setStep(step - 1)}
                className="p-2 -ml-2 rounded-lg hover:bg-gray-100 text-gray-400"
                aria-label="Go back"
              >
                {Icons.arrowLeft}
              </button>
            )}
            <div className="flex-1" />
            <button
              onClick={handleClose}
              className="p-2 -mr-2 rounded-lg hover:bg-gray-100 text-gray-400"
              aria-label="Close"
            >
              {Icons.x}
            </button>
          </div>

          {/* Progress bar */}
          {!isSubmitted && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                <span>Progress</span>
                <span>{getProgress()}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-300 bg-gray-800"
                  style={{ width: `${getProgress()}%` }}
                />
              </div>
            </div>
          )}

          {/* Content */}
          {isSubmitted ? (
            <SuccessScreen onClose={handleClose} />
          ) : (
            <FriendApplication
              step={step}
              friendType={friendType}
              setFriendType={setFriendType}
              answers={answers}
              setAnswers={setAnswers}
              contact={contact}
              setContact={setContact}
              consent={consent}
              setConsent={setConsent}
              onNext={() => setStep(step + 1)}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              submitError={submitError}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Friend Application Flow (8 questions total)
function FriendApplication({ 
  step, friendType, setFriendType, answers, setAnswers,
  contact, setContact, consent, setConsent,
  onNext, onSubmit, isSubmitting, submitError
}) {
  const config = APPLICATION.friend;
  
  // Step 0: Friend type selection
  if (step === 0) {
    return (
      <div className="animate-fade-in">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {config.typeQuestion}
        </h2>
        
        <select 
          value={friendType}
          onChange={(e) => setFriendType(e.target.value)}
          className="select mb-6"
        >
          <option value="">Select one...</option>
          {config.types.map((type) => (
            <option key={type.id} value={type.id}>{type.label}</option>
          ))}
        </select>

        <button
          onClick={onNext}
          disabled={!friendType}
          className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    );
  }

  // Step 1: Dynamic question based on friend type
  if (step === 1) {
    const question = config.dynamicQuestions[friendType] || config.dynamicQuestions.all;
    return (
      <QuestionStep
        question={question}
        value={answers[question] || ''}
        onChange={(val) => setAnswers({ ...answers, [question]: val })}
        onNext={onNext}
        type="textarea"
      />
    );
  }

  // Steps 2-6: Additional questions
  const additionalQuestionIndex = step - 2;
  if (additionalQuestionIndex < config.questions.length) {
    const question = config.questions[additionalQuestionIndex];
    return (
      <QuestionStep
        question={question}
        value={answers[question] || ''}
        onChange={(val) => setAnswers({ ...answers, [question]: val })}
        onNext={onNext}
        type={additionalQuestionIndex === 4 ? 'text' : 'textarea'}
      />
    );
  }

  // Final step: Contact info
  return (
    <ContactStep
      contact={contact}
      setContact={setContact}
      consent={consent}
      setConsent={setConsent}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      submitError={submitError}
    />
  );
}

// Reusable question step component
function QuestionStep({ question, value, onChange, onNext, type = 'text', note }) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {question}
      </h2>
      {note && (
        <p className="text-sm text-gray-400 mb-4">{note}</p>
      )}
      
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="input mt-4 mb-6"
          placeholder="Your answer..."
          rows={3}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="input mt-4 mb-6"
          placeholder="Your answer..."
        />
      )}

      <button
        onClick={onNext}
        disabled={!value.trim()}
        className="btn w-full disabled:opacity-50 disabled:cursor-not-allowed btn-primary"
      >
        Next
      </button>
    </div>
  );
}

// Contact Info Step
function ContactStep({ contact, setContact, consent, setConsent, onSubmit, isSubmitting, submitError }) {
  const canSubmit = contact.trim() && consent;
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {APPLICATION.contactLabel}
      </h2>
      
      <input
        type="email"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="input mb-6"
        placeholder={APPLICATION.contactPlaceholder}
      />

      <label className="checkbox-wrapper mb-6 cursor-pointer">
        <div 
          className={`checkbox ${consent ? 'checked' : ''}`}
          onClick={() => setConsent(!consent)}
        >
          {consent && <span className="text-white">{Icons.check}</span>}
        </div>
        <span className="text-gray-600 text-sm">
          {APPLICATION.consentLabel}
        </span>
      </label>

      {submitError && (
        <p className="text-red-500 text-sm mb-4">{submitError}</p>
      )}

      <button
        onClick={onSubmit}
        disabled={!canSubmit || isSubmitting}
        className="btn w-full disabled:opacity-50 disabled:cursor-not-allowed btn-primary"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
}

// Success Screen
function SuccessScreen({ onClose }) {
  return (
    <div className="text-center animate-fade-in success-pop py-8">
      <div className="text-5xl mb-6">😌</div>
      <p className="text-xl text-gray-800 mb-8">
        {APPLICATION.successMessage}
      </p>
      <button onClick={onClose} className="btn btn-outline">
        Close
      </button>
    </div>
  );
}
