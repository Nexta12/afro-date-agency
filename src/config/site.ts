export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME,
  agencyName: process.env.NEXT_PUBLIC_AGENCY_NAME,
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  getWhatsAppUrl: (message?: string) => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
    const text = message ? encodeURIComponent(message) : encodeURIComponent("Hello Afro-Connect Agency, I would like to get connected.");
    return `https://wa.me/${phone}?text=${text}`;
  },
};
