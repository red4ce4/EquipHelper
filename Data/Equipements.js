const equipment = [
    // -------------------------------- Platinum
 {
  name: "SPARKING!! - Shallot",
  type: "Platinum Equipment",
  conditions: {
    tags: ["Shallot"],
    match: "all"
  },
  mainImage: "Image/Equip_img/Platinum/EqIco_32007.webp",
  rarity: "Platinum",
  slots:[
    {
      name: "Slot 1",
      stats: [
        { stat: "Base Health", max: 20, unit: "%" },
        { stat: "Base Strike & Blast Attack", max: 50, unit: "%" },
        { stat: "Base Strike & Blast Defense", max: 50, unit: "%" }
      ]
    },
    {
      name: "Slot 2",
      stats: [
        { stat: "Inflicted Damage", max: 60, unit: "%" },
        { stat: "Damage Guard", max: 100, unit: "%" }
      ]
    },
    {
      name: "Slot 3",
      effects: [
        "On Arts use, the following effects occur:",
        "・Damage +10% (5 times)",
        "・Special Move damage +10% (5 times)",
        "The following effects occur on battlefield entry:",
        "・Ki +30",
        "・Enemy Ki -30"
      ]
    },
    {
      name: "Slot 4",
      unlockCondition: { stars: 7 },
      effects: [
        "When on battlefield and enemy activates Rising Rush, ally sub counts -5",
        "When hit by enemy Arts, health +10% (5 times)",
        "Also, if health is 50% or lower, the following effects occur:",
        "・Health +30% (2 times)",
        "・Damage +20% (1 time)"
      ]
    }
  ]
},
        {
  name: "ULTRA!! - Hit",
  type: "Platinum Equipment",
  conditions: {
    tags: ["Hit","DBL55-03U"],
    match: "all"
  },
  mainImage: "Image/Equip_img/Platinum/EqIco_32006.webp",
  rarity: "Platinum",
  slots:[
    {
      name: "Slot 1",
      stats: [
        { stat: "Base Health", max: 30, unit: "%" },
        { stat: "Base Strike & Blast Attack", max: 50, unit: "%" },
        { stat: "Base Strike & Blast Defense", max: 50, unit: "%" }
      ]
    },
    {
      name: "Slot 2",
      stats: [
        { stat: "Inflicted Damage", max: 80, unit: "%" },
        { stat: "Damage Guard", max: 100, unit: "%" }
      ]
    },
    {
      name: "Slot 3",
      effects: [
        "On battlefield entry, Ki +50",
        "The following effects also occur if Unique Gauge is not full:",
        "・Draw Special Arts next (3 times)",
        "・Draw 1 card if hand has 3 or fewer",
        "Destroy 2 enemy cards on cover change"
      ]
    },
    {
      name: "Slot 4",
      unlockCondition: { stars: 7 },
      effects: [
        "When hit by enemy Arts, ally sub counts -1",
        "When ally is defeated, Unique Gauge +50%",
        "The following effects occur when entering Time Skip mode:",
        "・Damage +50% (10 counts)",
        "・Nullify Attribute Downgrades/Abnormal Conditions (10 counts)"
      ]
    }
  ]
},
    {
  name: "ULTRA!! - Super Saiyan Rosé Goku Black",
  type: "Platinum Equipment",
  conditions: {
    tags: ["Goku Black","DBL57-01U"],
    match: "all"
  },
  mainImage: "Image/Equip_img/Platinum/EqIco_32005.webp",
  rarity: "Platinum",
  slots:[
    {
      name: "Slot 1",
      stats: [
        { stat: "Base Health", max: 25, unit: "%" },
        { stat: "Base Strike & Blast Attack", max: 50, unit: "%" },
        { stat: "Base Strike & Blast Defense", max: 50, unit: "%" }
      ]
    },
    {
      name: "Slot 2",
      effects: [
        "Applies the following effects to self when this character enters the battlefield:",
        "・Randomly draws 1 new card when you have 3 or fewer cards.",
        "・+60% to damage inflicted (activates once).",
        "・-10 to Blast Arts cost (activates once)."
      ]
    },
    {
      name: "Slot 3",
      effects: [
        "Once the Unique Gauge is full, randomly draws 2 new cards when you have 3 or fewer cards.",
        "Shortens allies' substitution counts by 10 when enemy activates an Ultimate Arts, Awakened Arts, or Rising Rush while this character is on the battlefield."
      ]
    },
    {
      name: "Slot 4",
      unlockCondition: { stars: 7 },
      effects: [
        "Applies Buff Effect 'Nullifies enemy's special actions that activate when changing cover' to self for 15 timer counts when this character enters the battlefield.",
        "Charges own Unique Gauge by 60% when this character uses an Arts Card (activates once).",
        "The following effects occur if own remaining health is 50% or below after being hit by an enemy's Arts attack (activates once):",
        "・Restores own health by 40%.",
        "・Inflicts all enemies with Attribute Downgrade '+30 to all Arts costs' for 5 timer counts (affected by Attribute Downgrade nullification and cancellation)."
      ]
    }
  ]
},
        {
  name: "ULTRA!! - Super Gogeta",
  type: "Platinum Equipment",
  conditions: {
    tags: ["Gogeta","DBL42-01U"],
    match: "all"
  },
  mainImage: "Image/Equip_img/Platinum/EqIco_32004.webp",
  rarity: "Platinum",
  slots:[
    {
      name: "Slot 1",
      stats: [
        { stat: "Base Health", max: 25, unit: "%" },
        { stat: "Base Strike & Blast Attack", max: 60, unit: "%" },
        { stat: "Base Strike & Blast Defense", max: 60, unit: "%" },
        { stat: "Special Move Damage", max: 25, unit: "%" }
      ]
    },
    {
      name: "Slot 2",
      effects: [
        "The following effects occur when this character enters the battlefield:",
        "・Restores own Ki by 60.",
        "・Inflicts all enemies with Attribute Downgrade '+15 to all Arts costs' for 10 timer counts (affected by Attribute Downgrade nullification and cancellation)."
      ]
    },
    {
      name: "Slot 3",
      effects: [
        "・Nullifies own unfavorable Element factors for 10 timer counts every time this character uses a Special Move Arts Card.",
        "Applies the following effects to self if own remaining health is 50% or below when hit by an enemy's Arts attack while this character is on the battlefield:",
        "・Restores health by 30% (activates three times).",
        "・Nullifies unfavorable Element factors for damage sustained (activates once)."
      ]
    },
    {
      name: "Slot 4",
      unlockCondition: { stars: 7 },
      stats: [
        { stat: "Inflicted Damage", max: 120, unit: "%" }
      ],
      effects: [
        "Applies the following effects to self when this character enters the battlefield:",
        "・Applies Buff Effect 'Nullifies enemy's special actions that activate when changing cover' for 10 timer counts.",
        "・Increases Arts Card Draw Speed by 1 level for 10 timer counts.",
        "・Applies Buff Effect 'Nullifies enemy's Reduce Ki effects' for 10 timer counts."
      ]
    }
  ]
},
    {
  name: "ULTRA!! - Legendary Super Saiyan Broly",
  type: "Platinum Equipment",
  conditions: {
    tags: ["Broly","DBL51-03U"],
    match: "all"
  },
  mainImage: "Image/Equip_img/Platinum/EqIco_32003.webp",
  rarity: "Platinum",
  slots: [
    {
      name: "Slot 1",
      stats: [
        { stat: "Base Health", max: 20, unit: "%" },
        { stat: "Base Strike & Blast Attack", max: 50, unit: "%" },
        { stat: "Base Strike & Blast Defense", max: 50, unit: "%" }
      ]
    },
    {
      name: "Slot 2",
      stats: [
        { stat: "Inflicted Damage", max: 25, unit: "%" } // активируется дважды, пока просто отображаем
      ],
      effects: [
        "The following effects occur once Unique Gauge is full:",
        "・Randomly destroys 1 enemy card.",
        "・Restores own health by 10%.",
        "Charges own Unique Gauge by 50% upon landing Special Arts hit."
      ]
    },
    {
      name: "Slot 3",
      effects: [
        "Applies the following effects to self when changing cover:",
        "・Charges Unique Gauge by 20%.",
        "・Nullifies unfavorable Element factors for 15 timer counts."
      ]
    },
    {
      name: "Slot 4",
      unlockCondition: { stars: 7 },
      stats: [
        { stat: "Inflicted Damage", max: 60, unit: "%" },
        { stat: "Arts Cost", max: -5, unit: "" } // минус к стоимости Arts
      ],
      effects: [
        "Applies the following effects to self once Unique Gauge is full:",
        "・Charges Unique Gauge by 50% (activates once).",
        "・Applies Buff Effect 'Nullifies enemy's Destroy Card effects' for 15 timer counts."
      ]
    }
  ]
},
    {
  name: "ULTRA!! - Super Saiyan God SS Kaioken Goku",
  type: "Platinum Equipment",
  conditions: {
    tags: ["Goku","DBL45-01U"],
    match: "all"
  },
  mainImage: "Image/Equip_img/Platinum/EqIco_32002.webp",
  rarity: "Platinum",
  slots: [
    {
      name: "Slot 1",
      stats: [
        { stat: "Base Health", max: 20, unit: "%" },
        { stat: "Base Strike & Blast Attack", max: 50, unit: "%" },
        { stat: "Base Strike & Blast Defense", max: 50, unit: "%" },
        { stat: "Base Ki Recovery", max: 50, unit: "%" }
      ]
    },
    {
      name: "Slot 2",
      effects: [
        "The following effects occur if own remaining health is 50% or below after being hit by an enemy's Arts attack (activates twice):",
        "・Restores own health by 40%.",
        "・Nullifies own unfavorable Element Factors for 30 timer counts.",
        "・Seals all enemies' Main Abilities for 10 timer counts."
      ]
    },
    {
      name: "Slot 3",
      effects: [
        "Applies the following effects to self when this character enters the battlefield:",
        "・Applies Buff Effect 'Nullifies enemy's special actions that activate when changing cover' for 30 timer counts (activates twice).",
        "・+50% to Unique Gauge charge rate (activates once)."
      ]
    },
    {
      name: "Slot 4",
      unlockCondition: { stars: 7 },
      stats: [
        { stat: "Inflicted Damage", max: 70, unit: "%" }
      ],
      effects: [
        "Applies the following effects to self upon landing a Strike or Blast Arts hit (activates once):",
        "・Randomly draws at most 2 new cards when you have 3 or fewer cards.",
        "・Inflicts all enemies with 2 substitution counts.",
        "・Activation count resets after character switch."
      ]
    }
  ]
},
    {
  name: "ULTRA!! - Omega Shenron",
  type: "Platinum Equipment",
  conditions: {
    tags: ["Omega Shenron","DBL-EVT-38U"],
    match: "all"
  },
  mainImage: "Image/Equip_img/Platinum/EqIco_32001.webp",
  rarity: "Platinum",
  slots: [
    {
      name: "Slot 1",
      stats: [
        { stat: "Base Health", max: 30, unit: "%" },
        { stat: "Inflicted Damage", max: 70, unit: "%" },
        { stat: "Base Strike & Blast Attack", max: 35, unit: "%" },
        { stat: "Base Strike & Blast Defense", max: 35, unit: "%" }
      ],
      effects: [
        "Increases Arts Card Draw Speed by 1 level."
      ]
    },
    {
      name: "Slot 2",
      effects: [
        "Applies the following effects to enemy when changing cover:",
        "・Randomly destroys 2 cards.",
        "・Inflicts Attribute Downgrade \"-2 Arts Card Draw Speed levels\" for 5 timer counts (affected by Attribute Downgrade nullification and cancellation)."
      ]
    },
    {
      name: "Slot 3",
      effects: [
        "Applies the following effects to self when this character enters the battlefield:",
        "・Randomly draws 1 new card when you have 3 or fewer cards.",
        "・Restores Ki by 40."
      ]
    },
    {
      name: "Slot 4",
      unlockCondition: { stars: 7 },
      stats: [
        { stat: "Inflicted Damage", max: 60, unit: "%", condition: { type: "perTagCount", tag: "GT", count: 3 } }
      ],
      effects: [
        "Restores own health by 50% only once when it reaches 0 (activates once).",
        "Cancels enemy's Buff Effects when they activate a Special Move, Ultimate, or Awakened Arts while this character is on the battlefield (activates three times)."
      ]
    }
  ]
},
  {
  name: "ULTRA!! - Super Vegito",
  type: "Platinum Equipment",
  conditions: {
    tags: ["Vegito","DBL49-01U"],
    match: "all"
  },
  mainImage: "Image/Equip_img/Platinum/EqIco_32008.webp",
  rarity: "Platinum",
  slots: [
    {
      name: "Slot 1",
      stats: [
        { stat: "Base Health", max: 30, unit: "%" },
        { stat: "Base Strike & Blast Attack", max: 50, unit: "%" },
        { stat: "Base Strike & Blast Defense", max: 50, unit: "%" }
      ]
    },
    {
      name: "Slot 2",
      stats: [
        { stat: "Inflicted Damage", max: 180, unit: "%" },
        { stat: "Damage Guard", max: 130, unit: "%" }
      ]
    },
    {
      name: "Slot 3",
      effects: [
        "On battlefield entry:",
        "・Draw up to 2 cards if hand has 3 or fewer",
        "・Health +15%",
        "・Ki +70",
        "・Nullify Element Disadvantage (10 counts)"
      ]
    },
    {
      name: "Slot 4",
      unlockCondition: { stars: 7 }, // 👈 появится только если персонаж имеет ≥ 7★
      effects: [
        "On Cover Change:",
        "・Enemy Ki -50",
        "・All enemy sub counts +3",
        "When ally is hit by enemy Arts:",
        "・Nullify Special Cover Changes (10 counts)",
        "・Sub counts -1"
      ]
    }
  ]
},

  // ------------------------------------------------------------------------------------------------ UniqueUp
  
    {
    name: "King Kai's Power",
    type: "Unique Equipment",
    conditions: { tags: ["Support Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique_up/EqIco_1376.webp",  // картинка экипировки
    rarity: "UniqueUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp,
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Ki Recovery", max: 15, unit: "%" },
        { stat: "Base Health", max: 5, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Ki Recovery", max: 15, unit: "%" },
        { stat: "Base Health", max: 5, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Ki Recovery", max: 15, unit: "%" },
        { stat: "Base Health", max: 5, unit: "%" }] }
    ]
  },

  {
    name: "10x Kamehameha!",
    type: "Unique Equipment",
    conditions: { tags: ["Ranged Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique_up/EqIco_1512.webp",  // картинка экипировки
    rarity: "UniqueUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Blast Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Blast Attack", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }] }
    ]
  },
  
    {
    name: "You fool!",
    type: "Unique Equipment",
    conditions: { tags: ["Goku", "DBL15-05S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique_up/EqIco_1291.webp",  // картинка экипировки
    rarity: "UniqueUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Health", max: 10, unit: "%" },
        { stat: "Base Strike Defense", max: 10, unit: "%" },
        { stat: "Base Blast Defense", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 25, unit: "%" },
        { stat: "Base Blast Attack", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [{
      options: [
        {
          stat: "Defense against Lineage of Evil",
          max: 15.00,
          unit: "%",
          excludeFromSum: true
        },
        {
          stat: "Damage to Lineage of Evil",
          max: 15.00,
          unit: "%",
          excludeFromSum: true
        }
      ]
    }] }
    ]
  },

  {
    name: "Family Kamehameha",
    type: "Unique Equipment",
    conditions: { tags: ["Goten", "DBL12-06S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique_up/EqIco_1409.webp",  // картинка экипировки
    rarity: "UniqueUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Special Move Damage", max: 21.50, unit: "%" },
        { stat: "Ultimate Damage", max: 21.50, unit: "%" }] },
      { name: "Slot 2", stats: [
        {
          stat: "Strike & Blast Defense",
          max: 10,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Son Family"
          }
        },
        { 
          stat: "Restores own health (on standby)", 
          max: 5, 
          unit: "%",
         excludeFromSum: true 
        }]},
      { name: "Slot 3", stats: [
        {
         stat: "Damage to Lineage of Evil",
         max: 15,
         unit: "%",
         excludeFromSum: true
        },
        {
         stat: "Defense against Lineage of Evil",
         max: 15,
         unit: "%",
         excludeFromSum: true
        }] }
    ]
  },

  {
    name: "Believe in yourself, Gohan!",
    type: "Unique Equipment",
    conditions: { tags: ["Gohan", "DBL10-06S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1382.webp",  // картинка экипировки
    rarity: "UniqueUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [
        {
          stat: "Strike & Blast Defense",
          max: 12.5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Son Family"
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 25, unit: "%" },
        { stat: "Base Blast Attack", max: 12.5, unit: "%" }] }
    ]
  },

  {
    name: "Truth of the Survival Game",
    type: "Unique Equipment",
    conditions: { tags: ["Beerus", "DBL07-11S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique_up/EqIco_1264.webp",  // картинка экипировки
    rarity: "UniqueUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Attack", max: 40, unit: "%" },
        { stat: "Base Blast Attack", max: 35, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 30, unit: "%" },
        { stat: "Base Blast Defense", max: 30, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Special Move Damage", max: 30, unit: "%" },
        { stat: "Ultimate Damage", max: 40, unit: "%" }] }
    ]
  },

    {
    name: "Frenzied Power",
    type: "Unique Equipment",
    conditions: { tags: ["Sagas From the Movies", "BLU"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique_up/EqIco_1291.webp",  // картинка экипировки
    rarity: "UniqueUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 30, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Health", max: 10, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }] }
    ]
  },

  {
    name: "You don't even like all that fighting, huh?",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Defense Type"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique_up/EqIco_1667.webp",  // картинка экипировки
    rarity: "UniqueUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }] }
    ]
  },

  {
    name: "Historic Showdown",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Gogeta","Broly"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique_up/EqIco_1293.webp",  // картинка экипировки
    rarity: "UniqueUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Health", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { 
          stat: "Blast Attack", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "teamTags", 
            tag: "Sagas From the Movies", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }]},
      { name: "Slot 3", stats: [
        { 
          stat: "Strike Attack", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "teamTags", 
            tag: "Saiyan", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }] }
    ]
  },

  {
    name: "Once again, you have returned.",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Melee Type"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique_up/EqIco_1684.webp",  // картинка экипировки
    rarity: "UniqueUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 15, unit: "%" }] }
    ]
  },

    // ------------------------------------------------------------------------------------------------ Особенные
  {
    name: "SPARKING!! - Goku (Youth)",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Goku","DBL-EVT-01S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30010.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 50, unit: "%" },
        { stat: "Base Blast Defense", max: 50, unit: "%" },
        { stat: "Base Strike Attack", max: 50, unit: "%" },
        { stat: "Base Blast Attack", max: 50, unit: "%" }
  ] },
      { name: "Slot 2", stats: [
        {
          stat: "Strike & Blast Attack",
          max: 15.00,
          unit: "%",
          condition: {
            type: "allyHasAllTags",
            tags: ["DB"]
          }
        },
        {
          stat: "Strike & Blast Defense",
          max: 15.00,
          unit: "%",
          condition: {
            type: "allyHasAllTags",
            tags: ["DB"]
          }
        }
      ]},
      { name: "Slot 3", stats: [   
        { stat: "Inflicted Damage", max: 70, unit: "%" },
        { stat: "Sustained Damage CUT", max: 40, unit: "%" }],
        effects: [
        "-2 to Arts costs.",
        "+80% to Ultimate damage for 3 timer counts upon Ultimate Arts activation."
      ]}
    ]
  },
    {
    name: "SPARKING!! - Super Saiyan Goku",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Goku","DBL01-04S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30009.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 50, unit: "%" },
        { stat: "Base Blast Defense", max: 50, unit: "%" },
        { stat: "Base Strike Attack", max: 50, unit: "%" },
        { stat: "Base Blast Attack", max: 50, unit: "%" }
  ] },
      { name: "Slot 2", stats: [
        { stat: "Inflicted Damage", max: 70, unit: "%" },
        { stat: "Sustained Damage CUT", max: 30, unit: "%" },
        { stat: "Base Ki Recovery", max: 50, unit: "%" },
      ], effects: [
         "Increases Arts Card Draw Speed by 1 level."
      ]},
      { name: "Slot 3", effects: [
        "Applies the following effects to self when this character uses a Main Ability: Restores health by 40%. Restores Ki by 70. Applies the following effects to self when one allied character is defeated: +70% to damage inflicted. Increases Arts Card Draw Speed by 1 level.",
        "Restores Ki by 10 when this character uses a Main Ability."
      ]}
    ]
  },

    {
    name: "SPARKING!! - Final Form Frieza",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Frieza","DBL01-41S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30008.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Health", max: 25, unit: "%" },
        { stat: "Base Strike Defense", max: 50, unit: "%" },
        { stat: "Base Blast Defense", max: 50, unit: "%" },
        { stat: "Base Strike Attack", max: 50, unit: "%" },
        { stat: "Base Blast Attack", max: 50, unit: "%" }
  ] },
      { name: "Slot 2", stats: [
        { stat: "Inflicted Damage", max: 50, unit: "%" },
        { stat: "Base Health", max: 30, unit: "%" },
        {
          stat: "Attack & Blast Defense",
          max: 15,
          unit: "%",
          own: true, 
          condition: {
            type: "allyHasAllTags",
            tags: ["Frieza Saga (Z)","Frieza Force","Powerful Opponent"]
          }
        }
      ]},
      { name: "Slot 3", effects: [
        "+35% to Blast damage inflicted against Saiyan. +30% to Strike damage inflicted after 10 timer counts. Increases Arts Card Draw Speed by 2 levels after 30 timer counts. Restores own health by 50% when this character uses a Main Ability.",
        "+15% to Blast damage inflicted against Saiyan."
      ]}
    ]
  },

    {
    name: "SPARKING!! - Android #16",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Android #16","DBL05-06S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30007.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Defense", max: 50, unit: "%" },
        { stat: "Base Blast Defense", max: 50, unit: "%" },
        { stat: "Base Strike Attack", max: 50, unit: "%" },
        { stat: "Base Blast Attack", max: 50, unit: "%" }
  ] },
      { name: "Slot 2", stats: [
        { stat: "Inflicted Damage", max: 30, unit: "%" },
        { stat: "Base Health", max: 30, unit: "%" },
        {
          stat: "Strike & Blast Attack",
          max: 15,
          unit: "%",
          own: true, 
          condition: {
            type: "allyHasAllTags",
            tags: ["Android"]
          }
        }
      ]},
      { name: "Slot 3", effects: [
        "Applies the following effects to self when changing cover: +20% to damage inflicted (activates twice). Shortens substitution count by 2 (activates twice). The following effects occur upon Awakened Arts activation: Inflicts all enemies with No Switching for 3 timer counts. Nullifies enemy's Restores health when it reaches 0 effects when this character attacks for 3 timer counts.",
        "Applies the following effects to self when changing cover: +10% to damage inflicted (activates once)."
      ]}
    ]
  },

    {
    name: "SPARKING!! - Goku Black",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Goku Black","DBL06-13S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30006.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Defense", max: 50, unit: "%" },
        { stat: "Base Blast Defense", max: 50, unit: "%" },
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Sustained Damage CUT", max: 15, unit: "%" }
  ] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 50, unit: "%" },
        { stat: "Base Blast Attack", max: 50, unit: "%" },
        { stat: "Inflicted Damage", max: 30, unit: "%" },
        { stat: "Base Ki Recovery", max: 50, unit: "%" },
        {
          stat: "10.00% to damage inflicted against Tag: Saiyan or Tag: Hybrid Saiyan",
          excludeFromSum: true
        }
      ]},
      { name: "Slot 3", effects: [
        "Applies the following effects to self when this character uses a Special Arts: Draw a Blast Arts Card next. +60% to damage inflicted (activates once) Increases Arts Card Draw Speed by 1 level (activates once) -23 to Blast Arts cost (activates once)",
        "Applies the following effects to self when this character uses a Special Arts: +20% to damage inflicted (activates once)"
      ]}
    ]
  },

    {
    name: "SPARKING!! - Goku Black",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Goku Black","DBL06-13S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30006.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Defense", max: 50, unit: "%" },
        { stat: "Base Blast Defense", max: 50, unit: "%" },
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Sustained Damage CUT", max: 15, unit: "%" }
  ] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 50, unit: "%" },
        { stat: "Base Blast Attack", max: 50, unit: "%" },
        { stat: "Inflicted Damage", max: 30, unit: "%" },
        { stat: "Base Ki Recovery", max: 50, unit: "%" },
        {
          stat: "10.00% to damage inflicted against Tag: Saiyan or Tag: Hybrid Saiyan",
          excludeFromSum: true
        }
      ]},
      { name: "Slot 3", effects: [
        "Applies the following effects to self when this character uses a Special Arts: Draw a Blast Arts Card next. +60% to damage inflicted (activates once) Increases Arts Card Draw Speed by 1 level (activates once) -23 to Blast Arts cost (activates once)",
        "Applies the following effects to self when this character uses a Special Arts: +20% to damage inflicted (activates once)"
      ]}
    ]
  },

    {
    name: "SPARKING!! - Super Saiyan God Vegeta",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Vegeta","DBL09-09S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30005.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Defense", max: 50, unit: "%" },
        { stat: "Base Blast Defense", max: 50, unit: "%" },
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }
  ] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 50, unit: "%" },
        { stat: "Base Blast Attack", max: 50, unit: "%" },
        { stat: "Inflicted Damage", max: 30, unit: "%" },
      ]},
      { name: "Slot 3", effects: [
        "Applies the following effects to self when this character uses a Main Ability: Increases Arts Card Draw Speed by 1 level. Shortens substitution count by 3. Applies the following effects to self when this character is switched to standby: Restores health by 10%. Restores Ki by 30.",
        "Applies the following effects to self when this character uses a Main Ability: Increases Arts Card Draw Speed by 1 level."
      ]}
    ]
  },
  
  {
    name: "SPARKING!! - Super Saiyan God SS Goku",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Goku","DBL13-01S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30004.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Defense", max: 50, unit: "%" },
        { stat: "Base Blast Defense", max: 50, unit: "%" },
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Health Restoration", max: 15, unit: "%" }
  ] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 50, unit: "%" },
        { stat: "Base Blast Attack", max: 50, unit: "%" },
        { stat: "Inflicted Damage", max: 20, unit: "%" },
        { stat: "Special Move Damage", max: 15, unit: "%" }
      ]},
      { name: "Slot 3", effects: [
        "+20% to damage inflicted once 15 timer counts have elapsed. Increases Arts Card Draw Speed by 1 level for 35 timer counts once 15 timer counts have elapsed. +20% to damage inflicted once 45 timer counts have elapsed. Sustained Damage CUT +15% once 45 timer counts have elapsed.",
        "+10% to damage inflicted once 45 timer counts have elapsed."
      ]}
    ]
  },

  {
    name: "SPARKING!! - Ultimate Gohan",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Gohan","DBL10-02S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30003.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Attack", max: 40, unit: "%" },
        { stat: "Base Blast Attack", max: 40, unit: "%" },
        { stat: "Inflicted Damage", max: 20, unit: "%" }
  ] },
      { name: "Slot 2", stats: [
        { stat: "Base Health", max: 15, unit: "%" },
        {
          stat: "Strike & Blast Defense",
          max: 15,
          unit: "%",
          own: true, 
          condition: {
            type: "allyHasAllTags",
            tags: ["Majin Buu Saga (Z)"]
          }
        }]},
      { name: "Slot 3", effects: [
        "Applies the following effects to self when this character uses a Special Arts: +15% to damage inflicted (activates once). Reduces damage received by 10% (activates once). Randomly draws 1 new card. Restores Vanishing Gauge by 50%.",
        "+5% to damage inflicted when this character uses a Special Arts (activates once)."
      ]}
    ]
  },

  {
    name: "SPARKING!! - Super Saiyan 3 Goku", //3й слот пересмотреть
    type: "Unique Equipment",
    conditions: { 
     tags: ["Goku","DBL06-11S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30002.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Strike Attack", max: 50, unit: "%" },
        { stat: "Base Blast Attack", max: 50, unit: "%" },
        { stat: "Base Strike Defense", max: 50, unit: "%" },
        { stat: "Base Blast Defense", max: 50, unit: "%" },
  ] },
      { name: "Slot 2", stats: [
        { stat: "Blast Damage inflicted", max: 30, unit: "%" },
        {
          stat: "Strike & Blast Defense",
          max: 15,
          unit: "%",
          own: true, 
          condition: {
            type: "allyHasAllTags",
            tags: ["Majin Buu Saga (Z)"]
          }
        }]},
      { name: "Slot 3", effects: [
        "Applies the following effects once 40 timer counts have elapsed from battle start: Restores own health by 20%. +20% to Special Move damage. +20% to Ultimate damage. Increases Arts Card Draw Speed by 1 level.",
        "Once 40 timer counts have elapsed from battle start, +10% to Ultimate damage."
      ]}
    ]
  },

  {
    name: "SPARKING!! - Majin Buu: Good",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Majin Buu","DBL06-06S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_30001.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Attack", max: 50, unit: "%" },
        { stat: "Base Blast Attack", max: 50, unit: "%" },
        { stat: "Base Strike Defense", max: 50, unit: "%" },
        { stat: "Base Blast Defense", max: 50, unit: "%" },
  ] },
      { name: "Slot 2", stats: [
        { stat: "Inflicted Damage", max: 30, unit: "%" },
        {
          stat: "Strike & Blast Defense",
          max: 15,
          unit: "%",
          own: true, 
          condition: {
            type: "allyHasAllTags",
            tags: ["Majin Buu Saga (Z)"]
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Base Health", max: 15, unit: "%" }],
        effects: [
        "25.00% to damage inflicted after enemy attack is over (activates 2 times)."
      ]}
    ]
  },



  // ------------------------------------------------------------------------------------------------ Unique
{
    name: "Vegeta Takes Nappa's Hand",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Saiyan Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1888.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Health", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [         
         { stat: "Base Strike Defense", max: 35, unit: "%" },
         { stat: "Base Blast Defense", max: 35, unit: "%" }]},
      { name: "Slot 3", options: [
        {
          stat: "Inflicted Damage",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Saiyan Saga (Z)"
          }
        },
         {
          stat: "Strike & Blast Defense",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Saiyan Saga (Z)"
          }
        }]

       }
    ]
  },
{
    name: "Victorious Fist", // особенная эквипка 2 й слот
    type: "Unique Equipment",
    conditions: { 
     tags: ["Regeneration","BLU"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1854.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
         { stat: "Base Strike Attack", max: 35, unit: "%" },
         { stat: "Base Blast Attack", max: 35, unit: "%" },
         { stat: "Base Strike Defense", max: 35, unit: "%" },
         { stat: "Base Blast Defense", max: 35, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Health Restoration", max: 15, unit: "%" },
        {
         stat: "Strike & Blast Defense",
         max: 10,
         unit: "%",
         own: true,
         condition: {
           type: "teamTags",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Sagas From the Movies", "Son Family"],  // список тегов
           match: "any",                // можно "all" или "any"
         }     
        }
      ]},
      { name: "Slot 3", stats: [
        { stat: "Inflicted Damage", max: 30, unit: "%" }],
        effects: [
        "-10 to Blast Arts cost.",
        "・Enemy Ki -50",
        "+50% to own Unique Gauge charge rate.",
        "+30% to Special Move damage once Unique Gauge is full."
      ] }
    ]
  },

{
    name: "Merciless Pursuit", // особенная эквипка 2 и 3 й слот
    type: "Unique Equipment",
    conditions: { 
     tags: ["Regeneration","BLU"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1854.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
         { stat: "Ultimate Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 35, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 35, unit: "%" }] }
    ]
  },

{
    name: "How disappointing... I didn't want to kill him.", // особенная эквипка 2 и 3 й слот
    type: "Unique Equipment",
    conditions: { 
     tags: ["DB"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1832.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
         { stat: "Base Health", max: 15, unit: "%" },
         { stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: ["-"]},
      { name: "Slot 3", stats: ["-"] }
    ]
  },

  {
    name: "You call that a punch?",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1711.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", options: [
         { stat: "Base Blast Defense", max: 20, unit: "%" },
         { stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 20, unit: "%" },
        { 
          stat: "Strike Defense", 
          max: 10, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Sagas From the Movies", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 20, unit: "%" },
        { 
          stat: "Blast Defense", 
          max: 10, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Sagas From the Movies", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }] }
    ]
  },

  {
    name: "You'll have to be stronger than that, Junior!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["DB"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1831.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
                { 
          stat: "Strike Defense", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Saiyan", 
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 15, unit: "%" },
              { 
          stat: "Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Regeneration", 
          }
        }] }
    ]
  },

  {
    name: "Now's my chance!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["DB"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1847.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Blast Attack", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 35, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Health", max: 10, unit: "%" }] }
    ]
  },

  {
    name: "Say Hi...to Everyone...",
    type: "Unique Equipment",
    conditions: { 
     tags: ["DB"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1157.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Special Move Damage", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
                {
          stat: "Strike Attack",
          max: 5,
          unit: "%",
          own: true,
          condition: {
          type: "perTagCount",
          tag: "DB"
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Defense", max: 15, unit: "%" },
        {
          stat: "Blast Attack",
          max: 5,
          unit: "%",
          own: true,
          condition: {
          type: "perTagCount",
          tag: "DB"
          }
        }] }
    ]
  },

  {
    name: "You wanted me at my strongest...so here I am...",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Frieza Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1841.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Special Move Damage", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { 
          stat: "Strike Attack", 
          max: 15, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Frieza Saga (Z)", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Defense", max: 15, unit: "%" },
        { 
          stat: "Blast Attack", 
          max: 15, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Frieza Saga (Z)", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }] }
    ]
  },

{
    name: "I'll take Vegeta myself...",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Ginyu Force"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1836.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 15, unit: "%" },
        { 
          stat: "Blast Attack", 
          max: 15, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Ginyu Force", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 15, unit: "%" },
        { 
          stat: "Strike Attack", 
          max: 15, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Ginyu Force", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }] }
    ]
  },

    {
    name: "Cell in his Perfect Form.",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1263.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Special Move Damage", max: 10, unit: "%" },
      { stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Blast Attack", max: 12, unit: "%" },
        { 
          stat: "Blast Attack", 
          max: 12, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Android", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 12, unit: "%" },
        { 
          stat: "Strike Attack", 
          max: 12, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Android", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }] }
    ]
  },

  {
    name: "It's Over For All of You!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Cell Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1352.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Blast Attack", max: 15, unit: "%" },
              { 
          stat: "Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Android", 
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 15, unit: "%" },
        {
          stat: "Strike Attack",
          max: 10.00,
          unit: "%",
          condition: {
            type: "allyHasAllTags",
            tags: ["Cell Saga (Z)"]
          }
        }] }
    ]
  },

      {
    name: "Your divine power's not looking so wondrous now!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Fusion Warrior","RED"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1817.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Defense", max: 12.50, unit: "%" },
        { stat: "Base Blast Defense", max: 12.50, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 30, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Health", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }] }
    ]
  },

  {
    name: "Raging Hope for the Future",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Future Trunks Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1529.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Defense", max: 10, unit: "%" },
        { stat: "Base Blast Defense", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { 
          stat: "Strike Defense", 
          max: 10, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Future Trunks Saga (S)", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 15, unit: "%" },
        { 
            stat: "Strike Attack", 
            max: 10, 
            unit: "%",
            own: true, 
            condition: { 
              type: "teamTags", 
              tag: "Melee Type", 
              count: 2 // нужно 3 персонажа с этим тегом
            }
        }]}
    ]
  },

  {
    name: "Yearning for Strength",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Universe Rep"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1794.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Special Move Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 20, unit: "%" },
        { 
            stat: "Strike Defense", 
            max: 10, 
            unit: "%", 
            condition: { 
              type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
              tag: "Rival Universe", 
            }
          }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 20, unit: "%" },
        { 
            stat: "Strike Attack", 
            max: 10, 
            unit: "%", 
            condition: { 
              type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
              tag: "Son Family", 
            }
          }] }
    ]
  },

    {
    name: "Haahahaha!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Regeneration","YEL"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1784.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 35, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Health", max: 10, unit: "%" }] }
    ]
  },

    {
    name: "Is this what you want? Well, is it?", //31 слот проверить
    type: "Unique Equipment",
    conditions: { tags: ["Majin Buu Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1782.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", options: [
          { stat: "Base Strike Attack", max: 15, unit: "%" },
          { stat: "Base Blast Attack", max: 15, unit: "%" }
        ],
        options: [
          { 
          stat: "Strike Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Regeneration", 
          }
        },
          { 
          stat: "Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan 3", 
          }
        }
        ]
      },
      { name: "Slot 3", stats: [
        { 
          stat: "Strike & Blast Defense", 
          max: 12, 
          own: true, 
          unit: "%", 
          condition: { 
            type: "teamTags", 
            tag: "Majin Buu Saga (Z)", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
      ] }
    ]
  },

  {
    name: "Concentrated Fury",
    type: "Unique Equipment",
    conditions: { tags: ["Future","GRN"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1777.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 30, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 32, unit: "%" }] }
    ]
  },
  {
    name: "Eyes Set on a Fearsome Foe", //проверить 23 слот
    type: "Unique Equipment",
    conditions: { tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1771.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Ultimate Damage", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 12, unit: "%" },
        { 
          stat: "Strike Defense", 
          max: 12, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "God Ki", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
      ]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 12, unit: "%" },
        { 
          stat: "Blast Defense", 
          max: 12, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "God Ki", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
      ] }
    ]
  },

    {
    name: "First you'll have to deal with me!",
    type: "Unique Equipment",
    conditions: { tags: ["Future"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1531.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", options: [
         { stat: "Base Blast Defense", max: 20, unit: "%" },
         { stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 15, unit: "%" },
        {
         stat: "Strike Attack",
         max: 10,
         unit: "%",
         condition: {
           type: "selfTag",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Future", "Vegeta Clan"],  // список тегов
           match: "all",                // можно "all" или "any"
         }     
        }
      ]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 15, unit: "%" },
        {
         stat: "Blast Attack",
         max: 10,
         unit: "%",
         condition: {
           type: "selfTag",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Future", "Powerful Opponent"],  // список тегов
           match: "all",                // можно "all" или "any"
         }     
        }
      ] }
    ]
  },

  {
    name: "Because I'm not done improving yet.",
    type: "Unique Equipment",
    conditions: { tags: ["Universe Rep","RED"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1748.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 30, unit: "%" }] }
    ]
  },

  {
    name: "You four keep hitting him hard.",
    type: "Unique Equipment",
    conditions: { tags: ["Universe Rep"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1756.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 12, unit: "%" },
        { 
          stat: "Strike Defense", 
          max: 12, 
          unit: "%",
          own: true,  
          condition: { 
            type: "teamTags", 
            tag: "Universe Rep", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
      ]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 12, unit: "%" },
        { 
          stat: "Blast Defense", 
          max: 12, 
          unit: "%", 
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Universe Rep", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
      ] }
    ]
  },

  {
    name: "Historic Showdown",
    type: "Unique Equipment",
    conditions: { tags: ["Sagas From the Movies","Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1293.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Ultimate Damage", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { 
          stat: "Blast Attack", 
          max: 13, 
          unit: "%",
          own: true,  
          condition: { 
            type: "teamTags", 
            tag: "Sagas From the Movies", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
      ]},
      { name: "Slot 3", stats: [
        { 
          stat: "Strike Attack", 
          max: 13, 
          unit: "%", 
          own: true, 
          condition: { 
            type: "teamTags", 
            tag: "Saiyan", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
      ] }
    ]
  },

  {
    name: "Irrepressible Power",
    type: "Unique Equipment",
    conditions: { tags: ["God Ki","PUR"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1759.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Health", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" }
      ] }
    ]
  },

  {
    name: "Two glorious and unparalleled powers",
    type: "Unique Equipment",
    conditions: { tags: ["Zamasu","DBL35-08S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1534.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Attack", max: 35, unit: "%" },
        { stat: "Base Blast Attack", max: 35, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 45, unit: "%" },
        { stat: "Base Blast Defense", max: 45, unit: "%" }]},
      { name: "Slot 3", stats: [
        {
          stat: "Restores own health by 20% if it's 50% or below after enemy attack is over (activates 1 time). Restores own health by 20% if it's 30% or below after enemy attack is over (activates 1 time).",
          excludeFromSum: true
        }
      ] }
    ]
  },

   {
    name: "Heheh!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Shadow Dragon Saga (GT)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1750.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Blast Defense", max: 15, unit: "%" },
         { 
          stat: "Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "teamTags", 
            tag: "GT", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
       ]},
      { name: "Slot 3",stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
         { 
          stat: "Strike Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "teamTags", 
            tag: "GT", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
       ]}
    ]
  },
                               {
    name: "Fighting Against Despair!!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Gohan","DBL31-01S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1761.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Blast Attack", max: 12, unit: "%" },
        { 
            stat: "Blast Attack", 
            max: 12, 
            unit: "%", 
            condition: { 
              type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
              tag: "Regeneration", 
            }
          }]},
      { name: "Slot 3",stats: [
        { stat: "Base Strike Attack", max: 12, unit: "%" },
        { 
            stat: "Strike Attack", 
            max: 12, 
            unit: "%", 
            condition: { 
              type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
              tag: "Hybrid Saiyan", 
            }
          }]}
    ]
  },
                             {
    name: "Fighting Against Despair!!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Gohan","DBL31-01S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1761.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 40, unit: "%" },
        { stat: "Base Blast Defense", max: 40, unit: "%" },
        { stat: "Health Restoration", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Strike Attack", max: 30, unit: "%" },
        { stat: "Base Blast Attack", max: 30, unit: "%" }]},
      { name: "Slot 3",stats: [{ stat: "Inflicted Damage", max: 20, unit: "%" }, // фиксировано
          {
              stat: "The following effects occur after enemy attack is over: +5% to damage inflicted (activates four times). Restores ally health by 5% (activates four times).",
              excludeFromSum: true
          }]}
    ]
  },
                           {
    name: "And what was that supposed to be, Goku?",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Powerful Opponent","PUR"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1725.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        {
          stat: "defense against Saiyan",
          max: 10,
          unit: "%",
          excludeFromSum: true
        }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 35, unit: "%" }]},
      { name: "Slot 3",stats: [{ stat: "Base Health", max: 12.50, unit: "%" }]}
    ]
  },
                         {
    name: "I've heard about enough of your stupid crap!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Bardock","DBL43-01S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1675.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 35, unit: "%" },
        { stat: "Base Blast Defense", max: 35, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Inflicted Damage", max: 40, unit: "%" },
        { stat: "Base Strike Attack", max: 35, unit: "%" },
        { stat: "Base Blast Attack", max: 35, unit: "%" }]},
      { name: "Slot 3",stats: [
          { stat: "Base Health", max: 15, unit: "%" }, // фиксировано
          {
              stat: "Restores own health by 5%, restores own Ki by 30, and randomly draws 1 new card when you have 3 or fewer cards when enemy switches characters while this character is on the battlefield.",
              excludeFromSum: true
          }]}
    ]
  },

                       {
    name: "It doesn't matter how high you climb; I will not lose.",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Jiren","DBL44-01S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1683.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Health Restoration", max: 20, unit: "%" },
        { stat: "Base Strike Defense", max: 35, unit: "%" },
        { stat: "Base Blast Defense", max: 35, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 35, unit: "%" },
        { stat: "Base Blast Defense", max: 35, unit: "%" }]},
      { name: "Slot 3",stats: [
          { stat: "Inflicted Damage", max: 25, unit: "%" }, // фиксировано
          {
              stat: "Restores own health by 30% and +15% to damage inflicted when enemy activates Rising Rush.",
              excludeFromSum: true
          }]}
    ]
  },

                       {
    name: "RRRAAAAAAGH!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Majin Buu","DBL32-02S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1595.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 25, unit: "%" },
        { stat: "Base Blast Defense", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 30, unit: "%" },
        { stat: "Base Blast Attack", max: 30, unit: "%" }]},
      { name: "Slot 3",stats: [
          { stat: "Health Restoration", max: 20, unit: "%" }, // фиксировано
         {
          stat: "Blast Damage inflicted",
          max: 10,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: ["Regeneration", "Powerful Opponent"]
          }
        }]}
    ]
  },
                     {
    name: "A Battle to Shatter Dimensions",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Broly","DBL30-03S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1710.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Health Restoration", max: 20, unit: "%" },
        { stat: "Base Strike Defense", max: 35, unit: "%" },
        { stat: "Base Blast Defense", max: 35, unit: "%" }] },
      { name: "Slot 2", stats: [
        {
          stat: "Strike & Blast Attack",
          max: 10,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: ["Powerful Opponent", "Sagas From the Movies"]
          }
        }]},
      { name: "Slot 3",stats: [
          { stat: "Base Health", max: 15, unit: "%" } // фиксировано
        ],
        options: [
        {
            stat: "+50% to damage inflicted when this character defeats an enemy (cannot be stacked).",
            excludeFromSum: true
        },
        {
          stat: "+10% to damage inflicted when this character defeats an enemy (cannot be stacked).",
          excludeFromSum: true
        }]}
    ]
  },

                   {
    name: "I'll end this now.",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Cell","DBL40-02S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1406.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Critical", max: 25, unit: "%" },
        { stat: "Base Strike Defense", max: 25, unit: "%" },
        { stat: "Base Blast Defense", max: 25, unit: "%" },
        { stat: "Base Ki Recovery", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 25, unit: "%" },
        { stat: "Base Blast Attack", max: 25, unit: "%" },
        { stat: "Inflicted Damage ", max: 20, unit: "%" },
        { stat: "Health Restoration", max: 15, unit: "%" }]},
      { name: "Slot 3",stats: [
          { stat: "Base Health", max: 15, unit: "%" } // фиксировано
        ],
        options: [
        {
            stat: "+35% to own Unique Gauge when battle starts.",
            excludeFromSum: true
        },
        {
          stat: "+5% to own Unique Gauge when battle starts.",
          excludeFromSum: true
        }]}
    ]
  },

                 {
    name: "I'll Be the One Who Kills You!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Frieza","DBL37-02S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1406.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 25, unit: "%" },
        { stat: "Base Blast Defense", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 25, unit: "%" },
        { stat: "Base Blast Attack", max: 25, unit: "%" }]},
      { name: "Slot 3",stats: [
         {
          stat: "-5 to Special Move Arts cost",
          excludeFromSum: true
        },
        {
            stat: "damage to Saiyan",
            max: 15,
            unit: "%",
            excludeFromSum: true
        },
        {
          stat: "defense against Saiyan",
          max: 10,
          unit: "%",
          excludeFromSum: true
        }]}
    ]
  },

                 {
    name: "Dragon Fist!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Goku","DBL34-01S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1621.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 35, unit: "%" },
        { stat: "Base Blast Defense", max: 35, unit: "%" }] },
      { name: "Slot 2", options: [
          {
          stat: "Strike & Blast Attack",
          max: 8,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Son Family"
          }
        },
          {
          stat: "Strike & Blast Attack",
          max: 8,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "GT"
          }
        }
        ]},
      { name: "Slot 3", stats: [
        { stat: "Inflicted Damage", max: 20, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }]}
    ]
  },

               {
    name: "I have the power to destroy you now!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Gogeta","DBL35-01S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1624.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 35, unit: "%" },
        { stat: "Base Blast Defense", max: 35, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Inflicted Damage", max: 35, unit: "%" },
        { stat: "Base Strike Attack", max: 35, unit: "%" },
        { stat: "Base Blast Attack", max: 35, unit: "%" }]},
      { name: "Slot 3",stats: [
         {
          stat: "Revive Disruption: Increases Dragon Balls by 2 and +50% to damage inflicted (cannot be stacked).",
          excludeFromSum: true
        }]}
    ]
  },

             {
    name: "I'll be uncontested!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Vegeta","DBL-EVT-24U"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1661.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 22, unit: "%" }]},
      { name: "Slot 3", stats: [
        {
          stat: "Strike & Blast Attack",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Frieza Saga (Z)"
          }
        }]}
    ]
  },

           {
    name: "Rage with the heat of a mighty inferno",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Goku","DBL-EVT-17U"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1662.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Ki Recovery", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 30, unit: "%" }]},
      { name: "Slot 3", stats: [
        {
          stat: "Strike Attack",
          max: 10,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Saiyan"
          }
        }]}
    ]
  },

         {
    name: "Frenzied Power",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","BLU"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1291.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 35, unit: "%" }]}
    ]
  },

       {
    name: "I do this for you...",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Vegeta","DBL26-06S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1579.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 25, unit: "%" },
        { stat: "Base Blast Defense", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Health", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 10, unit: "%" },
        {
          stat: "damage to Goku",
          max: 10,
          unit: "%",
          excludeFromSum: true
        }
      ]}
    ]
  },

     {
    name: "Wow, what a great show!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Frieza","DBL22-05S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1578.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Special Move Damage", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [
        {
          stat: "Strike & Blast Defense",
          max: 8,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: ["Frieza Force", "Lineage of Evil"]
          }
        }]}
    ]
  },

   {
    name: "MEET THE LIGHT OF DEATH!!!!!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Piccolo","DBL22-03S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1523.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 25, unit: "%" },
        { stat: "Base Blast Defense", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [
        {
          stat: "damage to Saiyan",
          max: 12.50,
          unit: "%",
          excludeFromSum: true
        }]}
    ]
  },

  {
    name: "Thanks for 2 years!!",
    type: "Unique Equipment",
    conditions: { 
     tags: [""], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1523.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 7.50, unit: "%" },
        { stat: "Base Blast Defense", max: 7.50, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [
        { 
          stat: "Strike & Blast Attack", 
          max: 6, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "DBL00-01", 
          }
        }]}
    ]
  },
  
            {
    name: "This is Super Saiyan Blue!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Vegeta","DBL18-05S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1492.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 20, unit: "%" },
        { stat: "Base Blast Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Special Move Damage", max: 15, unit: "%" },
        { stat: "Ultimate Damage", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [
        { options: [
        {
          stat: "Strike & Blast Attack",
          max: 8,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: " Vegeta Clan"
          }
        },
        {
          stat: "Strike & Blast Attack",
          max: 8,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "God Ki"
          }
        }
      ] }]}
    ]
  },

          {
    name: "This is Super Vegito!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Vegito","DBL13-03S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1443.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
         {
          stat: "Blast Attack",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Fusion Warrior"
          }
        }] },
      { name: "Slot 2", stats: [
        {
          stat: "Strike & Blast Defense",
          max: 8,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Fusion Warrior"
          }
        }]},
      { name: "Slot 3", stats: [
        { stat: "Ultimate Damage", max: 15, unit: "%" },
        {
          stat: "Strike Attack (on cover change, 15 counts)",
          max: 10.00,
         unit: "%",
         excludeFromSum: true
        }]}
    ]
  },
        {
    name: "Saiyan in Red",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Game Originals"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1766.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 30, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 30, unit: "%" }]}
    ]
  },

          {
    name: "Hahahaha...!!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","RED"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1736.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Special Move Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 35, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 35, unit: "%" }]}
    ]
  },
        {
    name: "There are those actually capable of producing a satellite!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Saiyan Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1652.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Blast Attack", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Ki Recovery", max: 10, unit: "%" },
        { stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 30, unit: "%" }]}
    ]
  },

        {
    name: "I thank you.",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","GRN"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1666.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 12.50, unit: "%" },
        { stat: "Health Restoration", max: 12.50, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 30, unit: "%" }]}
    ]
  },

      {
    name: "The Androids Appear",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Androids Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1703.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Blast Attack", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" },]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 30, unit: "%" }]}
    ]
  },

    {
    name: "Times ten!!!!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["God Ki","YEL"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1704.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Ki Recovery", max: 15, unit: "%" },
        { stat: "Base Strike Attack", max: 15, unit: "%" },]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 30, unit: "%" }]}
    ]
  },

  {
    name: "Duel on a Vanishing Planet!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Frieza Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1680.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" },]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 30, unit: "%" }]}
    ]
  },


  {
    name: "Okay, that was a neat trick...",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","YEL"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1642.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Blast Defense", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 35, unit: "%" }]}
    ]
  },

   {
    name: "Me, the invincible, the almighty and divine",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Future Trunks Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1533.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Blast Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 30, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Health", max: 10, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }]}
    ]
  },

  {
    name: "Ka... me... ha... me...",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Cell Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1380.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 35, unit: "%" }]}
    ]
  },

  {
    name: "No way! You've lived long enough!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Anime Original Sagas"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1649.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Base Critical", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Blast Attack", max: 35, unit: "%" }]}
    ]
  },

  {
    name: "I'm Surprised at My Strength",
    type: "Unique Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1507.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 20, unit: "%" },
        { stat: "Base Blast Defense", max: 20, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 30, unit: "%" }]}
    ]
  },

   {
    name: "You won't even be able to lay a finger on me.",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Universe Survival Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1586.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Blast Defense", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Ki Recovery", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 35, unit: "%" }]}
    ]
  },

  {
    name: "MEET THE LIGHT OF DEATH!!!!!",//3й слот странный
    type: "Unique Equipment",
    conditions: { 
     tags: ["Piccolo", "DBL22-03S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1577.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Blast Attack", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 25, unit: "%" },
        { stat: "Base Blast Defense", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Health", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 20, unit: "%" },
        { stat: "Ultimate Damage", max: 30, unit: "%" }]}
    ]
  },

  {
    name: "See ya!",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Goku", "DBL17-05S"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1516.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Health Restoration", max: 10, unit: "%" },
        { stat: "Base Strike Defense", max: 30, unit: "%" },
        { stat: "Base Blast Defense", max: 30, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 30, unit: "%" },
        { stat: "Base Blast Attack", max: 30, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Health", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 20, unit: "%" },
        { stat: "Ultimate Damage", max: 30, unit: "%" }]}
    ]
  },

{
    name: "The Legendary Super Saiyan",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Super Saiyan", "Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1724.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 25, unit: "%" },
        { stat: "Base Blast Attack", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Special Move Damage", max: 10, unit: "%" },
      { 
          stat: "Inflicted Damage", 
          max: 20, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Powerful Opponent", 
          }
        }
      ] }
    ]
  },

  {
    name: "Why don't you pipe down and get busy!",
    type: "Unique Equipment",
    conditions: { tags: ["GT","Saiyan"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_2012.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [
        {  stat: "Base Strike Attack", max: 10, unit: "%" },
        {  stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" },
        {
         stat: " Blast Attack",
         max: 15,
         unit: "%",
         condition: {
           type: "teamTags",// 👈 новый тип "teamTags", "selfTag",
           tags: ["GT", "Vegeta Clan"],  // список тегов
           match: "all",                // можно "all" или "any"
         }     
        }
      ] }
    ]
  },

  {
    name: "What the heck happened?!",
    type: "Unique Equipment",
    conditions: { tags: ["GT","RED"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_2013.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [{  stat: "Base Strike Attack", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 35, unit: "%" }] }
    ]
  },

  {
    name: "I have the power of nature inside!",
    type: "Unique Equipment",
    conditions: { tags: ["Sagas From the Movies"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1574.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 12, unit: "%" },
        { stat: "Base Blast Defense", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 10, unit: "%" },
        { 
          stat: "Strike Defense", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Ranged Type", 
          }
        }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 10, unit: "%" },
        { 
          stat: "Blast Defense", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Melee Type", 
          }
        }
      ] }
    ]
  },

  {
    name: "This is fusion!",
    type: "Unique Equipment",
    conditions: { tags: ["Fusion"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1284.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 28, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 38, unit: "%" }] }
    ]
  },

  {
    name: "A gift from the Earth!",
    type: "Unique Equipment",
    conditions: { tags: ["Sagas From the Movies","Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1569.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 10, unit: "%" },
        {
          stat: "Strike Defense",
          max: 12.00,
          unit: "%",
          condition: {
            type: "allyHasAllTags",
            tags: ["Saiyan", "Sagas From the Movies"]
          }
        }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" },
        {
          stat: "Blast Attack",
          max: 15.00,
          unit: "%",
          condition: {
            type: "allyHasAllTags",
            tags: ["Saiyan", "Sagas From the Movies"]
          }
        }
      ] }
    ]
  },

    {
    name: "Now, Kakarot...",
    type: "Unique Equipment",
    conditions: { tags: ["Sagas From the Movies", "PUR"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1561.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 20, unit: "%" },
        { stat: "Base Blast Defense", max: 20, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 30, unit: "%" }] }
    ]
  },

  {
    name: "You're the idiot.",
    type: "Unique Equipment",
    conditions: { tags: ["Fusion Warrior", "YEL"] , 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Unique/EqIco_1455.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Health Restoration", max: 10, unit: "%" },
        { stat: "Base Ki Recovery", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 20, unit: "%" },
        { stat: "Base Blast Attack", max: 20, unit: "%" }] }
    ]
  },

  {
    name: "Give up, Buu.",
    type: "Unique Equipment",
    conditions: { tags: ["Fusion Warrior"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1447.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Critical", max: 22, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" },
          { 
          stat: "Strike Attack", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "teamTags", 
            tag: "Fusion Warrior", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" },
        { 
          stat: "Blast Attack", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "teamTags", 
            tag: "Fusion Warrior", 
            count: 3 // нужно 3 персонажа с этим тегом
          }
        }
      ] }
    ]
  },

  {
    name: "Super Saiyan Goten",
    type: "Unique Equipment",
    conditions: { tags: ["Super Saiyan", "Sagas From the Movies"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1408.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration ", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense ", max: 20, unit: "%" },
        { 
          stat: "Strike Defense", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Hybrid Saiyan", 
          }
        }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" },
        { 
          stat: "Blast Defense", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Saiyan", 
          }
        }
      ] }
    ]
  },

  {
    name: "It's impossible, I tell you. Impossible.",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Saiyan"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1458.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Health", max: 10, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 32, unit: "%" }]},
      { name: "Slot 3", stats: [
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
      ]}
    ]
  },

  {
    name: "I'm not used to making this transformation yet",
    type: "Unique Equipment",
    conditions: { 
     tags: ["Majin Buu Saga (Z)"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Unique/EqIco_1679.webp",  // картинка экипировки
    rarity: "Unique", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [   
        { stat: "Base Ki Recovery", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [
        { stat: "Base Strike Attack", max: 35, unit: "%" }] }
    ]
  },
// ------------------------------------------------------------------------------------------------ GoldUp
{
    name: "Don't you agree?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1115.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }]}
    ]
  },
{
    name: "Oh, relax, will you?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Girls","Melee Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1081.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" }]},
      { name: "Slot 3", options: [
         {
          stat: "Strike Attack",
          max: 6,
          unit: "%",
          own: true,
          condition: {
          type: "perTagCount",
          tag: "Android"
          }
        },
         {
          stat: "Strike Attack",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Girls"
          }
        }]}
    ]
  },
{
    name: "Leave the rest to me!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1518.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]},
      { name: "Slot 2", options: [{ stat: "Base Blast Defense", max: 18, unit: "%" },
        { stat: "Base Blast Attack", max: 18, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{
          stat: "Strike Defense",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "GT"
          }
        }]}
    ]
  },
{
    name: "You've earned yourself a little reward!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future","Future Trunks Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1491.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Ki Recovery", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" },
        { stat: "Base Blast Attack", max: 20, unit: "%" }
      ]}
    ]
  },
  {
    name: "Fusion Reborn!",
    type: "Gold Equipment",
    conditions: { 
      tags: ["Fusion Warrior"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1150.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" },
        {
          stat: "Blast Attack",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Fusion Warrior"
          }
        }] }
    ]
  },
{
    name: "Goodbye Dad",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1399.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" },
        { stat: "Base Blast Defense", max: -1, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 30, unit: "%" }]}
    ]
 },
{
    name: "I'm Counting on You...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1339.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 2",  stats: [
         { stat: "Base Blast Defense", max: 15, unit: "%" },
         { stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{stat: "Base Strike Attack", max: 25, unit: "%" }]}
    ]
 },
{
    name: "Worship me! Give praise unto me!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future","God Ki"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1532.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Defense", max: 28, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" }]},
      { name: "Slot 3", options: [{ 
          stat: "Blast Attack", 
          max: 12, 
          unit: "%",
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Fusion Warrior", 
          }
        },
         { 
          stat: "Strike Attack", 
          max: 12, 
          unit: "%",
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Fusion Warrior", 
          }
        }],
      options: [
         { stat: "Base Blast Attack", max: 20, unit: "%" },
         { stat: "Base Strike Attack", max: 20, unit: "%" }]}
    ]
 },
{
    name: "Boundary Breaking Vegeta",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Vegeta Clan","Cell Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1252.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" },
        { stat: "Base Strike Attack", max: 15, unit: "%" }
      ]},
      { name: "Slot 2",  stats: [{ stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{
          stat: "Strike Attack",
          max: 6,
          unit: "%",
          own: true,  
          condition: {
          type: "perTagCount",
          tag: ["Vegeta Clan","Cell Saga (Z)"]
          }
        }]}
    ]
 },
  {
    name: "You Failure!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","GRN"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1146.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" },
        { stat: "Base Blast Attack", max: 18, unit: "%" }
      ]},
      { name: "Slot 3", stats: [
                 {
         stat: "Strike Attack & Defense",
         max: 20,
         unit: "%",
         own: true,
         condition: {
           type: "teamTags",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Melee Type", "Defense Type"],  // список тегов
           match: "any",                // можно "all" или "any"
         }     
        }]}
    ]
  },
  {
    name: "Going Full Out",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Rival Universe","Universe Rep"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1419.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" },{
          stat: "Strike Attack",
          max: 5,
          unit: "%",
          own: true,
          condition: {
          type: "perTagCount",
          tag: "Universe Rep"
          }
        }]}
    ]
  },
  {
    name: "Okay, the Warmup Is Over!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["DB"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_11156.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 33, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 33, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 12, unit: "%" }]}
    ]
  },
  {
    name: "This scythe will carve a reminder into your mortal flesh!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Goku Black"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1610.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 22, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }
      ]}
    ]
  },
  {
    name: "This is goodbye...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Rival Universe","Melee Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1614.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Critical", max: 13, unit: "%" },
        { stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Critical", max: 18, unit: "%" },
        { stat: "Base Blast Defense", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Critical", max: 30, unit: "%" }]}
    ]
  },
{
    name: "Hahahahaha!!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1623.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",   stats: [
         { stat: "Base Blast Defense", max: 13, unit: "%" },
         { stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 2",  options: [
         { stat: "Base Blast Defense", max: 18, unit: "%" },
         { stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [ { stat: "Base Blast Defense", max: 14, unit: "%" },
         { stat: "Base Strike Defense", max: 14, unit: "%" }]}
    ]
 },
{
    name: "You can't even keep up with me, can you?!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki","Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1527.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Ki Recovery", max: 20, unit: "%" }]},
      { name: "Slot 2",  options: [
         { stat: "Base Blast Defense", max: 30, unit: "%" },
         { stat: "Base Strike Defense", max: 30, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" }
      ]}
    ]
 },
{
    name: "Hmph, dirty fireworks.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Frieza Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1636.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Ki Recovery", max: 12, unit: "%" },
        { stat: "Special Move Damage", max: 12, unit: "%" }
      ]},
      { name: "Slot 2",  stats: [{
          stat: "Strike & Blast Attack",
          max: 10.00,
          unit: "%",
          own: true,
          condition: {
            type: "allyHasAllTags",
            tags: ["Frieza Saga (Z)"]
          }
        }]},
      { name: "Slot 3", options: [
         { stat: "Base Blast Attack", max: 30, unit: "%" },
         { stat: "Base Strike Attack", max: 30, unit: "%" }]}
    ]
 },
{
    name: "Wooaaaagh!!!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Super Saiyan","Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1641.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Critical", max: 12, unit: "%" },
        { stat: "Base Strike Attack", max: 12, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Critical", max: 10, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" },
        { stat: "Base Strike Defense", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Critical", max: 10, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" },
      {
          stat: "Strike Attack",
          max: 10.00,
          unit: "%",
          own: true,
          condition: {
            type: "allyHasAllTags",
            tags: ["Sagas From the Movies"]
          }
        }]}
    ]
 },
{
    name: "It hurts my pride...!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1660.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Defense", max: 25, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Special Move Damage", max: 12, unit: "%" },
        { stat: "Health Restoration", max: 12, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        {
          stat: "Strike & Blast Defense",
          max: 10.00,
          unit: "%",
          condition: {
            type: "allyHasAllTags",
            tags: ["Saiyan Saga (Z)"]
          }
        }
      ]}
    ]
 },
{
    name: "Vegeta's Anger",
    type: "Gold Equipment",
    conditions: { 
     or: [
    { type: "selfTags", tags: ["Vegeta", "Melee Type"], match: "all" },
    { type: "selfTags", tags: ["Vegeta", "Ranged Type"], match: "all" }
  ]
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1434.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Strike Attack", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 28, unit: "%" }]}
    ]
 },
{
    name: "Let's bring him down, Kale!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Rival Universe","Ranged Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1644.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Attack", max: 17, unit: "%" }]},
      { name: "Slot 2",  options: [
         { stat: "Base Blast Defense", max: 15, unit: "%" },
         { stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" },
        { stat: "Base Blast Attack", max: 20, unit: "%" }
      ]}
    ]
 },
  {
    name: "Nnggh...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1559.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Critical", max: 22, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Strike Attack", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" },
        { stat: "Health Restoration", max: 12, unit: "%" },
      { stat: "Special Move Damage", max: 12, unit: "%" }]}
    ]
 },
  {
    name: "A Battle of the Gods",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1664.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Ki Recovery", max: 15, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Ki Recovery", max: 15, unit: "%" },
        { stat: "Base Strike Attack", max: 15, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 12.5, unit: "%" },
        { stat: "Base Ki Recovery", max: 12.5, unit: "%" }
      ]}
    ]
 },
  {
    name: "Bardock... That's my name.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Team Bardock","EXTREME"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1674.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }
      ]},
      { name: "Slot 3",options: [
         {
          stat: "Strike & Blast Attack",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Team Bardock"
          }
        }]}
    ]
 },
  {
    name: "HRAAAAAGH!!!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Broly","Super Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1607.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" },
        { stat: "Base Strike Attack", max: 15, unit: "%" }
      ]},
      { name: "Slot 3",stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" },
        { stat: "Base Strike Attack", max: 18, unit: "%" }
      ]}
    ]
 },
  {
    name: "You must be Frieza...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","Frieza Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1681.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" }
      ]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" },
        { stat: "Base Strike Defense", max: 15, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" },
        { stat: "Base Blast Attack", max: 10, unit: "%" }
      ]}
    ]
 },
  {
    name: "Show us what you can do.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Universe Rep"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1685.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" },
        { stat: "Base Strike Defense", max: 20, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" },        
        {
          stat: "Strike Attack ", 
          max: 10, 
          unit: "%",
          own: true, 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Universe Rep", 
          }
        }
      ]}
    ]
 },
  {
    name: "If that's your special move, then I want it done right.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Universe Rep"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1582.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" },
        { stat: "Base Ki Recovery", max: 15, unit: "%" }
      ]},
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Base Blast Attack", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        { stat: "Base Blast Attack", max: 10, unit: "%" }
      ]}
    ]
 },
  {
    name: "Confident Goku!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Cell Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1297.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" },
        { stat: "Base Strike Attack", max: 12, unit: "%" }
      ]},
      { name: "Slot 2", options: [
         { stat: "Base Blast Attack", max: 13, unit: "%" },
         { stat: "Base Strike Attack", max: 13, unit: "%" }],
        options: [
          {
         stat: "Blast Attack",
         max: 10,
         unit: "%",
         own: true,
         condition: {
           type: "teamTags",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Saiyan", "Cell Saga (Z)"],  // список тегов
           match: "all",                // можно "all" или "any"
         }     
        },
          {
         stat: "Strike Attack",
         max: 10,
         unit: "%",
         own: true,
         condition: {
           type: "teamTags",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Saiyan", "Cell Saga (Z)"],  // список тегов
           match: "all",                // можно "all" или "any"
         }     
        }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 12, unit: "%" }]}
    ]
 },
  {
    name: "HAAAAA...!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","Universe Survival Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1695.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", options: [{ stat: "Special Move Damage", max: 10, unit: "%" },
         { stat: "Base Ki Recovery", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Ki Recovery", max: 25, unit: "%" }]},
      { name: "Slot 3", options: [
         { stat: "Base Blast Attack", max: 30, unit: "%" },
         { stat: "Base Strike Attack", max: 30, unit: "%" }]}
    ]
 },
  {
    name: "The Revived Hero",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","RED"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1714.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" },
        { stat: "Health Restoration", max: 12, unit: "%" }
      ]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" }
      ]}
    ]
 },
  {
    name: "You're not getting away from me that easily.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT","Son Family"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1765.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [
         { stat: "Base Blast Attack", max: 15, unit: "%" },
         { stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [
         { stat: "Base Blast Attack", max: 20, unit: "%" },
         { stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 3", effects: [
        "12.00% damage to Powerful Opponent for 90 timer counts"
      ]}
    ]
 }, 
  {
    name: "I've Eliminated Those Cursed Saiyans!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT","Powerful Opponent"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1503.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 30, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Saiyan",
        "10.00% damage to Hybrid Saiyan"
      ]}
    ]
 }, 
  {
    name: "I'll give you a handicap",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1541.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Health", max: 12, unit: "%" }] },
      { name: "Slot 2", options: [
         { stat: "Base Blast Defense", max: 33, unit: "%" },
         { stat: "Base Strike Defense", max: 33, unit: "%" }],
        options: [
         { stat: "Base Blast Attack", max: 5, unit: "%" },
         { stat: "Base Strike Attack", max: 5, unit: "%" }]},
      { name: "Slot 3",  options: [
         { stat: "Base Blast Defense", max: 5, unit: "%" },
         { stat: "Base Strike Defense", max: 5, unit: "%" }],
        options: [
         { stat: "Base Blast Attack", max: 33, unit: "%" },
         { stat: "Base Strike Attack", max: 33, unit: "%" }]}
    ]
 }, 
  {
    name: "Bestowed Hope",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future","Weapon Wielder"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1779.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 10, unit: "%" },
        { stat: "Special Move Damage", max: 10, unit: "%" }
      ] },
      { name: "Slot 2", options: [
         { stat: "Base Blast Attack", max: 32, unit: "%" },
         { stat: "Base Strike Attack", max: 32, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 12, unit: "%" }] }
    ]
 }, 
  {
    name: "I call it Super Saiyan 3.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","Hybrid Saiyan"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1678.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }
      ] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" },
        { stat: "Base Blast Attack", max: 15, unit: "%" }
      ] },
      { name: "Slot 3", stats: [
        { 
          stat: "Blast Defense", 
          max: 6, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan", 
          }
        },
                { 
          stat: "Strike Defense", 
          max: 6, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan 2",
          }
        },
                { 
          stat: "Strike & Blast", 
          max: 6, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan 3",
          }
        },
      ] }
    ]
 }, 
{
    name: "Hah! Take that!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Frieza Force","Ranged Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1655.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 16, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" },
                {
          stat: "Blast Attack",
          max: 10.00,
          unit: "%",
          own: true,  
          condition: {
            type: "allyHasAllTags",
            tags: ["Frieza Force"]
          }
        }
      ] },
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 12, unit: "%" },
        { stat: "Special Move Damage", max: 12, unit: "%" }
      ] }
    ]
 }, 
{
    name: "Unexpected Assault",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Regeneration","Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1853.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [ { stat: "Base Strike Attack", max: 38, unit: "%" }] }
    ]
 },
  {
    name: "Haah!",
    type: "Gold Equipment",
    conditions: { tags: ["Sagas From the Movies"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1267.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }] }
    ]
  },
{
    name: "Consider This an Honor!", 
    type: "Gold Equipment",
    conditions: { 
     tags: ["Frieza Force","Lineage of Evil"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1181.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "slot 3", stats: [
          { stat: "Base Critical", max: 15, unit: "%" } // фиксировано
        ],
                       options: [
          { stat: "Base Strike Defense", max: 18, unit: "%" },
          { stat: "Base Strike Attack", max: 18, unit: "%" }
        ]}
    ]
  },

{
    name: "Please, Lend Me Your Energy!", 
    type: "Gold Equipment",
    conditions: { 
     tags: ["DBL-EVT-00S","DBL16-01S","DBL17-05S"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1034.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [
        {
         stat: "Strike & Blast Attack",
         max: 10,
         unit: "%",
         condition: {
           type: "selfTag",// 👈 новый тип "teamTags", "selfTag",
           tags: ["DBL-EVT-00S","DBL16-01S"],  // список тегов
           match: "any",                // можно "all" или "any"
         }     
        }
      ]}
    ]
  },

{
    name: "I'm an Elite",
    type: "Gold Equipment",
    conditions: { 
     tags: ["YEL","Defense Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1009.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 25, unit: "%" }] },,
      { name: "Slot 2",
        options: [
         { stat: "Base Blast Attack", max: 13, unit: "%" },
         { stat: "Base Ki Recovery", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [
        {
          stat: "defense against Saiyan for 30 timer counts",
          max: 30.00,
          unit: "%",
          excludeFromSum: true
        }
      ]}
    ]
  },

{
    name: "Oh, relax, will you?", 
    type: "Gold Equipment",
    conditions: { 
     tags: ["Girls","Melee Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1081.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" }]},
      { name: "Slot 3",options: [
        {
          stat: "Strike Attack",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Android"
          }
        },
        {
          stat: "Strike Attack",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Girls"
          }
        },
      ]}
    ]
  },

{
    name: "Start of the Battle!", 
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","Ranged Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1300.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1",
        options: [
         { stat: "Base Blast Defense", max: 12.50, unit: "%" },
         { stat: "Base Strike Defense", max: 12.50, unit: "%" }] },
      { name: "Slot 2",
        options: [
         { stat: "Base Blast Defense", max: 13, unit: "%" },
         { stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 3",stats: [
        {
          stat: "Strike Defense",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Saiyan"
          }
        }]}
    ]
  },

{
    name: "Hold on to My Shoulder!", 
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","Melee Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1130.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Critical", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 18, unit: "%" }] },
      { name: "Slot 2",
        options: [
         { stat: "Base Blast Defense", max: 20, unit: "%" },
         { stat: "Base Strike Defense", max: 20, unit: "%" }]},
      { name: "Slot 3",stats: [
        {
          stat: "Strike Attack",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Sagas From the Movies"
          }
        }]}
    ]
  },

{
    name: "You stay here!", 
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1197.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 18, unit: "%" },
        { stat: "Base Blast Defense", max: 18, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 12.50, unit: "%" }]},
      { name: "Slot 3",stats: [
        {
          stat: "Strike Attack",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Future"
          }
        }]}
    ]
  },

{
    name: "Romantic Drive",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Girls"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1125.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 13, unit: "%" }]},
      { name: "Slot 3",stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }
      ]}
    ]
  },

{
    name: "Eh?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1289.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }] },,
      { name: "Slot 2", stats: [{ stat: "Base Critical", max: 15, unit: "%" }]},
      { name: "Slot 3",
        options: [
         { stat: "Base Blast Attack", max: 21.50, unit: "%" },
         { stat: "Base Strike Attack", max: 21.50, unit: "%" }]}
    ]
  },

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

{
    name: "Master Korin",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1162.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 3",stats: [
        {
          stat: "Blast Defense",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "God Ki"
          }
        }]}
    ]
  },

{
    name: "This Will Be A MASSACRE!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Shallot"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1039.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 20, unit: "%" },
        { stat: "Base Blast Defense", max: 20, unit: "%" }
      ] },
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 20, unit: "%" },
        { stat: "Base Health", max: 15, unit: "%" }
      ]},
      { name: "Slot 3",stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" }]}
    ]
  },

{
    name: "You Can Do It, Right, Gohan?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Son Family","Super Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1307.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        {
          stat: "Strike Defense",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Son Family"
          }
        }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]},
      { name: "Slot 3",stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }]}
    ]
  },

{
    name: "You'll Pay!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","GRN"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1071.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" }]},
      { name: "Slot 3",stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" }]}
    ]
  },

{
    name: "Too Bad! You Were Close",
    type: "Gold Equipment",
    conditions: { 
     tags: ["EXTREME","Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1117.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" }] },,
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }]},
      { name: "Slot 3",
        options: [
         { stat: "Base Blast Attack", max: 30, unit: "%" },
         { stat: "Base Strike Attack", max: 30, unit: "%" }]}
    ]
  },

  {
    name: "!!!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Hybrid Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1068.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }] },,
      { name: "Slot 2", stats: [
        {
          stat: "Blast Attack",
          max: 8,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Hybrid Saiyan"
          }
        }]},
      { name: "Slot 3", stats: [
        {
          stat: "Strike Attack",
          max: 8,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Hybrid Saiyan"
          }
        }]}
    ]
  },

  {
    name: "This is the kind of power I'd be running away from",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT", "Ranged Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1547.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" }] },,
      { name: "Slot 2", stats: [
        { stat: "Base Strike Defense", max: 12.5, unit: "%" },
        { stat: "Special Move Damage", max: 12.5, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 28, unit: "%" }]}
    ]
  },

  {
    name: "You've Gone Too Far",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1510.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }] },,
      { name: "Slot 2", stats: [
        { stat: "Base Ki Recovery", max: 13, unit: "%" },
        { stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 38, unit: "%" }]}
    ]
  },

  {
    name: "Time to Send You to Hell!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Fusion Warrior"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1145.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      {
        name: "Slot 1",
        options: [
         { stat: "Base Blast Defense", max: 18, unit: "%" },
         { stat: "Base Strike Defense", max: 18, unit: "%" }
       ]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Critical", max: 18, unit: "%" }]}
    ]
  },

   {
    name: "These times were dark enough without you",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Super Saiyan 4","Melee Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1548.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      {
        name: "Slot 1",
        options: [
         { stat: "Base Strike Attack", max: 12.5, unit: "%" },
         { stat: "Special Move Damage", max: 12.5, unit: "%" }
       ]},
      { name: "Slot 2", stats: [
        { stat: "Base Strike Attack", max: 13, unit: "%" },
        { stat: "Ultimate Damage", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 12.5, unit: "%" }]}
    ]
  },

   {
    name: "At long last, I've ascended, Kakarot.",
    type: "Gold Equipment",
    conditions: { tags: ["GT"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1267.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 30, unit: "%" }]},
      { name: "Slot 3", stats: [
        { 
          stat: "Blast Attack", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan 4", 
          }
        },
      { 
          stat: "Strike Defense", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Ranged Type", 
          }
        }] }
    ]
  },
  {
    name: "Don't you agree?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Android","RED"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1115.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 12.5, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" },
        { stat: "Base Strike Attack", max: 18, unit: "%" }
      ]}
    ]
  },
{
    name: "Trunks, stay back!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future","Ranged Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1211.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" },
        {
         stat: "Blast Attack",
         max: 10,
         unit: "%",
         condition: {
           type: "teamTags",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Son Family", "Vegeta Clan"],  // список тегов
           match: "any",                // можно "all" или "any"
         }     
        }
      ]}
    ]
  },
{
    name: "Humph!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Transforming Warrior","Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1140.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" },
        { stat: "Health Restoration", max: 15, unit: "%" }
      ]},
      { name: "Slot 3",  options: [
         { stat: "Base Blast Defense", max: 20, unit: "%" },
         { stat: "Base Strike Defense", max: 20, unit: "%" }]}
    ]
  },
{
    name: "You Can't Win!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","Melee Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1045.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" },{
          stat: "Blast Defense",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Saiyan"
          }
        }]}
    ]
  },
{
    name: "Let's go, Vegeta!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki","Goku"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1279.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", options: [{ stat: "Base Blast Attack", max: 20, unit: "%" },
        { stat: "Base Strike Attack", max: 20, unit: "%" }
      ]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 13, unit: "%" },
        { stat: "Health Restoration", max: 13, unit: "%" }
      ]}
    ]
  },
{
    name: "What Futile Efforts",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1143.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 13, unit: "%" },
        { stat: "Base Blast Defense", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{
          stat: "Strike Defense",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Sagas From the Movies"
          }
        }]}
    ]
  },
  {
    name: "Fruit of the Tree of Might",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Turles"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1074.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 25, unit: "%" }]},
      { name: "Slot 2", effects: [
        "12.50% defense against Son Family","12.50% damage to Son Family"]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 15, unit: "%" },
        { stat: "Base Critical", max: 15, unit: "%" }
      ]}
    ]
  },
  {
    name: "I'll Destroy All of You!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Lineage of Evil"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1182.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 25, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 20, unit: "%" },
        { stat: "Base Blast Attack", max: 10, unit: "%" }
      ]}
    ]
  },
  {
    name: "This Ki. It's gotta be...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Hybrid Saiyan","Defense Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1066.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 12, unit: "%" },
        { stat: "Base Blast Defense", max: 12, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Critical", max: 13, unit: "%" },
        { stat: "Base Strike Attack", max: 13, unit: "%" }
      ]}
    ]
  },
  {
    name: "Mysterious Youth",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Trunks","Melee Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1043.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" },
        { stat: "Health Restoration", max: 10, unit: "%" }
      ]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 23, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 30, unit: "%" }]}
    ]
  },
{
    name: "Pahahaha!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","Powerful Opponent"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1038.webp",  // картинка экипировки
    rarity: "GoldUp", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 22, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Ultimate Damage", max: 12.5, unit: "%" },
        { stat: "Special Move Damage", max: 12.5, unit: "%" }
      ]}
    ]
  },
  // ------------------------------------------------------------------------------------------------ Gold
{
    name: "Sacred Water",
    type: "Gold Equipment",
    conditions: { 
     tags: [""], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1164.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", options: [{ stat: "Base Blast Defense", max: 10, unit: "%" },
        { stat: "Base Strike Defense", max: 10, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" },
        { stat: "Base Blast Attack", max: 10, unit: "%" }
      ]},
      { name: "Slot 2", options: [{ stat: "Base Blast Defense", max: 10, unit: "%" },
        { stat: "Base Strike Defense", max: 10, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" },
        { stat: "Base Blast Attack", max: 10, unit: "%" },
        { stat: "Base Blast Defense", max: -1, unit: "%" },
        { stat: "Base Strike Defense", max: -1, unit: "%" },
        { stat: "Base Strike Attack", max: -1, unit: "%" },
        { stat: "Base Blast Attack", max: -1, unit: "%" }
      ]},
      { name: "Slot 3", options: [{ stat: "Base Blast Defense", max: 10, unit: "%" },
        { stat: "Base Strike Defense", max: 10, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" },
        { stat: "Base Blast Attack", max: 10, unit: "%" },
        { stat: "Base Blast Defense", max: -1, unit: "%" },
        { stat: "Base Strike Defense", max: -1, unit: "%" },
        { stat: "Base Strike Attack", max: -1, unit: "%" },
        { stat: "Base Blast Attack", max: -1, unit: "%" }]}
    ]
  },
{
    name: "The tide of this battle is turning yet again.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God of Destruction","Angel"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1590.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", options: [
         { 
          stat: "Health", 
          max: 10, 
          unit: "%",
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Angel", 
          }
        },
         { 
          stat: "Blast Attack", 
          max: 10, 
          unit: "%",
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "God of Destruction", 
          }
        }]}
    ]
  },
{
    name: "Pahahaha!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Broly"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1038.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Ultimate Damage", max: 12.5, unit: "%" }]}
    ]
  },
{
    name: "Mysterious Youth",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Trunks"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1043.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 17.5, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]}
    ]
  },
{
    name: "This Ki. It's gotta be...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Hybrid Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1066.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 12, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Critical", max: 10, unit: "%" }]}
    ]
  },
{
    name: "I'll Destroy All of You!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Lineage of Evil"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1182.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 20, unit: "%" }]}
    ]
  },
{
    name: "Fruit of the Tree of Might",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Turles"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1074.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }]},
      { name: "Slot 2", effects: [
        "12.50% defense against Son Family"]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 15, unit: "%" }]}
    ]
  },
{
    name: "What Futile Efforts",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1143.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{
          stat: "Strike Defense",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Sagas From the Movies"
          }
        }]}
    ]
  },
{
    name: "Let's go, Vegeta!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1279.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 13, unit: "%" }]}
    ]
  },
{
    name: "You Can't Win!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1045.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{
          stat: "Blast Defense",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Saiyan"
          }
        }]}
    ]
  },
{
    name: "Humph!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Transforming Warrior"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1140.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 3",  options: [
         { stat: "Base Blast Defense", max: 15, unit: "%" },
         { stat: "Base Strike Defense", max: 15, unit: "%" }]}
    ]
  },
{
    name: "Trunks, stay back!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future","Ranged Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1211.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }]}
    ]
  },
{
    name: "Don't you agree?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1115.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }]}
    ]
  },
{
    name: "Oh, relax, will you?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Girls"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1081.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 13, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]}
    ]
  },
{
    name: "20... Please, Allow Me",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1056.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Critical", max: 17.5, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 12.5, unit: "%" }]}
    ]
  },
{
    name: "Don't Interfere!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Piccolo"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1060.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", effects: [
        "25.00% damage to Android for 20 timer counts"]}
    ]
  },
{
    name: "You've Made a Critical Mistake",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Regeneration"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1046.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Critical", max: 20, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Ki Recovery", max: 15, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% defense against Android"]}
    ]
  },
{
    name: "Of Course!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["BLU"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1176.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", effects: [
        "50.00% Strike damage CUT against GRN when health is below 50%"]}
    ]
  },
{
    name: "You Making Fun of Me?!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1131.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]}
    ]
  },
{
    name: "W-Wait a sec!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["BLU"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1090.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Critical", max: 20, unit: "%" }]},
      { name: "Slot 2", options: [
         { stat: "Base Strike Attack", max: 15, unit: "%" },
         { stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", effects: [
        "20.00% defense against Hybrid Saiyan when health is below 50%"
        ]}
    ]
  },
{
    name: "Gwaaaaagh!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["EXTREME","Frieza Force"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1093.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 2", stats: [{
          stat: "Strike Damage inflicted",
          max: 7,
          unit: "%",
          own: true,
          condition: {
          type: "perTagCount",
          tag: "Frieza Force"
          }
        }]},
      { name: "Slot 3", stats: [{
          stat: "Blast Damage inflicted",
          max: 7,
          unit: "%",
          own: true,
          condition: {
          type: "perTagCount",
          tag: "Frieza Force"
          }
        }]}
    ]
  },
{
    name: "It's okay now!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Girls"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1207.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Critical", max: 12.5, unit: "%" }]},
      { name: "Slot 3", options: [
         { stat: "Base Blast Attack", max: 20, unit: "%" },
         { stat: "Base Strike Attack", max: 20, unit: "%" }]}
    ]
  },
{
    name: "Munch! Munch! Hell",
    type: "Gold Equipment",
    conditions: { 
     tags: ["RED"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1127.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 12.5, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]}
    ]
  },
{
    name: "Wait, Gohan!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Defense Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1235.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 13, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 13, unit: "%" }]}
    ]
  },
{
    name: "Androids",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1118.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 12.5, unit: "%" }]},
      { name: "Slot 2", stats: [{
          stat: "Strike Defense",
          max: 6,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Android"
          }
        }]},
      { name: "Slot 3", options: [
         { stat: "Base Blast Attack", max: 15, unit: "%" },
         { stat: "Base Strike Attack", max: 15, unit: "%" }]}
    ]
  },
{
    name: "Alright!!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Fusion Warrior"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1438.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 13, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{
          stat: "Strike Attack",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Fusion Warrior"
          }
        }]}
    ]
  },
{
    name: "A proud warrior!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1495.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 12.5, unit: "%" }]},
      { name: "Slot 2", options: [{ stat: "Base Blast Defense", max: 13, unit: "%" },
        { stat: "Base Strike Attack", max: 13, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{
          stat: "Strike Defense",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "God Ki"
          }
        }]}
    ]
  },
{
    name: "Goodbye, Everyone",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1353.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 12.5, unit: "%" }]},
      { name: "Slot 2", options: [{ stat: "Base Strike Defense", max: 18, unit: "%" },
        { stat: "Base Strike Attack", max: 18, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]}
    ]
  },
{
    name: "I won't be as gentle as I was before...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Transforming Warrior"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1180.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Critical", max: 12.5, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{
          stat: "Blast Defense",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Transforming Warrior"
          }
        }]}
    ]
  },
{
    name: "Leave the rest to me!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1518.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 13, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{
          stat: "Strike Defense",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "GT"
          }
        }]}
    ]
  },
{
    name: "You've earned yourself a little reward!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future","Ranged Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1491.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Ki Recovery", max: 12.5, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }]}
    ]
  },
{
    name: "Blast It!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","YEL"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1153.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Critical", max: 12.5, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", options: [
        { stat: "Base Strike Defense", max: 20, unit: "%" },
        { stat: "Base Strike Attack", max: 20, unit: "%" }]}
    ]
  },
  {
    name: "Fusion Reborn!",
    type: "Gold Equipment",
    conditions: { 
      tags: ["Fusion Warrior","GRN"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1150.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 13, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [        {
          stat: "Blast Attack",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Fusion Warrior"
          }
        }] }
    ]
  },
{
    name: "This Will Be A MASSACRE!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Shallot"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1039.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [
        { stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }
      ] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" }]}
    ]
  },
{
    name: "Eh?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1289.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }] },,
      { name: "Slot 2", stats: [{ stat: "Base Critical", max: 10, unit: "%" }]},
      { name: "Slot 3",
        options: [
         { stat: "Base Blast Attack", max: 16.50, unit: "%" },
         { stat: "Base Strike Attack", max: 16.50, unit: "%" }]}
    ]
  },
  {
    name: "Haah!",
    type: "Gold Equipment",
    conditions: { 
      tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1267.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 12.5, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }] }
    ]
  },
{
    name: "Just hang in a little longer Piccolo!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Goku"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1121.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 2",  options: [
         { stat: "Base Strike Defense", max: 12.5, unit: "%" },
         { stat: "Base Strike Attack", max: 12.5, unit: "%" } ]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]}
    ]
 },
{
    name: "Battle of Saiyans",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1413.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 2",  options: [
         "10.00% to Blast Defense for 20 timer counts when faced with Saiyan.",
         "10.00% to Strike Defense for 20 timer counts when faced with Saiyan." ]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
{
    name: "The fun starts now!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Fusion Warrior","Ranged Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1441.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Attack", max: 13, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", options: [
         { stat: "Base Blast Defense", max: 15, unit: "%" },
         { stat: "Base Strike Defense", max: 15, unit: "%" }]}
    ]
 },
{
    name: "Goodbye Dad",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1399.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: -1, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]}
    ]
 },
{
    name: "You've really outdone yourselves, haven't you?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Lineage of Evil"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1402.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Critical", max: 12.5, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{
          stat: "Strike Defense",
          max: 5,
          unit: "%",
          own: true,
          condition: {
          type: "perTagCount",
          tag: "Lineage of Evil"
          }
        }]}
    ]
 },
{
    name: "I'm Counting on You...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1339.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Attack", max: 13, unit: "%" }]},
      { name: "Slot 2",  options: [
         { stat: "Base Blast Defense", max: 15, unit: "%" },
         { stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{stat: "Base Strike Attack", max: 20, unit: "%" }]}
    ]
 },
{
    name: "I can't sense Gohan!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Ranged Type","BLU"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1213.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Defense", max: 12.5, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{
         stat: "Blast Attack",
         max: 10,
         unit: "%",
         own: true,
         condition: {
           type: "teamTags",// 👈 новый тип "teamTags", "selfTag",
           tags: ["YEL", "PUR"],  // список тегов
           match: "any",                // можно "all" или "any"
         }     
        }]}
    ]
 },
{
    name: "Worship me! Give praise unto me!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1532.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", options: [{ 
          stat: "Blast Attack", 
          max: 10, 
          unit: "%",
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Fusion Warrior", 
          }
        },
         { 
          stat: "Strike Attack", 
          max: 10, 
          unit: "%",
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Fusion Warrior", 
          }
        }]}
    ]
 },
{
    name: "Saiyans don't do limits!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1541.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Defense", max: 12, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Critical", max: 10, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{
          stat: "Blast Attack",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Future "
          }
        }]}
    ]
 },
{
    name: "I didn't know it was going to be that kind of fight",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Son Family","GRN"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1543.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Defense", max: 12.5, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{
          stat: "Blast Attack",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Son Family"
          }
        }]}
    ]
 },
{
    name: "Crush Them!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["PUR"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1163.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Attack", max: 13, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{
         stat: "Strike Defense",
         max: 10,
         unit: "%",
         condition: {
           type: "teamTags",// 👈 новый тип "teamTags", "selfTag",
           tags: ["RED", "BLU"],  // список тегов
           match: "any",                // можно "all" или "any"
         }     
        }]}
    ]
 },
{
    name: "I'm Young Again!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Regeneration","BLU"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1167.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{
         stat: "Strike Defense",
         max: 10,
         unit: "%",
         condition: {
           type: "teamTags",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Regeneration", "PUR"],  // список тегов
           match: "any",                // можно "all" или "any"
         }     
        }]}
    ]
 },
{
    name: "Boundary Breaking Vegeta",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Vegeta Clan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1252.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Attack", max: 13, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{
          stat: "Strike Attack",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Vegeta Clan"
          }
        }]}
    ]
 },
  {
    name: "Universe 6 & Universe 7",
    type: "Gold Equipment",
    conditions: {
  or: [
    { type: "selfTags", tags: ["Future", "GRN"], match: "all"  },
    { type: "selfTags", tags: ["Future", "PUR"], match: "all" }
     ]
   },
    mainImage: "Image/Equip_img/Gold/EqIco_1536.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ 
          stat: "Blast Defense", 
          max: 10, 
          unit: "%",
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Powerful Opponent", 
          }
        }]}
    ]
  },
  {
    name: "Universe 6 & Universe 7",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Rival Universe"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1411.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
  },
  {
    name: "You Failure!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1146.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", options: [
                 { 
          stat: "Strike Defense", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Defense Type", 
          }
        },
                 { 
          stat: "Strike Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Melee Type", 
          }
        }]}
    ]
  },
  {
    name: "Going Full Out",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Rival Universe"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1419.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{
          stat: "Strike Attack",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Rival Universe"
          }
        }]}
    ]
  },
  {
    name: "I'll just smash it to pieces!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1470.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 22, unit: "%" }]}
    ]
  },
  {
    name: "Okay, the Warmup Is Over!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Dragon Ball Saga"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1212.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
  },
  {
    name: "Ugh!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Hybrid Saiyan","Future"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1212.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }
      ]}
    ]
  },
  {
    name: "Hurry up and die!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Ranged Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1381.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 12, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }]}
    ]
  },
  {
    name: "Pathetic!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","YEL"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1596.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
  },
  {
    name: "Ahahahahahaha!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Regeneration"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1596.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 13, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 13, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Vegeta Clan",
        "10.00% damage to Son Family"
      ]}
    ]
  },
  {
    name: "This scythe will carve a reminder into your mortal flesh!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future","Powerful Opponent"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1610.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }
      ]}
    ]
  },
  {
    name: "This is goodbye...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Rival Universe","Melee Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1614.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Critical", max: 22, unit: "%" }]}
    ]
  },
   {
    name: "These times were dark enough without you",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Super Saiyan 4"], 
     match: "all" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold_up/EqIco_1548.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze, GoldUp, UniqueUp
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Ultimate Damage", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
  },
{
    name: "Dimension Guard",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Defense Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1139.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 2",  options: [
         { stat: "Base Blast Defense", max: 18, unit: "%" },
         { stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [ { stat: "Base Health", max: 8, unit: "%" }]}
    ]
 },
{
    name: "Hahahahaha!!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1623.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",   options: [
         { stat: "Base Blast Defense", max: 13, unit: "%" },
         { stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 2",  options: [
         { stat: "Base Blast Defense", max: 15, unit: "%" },
         { stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [ { stat: "Base Blast Defense", max: 12, unit: "%" },
         { stat: "Base Strike Defense", max: 12, unit: "%" }]}
    ]
 },
{
    name: "You can't even keep up with me, can you?!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1527.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" }]},
      { name: "Slot 2",  options: [
         { stat: "Base Blast Defense", max: 15, unit: "%" },
         { stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
{
    name: "Hmph, dirty fireworks.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Frieza Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1636.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Ki Recovery", max: 12, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", options: [
         { stat: "Base Blast Attack", max: 23, unit: "%" },
         { stat: "Base Strike Attack", max: 23, unit: "%" }]}
    ]
 },
{
    name: "Medical Machine",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Frieza Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1026.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  options: [
         { stat: "Base Blast Defense", max: 12, unit: "%" },
         { stat: "Base Strike Defense", max: 12, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Health", max: 8, unit: "%" }]},
      { name: "Slot 3", options: [
         { stat: "Base Blast Attack", max: 15, unit: "%" },
         { stat: "Base Strike Attack", max: 15, unit: "%" }]}
    ]
 },
{
    name: "Okay, here I go!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Fusion Warrior"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1627.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Defense", max: 12, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
{
    name: "Wooaaaagh!!!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Super Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1641.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Critical", max: 12, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Critical", max: 10, unit: "%" },
        { stat: "Base Strike Defense", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Critical", max: 10, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" }]}
    ]
 },
{
    name: "It hurts my pride...!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1660.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Defense", max: 13, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Special Move Damage", max: 12, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
{
    name: "Vegeta's Anger",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Vegeta"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1434.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 23, unit: "%" }]}
    ]
 },
{
    name: "Let's bring him down, Kale!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Rival Universe"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1644.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Attack", max: 12, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }]}
    ]
 },
  {
    name: "Gehehehe!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Minion"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1663.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", options: [
         {
          stat: "Blast Attack",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Minion"
          }
        },
         {
          stat: "Strike Attack",
          max: 5,
          unit: "%",
          own: true,
          condition: {
          type: "perTagCount",
          tag: "Minion"
          }
        }]}
    ]
 },
  {
    name: "Well this is a pleasant surprise.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Regeneration","Powerful Opponent"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1369.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Blast Defense", max: 12, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Critical", max: 10, unit: "%" },
        { stat: "Base Blast Defense", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" }]}
    ]
 },
  {
    name: "Nnggh...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1559.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Critical", max: 12, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" },
        { stat: "Health Restoration", max: 12, unit: "%" }]}
    ]
 },
  {
    name: "A Battle of the Gods",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1664.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Ki Recovery", max: 13, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 12, unit: "%" }]}
    ]
 },
  {
    name: "The Rescued Saiyans",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1664.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 2",  options: [
         { stat: "Base Blast Defense", max: 18, unit: "%" },
         { stat: "Base Strike Defense", max: 18, unit: "%" }]},
      { name: "Slot 3", options: [
         { stat: "Base Blast Defense", max: 20, unit: "%" },
         { stat: "Base Strike Defense", max: 20, unit: "%" }]}
    ]
 },
  {
    name: "I can feel it. Share your power with me!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Vegeta Clan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1670.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1",  stats: [{ stat: "Base Strike Attack", max: 10, unit: "%" }]},
      { name: "Slot 2",  stats: [{ stat: "Base Strike Attack", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Critical", max: 15, unit: "%" },
        { stat: "Base Strike Attack", max: 15, unit: "%" }
      ]}
    ]
 },
  {
    name: "Righteous Saiyans",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1460.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", options: [
         { stat: "Base Blast Defense", max: 13, unit: "%" },
         { stat: "Base Strike Attack", max: 13, unit: "%" }]},
      { name: "Slot 2", options: [
         { stat: "Base Blast Defense", max: 20, unit: "%" },
         { stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 3",options: [
         { stat: "Health Restoration", max: 12, unit: "%" },
         { stat: "Special Move Damage", max: 12, unit: "%" }]}
    ]
 },
  {
    name: "Bardock... That's my name.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Team Bardock"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1674.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3",options: [
         {
          stat: "Blast Attack",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Team Bardock"
          }
        },
         {
          stat: "Strike Attack",
          max: 5,
          unit: "%",
          condition: {
          type: "perTagCount",
          tag: "Team Bardock"
          }
        }]}
    ]
 },
  {
    name: "HRAAAAAGH!!!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","Super Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1607.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 3",options: [
         { stat: "Base Blast Attack", max: 18, unit: "%" },
         { stat: "Base Strike Attack", max: 18, unit: "%" }]}
    ]
 },
  {
    name: "You must be Frieza...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Frieza Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1681.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }]}
    ]
 },
  {
    name: "Show us what you can do.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Universe Survival Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1685.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]}
    ]
 },
  {
    name: "Friezaaaaaa!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1699.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 12, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 13, unit: "%" }]},
      { name: "Slot 3", effects: [
        "12.00% damage to Powerful Opponent after 30 timer counts"
      ]}
    ]
 },
  {
    name: "If that's your special move, then I want it done right.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Universe Survival Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1582.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Ki Recovery", max: 15, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
  {
    name: "Just my way to build team solidarity.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1692.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Ki Recovery", max: 20, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Critical", max: 20, unit: "%" }]}
    ]
 },
  {
    name: "We hate humans!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1206.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
  {
    name: "Sorry to keep you waiting this long, Caulifla!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Girls"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1648.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 16, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
  {
    name: "Confident Goku!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1297.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", options: [
         { stat: "Base Blast Attack", max: 12, unit: "%" },
         { stat: "Base Strike Attack", max: 12, unit: "%" }]},
      { name: "Slot 2", options: [
         { stat: "Base Blast Attack", max: 13, unit: "%" },
         { stat: "Base Strike Attack", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
  {
    name: "HAAAAA...!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","Universe Survival Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1695.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Ki Recovery", max: 20, unit: "%" }]},
      { name: "Slot 3", options: [
         { stat: "Base Blast Attack", max: 20, unit: "%" },
         { stat: "Base Strike Attack", max: 20, unit: "%" }]}
    ]
 },
  {
    name: "The Revived Hero",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1714.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
  {
    name: "Garr!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Majin Buu Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1618.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 12, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense", max: 13, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
  {
    name: "What are you? Immortal?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Vegeta Clan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1717.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", options: [
         { stat: "Base Ki Recovery", max: 10, unit: "%" },
         { stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 2", options: [
         { stat: "Base Blast Attack", max: 18, unit: "%" },
         { stat: "Base Strike Attack", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
  {
    name: "This is the last Senzu Bean...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1193.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }]}
    ]
 },
  {
    name: "Oh, I'm terrified... Aren't you?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Lineage of Evil"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1727.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }]},
      { name: "Slot 2", options: [
         { stat: "Base Blast Attack", max: 15, unit: "%" },
         { stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Super Saiyan for 60 timer counts"
      ]}
    ]
 }, 
  {
    name: "What a laugh!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Powerful Opponent"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1737.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 25, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Saiyan for 60 timer counts"
      ]}
    ]
 }, 
  {
    name: "You're not getting away from me that easily.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1765.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", options: [
         { stat: "Base Blast Attack", max: 15, unit: "%" },
         { stat: "Base Strike Attack", max: 15, unit: "%" }]},
      { name: "Slot 2", options: [
         { stat: "Base Blast Attack", max: 20, unit: "%" },
         { stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Powerful Opponent for 60 timer counts"
      ]}
    ]
 }, 
  {
    name: "Actually, there is one word that comes to mind!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies","Hybrid Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1631.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 30, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Powerful Opponent for 60 timer counts"
      ]}
    ]
 }, 
  {
    name: "Uwroooooh!!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Regeneration"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1767.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 23, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Sagas From the Movies for 60 timer counts"
      ]}
    ]
 }, 
  {
    name: "I've Eliminated Those Cursed Saiyans!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1503.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 13, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Saiyan for 60 timer counts",
        "10.00% damage to Hybrid Saiyan for 60 timer counts"
      ]}
    ]
 }, 
{
    name: "I'm not done yet!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future Trunks Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1753.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 12, unit: "%" }]}
    ]
 }, 
{
    name: "I'm not done yet!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future Trunks Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1753.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 12, unit: "%" }]}
    ]
 }, 
{
    name: "Enough! I've had all I can take of you!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1751.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }] },
      { name: "Slot 2",stats: [{ stat: "Base Critical", max: 20, unit: "%" }]},
      { name: "Slot 3",  stats: [{ stat: "Base Critical", max: 20, unit: "%" }]}
    ]
 }, 
  {
    name: "I'll give you a handicap",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1541.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", options: [
         { stat: "Base Blast Defense", max: 30, unit: "%" },
         { stat: "Base Strike Defense", max: 30, unit: "%" }],
        options: [
         { stat: "Base Blast Attack", max: 10, unit: "%" },
         { stat: "Base Strike Attack", max: 10, unit: "%" }]},
      { name: "Slot 3",  options: [
         { stat: "Base Blast Defense", max: 10, unit: "%" },
         { stat: "Base Strike Defense", max: 10, unit: "%" }],
        options: [
         { stat: "Base Blast Attack", max: 30, unit: "%" },
         { stat: "Base Strike Attack", max: 30, unit: "%" }]}
    ]
 }, 
  {
    name: "End this futility.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Universe Survival Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1583.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Saiyan for 60 timer counts",
        "10.00% damage to God Ki for 60 timer counts"
      ]}
    ]
 }, 
  {
    name: "It doesn't matter.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1091.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", options: [
         { stat: "Ultimate Damage", max: 10, unit: "%" },
         { stat: "Special Move Damage", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }]}
    ]
 }, 
  {
    name: "Say your prayers!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Universe Rep","Girls"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1775.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", options: [
         { stat: "Base Blast Attack", max: 12, unit: "%" },
         { stat: "Base Strike Attack", max: 12, unit: "%" }] },
      { name: "Slot 2", options: [
         { stat: "Base Blast Attack", max: 18, unit: "%" },
         { stat: "Base Strike Attack", max: 18, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Android for 60 timer counts",
        "10.00% damage to Girls for 60 timer counts"
      ]}
    ]
 }, 
    {
    name: "What a bland attack.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Universe Rep"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1773.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Base Critical", max: 12, unit: "%" }
      ]},
      { name: "Slot 3",stats: [{ stat: "Base Blast Attack", max: 30, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" }
      ]}
    ]
 }, 
    {
    name: "Showdown on a Universal Stage",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1769.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 13, unit: "%" }]},
      { name: "Slot 3", effects: [
        "10.00% damage to Universe Rep for 60 timer counts",
        "10.00% damage to Rival Universe for 60 timer counts"
      ]}
    ]
 }, 
  {
    name: "Bestowed Hope",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1779.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }] }
    ]
 }, 
  {
    name: "I call it Super Saiyan 3.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","Hybrid Saiyan"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1678.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 10, unit: "%" },
        { stat: "Base Blast Defense", max: 10, unit: "%" }
      ] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 10, unit: "%" },
        { stat: "Base Blast Attack", max: 10, unit: "%" }
      ] },
      { name: "Slot 3", stats: [
        { 
          stat: "Blast Defense", 
          max: 5, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan", 
          }
        },
                { 
          stat: "Strike Defense", 
          max: 5, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan 2",
          }
        },
                { 
          stat: "Strike Attack", 
          max: 5, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan 3",
          }
        },
                { 
          stat: "Blast Attack", 
          max: 5, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "God Ki", 
          }
        }
      ] }
    ]
 }, 
  {
    name: "Fighting Alongside Former Foes",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","Lineage of Evil"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1787.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
                { 
          stat: "Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Son Family", 
          }
        }
      ] },
      { name: "Slot 3", stats: [
                { 
          stat: "Strike Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Frieza Force", 
          }
        }
      ] }
    ]
 }, 
  {
    name: "Lightning-Fast Preemptive Strike",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Son Family"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1772.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", options: [
         { stat: "Base Blast Attack", max: 15, unit: "%" },
         { stat: "Base Strike Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 12, unit: "%" },
        { stat: "Base Strike Attack", max: 12, unit: "%" }] },
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 13, unit: "%" },
         { stat: "Base Strike Defense", max: 13, unit: "%" }
      ] }
    ]
 }, 
{
    name: "It's over.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1810.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 20, unit: "%" }] },
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        { stat: "Base Strike Attack", max: 10, unit: "%" }
      ] }
    ]
 }, 
{
    name: "It's okay, guys... I'll be right there.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Frieza Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1834.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 30, unit: "%" }] },
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }] }
    ]
 }, 
{
    name: "Hah! Take that!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Frieza Force"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1655.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" }] },
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }] }
    ]
 }, 
{
    name: "You Thought That Would Scare Me?!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Cell Saga (Z)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1314.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Ki Recovery", max: 20, unit: "%" }] },
      { name: "Slot 2", options: [
         { stat: "Base Blast Attack", max: 25, unit: "%" },
         { stat: "Base Strike Attack", max: 25, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Special Move Damage", max: 12, unit: "%" },
        { stat: "Health Restoration", max: 12, unit: "%" }
      ] }
    ]
 }, 
{
    name: "The only monster here is you!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["DB"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1846.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", options: [
         { stat: "Base Blast Attack", max: 20, unit: "%" },
         { stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 10, unit: "%" }] }
    ]
 }, 
{
    name: "Now I'll send you back to your ghost land!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1821.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }]},
      { name: "Slot 3", options: [
         { stat: "Base Blast Attack", max: 20, unit: "%" },
         { stat: "Base Strike Attack", max: 20, unit: "%" }] }
    ]
 }, 
{
    name: "Unexpected Assault",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Regeneration","Powerful Opponent"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1853.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 16, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" }]},
      { name: "Slot 3", stats: [ { stat: "Base Strike Attack", max: 20, unit: "%" }] }
    ]
 }, 
{
    name: "The outcome will be different this time, Goku!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Otherworld Warrior"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1848.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 10, unit: "%" },
        { stat: "Base Blast Defense", max: 10, unit: "%" }
      ] },
      { name: "Slot 2", options: [
         { 
          stat: "Blast Defense", 
          max: 13, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Sagas From the Movies", 
          }
        },
        { 
          stat: "Strike Defense", 
          max: 13, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Sagas From the Movies", 
          }
        }]},
      { name: "Slot 3", stats: [ { stat: "Base Health", max: 10, unit: "%" }] }
    ]
 }, 
{
    name: "Face of Fury",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Son Family","Hybrid Saiyan"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1798.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [
        { 
          stat: "Strike Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "teamTags",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Son Family", 
          }
        }
      ]},
      { name: "Slot 3", stats: [        
        {
         stat: "Blast Attack",
         max: 10,
         unit: "%",
         condition: {
           type: "teamTags",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Vegeta Clan", "Sagas From the Movies"],  // список тегов
           match: "any",                // можно "all" или "any"
         }     
        }
      ] }
    ]
 }, 
{
    name: "Heh-heh-heh...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1870.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Critical", max: 18, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" },
        { 
          stat: "Strike Attack", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Team Bardock", 
          }
        }
      ] }
    ]
 }, 
{
    name: "I see you decided to show yourself, monster.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Cell Saga (Z)"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1216.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Health Restoration", max: 10, unit: "%" },
        {
         stat: "Strike & Blast Defense",
         max: 10,
         unit: "%",
         own: true,
         condition: {
           type: "selfTag",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Android", "Regeneration"],  // список тегов
           match: "all",                // можно "all" или "any"
         }     
        }
      ] }
    ]
 }, 
{
    name: "Cell, huh?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Cell Saga (Z)"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1250.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" },
        { 
          stat: "Strike Defense", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan", 
          }
        }
      ] }
    ]
 }, 
{
    name: "Cell Games Announcement",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Powerful Opponent"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1295.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 12, unit: "%" },
        { stat: "Base Blast Defense", max: 12, unit: "%" }
      ] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Critical", max: 15, unit: "%" },
        { 
          stat: "Blast Attack", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Regeneration", 
          }
        }
      ] }
    ]
 }, 
{
    name: "A Menacing Transformation",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Powerful Opponent"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1816.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" },
        {
         stat: "Strike Attack",
         max: 12,
         unit: "%",
         own: true,
         condition: {
           type: "selfTag",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Lineage of Evil", "Sagas From the Movies"],  // список тегов
           match: "all",                // можно "all" или "any"
         }     
        }
      ] }
    ]
 }, 
{
    name: "Goku Enraged",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan","Super Warrior","Regeneration"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1887.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Critical", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 18, unit: "%" },
        { 
          stat: "Strike & Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Saiyan Saga (Z)", 
          }
        }
      ] }
    ]
 }, 
{
    name: "I'm glad I wasn't too late...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Majin Buu Saga (Z)"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1904.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" },
        { 
          stat: "Blast Attack", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Hybrid Saiyan", 
          }
        }
      ] }
    ]
 }, 
{
    name: "The Supreme Kai",
    type: "Gold Equipment",
    conditions: { 
     tags: ["God Ki","Majin Buu Saga (Z)"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1907.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" },
        { stat: "Base Blast Defense", max: 15, unit: "%" }
      ] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Ki Recovery", max: 10, unit: "%" },
        { 
          stat: "Strike & Blast Defense", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Support Type", 
          }
        }
      ] }
    ]
 }, 
{
    name: "Assailant Over the Waters",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Powerful Opponent"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1944.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" },
        { 
          stat: "Strike Attack", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan", 
          }
        }
      ] }
    ]
 }, 
{
    name: "Haven't you learned? Your puny blasts will do nothing!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1915.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 18, unit: "%" },
        { 
          stat: "Strike & Blast Defense", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Shadow Dragon", 
          }
        }
      ] }
    ]
 }, 
{
    name: "Technique Too Fast for the Eye",
    type: "Gold Equipment",
    conditions: { 
     tags: ["GT"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1913.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" },
        { 
          stat: "Strike Attack", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan 4", 
          }
        }
      ] }
    ]
 }, 
{
    name: "Watch this!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1555.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 25, unit: "%" },
        { 
          stat: "Strike & Blast Defense", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Defense Type", 
          }
        }
      ] }
    ]
 }, 
   {
    name: "He had his chance...now try this!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1924.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Health", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" },
        { stat: "Base Blast Attack", max: 15, unit: "%" }
      ]},
      { name: "Slot 3", stats: [
        { 
          stat: "Strike & Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Turles Crusher Corps", 
          }
        }
      ] }
    ]
 }, 
   {
    name: "Keep cool, I didn't come here to help you.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1921.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 18, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" },
        { 
          stat: "Strike & Blast Defense", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Regeneration", 
          }
        }
      ] }
    ]
 }, 
   {
    name: "Fine, whatever. Though it would've looked really cool...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Hybrid Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1928.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" },
        { stat: "Base Blast Attack", max: 12, unit: "%" }
      ] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 10, unit: "%" },
        { 
          stat: "Strike & Blast Defense", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Kids", 
          }
        }
      ] }
    ]
 }, 
   {
    name: "Don't you dare interfere!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Vegeta Clan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1931.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" },
        { 
          stat: "Strike & Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Super Saiyan 2", 
          }
        }
      ] }
    ]
 }, 
   {
    name: "A most brilliant display!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Future Trunks Saga (S)"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1939.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" },
        { 
          stat: "Blast Attack", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Saiyan", 
          }
        }
      ] }
    ]
 }, 
   {
    name: "Small, but can still fight!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["DAIMA","Goku"], 
     match: "any" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1960.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" },
         { 
          stat: "Strike Attack", 
          max: 15, 
          unit: "%", 
          condition: { 
           type: "selfTag",// 👈 новый тип "teamTags", "selfTag",
           tags: ["Weapon Wielder", "Super Saiyan 2"],  // список тегов
           match: "any",
          }
        }
      ] }
    ]
 }, 
   {
    name: "Pan!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Sagas From the Movies"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1799.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Defense", max: 25, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 10, unit: "%" },
        { 
          stat: "Strike Attack", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Hybrid Saiyan", 
          }
        }
      ] }
    ]
 }, 
   {
    name: "Ugh!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Hybrid Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1616.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" },
        { 
          stat: "Blast Attack", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Androids Saga (Z)", 
          }
        }
      ] }
    ]
 }, 
   {
    name: "Replicating Goku Black",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Powerful Opponent"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1778.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Health Restoration", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" },
        { stat: "Ultimate Damage", max: 10, unit: "%" }
      ]},
      { name: "Slot 3", stats: [{ stat: "Base Health", max: 12, unit: "%" },
        { 
          stat: "Strike Attack", 
          max: 12, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Future Trunks Saga (S)", 
          }
        }
      ] }
    ]
 }, 
 {
    name: "Standoff Against Cell",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Son Family"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1299.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" },
        { 
          stat: "Blast Attack", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Cell Saga (Z)", 
          }
        }
      ] }
    ]
 }, 
 {
    name: "You look surprised...",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Android"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1362.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 18, unit: "%" },
        { 
          stat: "Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Cell Saga (Z)", 
          }
        }
      ] }
    ]
 }, 
 {
    name: "Preemptive Opening Strike",
    type: "Gold Equipment",
    conditions: { 
     tags: ["DAIMA"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1959.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Ultimate Damage", max: 12, unit: "%" },
        { 
          stat: "Strike & Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
           type: "selfTag",// 👈 новый тип "teamTags", "selfTag",
           tags: ["GRN", "YEL"],  // список тегов
           match: "any",
          }
        }
      ] }
    ]
 }, 
 {
    name: "Hee-hee-hee-hee!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Son Family"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1959.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" },
        { 
          stat: "Strike Attack", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "DAIMA", 
          }
        }
      ] }
    ]
 }, 
 {
    name: "You dare get in my way?",
    type: "Gold Equipment",
    conditions: { 
     tags: ["DB"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1982.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Blast Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 12, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" },
        { 
          stat: "Strike & Blast Defense", 
          max: 13, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Dragon Ball Saga", 
          }
        }
      ] }
    ]
 },
{
    name: "Yes, that's a very good question.",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Support Type"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1691.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 20, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Defense", max: 20, unit: "%" },
        { 
          stat: "Strike & Blast Defense", 
          max: 15, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Event Exclusive", 
          }
        }
      ] }
    ]
 },
  {
    name: "Let's amp this up!",
    type: "Gold Equipment",
    conditions: { 
     tags: ["Saiyan"], 
     match: "all" // варианты: "all" (и), "any" (или)
     },
    mainImage: "Image/Equip_img/Gold/EqIco_1646.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Health Restoration", max: 15, unit: "%" },
        { 
          stat: "Strike & Blast Attack", 
          max: 10, 
          unit: "%", 
          condition: { 
            type: "selfTag",   // 👈 новый тип "teamTags", "selfTag",
            tag: "Universe Rep", 
          }
        }
      ] }
    ]
  },
  
  {
    name: "Becoming Super Saiyan",
    type: "Gold Equipment",
    conditions: { tags: ["Super Saiyan", "Fusion Warrior"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1276.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Defense", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Ki Recovery", max: 7, unit: "%" }] }
    ]
  },
  
  {
    name: "Angry Super Saiyan!",
    type: "Gold Equipment",
    conditions: { tags: ["Super Saiyan"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1037.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Strike Attack", max: 15, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Strike Defense", max: 12.5, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Ki Recovery", max: 5, unit: "%" }] }
    ]
  },

  {
    name: "Decisive Moment",
    type: "Gold Equipment",
    conditions: { tags: ["Fusion Warrior"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1897.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Special Move Damage", max: 10, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Health", max: 10, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Strike Attack", max: 20, unit: "%" },
        {
          stat: "Strike Attack",
          max: 12,
          unit: "%",
          condition: {
         type: "selfTags",
         tags: ["Goku", "Vegeta"],
         match: "any" // варианты: "all" (и), "any" (или)
         }
        }]}
    ]
  },

  {
    name: "Come on and give me your best shot",
    type: "Gold Equipment",
    conditions: { tags: ["Fusion Warrior"], 
     match: "any" // варианты: "all" (и), "any" (или)
    },
    mainImage: "Image/Equip_img/Gold/EqIco_1526.webp",  // картинка экипировки
    rarity: "Gold", // Gold, Unique, Silver, Bronze
    slots: [
      { name: "Slot 1", stats: [{ stat: "Base Critical", max: 12, unit: "%" }] },
      { name: "Slot 2", stats: [{ stat: "Base Blast Defense ", max: 15, unit: "%" }]},
      { name: "Slot 3", stats: [{ stat: "Base Blast Attack", max: 22, unit: "%" }] }
    ]
  },


];
