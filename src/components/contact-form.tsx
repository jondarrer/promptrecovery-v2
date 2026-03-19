'use client';

import { useState } from 'react';

import { Toast } from './toast';
import { FormField } from './form-field';
import { YesNoRadioGroup } from './yes-no-radio-group';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm({ action, accessKey }: { action: string; accessKey: string }) {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: { preventDefault(): void; currentTarget: HTMLFormElement }) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: accessKey, ...data }),
      });
      const json = await res.json();

      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {(status === 'success' || status === 'error') && (
        <div className="fixed bottom-6 right-6 z-50">
          <Toast
            type={status === 'success' ? 'success' : 'danger'}
            message={
              status === 'success'
                ? "Your quote request has been sent! We'll be in touch soon."
                : 'Something went wrong. Please try again or call us directly.'
            }
            onClose={() => setStatus('idle')}
          />
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <FormField name="first_name" id="first_name" label="First name" />
            <FormField name="last_name" id="last_name" label="Last name" />
          </div>
          <FormField name="email" id="email" type="email" label="Email address" />
          <FormField
            name="phone"
            id="phone"
            type="tel"
            label="Phone number"
            title="Enter a valid UK phone number (e.g. 07700 900123 or +44 7700 900123)"
            pattern="(\+44|0)[\d\s\-]{9,14}"
          />
          <FormField name="from_location" id="from_location" label="From street address &amp; post code" />
          <FormField name="to_location" id="to_location" label="To street address &amp; post code" />
          <div className="grid md:grid-cols-2 md:gap-6">
            <FormField name="vehicle_reg" id="vehicle_reg" label="Vehicle reg" />
            <FormField name="vehicle_make_and_model" id="vehicle_make_and_model" label="Vehicle make &amp; model" />
          </div>
        </div>

        <div>
          <YesNoRadioGroup name="vehicle_rolls" label="Does the vehicle roll?" />
          <YesNoRadioGroup name="vehicle_starts_and_drives" label="Does the vehicle start and drive?" />
          <YesNoRadioGroup name="vehicle_neutral" label="Does the vehicle go into neutral?" />

          {/* Additional Information */}
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              id="message"
              name="message"
              rows={3}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-normal rounded-base focus:ring-yellow focus:border-yellow block w-full p-3.5 shadow-xs placeholder:text-heading"
              placeholder="Any additional information"
            ></textarea>
          </div>
          {/* End Additional Information */}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="text-white bg-brand box-border border border-transparent hover:bg-brand-light focus:ring-2 focus:ring-yellow shadow-xs font-medium leading-5 rounded-base text-normal px-4 py-2.5 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending…' : 'Request quote'}
          </button>
          {/* End Submit */}
        </div>
      </form>
    </>
  );
}
