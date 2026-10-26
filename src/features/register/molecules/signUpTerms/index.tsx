import { useEffect } from 'react';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { GridItem } from '@/features/shared/molecules/gridItem';
import { Checkbox } from '@/features/shared/molecules/checkbox';

import { ContentTerm, ContentTermsColumn } from './style';
import type { ISignUpTerms } from './types';

export const SignUpTerms = ({ isChecked, setIsAccept, errorMessage }: ISignUpTerms) => {
  const { iConfirmThatIRead, project3DTerms } = messages.texts;
  const { openAlert } = useApp();

  useEffect(() => {
    if (errorMessage) {
      openAlert(errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <GridItem cols={{ base: 12 }}>
      <ContentTermsColumn>
        <ContentTerm>
          <Checkbox
            id="accept"
            isChecked={isChecked}
            onCheck={(value) => setIsAccept(value)}
            errorMessage={errorMessage}
          />
          <span className="terms">
            {iConfirmThatIRead}{' '}
            <a
              className="termLink"
              target="_blank"
              href="https://plublic-postaqui-images.s3.us-east-1.amazonaws.com/docs/termo_de_uso.pdf"
              rel="noreferrer"
            >
              {project3DTerms}
            </a>
          </span>
        </ContentTerm>
      </ContentTermsColumn>
    </GridItem>
  );
};
