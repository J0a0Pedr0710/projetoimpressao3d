import packageJson from 'packageJson';

import { messages } from '@/assets/messages';
import { Text } from '@/features/shared/atoms/text';

import { Container } from './style';

export const Footer = () => {
  const { createdByEntrepreneursLikeYou } = messages.texts;
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Text>
        © Powered by <a href="http://localhost:5173">Projeto 3D.</a> {currentYear}
      </Text>
      <Text>
        {createdByEntrepreneursLikeYou}! Version: {packageJson.version}
      </Text>
    </Container>
  );
};
