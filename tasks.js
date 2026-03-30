const LEVELS_RABBIT = [

  // === 1 (база: шаг + взять) ===
  {
    size: 5,
    grid: [
      "WCCCR",
      ".CW..",
      "WC..W",
      ".C...",
      ".EW.."


    ],
    goal: "Собери все и дойди до портала.",
    maxBlocks: 8,
    needCarrots: true,
    requireTwoLoops: false,
    hint: ""
  },

  // === 2 ===
  {
    size: 5,
    grid: [
      "RC...",
      ".CC..",
      "..CC.",
      "...C.",
      "...E."
    ],
    goal: "Собери все и дойди до портала.",
    maxBlocks: 16,
    needCarrots: true,
    requireTwoLoops: false,
    hint: ""
  },

  // === 3 (стены) ===
  {
    size: 5,
    grid: [
      "WWWWW",
      "R...C",
      "WW.W.",
      "WW.W.",
      "E...C"
    ],
    goal: "Собери все и дойди до портала.",
    maxBlocks: 8,
    needCarrots: true,
    requireTwoLoops: false,
    hint: "Не упирайся в стены!"
  },

  // === 4 (цикл нужен) ===
  {
    size: 5,
    grid: [
      "R.E.W",
      ".W.W.",
      ".....",
      ".W...",
      "C.CW."
    ],
    goal: "Собери все и дойди до портала.",
    maxBlocks: 16,
    needCarrots: true,
    requireTwoLoops: false,
    hint: "Повтори: шаг → взять."
  },

  // === 5 (цикл обязателен) ===
  {
    size: 5,
    grid: [
      "W.C.C",
      ".W..C",
      "..CWC",
      "...WC",
      "..RWE"
    ],
    goal: "Собери все и дойди до портала.",
    maxBlocks: 16,
    needCarrots: true,
    requireTwoLoops: false,
    hint: "Цикл сильно сокращает код."
  },

  // === 6 (2 цикла) ===
  {
    size: 5,
    grid: [
      "WCCCC",
      ".RWWC",
      ".W..C",
      ".ECCC",
      "W.W.W"
    ],
    goal: "Собери все и дойди до портала.",
    maxBlocks: 16,
    needCarrots: true,
    requireTwoLoops: true,
    hint: "Раздели движение и действия."
  },

  // === 7 (шахматка) ===
  {
    size: 5,
    grid: [
      "CCC.W",
      "EWCWW",
      "W.CCC",
      ".W.WC",
      "W.WWR"
    ],
    goal: "Собери все и дойди до портала.",
    maxBlocks: 16,
    needCarrots: true,
    requireTwoLoops: true,
    hint: "Есть повторяющийся паттерн."
  },

  // === 8 (вертикаль) ===
  {
    size: 5,
    grid: [
      "WCCCW",
      ".C.CW",
      "WCWCW",
      ".C.CW",
      ".R.CE"
    ],
    goal: "Собери все и дойди до портала.",
    maxBlocks: 16,
    needCarrots: true,
    requireTwoLoops: true,
    hint: "Один и тот же шаг вниз."
  },

  // === 9 (лабиринт + цикл) ===
  {
    size: 5,
    grid: [
      "R.C.W",
      ".W.C.",
      ".C.W.",
      ".W.C.",
      "....E"
    ],
    goal: "Собери все и дойди до портала.",
    maxBlocks: 16,
    needCarrots: true,
    requireTwoLoops: true,
    hint: "Ищи повторения."
  },

  // === 10 (финал) ===
  {
    size: 5,
    grid: [
      "R.C..",
      ".W.W.",
      "CWCW.",
      ".W.W.",
      "C..WE"
    ],
    goal: "Собери все и дойди до портала.",
    maxBlocks: 16,
    needCarrots: true,
    requireTwoLoops: true,
    hint: "Комбинируй циклы."
  }
];