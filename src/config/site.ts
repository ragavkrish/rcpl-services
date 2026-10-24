/**
 * Site configuration and brand constants for RCPL Services — Modern Prestige.
 * Note: WhatsApp number must only be configured once verified by the client.
 * In accordance with instructions: Do not invent or hardcode a guessed WhatsApp number.
 */

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /**
   * Verified WhatsApp number formatted with country code and digits only (e.g., "919876543210").
   * Left empty until client provides approved number.
   * Can also be populated via VITE_WHATSAPP_NUMBER in .env.
   */
  whatsAppNumber: string;
  defaultEmailPrompt: string;
  status: 'candidate_catalogue_awaiting_confirmation';
}

export const siteConfig: SiteConfig = {
  name: "RCPL Services",
  shortName: "RCPL",
  tagline: "Corporate Facilitation, Taxation & Compliance Advisory",
  description:
    "Business registrations, intellectual property, taxation, and compliance services—helping you find the right next step for your requirements.",
  // Leave empty by default per client instruction. Client can supply via VITE_WHATSAPP_NUMBER.
  whatsAppNumber: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WHATSAPP_NUMBER) || "",
  defaultEmailPrompt: "enquiry@rcplservices.com",
  status: "candidate_catalogue_awaiting_confirmation",
};

export const BRAND_TOKENS = {
  obsidian: "#111714",
  deepForest: "#20483A",
  warmIvory: "#F5F2E9",
  champagne: "#C5A46D",
  mutedGrey: "#A6ADA7",
  white: "#FFFFFF",
  divider: "#D8DDD7",
  error: "#B42318",
  focus: "#2563EB",
} as const;
