import { render, screen } from '@testing-library/react';

import { useMainTemplateContext } from '@/contexts';
import { MainTemplateProvider } from '@/contexts/mainTemplate';

import { useMainTemplateRouteOverride } from '.';

const OverrideReader = () => {
  const { override } = useMainTemplateContext();

  return <span data-testid="override">{JSON.stringify(override)}</span>;
};

const OverrideSetter = ({
  override,
}: {
  override: {
    hideBreadCrumb?: boolean;
    allowContextLoading?: boolean;
    actualPage?: string;
  };
}) => {
  useMainTemplateRouteOverride(override);

  return null;
};

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MainTemplateProvider>{children}</MainTemplateProvider>
);

describe('useMainTemplateRouteOverride', () => {
  it('should set override on mount', () => {
    render(
      <>
        <OverrideSetter override={{ hideBreadCrumb: true, allowContextLoading: false }} />
        <OverrideReader />
      </>,
      { wrapper },
    );

    expect(screen.getByTestId('override')).toHaveTextContent(
      JSON.stringify({ hideBreadCrumb: true, allowContextLoading: false }),
    );
  });

  it('should clear override on unmount', () => {
    const { rerender } = render(
      <>
        <OverrideSetter override={{ hideBreadCrumb: true }} />
        <OverrideReader />
      </>,
      { wrapper },
    );

    expect(screen.getByTestId('override')).toHaveTextContent(
      JSON.stringify({ hideBreadCrumb: true }),
    );

    rerender(<OverrideReader />);

    expect(screen.getByTestId('override')).toHaveTextContent('{}');
  });

  it('should update override when values change', () => {
    const { rerender } = render(
      <>
        <OverrideSetter override={{ actualPage: 'Cart' }} />
        <OverrideReader />
      </>,
      { wrapper },
    );

    expect(screen.getByTestId('override')).toHaveTextContent(
      JSON.stringify({ actualPage: 'Cart' }),
    );

    rerender(
      <>
        <OverrideSetter override={{ actualPage: 'Perfil' }} />
        <OverrideReader />
      </>,
    );

    expect(screen.getByTestId('override')).toHaveTextContent(
      JSON.stringify({ actualPage: 'Perfil' }),
    );
  });
});
