type Disciplina = {
  cod: string
  name: string
  periodo: string
}

type Disciplinas = {
  obrigatorias: Disciplina[]
  opt: Disciplina[]
  tg: Disciplina[]
}

export const disciplinas2011: Disciplinas = {
  obrigatorias: [
    { cod: 'CE003', name: 'Estatística II', periodo: '4' },
    {
      cod: 'CI055',
      name: 'Algoritmos e Estruturas de Dados I',
      periodo: '1',
    },
    {
      cod: 'CI056',
      name: 'Algoritmos e Estruturas de Dados II',
      periodo: '2',
    },
    {
      cod: 'CI057',
      name: 'Algoritmos e Estruturas de Dados III',
      periodo: '3',
    },
    { cod: 'CI058', name: 'Redes de Computadores I', periodo: '4' },
    {
      cod: 'CI059',
      name: 'Introdução à Teoria da Computação',
      periodo: '4',
    },
    { cod: 'CI061', name: 'Redes de Computadores II', periodo: '5' },
    {
      cod: 'CI062',
      name: 'Técnicas Alternativas de Programação',
      periodo: '4',
    },
    { cod: 'CI064', name: 'Software Básico', periodo: '3' },
    {
      cod: 'CI065',
      name: 'Algoritmos e Teoria dos Grafos',
      periodo: '5',
    },
    { cod: 'CI067', name: 'Oficina de Computação', periodo: '3' },
    { cod: 'CI068', name: 'Circuitos Lógicos', periodo: '1' },
    { cod: 'CI162', name: 'Engenharia de Requisitos', periodo: '4' },
    { cod: 'CI163', name: 'Projeto de Software', periodo: '6' },
    {
      cod: 'CI164',
      name: 'Introdução à Computação Científica',
      periodo: '4',
    },
    { cod: 'CI165', name: 'Análise de Algoritmos', periodo: '6' },
    { cod: 'CI166', name: 'Metodologia Científica', periodo: '5' },
    { cod: 'CI209', name: 'Inteligência Artificial', periodo: '5' },
    {
      cod: 'CI210',
      name: 'Projetos Digitais e Microprocessadores',
      periodo: '2',
    },
    {
      cod: 'CI211',
      name: 'Construção de Compiladores',
      periodo: '7',
    },
    {
      cod: 'CI212',
      name: 'Organização e Arquitetura de Computadores',
      periodo: '3',
    },
    { cod: 'CI215', name: 'Sistemas Operacionais', periodo: '4' },
    {
      cod: 'CI218',
      name: 'Sistemas de Bancos de Dados',
      periodo: '6',
    },
    { cod: 'CI220', name: 'Teoria de Sistemas', periodo: '5' },
    { cod: 'CI221', name: 'Engenharia de Software', periodo: '7' },
    { cod: 'CI237', name: 'Matemática Discreta', periodo: '3' },
    { cod: 'CM005', name: 'Álgebra Linear', periodo: '2' },
    { cod: 'CM045', name: 'Geometria Analítica', periodo: '1' },
    { cod: 'CM046', name: 'Introdução à Álgebra', periodo: '1' },
    {
      cod: 'CM201',
      name: 'Cálculo Diferencial e Integral I',
      periodo: '1',
    },
    {
      cod: 'CM202',
      name: 'Cálculo Diferencial e Integral II',
      periodo: '2',
    },
    {
      cod: 'SA214',
      name: 'Introdução à Teoria Geral da Administração',
      periodo: '5',
    },
  ],
  opt: [
    {
      cod: 'CI069',
      name: 'Administração de Empresas de Informática',
      periodo: '7',
    },
    {
      cod: 'CI084',
      name: 'Tópicos em Teoria dos Grafos',
      periodo: '7',
    },
    {
      cod: 'CI085',
      name: 'Tópicos em Computação Gráfica',
      periodo: '7',
    },
    {
      cod: 'CI086',
      name: 'Tópicos em Arquitetura de Computadores',
      periodo: '7',
    },
    { cod: 'CI087', name: 'Tópicos em Banco de Dados', periodo: '7' },
    {
      cod: 'CI088',
      name: 'Tópicos em Sistemas Distribuídos',
      periodo: '7',
    },
    {
      cod: 'CI089',
      name: 'Tópicos em Teoria da Computação',
      periodo: '7',
    },
    {
      cod: 'CI090',
      name: 'Tópicos em Engenharia de Software',
      periodo: '7',
    },
    {
      cod: 'CI091',
      name: 'Tópicos em Avaliação de Desempenho',
      periodo: '7',
    },
    {
      cod: 'CI092',
      name: 'Tópicos em Tecnologias e Aplicações',
      periodo: '7',
    },
    {
      cod: 'CI093',
      name: 'Tópicos em Análise Numérica',
      periodo: '7',
    },
    {
      cod: 'CI094',
      name: 'Tópicos em Processamento de Imagens',
      periodo: '7',
    },
    { cod: 'CI095', name: 'Tópicos em Compiladores', periodo: '7' },
    {
      cod: 'CI097',
      name: 'Tópicos em Sistemas Digitais',
      periodo: '7',
    },
    {
      cod: 'CI167',
      name: 'Sistemas de Informação em Saúde',
      periodo: '7',
    },
    {
      cod: 'CI168',
      name: 'Tópicos em Sistemas de Informação em Saúde',
      periodo: '7',
    },
    { cod: 'CI169', name: 'Bioinformática', periodo: '7' },
    { cod: 'CI170', name: 'Tópicos em Bioinformática', periodo: '7' },
    { cod: 'CI171', name: 'Aprendizado de Máquina', periodo: '7' },
    {
      cod: 'CI172',
      name: 'Processamento de Imagens Biomédicas',
      periodo: '7',
    },
    { cod: 'CI173', name: 'Computação Gráfica', periodo: '7' },
    {
      cod: 'CI174',
      name: 'Tópicos em Engenharia da Computação',
      periodo: '7',
    },
    {
      cod: 'CI204',
      name: 'Administração de Informática',
      periodo: '7',
    },
    {
      cod: 'CI205',
      name: 'Administração de Produção para Informática',
      periodo: '7',
    },
    {
      cod: 'CI214',
      name: 'Estrutura de Linguagens de Programação',
      periodo: '7',
    },
    {
      cod: 'CI301',
      name: 'Tópicos em Ciência da Computação I',
      periodo: '7',
    },
    {
      cod: 'CI302',
      name: 'Tópicos em Ciência da Computação II',
      periodo: '7',
    },
    {
      cod: 'CI303',
      name: 'Tópicos em Ciência da Computação III',
      periodo: '7',
    },
    {
      cod: 'CI304',
      name: 'Tópicos em Ciência da Computação IV',
      periodo: '7',
    },
    {
      cod: 'CI305',
      name: 'Tópicos em Ciência da Computação V',
      periodo: '7',
    },
    {
      cod: 'CI306',
      name: 'Tópicos em Ciência da Computação VI',
      periodo: '7',
    },
    {
      cod: 'CI309',
      name: 'Tópicos em Inteligência Artificial',
      periodo: '7',
    },
    {
      cod: 'CI310',
      name: 'Tópicos em Aprendizado de Máquina',
      periodo: '7',
    },
    {
      cod: 'CI311',
      name: 'Fundamentos Lógicos da Inteligência Artificial',
      periodo: '7',
    },
    {
      cod: 'CI312',
      name: 'Arquiteturas Avançadas de Computadores',
      periodo: '7',
    },
    {
      cod: 'CI313',
      name: 'Arquitetura de Computadores Paralelos',
      periodo: '7',
    },
    {
      cod: 'CI314',
      name: 'Introdução à Computação Paralela',
      periodo: '7',
    },
    {
      cod: 'CI315',
      name: 'Projeto de Sistemas Operacionais',
      periodo: '7',
    },
    { cod: 'CI316', name: 'Programação Paralela', periodo: '7' },
    {
      cod: 'CI317',
      name: 'Tópicos em Sistemas Operacionais',
      periodo: '7',
    },
    {
      cod: 'CI318',
      name: 'Tópicos em Computação Paralela',
      periodo: '7',
    },
    {
      cod: 'CI320',
      name: 'Tópicos em Programação de Computadores',
      periodo: '7',
    },
    {
      cod: 'CI321',
      name: 'Tópicos em Sistemas Embutidos',
      periodo: '7',
    },
    {
      cod: 'CI337',
      name: 'Tópicos em Matemática Discreta',
      periodo: '7',
    },
    {
      cod: 'CI338',
      name: 'Tópicos em Geometria Computacional',
      periodo: '7',
    },
    {
      cod: 'CI339',
      name: 'Complexidade Computacional',
      periodo: '7',
    },
    {
      cod: 'CI340',
      name: 'Tópicos em Métodos Formais',
      periodo: '7',
    },
    {
      cod: 'CI350',
      name: 'Interação Humano-Computador',
      periodo: '7',
    },
    {
      cod: 'CI351',
      name: 'Tópicos em Interação Humano-Computador',
      periodo: '7',
    },
    { cod: 'CI355', name: 'Tópicos em Algoritmos', periodo: '7' },
    {
      cod: 'CI358',
      name: 'Administração e Gerência de Redes de Computadores',
      periodo: '7',
    },
    {
      cod: 'CI359',
      name: 'Laboratório de Redes de Computadores',
      periodo: '7',
    },
    { cod: 'CI360', name: 'Redes Móveis', periodo: '7' },
    { cod: 'CI361', name: 'Sistemas Distribuídos', periodo: '7' },
    {
      cod: 'CI362',
      name: 'Sistemas Operacionais Distribuídos',
      periodo: '7',
    },
    {
      cod: 'CI363',
      name: 'Tópicos de Multimídia em Redes de Computadores',
      periodo: '7',
    },
    {
      cod: 'CI364',
      name: 'Tópicos em Computação em Rede',
      periodo: '7',
    },
    {
      cod: 'CI365',
      name: 'Tópicos em Redes de Computadores',
      periodo: '7',
    },
    { cod: 'CI366', name: 'Tópicos em Redes Móveis', periodo: '7' },
    {
      cod: 'CI367',
      name: 'Tópicos em Simulação de Sistemas Computacionais',
      periodo: '7',
    },
    { cod: 'CI394', name: 'Processamento de Imagens', periodo: '7' },
    {
      cod: 'CI395',
      name: 'Oficina de Visão Computacional e Processamento de Imagens',
      periodo: '7',
    },
    {
      cod: 'CI396',
      name: 'Tópicos em Visão Computacional',
      periodo: '7',
    },
    {
      cod: 'ET082',
      name: 'Comunicação em Língua Brasileira de Sinais',
      periodo: '7',
    },
    { cod: 'CE211', name: 'Processos Estocásticos', periodo: '7' },
    { cod: 'CM043', name: 'Cálculo III', periodo: '7' },
    { cod: 'HL077', name: 'Linguística e Comunicação', periodo: '7' },
    { cod: 'SA017', name: 'Administração III', periodo: '7' },
    { cod: 'SC003', name: 'Contabilidade Geral I', periodo: '7' },
    {
      cod: 'SC202',
      name: 'Contabilidade de Custos para Informática',
      periodo: '7',
    },
    {
      cod: 'SC203',
      name: 'Matemática Financeira para Informática',
      periodo: '7',
    },
  ],
  tg: [
    {
      cod: 'CI070',
      name: 'Trabalho de Graduação em Engenharia de Software I',
      periodo: '7',
    },
    {
      cod: 'CI071',
      name: 'Trabalho de Graduação em Engenharia de Software II',
      periodo: '8',
    },
    {
      cod: 'CI072',
      name: 'Trabalho de Graduação em Bancos de Dados I',
      periodo: '7',
    },
    {
      cod: 'CI073',
      name: 'Trabalho de Graduação em Bancos de Dados II',
      periodo: '8',
    },
    {
      cod: 'CI074',
      name: 'Trabalho de Graduação em Redes de Computadores I',
      periodo: '7',
    },
    {
      cod: 'CI075',
      name: 'Trabalho de Graduação em Redes de Computadores II',
      periodo: '8',
    },
    {
      cod: 'CI076',
      name: 'Trabalho de Graduação em Administração de Informática I',
      periodo: '7',
    },
    {
      cod: 'CI077',
      name: 'Trabalho de Graduação em Administração de Informática II',
      periodo: '8',
    },
    {
      cod: 'CI078',
      name: 'Trabalho de Graduação em Computação Gráfica I',
      periodo: '7',
    },
    {
      cod: 'CI079',
      name: 'Trabalho de Graduação em Computação Gráfica II',
      periodo: '8',
    },
    {
      cod: 'CI080',
      name: 'Trabalho de Graduação em Inteligência Artificial I',
      periodo: '7',
    },
    {
      cod: 'CI081',
      name: 'Trabalho de Graduação em Inteligência Artificial II',
      periodo: '8',
    },
    {
      cod: 'CI082',
      name: 'Trabalho de Graduação em Organização e Arquitetura de Computadores I',
      periodo: '7',
    },
    {
      cod: 'CI083',
      name: 'Trabalho de Graduação em Organização e Arquitetura de Computadores II',
      periodo: '8',
    },
    {
      cod: 'CI098',
      name: 'Trabalho de Graduação em Informática na Educação I',
      periodo: '7',
    },
    {
      cod: 'CI099',
      name: 'Trabalho de Graduação em Informática na Educação II',
      periodo: '8',
    },
    {
      cod: 'CI250',
      name: 'Trabalho de Graduação em Algoritmos e Grafos I',
      periodo: '7',
    },
    {
      cod: 'CI251',
      name: 'Trabalho de Graduação em Algoritmos e Grafos II',
      periodo: '8',
    },
    {
      cod: 'CI252',
      name: 'Trabalho de Graduação em Teoria da Computação I',
      periodo: '7',
    },
    {
      cod: 'CI253',
      name: 'Trabalho de Graduação em Teoria da Computação II',
      periodo: '8',
    },
    {
      cod: 'CI254',
      name: 'Trabalho de Graduação em Sistemas Digitais I',
      periodo: '7',
    },
    {
      cod: 'CI255',
      name: 'Trabalho de Graduação em Sistemas Digitais II',
      periodo: '8',
    },
    {
      cod: 'CI256',
      name: 'Trabalho de Graduação em Sistemas Operacionais I',
      periodo: '7',
    },
    {
      cod: 'CI257',
      name: 'Trabalho de Graduação em Sistemas Operacionais II',
      periodo: '8',
    },
    {
      cod: 'CI258',
      name: 'Trabalho de Graduação em Interação Humano-Computador I',
      periodo: '7',
    },
    {
      cod: 'CI259',
      name: 'Trabalho de Graduação em Interação Humano-Computador II',
      periodo: '8',
    },
    {
      cod: 'CI260',
      name: 'Trabalho de Graduação em Processamento de Imagens I',
      periodo: '7',
    },
    {
      cod: 'CI261',
      name: 'Trabalho de Graduação em Processamento de Imagens II',
      periodo: '8',
    },
  ],
}

export const disciplinas2011Periodo: { [key: string]: Disciplina[] } =
  disciplinas2011.obrigatorias.reduce(
    (acc, disciplina) => {
      if (!acc[disciplina.periodo]) {
        acc[disciplina.periodo] = []
      }
      acc[disciplina.periodo].push(disciplina)
      return acc
    },
    {} as { [key: string]: Disciplina[] }
  )

const disciplinasTableFormat: string[][] = [
  [
    'CI068',
    'CI210',
    'CI212',
    'CI215',
    'CI162',
    'CI163',
    'CI221',
    'OPT',
  ],
  [
    'CI055',
    'CI056',
    'CI057',
    'CI062',
    'CI065',
    'CI165',
    'CI211',
    'OPT',
  ],
  [
    'CM046',
    'CI067',
    'CI064',
    'CE003',
    'CI059',
    'CI209',
    'OPT',
    'OPT',
  ],
  [
    'CM045',
    'CM005',
    'CI237',
    'CI058',
    'CI061',
    'CI218',
    'OPT',
    'OPT',
  ],
  [
    'CM201',
    'CM202',
    'CI166',
    'CI164',
    'SA214',
    'CI220',
    'TG I',
    'TG II',
  ],
]

export const disciplinaTable = disciplinasTableFormat.map((row) => {
  return row.map((cod, j) => {
    if (cod === 'OPT')
      return {
        cod: 'OPT',
        name: 'Optativa',
        periodo: `${j + 1}`,
      }

    if (cod === 'TG I')
      return {
        cod: 'TG I',
        name: 'Trabalho de Graduação I',
        periodo: `${j + 1}`,
      }

    if (cod === 'TG II')
      return {
        cod: 'TG II',
        name: 'Trabalho de Graduação II',
        periodo: `${j + 1}`,
      }

    return disciplinas2011.obrigatorias.find((d) => d.cod === cod)
  })
})
