{
    name: "This is fusion!",
    type: "Unique Equipment",
    conditions: { tags: ["Fusion"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/EqIco_1284.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 28, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 38, unit: "%" }] }
    ]
  },

  conditions: {
  or: [
    { type: "selfName", name: "Android #17" },
    { type: "selfTags", tags: ["Android", "Sagas From the Movies"], match: "all" }
  ]
}

{
    name: "This Should Be Fun!", // теги необычные
    type: "Gold Equipment",
    conditions: {
          or: [
            { type: "selfName", name: "Android #17" },
            { type: "selfTags", tags: ["Android", "Sagas From the Movies"], match: "all" }
          ]
        },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1113.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Attack", max: 16.50, unit: "%" },
        { stat: "Base Blast Attack", max: 16.50, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 12.50, unit: "%" }]},
      { name: "Slot 3",stats: [
        {
          stat: "Blast Defense",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Android"
          }
        }]}
    ]
  },

  own: true,


  // --------------------------------

  { stat: "Special Move Damage", max: 10, unit: "%" },
  { stat: "Health Restoration", max: 10, unit: "%" } 

  // --------------------------------
        { 
          stat: "Blast Attack", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "teamTags", 
            tag: "Sagas From the Movies", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }

  // --------------------------------

        { 
          stat: "Strike Defense", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Hybrid Saiyan", 
          }
        }
 // --------------------------------

        {
         stat: "Blast Defense",
         max: 20,
         unit: "%",
         condition: {
           type: "selfTag",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Saiyan", "Potara"],  // список тегов
           match: "all",                // можно "all" или "any"
         }     
        }
 // --------------------------------

        {
          stat: "Strike Defense",
          max: 12.00,
          unit: "%",
          condition: {
            type: "allyHasAllTags",
            tags: ["Saiyan", "Sagas From the Movies"]
          }
        }
 // --------------------------------
        {
          stat: "Strike & Blast Defense",
          max: 10,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Son Family"
          }
        }
 // --------------------------------
        options: [
         { stat: "Base Blast Defense", max: 18, unit: "%" },
         { stat: "Base Strike Defense", max: 18, unit: "%" }]
 // --------------------------------
         { name: "slot 3", stats: [
          { stat: "Base Critical", max: 15, unit: "%" } // фиксировано
        ],
                       options: [
          { stat: "Base Strike Defense", max: 18, unit: "%" },
          { stat: "Base Strike Attack", max: 18, unit: "%" }
        ]}

        {
          stat: "Strike & Blast Defense",
          max: 8,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: ["Frieza Force", "Lineage of Evil"]
          }
        }

