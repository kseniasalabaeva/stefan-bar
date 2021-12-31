export enum CocktailType {
  Long,
  Short
}

export interface Price {
  rub: string;
  eth: string;
}

export interface Cocktail {
  name: string;
  description: Array<string>;
  type: CocktailType;
  img: string;
  adminText?: Array<string>;
  price?: Price;
}

export const Cocktails: Array<Cocktail> = [
  {
    name: 'Б-52',
    description: [
      'Кофейный ликер (15 мл)',
      'Айриш крим (15 мл)',
      'Трипл-сек (15 мл)'
    ],
    type: CocktailType.Short,
    img: 'b52.png',
    price: {
      rub: '350',
      eth: '0.0012'
    }
  },
  {
    name: 'Патриот',
    description: [
      'Водка (15 мл)',
      'Блю кюрасао (15 мл)',
      'Гренадин (15 мл)'
    ],
    type: CocktailType.Short,
    img: 'flag.png',
    price: {
      rub: '250',
      eth: '0.0009'
    }
  },
  {
    name: 'Боярский',
    description: [
      'Водка (25 мл)',
      'Гренадин (15 мл)',
      'Соус тобаско (4-5 капель)'
    ],
    type: CocktailType.Short,
    img: 'boyar.png',
    price: {
      rub: '250',
      eth: '0.0009'
    }
  },
  {
    name: 'Мексиканский Космонавт',
    description: [
      'Серебряная текила (30 мл)',
      'Лимонный сок (10 мл)',
      'Мятный ликер (20 мл)'
    ],
    type: CocktailType.Short,
    img: 'mexican.png',
    price: {
      rub: '300',
      eth: '0.0011'
    }
  },
  {
    name: 'Коктейль 001',
    description: [
      'Джин (40 мл)',
      'Спрайт (100 мл)',
      'Смородиновый сироп (20 мл)',
      'Лимонный сок (10 мл)'
    ],
    type: CocktailType.Long,
    img: '001.png',
    adminText: [
      'Все налить в бокал, перемешать по вкусу',
      'Добавить вишенку'
    ],
    price: {
      rub: '350',
      eth: '0.0012'
    }
  },
  {
    name: 'Голубая Канарейка',
    description: [
      'Джин (15 мл)',
      'Блю кюрасао (15-20 мл)',
      'Грейпфрутовый сок (120 мл)'
    ],
    type: CocktailType.Long,
    img: 'blue-kanareyka.png',
    adminText: [
      'Все налить в бокал, перемешать по вкусу'
    ],
    price: {
      rub: '350',
      eth: '0.0012'
    }
  },
  {
    name: 'Джин-тоник',
    description: [
      'Джин (80 мл)',
      'Спрайт (160 мл)',
      'Лаймовый сироп (5 мл)',
      'Долька лимона'
    ],
    type: CocktailType.Long,
    img: 'tonic.png',
    adminText: [
      'Налить джин, тоник',
      'Опустить ломтик лимона',
      'Долить сверху лаймовый сироп',
      'Украсить вишенкой'
    ],
    price: {
      rub: '350',
      eth: '0.0012'
    }
  },
  {
    name: 'Розовый Носорог',
    description: [
      'Джин (50 мл)',
      'Гренадин (10 мл)',
      'Лаймовый сироп (10 мл)',
      'Лимонный сок (3-5 мл)',
      'Спрайт (100 мл)',
      'Грейпфрутовый сок (50 мл)'
    ],
    type: CocktailType.Long,
    img: 'pink-nosorog.png',
    adminText: [
      'Сделать соленую окаемку',
      'Добавить лед',
      'Налить Лаймовый сироп, Гренадин, Джин, Грейпфрутовый сок и Спрайт, перемешать',
      'Добавить вишенку'
    ],
    price: {
      rub: '500',
      eth: '0.0018'
    }
  },
  {
    name: 'Голубая Лагуна',
    description: [
      'Водка (40 мл)',
      'Блю кюрасао (20 мл)',
      'Лаймовый сироп (5 мл)',
      'Лимонный сок (10 мл)',
      'Спрайт (150 мл)'
    ],
    type: CocktailType.Long,
    img: 'blue-lagoon.png',
    adminText: [
      'Налить водку, сиропы, лимонный сок, Спрайт',
      'Размешать',
      'Добавить вишенку и украсить долькой лимона'
    ],
    price: {
      rub: '400',
      eth: '0.0014'
    }
  },
  {
    name: 'Свенгали',
    description: [
      'Текила (25 мл)',
      'Виски (25 мл)',
      'Кола (270 мл)'
    ],
    type: CocktailType.Long,
    img: 'svengali.png',
    adminText: [
      'Налить алкоголь',
      'Добавить колу (до конца бокала), перемешать',
      'Украсить долькой лимона'
    ],
    price: {
      rub: '450',
      eth: '0.0016'
    }
  },
  {
    name: 'Горный Рассвет',
    description: [
      'Текила (45 мл)',
      'Сок лайма (10 мл)',
      'Лаймовый сироп (5 мл)',
      'Mountain Dew (90 мл)',
      'Гренадин (1 ч.л.)'
    ],
    type: CocktailType.Long,
    img: 'gorniy.png',
    adminText: [
      'Добавить все кроме Гренадина, перемешать',
      'Красиво вылить слой Гренадина, не перемешивать'
    ],
    price: {
      rub: '450',
      eth: '0.0016'
    }
  },
  {
    name: 'Мечта Акапулько',
    description: [
      'Текила (30 мл)',
      'Темный Ром (10 мл)',
      'Ананасовый сок (125 мл)',
      'Ананасовый сироп (25 мл)',
      'Грейпфрутовый сок (40 мл)'
    ],
    type: CocktailType.Long,
    img: 'acapulko-dream.png',
    adminText: [
      'Все ингредиенты перемешать',
      'Добавить вишенку и ананас'
    ],
    price: {
      rub: '400',
      eth: '0.0014'
    }
  },
  {
    name: 'Волна',
    description: [
      'Текила (30 мл)',
      'Триппл Сек (15 мл)',
      'Блю Кюрасао (10 мл)',
      'Лаймовый сироп (45 мл)',
      'Лимон'
    ],
    type: CocktailType.Long,
    img: 'volna.png',
    adminText: [
      'Хорошо перемешать',
      'Выжать лимон из дольки, положить в коклейль',
      'Добавить вишенку'
    ],
    price: {
      rub: '450',
      eth: '0.0016'
    }
  },
  {
    name: 'Теплая Волна',
    description: [
      'Темный Ром (30 мл)',
      'Ананасовый сок (150 мл)',
      'Гренадин (5 мл)',
      'Ананасовый сироп (5 мл)'
    ],
    type: CocktailType.Long,
    img: 'warm-volna.png',
    adminText: [
      'Все перемешать',
      'Добавить вишенку'
    ],
    price: {
      rub: '350',
      eth: '0.0012'
    }
  },
  {
    name: 'Куба Либре',
    description: [
      'Темный Ром (50 мл)',
      'Лаймовый сироп (25 мл)',
      'Лимонный сок (10 мл)',
      'Кола (160 мл)'
    ],
    type: CocktailType.Long,
    img: 'cuba.png',
    adminText: [
      'Все смешать, долить колу до конца бокала'
    ],
    price: {
      rub: '350',
      eth: '0.0012'
    }
  },
  {
    name: 'Мохито',
    description: [
      'Белый Ром (50 мл)',
      'Спрайт (100 мл)',
      'Мятный сироп (5 мл)',
      'Лаймовый сироп (5 мл)',
      'Мята',
      'Лимонный сок (10 мл)'
    ],
    type: CocktailType.Long,
    img: 'mojito.png',
    adminText: [
      'Размешать мяту и лимонный сок',
      'Добавить алкоголь, сиропы и Спрайт',
      'Украсить вишенкой'
    ],
    price: {
      rub: '450',
      eth: '0.0016'
    }
  },
  {
    name: 'Егермонстр',
    description: [
      'Jägermeister (30 мл)',
      'Гренадин (30 мл)',
      'Апельсиновый сок (150 мл)'
    ],
    type: CocktailType.Long,
    img: 'eger.png',
    adminText: [
      'Все перемешать',
      'Украсить вишенкой'
    ],
    price: {
      rub: '400',
      eth: '0.0014'
    }
  }
]

export const ShortCocktails = Cocktails.filter(item => item.type === CocktailType.Short)
export const LongCocktails = Cocktails.filter(item => item.type === CocktailType.Long)
