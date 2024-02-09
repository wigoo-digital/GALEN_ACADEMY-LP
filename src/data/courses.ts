export const courses = [
  {
    id: 1,
    title: "Capacitação em Leitura Cientiífica",
    slug: "capacitacao-em-leitura-cientifica",
    rating: 4.5,
    qtdRating: "1.400",
    pricePIX: 902.5,
    price: 950,
    discount: 5,
    category: "Pesquisa Clínica",
    type: "Curso de curta duração",
    partners: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    whoIsItFor:
      "Médicos clínicos, emergencistas, cardiologistas, intensivistas, geriatras, médicos de família, neurologistas, residentes, estudantes de medicina",
    modality:
      "Em nossa modalidade de ensino, oferecemos aulas gravadas que podem ser acessadas em nossa plataforma on-demand, proporcionando flexibilidade para que você assista quando e onde quiser.",
    coordinator: ["Dr. José Carlos", "Dr. João Carlos", "Carolina Carvalho"],
    duration: "15 horas",
    aboutCourse:
      "A estatística desempenha um papel fundamental na coleta, apresentação, análise e interpretação de dados em diversas áreas do conhecimento. Quando aplicada ao campo biológico, ela se transforma em bioestatística...",

    benefits: [
      {
        title: "Acesso ilimitado",
        description: "Você terá acesso ilimitado ao curso por 180 dias.",
        iconUrl: "https://via.placeholder.com/150",
      },
    ],

    investment:
      "<strong>R$950,00</strong> (em até 10x sem juros no cartão de crédito) ou <strong>R$902,50</strong> (pix à vista – 5% de desconto)",
    accessTime: "180 dias",
    modules: [
      {
        id: 1,
        title: "Introdução à estatística",
        imageURl: "https://via.placeholder.com/150",
        subTitle: "Modulo 01",
        duration: "2 horas",
        subModules: [
          {
            id: 1,
            title: "Abertura do Curso",
            duration: "30 minutos",
          },
          {
            id: 2,
            title: "Introdução à Digitalização da Medicina",
            duration: "2 horas",
          },
        ],
      },
    ],
    ourTeam: [
      {
        name: "Dr. José Carlos",
        type: "Coordenador",
        imageUrl: "https://via.placeholder.com/256x384",
      },
      {
        name: "Dr. João Carlos",
        type: "Coordenador",
        imageUrl: "https://via.placeholder.com/256x384",
      },
      {
        name: "Carolina Carvalho",
        type: "Coordenador",
        imageUrl: "https://via.placeholder.com/256x384",
      },
    ],
    relatedCourses: [
      {
        title: "Capacitação em Leitura Cientiífica",
        category: "Pesquisa Clínica",
        duration: "15 horas",
        modality: "On-demand",
        type: "Curso de curta duração",
        coordinator: [
          "Dr. José Carlos",
          "Dr. João Carlos",
          "Carolina Carvalho",
        ],
        investment: {
          price: 950,
          oldPrice: 1000,
          discount: 5,
        },
      },
    ],
    commonQuetions: [
      {
        question: "Qual a duração do curso?",
        answer: "O curso tem duração de 15 horas.",
      },
    ],
  },
];
