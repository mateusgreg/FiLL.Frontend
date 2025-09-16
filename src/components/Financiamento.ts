class Financiamento {
    id: number;
    valor_veiculo: number;
    valor_entrada: number;
    valor_financiado: number;
    taxa_juros: number;
    prazo_meses: number;
    status_financiamento: string;
    data_criacao: string;
    aprovado_em: string;
    stellar_transaction_id: string;
  
    constructor(
      id: number,
      valor_veiculo: number,
      valor_entrada: number,
      valor_financiado: number,
      taxa_juros: number,
      prazo_meses: number,
      status_financiamento: string,
      data_criacao: string,
      aprovado_em: string,
      stellar_transaction_id: string
    ) {
      this.id = id;
      this.valor_veiculo = valor_veiculo;
      this.valor_entrada = valor_entrada;
      this.valor_financiado = valor_financiado;
      this.taxa_juros = taxa_juros;
      this.prazo_meses = prazo_meses;
      this.status_financiamento = status_financiamento;
      this.data_criacao = data_criacao;
      this.aprovado_em = aprovado_em;
      this.stellar_transaction_id = stellar_transaction_id;
    }
  }

  export default Financiamento;