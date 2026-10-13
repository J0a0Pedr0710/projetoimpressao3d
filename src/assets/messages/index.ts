import { ptBR } from 'date-fns/locale'

export const messages = {
    language: 'pt-BR',
    languageShortCountry: 'BR',
    dateLocale: {
      localeName: 'pt',
      localeData: ptBR,
      dateFormat: 'dd/MM/yyyy',
    },
    currencySymbol: 'R$',
    titles:{  home: 'Home',
      paymentCart: 'Carrinho de Pagamento',

    },
    months:{},
    label: {},
    error:{
      sessionExpiredOnLogin: 'Sua sessão expirou. Por favor, faça login novamente.',
      authError: 'Erro ao autenticar usuário',
      tokenInvalid: 'O Token é inválido.',
    },
    success:{},
    texts:{
        yes: "Sim",
        no: "Não",
        redo: "Refazer",
        saveChanges:
        'Salvar ao Sair?',
        createdByEntrepreneursLikeYou: 'Criado por empreendedores como você',
        out: 'Sair',

    }
}