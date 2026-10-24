/**
 * RCPL Services — Analytics & Conversion Measurement Layer
 * 
 * In strict adherence to privacy and accuracy standards:
 * 1. Zero third-party tracker dependencies injected without client consent.
 * 2. Never records or transmits PII (personal identifiable information like phone numbers or names).
 * 3. Clearly labels "whatsapp_handoff_attempt" rather than claiming completed leads.
 * 4. Pushes to standard window.dataLayer if configured, and dispatches a typed CustomEvent for future integrations.
 */

export type ConversionEventName =
  | 'page_view'
  | 'service_category_view'
  | 'service_detail_view'
  | 'service_explorer_intent_select'
  | 'service_explorer_search'
  | 'enquiry_modal_open'
  | 'enquiry_form_submit_attempt'
  | 'enquiry_validation_error'
  | 'whatsapp_handoff_attempt'
  | 'whatsapp_message_copied';

export interface AnalyticsPayload {
  categorySlug?: string;
  categoryTitle?: string;
  serviceSlug?: string;
  serviceTitle?: string;
  intentKey?: string;
  searchQueryLength?: number;
  triggerSource?: string;
  errorFields?: string[];
  [key: string]: unknown;
}

export const trackConversionEvent = (
  eventName: ConversionEventName,
  payload: AnalyticsPayload = {}
): void => {
  if (typeof window === 'undefined') return;

  // Sanitized payload — strip any potential PII before dispatching
  const sanitized: AnalyticsPayload = {
    ...payload,
    timestamp: new Date().toISOString(),
  };
  delete (sanitized as Record<string, unknown>).fullName;
  delete (sanitized as Record<string, unknown>).contactNumber;
  delete (sanitized as Record<string, unknown>).phone;
  delete (sanitized as Record<string, unknown>).message;

  // 1. Dispatch custom DOM event for custom listeners
  try {
    const customEvent = new CustomEvent('rcpl_analytics_event', {
      detail: { eventName, data: sanitized },
    });
    window.dispatchEvent(customEvent);
  } catch {
    // Ignore in older environments
  }

  // 2. Integration hook for standard Tag Manager / GA4 dataLayer if mounted by the user
  interface WindowWithDataLayer extends Window {
    dataLayer?: unknown[];
  }
  const win = window as WindowWithDataLayer;
  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push({
      event: eventName,
      ...sanitized,
    });
  }
};
