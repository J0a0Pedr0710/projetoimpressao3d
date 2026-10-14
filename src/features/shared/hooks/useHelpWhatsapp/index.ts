import { messages } from '@/assets/messages';
import { getWhatsappMessageLink } from '@/utils/services/sendWhatsappMessage';

export const useHelpWhatsapp = () => {
  const { helpWhatsappMessages } = messages.texts;

  const fnViewPostageWhatsapp = () =>
    window.open(getWhatsappMessageLink(helpWhatsappMessages), '_blank');

  return { fnViewPostageWhatsapp };
};
