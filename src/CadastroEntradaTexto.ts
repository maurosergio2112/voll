const secoes = [
    {
      id: 1,
      titulo: "Insira alguns dados básicos",
      entradaTexto: [
        { id: 1, label: "Nome", placeholder: "digite seu nome completo" },
        { id: 2, label: "Email", placeholder: "digite o CPF" },
        { id: 3, label: "CPF", placeholder: "digite sua senha" },
        { id: 5, label: "Crie uma senha", placeholder: "digite sua senha" },
        { id: 6, label: "Repita a senha", placeholder: "Repita a senha anterior" }
      ],
    },
    {
      id: 2,
      titulo: "Agora mais alguns dados sobre você",
      entradaTexto: [
        {
          id: 1,
          label: "CEP",
          placeholder: "digite seu CEP",
        },
        {
          id: 2,
          label: "Endereço",
          placeholder: "digite seu Endereço",
        },
        {
          id: 3,
          label: "Telefone",
          placeholder: "digite seu Telefone",
        }
      ],
      checkbox:[]
    },
    {
      id: 3,
      titulo: 'Para finalizar, qual são os seus planos?',
      checkbox: [

        
          {
            id:1,
            value:'sulamerica'
          },
          {
            id:2,
            value:'Unimed'
          },
          {
            id:3,
            value:'Bradesco'
          },
          {
            id:4,
            value:'Amil'
          },
          {
            id:5,
            value:'Biosaúde'
          },
          {
            id:6,
            value:'Biovida'
          },
          {
            id:7,
            value:'Outro'
          }
      ]
  }
  ]

  export {secoes}