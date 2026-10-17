import { env } from "@/constants/env";

export const getWhatsappMessageLink = (message: string) => {
  const whatsappNumber = env.WHATSAPP_NUMBER;
  const whatsappMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return whatsappLink;
};
