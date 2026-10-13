export const WalletAccordionTypeProps = {
  default: {
    borderColor: '#F5F5F5',
    iconColor: 'neutral950',
  },
  error: {
    chip: {
      backgroundColor: 'errorLight',
      color: 'error',
      message: 'Erro no pagamento',
    },
    borderColor: '#D62A4D',
    backgroundColor: '#FFF6F6',
    iconColor: 'error',
  },
  canceled: {
    chip: {
      backgroundColor: 'infoLight',
      color: 'info',
      message: 'Pagamento cancelado',
    },
    borderColor: '#E5E5EF',
    iconColor: 'neutral500',
  },
  refunded: {
    chip: {
      backgroundColor: 'infoLight',
      color: 'info',
      message: 'Pagamento estornado',
    },
    borderColor: '#E5E5EF',
    iconColor: 'sended',
  },
  pending: {
    chip: {
      backgroundColor: 'waitLight',
      color: 'warning',
      message: 'Pagamento pendente',
      borderColor: 'warning',
    },
    borderColor: '#FFD98D',
    iconColor: 'wait',
  },
  shortPending: {
    chip: {
      backgroundColor: 'waitLight',
      color: 'wait',
      message: 'Pgto. Pendente',
    },
    borderColor: '#FFD98D',
    iconColor: 'wait',
  },
  success: {
    borderColor: '#D1E2D5',
    iconColor: 'green400',
  },
};
