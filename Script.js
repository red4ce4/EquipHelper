document.addEventListener('DOMContentLoaded', () => {
  if (typeof characters === 'undefined' || typeof equipment === 'undefined') return;

  const members = document.querySelectorAll('.member');
  const grids   = document.querySelectorAll('.description-grid');

  const rarityFrames = {
    Platinum: "Image/Type_Equipement/EqIco_frmPlatinum.webp",
    GoldUp:   "Image/Type_Equipement/E_Gold_Up.png",
    UniqueUp: "Image/Type_Equipement/E_Unique_Up.png",
    Gold:     "Image/Type_Equipement/E_Gold.png",
    Unique:   "Image/Type_Equipement/E_Unique.png",
    Silver:   "Image/Type_Equipement/E_Silver.png",
    Bronze:   "Image/Type_Equipement/E_Bronze.png"
  };

      const typeColors = {
      RED: '#b83131ff',   // мягкий розово-красный
      YEL: '#b89f31ff',   // нежно-жёлтый
      GRN: '#48b831ff',   // пастельно-зелёный
      BLU: '#313eb8ff',   // светло-голубой
      PUR: '#a831b8ff'    // мягкий фиолетовый
    };

    const rarityIcons = {
    Ultra: "Image/Characters/Rarity/Rarity_Ultra.png",
    "Legends Limited": "Image/Characters/Rarity/Rarity_LL.png",
    Sparking: "Image/Characters/Rarity/Rarity_Saprking.png",
    Extreme: "Image/Characters/Rarity/Rarity_Extreme.png",
    Hero: "Image/Characters/Rarity/Rarity_Hero.png",
  };

      const rarityIconsMini = {
      Ultra: "Image/Characters/Rarity/Mini/Rarity_Ultra_Mini.png",
      "Legends Limited":"Image/Characters/Rarity/Mini/Rarity_LL_icon.png",
      Sparking: "Image/Characters/Rarity/Mini/Rarity_Saprking_Mini.png",
      Extreme: "Image/Characters/Rarity/Mini/Rarity_Extreme_Mini.png",
      Hero: "Image/Characters/Rarity/Mini/Rarity_Hero_Mini.png"
    };

    const typeIconsMini = {
    RED: "Image/Characters/Type/Type_RED.png",
    BLU: "Image/Characters/Type/Type_BLU.png",
    GRN: "Image/Characters/Type/Type_GRN.png",
    YEL: "Image/Characters/Type/Type_YEL.png",
    PUR: "Image/Characters/Type/Type_PUR.png"
  };
  
    function getRarityFromKey(key) {
    if (key.startsWith("Ultra")) return "Ultra";
    if (key.startsWith("LL")) return "Legends Limited";
    if (key.startsWith("SP")) return "Sparking";
    if (key.startsWith("Extreme")) return "Extreme";
    if (key.startsWith("Hero")) return "Hero";
    return "Other";
  }


  // ---------- МОДАЛЬНОЕ ОКНО ПЕРСОНАЖЕЙ (как было у тебя) ----------
  const charModal    = document.getElementById('char-modal');
  const charGrid     = charModal?.querySelector('.char-modal__grid');
  const charClose    = charModal?.querySelector('.char-modal__close');
  const charBackdrop = charModal?.querySelector('.char-modal__backdrop');
  let activeMemberEl = null;

  const showCharModal = () => { if (charModal) charModal.hidden = false; };
  const hideCharModal = () => { if (charModal) charModal.hidden = true; activeMemberEl = null; };

  charClose?.addEventListener('click', hideCharModal);
  charBackdrop?.addEventListener('click', hideCharModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && charModal && !charModal.hidden) hideCharModal(); });

  // построение сетки персонажей (кнопки выбора по иконке)
if (charGrid) {
  charGrid.innerHTML = '';
  const groups = { Ultra: [], "Legends Limited": [], Sparking: [], Extreme: [], Hero: [] };

  Object.entries(characters).forEach(([key, imgSrc]) => {
    let rarity = "Other";
    if (key.startsWith("Ultra")) rarity = "Ultra";
    else if (key.startsWith("LL")) rarity = "Legends Limited";
    else if (key.startsWith("SP")) rarity = "Sparking";
    else if (key.startsWith("Extreme")) rarity = "Extreme";
    else if (key.startsWith("Hero")) rarity = "Hero";

    // Если imgSrc массив, берем первую картинку
    let src = Array.isArray(imgSrc) ? imgSrc[0] || '' : imgSrc;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'char-card';
    btn.innerHTML = `<img src="${src}" alt="${key}">`;
    btn.addEventListener('click', () => {
      if (!activeMemberEl) return;
      const select = activeMemberEl.querySelector('.character-select');
      if (!select) return;
      select.value = key;
      // триггерим событие change чтобы всё обновилось
      select.dispatchEvent(new Event('change', { bubbles: true }));
      hideCharModal();
    });

    groups[rarity]?.push(btn);
  });

  Object.entries(groups).forEach(([rarity, buttons]) => {
    if (!buttons.length) return;
    const groupDiv = document.createElement('div');
    groupDiv.className = 'char-group';

    // вместо текста подставляем иконку
    const rarityImg = rarityIcons[rarity] 
      ? `<img src="${rarityIcons[rarity]}" alt="${rarity}" class="rarity-icon">`
      : `<span>${rarity}</span>`;

    groupDiv.innerHTML = rarityImg;

    const gridDiv = document.createElement('div');
    gridDiv.className = 'char-group__grid';
    buttons.forEach(btn => gridDiv.appendChild(btn));
    groupDiv.appendChild(gridDiv);
    charGrid.appendChild(groupDiv);
  });
}

  // кнопка открытия модалки на каждом member
  members.forEach(memberEl => {
    const byIcon = memberEl.querySelector('.choose-by-icon');
    if (!byIcon) return;
    byIcon.addEventListener('click', () => {
      activeMemberEl = memberEl;
      showCharModal();
    });
  });

// ----------------- ХЕЛПЕРЫ ПО ТЕГАМ -----------------
// =================== ВЕСЫ СТАТОВ ===================
  const statWeights = {
    "Strike Attack": 1.0,
    "Blast Attack": 1.0,
    "Strike & Blast Attack": 1.0,
    "Base Strike Attack": 0.4,
    "Base Blast Attack": 0.4,
    "Base Strike & Blast Attack": 0.4,

    "Strike Defense": 0.8,
    "Blast Defense": 0.8,
    "Strike & Blast Defense": 0.8,
    "Base Strike Defense": 0.3,
    "Base Blast Defense": 0.3,
    "Base Strike & Blast Defense": 0.3,

    "Health": 0.7,
    "Base Health": 0.5,

    "Inflicted Damage": 1.2,
    "Blast Damage inflicted":1.0,
    "Special Move Damage": 0.9,
    "Ultimate Damage": 1.0,
    "Health Restoration": 0.4,
    "Sustained Damage CUT":0.9,

    "Ki Recovery": 0.4,
    "Critical": 0.3
  };

  // =================== ФУНКЦИИ ===================
  const toLower = s => String(s || '').trim().toLowerCase();

  function getTeamTagCount(tag, selectedCharacters) {
    const need = toLower(tag);
    return selectedCharacters.reduce((acc, ch) => {
      const tags = (characterTags[ch.key] || []).map(toLower);
      return acc + (tags.includes(need) ? 1 : 0);
    }, 0);
  }

  function charHasTagObj(currentChar, tag) {
    const tagNeed = toLower(tag);
    if (!currentChar) return false;
    const tags = Array.isArray(currentChar.tags) ? currentChar.tags.map(toLower) : (characterTags[currentChar.key] || []).map(toLower);
    return tags.includes(tagNeed);
  }

  function checkStatCondition(condition, selectedCharacters, currentChar) {
    if (!condition) return true;

    if (condition.type === "teamTags") {
      if (Array.isArray(condition.tags)) {
        const teamTagSet = new Set(selectedCharacters.flatMap(ch => (characterTags[ch.key] || []).map(toLower)));
        if (condition.match === "all") return condition.tags.every(t => teamTagSet.has(toLower(t)));
        return condition.tags.some(t => teamTagSet.has(toLower(t)));
      }
      if (condition.tag) {
        return getTeamTagCount(condition.tag, selectedCharacters) >= (condition.count || 1);
      }
    }

    if (condition.type === "selfTag" && condition.tag) return charHasTagObj(currentChar, condition.tag);
    if (condition.type === "selfTags" && Array.isArray(condition.tags)) {
      const tags = (currentChar.tags || []).map(toLower);
      if (condition.match === "all") return condition.tags.every(t => tags.includes(toLower(t)));
      return condition.tags.some(t => tags.includes(toLower(t)));
    }
    if (condition.type === "selfName") return currentChar.key === condition.name;
    if (condition.type === "allyHasAllTags") {
      return selectedCharacters.some(ch => {
        if (ch.key === currentChar.key) return false;
        const tags = (characterTags[ch.key] || []).map(toLower);
        return (condition.tags || []).every(t => tags.includes(toLower(t)));
      });
    }

    return true;
  }

    function calculateStatValue(stat, selectedCharacters, currentChar) {
      if (stat.excludeFromSum) return { normal: 0, own: 0 };
      const weight = statWeights[stat.stat] ?? 1.0;

      // условие активно?
      const active = !stat.condition || checkStatCondition(stat.condition, selectedCharacters, currentChar);
      if (!active) return { normal: 0, own: 0 };

      const value = (stat.max || 0) * weight;

      if (stat.own) {
        return { normal: 0, own: value }; // own-бафф
      } else {
        return { normal: value, own: 0 }; // обычный
      }
    }


      function sumEquipmentPercent(eq, selectedCharacters, currentChar) {
        const charStars = currentChar?.stars || 0;
        let normal = 0;
        let own = 0;

        eq.slots.forEach(slot => {
          if (slot.unlockCondition && (slot.unlockCondition.stars || 0) > charStars) return;

          // фиксированные статы
          if (slot.stats) {
            slot.stats.forEach(stat => {
              const val = calculateStatValue(stat, selectedCharacters, currentChar);
              normal += val.normal;
              own += val.own;
            });
          }

          // OR-варианты
          if (slot.options) {
            const optionVals = slot.options.map(opt => calculateStatValue(opt, selectedCharacters, currentChar));
            // выбираем лучший вариант
            const best = optionVals.reduce((acc, v) => ({
              normal: Math.max(acc.normal, v.normal),
              own: Math.max(acc.own, v.own)
            }), { normal: 0, own: 0 });

            normal += best.normal;
            own += best.own;
          }
        });

        // применяем own как множитель
        const total = (1 + normal / 100) * (1 + own / 100) - 1;
        return +(total * 100).toFixed(2);
      }

  function getInactiveReason(stat, selectedCharacters, currentChar) {
    const cond = stat?.condition;
    if (!cond) return '';

    if (cond.type === "teamTags") {
      if (Array.isArray(cond.tags)) return `need ${cond.tags.join(cond.match === "all" ? ' and ' : ' or ')}`;
      if (cond.tag) {
        const have = getTeamTagCount(cond.tag, selectedCharacters);
        const need = cond.count || 1;
        return need > 1 ? `need ${need} ${cond.tag}` : `need ${cond.tag}`;
      }
    }

    if (cond.type === "selfTag" && cond.tag) return `need ${cond.tag}`;
    if (cond.type === "selfTags" && Array.isArray(cond.tags)) return `need ${cond.tags.join(cond.match === "all" ? ' and ' : ' or ')}`;

    return 'need condition';
  }

  function clearContainer(container) { container.innerHTML = ''; }

  function renderEquipment(container, equip, selectedCharacters, currentChar) {
    // всегда чистим контейнер перед рендером
    container.innerHTML = '';

    const slotDiv = document.createElement('div');
    slotDiv.className = 'slot';

    // картинка + рамка
    const imgWrapper = document.createElement('div');
    imgWrapper.style.position = 'relative';
    imgWrapper.style.width = '60px';
    imgWrapper.style.height = '60px';
    imgWrapper.style.margin = '5px auto 5px';

    const mainImg = document.createElement('img');
    mainImg.src = equip.mainImage || '';
    mainImg.alt = equip.name || '';
    mainImg.style.width = '50px';
    mainImg.style.height = '50px';
    mainImg.style.position = 'relative';
    mainImg.style.zIndex = '1';
    mainImg.style.marginTop = '5px';

    const frameImg = document.createElement('img');
    frameImg.src = rarityFrames[equip.rarity] || "";
    frameImg.alt = 'Frame';
    frameImg.style.position = 'absolute';
    frameImg.style.top = '0';
    frameImg.style.width = '60px';
    frameImg.style.height = '60px';
    frameImg.style.zIndex = '2';

    imgWrapper.appendChild(mainImg);
    imgWrapper.appendChild(frameImg);
    slotDiv.appendChild(imgWrapper);

    // итоговый % (под иконкой)
    const totalPercent = sumEquipmentPercent(equip, selectedCharacters, currentChar);
    const percentDiv = document.createElement('div');
    percentDiv.textContent = `+${totalPercent}%`;
    percentDiv.style.fontSize = '12px';
    percentDiv.style.color = 'white';
    percentDiv.style.position = 'absolute';
    percentDiv.style.bottom = '-15px';
    percentDiv.style.left = '50%';
    percentDiv.style.transform = 'translateX(-50%)';
    imgWrapper.appendChild(percentDiv);

    // слоты
    equip.slots.forEach(slot => {
      const statRow = document.createElement('div');
      statRow.className = 'slot-row';
      const lines = [];

      // если слот закрыт по звёздам — помечаем locked и НЕ выдаём объяснение
      if (slot.unlockCondition && (slot.unlockCondition.stars || 0) > (currentChar?.stars || 0)) {
        lines.push(`<span style="color:#ff4e4e">(locked)</span>`);
        statRow.innerHTML = lines.join('<br>');
        slotDiv.appendChild(statRow);
        return;
      }

      // фиксированные статы
      if (slot.stats) {
        lines.push(
          slot.stats.map(stat => {
            const active = !stat.condition || checkStatCondition(stat.condition, selectedCharacters, currentChar);
            if (active) return `${stat.stat} ${stat.max}${stat.unit || ''}`;
            const reason = getInactiveReason(stat, selectedCharacters, currentChar);
            return `<span style="color:#ff4e4e">${stat.stat} ${stat.max}${stat.unit || ''} (${reason})</span>`;
          }).join('<br>')
        );
      }

      // OR-варианты (options)
      if (slot.options) {
        lines.push(
          slot.options.map(opt => {
            const active = !opt.condition || checkStatCondition(opt.condition, selectedCharacters, currentChar);
            if (active) return `${opt.stat} ${opt.max}${opt.unit || ''}`;
            const reason = getInactiveReason(opt, selectedCharacters, currentChar);
            return `<span style="color:gray">${opt.stat} ${opt.max}${opt.unit || ''} (${reason})</span>`;
          }).join(' <b>OR</b> ')
        );
      }

      // эффекты
      if (slot.effects) lines.push(slot.effects.join('<br>'));

      statRow.innerHTML = lines.join('<br>');
      slotDiv.appendChild(statRow);
    });

    container.appendChild(slotDiv);
  }

  // ----------------- МЭЧ ЭКИПА -----------------
  function normalizeTags(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.map(toLower).filter(Boolean);
  }

  function equipmentMatchesCharacter(equip, charTags) {
    if (!equip || !equip.conditions || !Array.isArray(equip.conditions.tags)) return false;
    const eqTags = normalizeTags(equip.conditions.tags);
    const chTags = normalizeTags(charTags || []);
    if (chTags.length === 0) return false;
    const mode = (equip.conditions.match || 'any').toString().trim().toLowerCase();
    return mode === 'all' ? eqTags.every(t => chTags.includes(t)) : eqTags.some(t => chTags.includes(t));
  }

  // ----------------- ПАГИНАЦИЯ И ОБНОВЛЕНИЕ -----------------
  const equipPages = new Map();

function updateAllEquipment() {
  const selectedCharacters = Array.from(members).map(m => {
    const key = m.querySelector('.character-select')?.value || '';
    const stars = parseInt(m.querySelector('.star-select')?.value || "0", 10);
    return { key, stars, tags: characterTags?.[key] || [] };
  }).filter(ch => ch.key);

  members.forEach((member, index) => {
    const charKey   = member.querySelector('.character-select')?.value || '';
    const charStars = parseInt(member.querySelector('.star-select')?.value || "0", 10);
    const img       = member.querySelector('.main-character');
    const grid      = grids[index];
    const containers = grid?.querySelectorAll('.equip-container') || [];

    const currentChar = {
      key: charKey,
      stars: charStars,
      tags: characterTags?.[charKey] || []
    };

    // ---------- Цвет ФОНА по типу ----------
    const charTypeTag = currentChar.tags.find(t => ["RED","YEL","GRN","BLU","PUR"].includes(t));
    member.style.backgroundColor = typeColors[charTypeTag] || 'transparent';

    // ---------- Портрет с плавной сменой картинок ----------
    if (img) {
      let imgs = characters[charKey];
      if (typeof imgs === 'string') imgs = [imgs];
      if (!Array.isArray(imgs)) imgs = [];

      // убираем старые интервалы
      if (img._fadeInterval) clearInterval(img._fadeInterval);

      if (img && imgs.length > 1) {
          let index = 0;
          img.src = imgs[index];
          img.style.transition = 'opacity 0.5s ease-in-out'; // плавное появление/исчезновение

          // убираем старые интервалы, если они есть
          if (img._fadeInterval) clearInterval(img._fadeInterval);

          img._fadeInterval = setInterval(() => {
            index = (index + 1) % imgs.length;
            img.style.opacity = 0; // начинаем исчезать
            setTimeout(() => {
              img.src = imgs[index]; // меняем картинку
              img.style.opacity = 1; // плавно появляем
            }, 500); // время фейда совпадает с transition
          }, 4000); // смена каждые 4 секунды
        } else if (img && imgs.length === 1) {
          img.src = imgs[0];
          if (img._fadeInterval) clearInterval(img._fadeInterval);
          img.style.opacity = 1;
        }


      // удаляем старые extra картинки (не нужны при fade)
      const oldExtra = img.parentElement.querySelectorAll('.extra-character-img');
      oldExtra.forEach(e => e.remove());

      img.alt = charKey;
    }

    // ---------- Подбор и сортировка эквипа ----------
    const matched = equipment
      .filter(eq => equipmentMatchesCharacter(eq, currentChar.tags))
      .sort((a, b) => sumEquipmentPercent(b, selectedCharacters, currentChar) - sumEquipmentPercent(a, selectedCharacters, currentChar));

    // ---------- Пагинация ----------
    const perPage = containers.length || 3;
    const page = equipPages.get(index) || 0;
    const maxPage = Math.max(1, Math.ceil(matched.length / perPage));
    const current = Math.min(page, maxPage - 1);
    equipPages.set(index, current);

    const start = current * perPage;
    const visible = matched.slice(start, start + perPage);

    const pageLabel = grid?.querySelector('.equip-page') || member.querySelector('.equip-page');
    const leftBtn   = grid?.querySelector('.equip-nav-btn.left');
    const rightBtn  = grid?.querySelector('.equip-nav-btn.right');

    if (pageLabel) pageLabel.textContent = `${current + 1} / ${maxPage}`;
    if (leftBtn) leftBtn.disabled = current === 0;
    if (rightBtn) rightBtn.disabled = current >= maxPage - 1;

    // ---------- Рендер эквипа ----------
    containers.forEach((container, i) => {
      container.innerHTML = '';
      if (visible[i]) renderEquipment(container, visible[i], selectedCharacters, currentChar);
      else clearContainer(container);
    });

    const container = member.querySelector('.Container');
    if (container) {
      // ---------- Рамка Зенкай ----------
      let zenkaiDiv = container.querySelector('.zenkai-frame');
      if (currentChar.tags.includes("Zenkai")) {
        if (!zenkaiDiv) {
          zenkaiDiv = document.createElement('div');
          zenkaiDiv.className = 'zenkai-frame';
          container.appendChild(zenkaiDiv);
        }
        zenkaiDiv.innerHTML = `<img src="Image/Characters/Rarity/Zenkai/Frame_Zenkai.png">`;
      } else if (zenkaiDiv) {
        zenkaiDiv.remove();
      }

      // ---------- Мини-редкость ----------
      let miniDiv = container.querySelector('.mini-rarity');
      if (!miniDiv) {
        miniDiv = document.createElement('div');
        miniDiv.className = 'mini-rarity';
        container.appendChild(miniDiv);
      }
      const rarity = getRarityFromKey(charKey);

      if (rarity === "Legends Limited") {
        const sparkingSrc = rarityIconsMini["Sparking"] || '';
        const llSrc = rarityIconsMini["Legends Limited"] || '';
        miniDiv.classList.add("ll");
        miniDiv.innerHTML = `
          ${llSrc ? `<img src="${llSrc}" alt="Legends Limited" class="mini-rarity-ll">` : ''}
          ${sparkingSrc ? `<img src="${sparkingSrc}" alt="Sparking" class="mini-rarity-sparking">` : ''}
        `;
      } else {
        miniDiv.classList.remove("ll");
        const src = rarityIconsMini[rarity] || '';
        miniDiv.innerHTML = src ? `<img src="${src}" alt="${rarity}" class="mini-rarity-icon">` : '';
      }

      // ---------- Мини-тип ----------
      let typeDiv = container.querySelector('.mini-type');
      if (!typeDiv) {
        typeDiv = document.createElement('div');
        typeDiv.className = 'mini-type';
        container.appendChild(typeDiv);
      }
      const typeSrc = typeIconsMini[charTypeTag] || '';
      typeDiv.innerHTML = typeSrc ? `<img src="${typeSrc}" alt="${charTypeTag}" class="mini-type-icon">` : '';
    }
  });
}


  members.forEach((member, index) => {
  const grid = grids[index];
  if (!grid) return;

  // Делегирование клика на кнопки внутри grid
  grid.addEventListener('click', (e) => {
    let page = equipPages.get(index) || 0;
    if (e.target.classList.contains('equip-nav-btn')) {
      if (e.target.classList.contains('left') && page > 0) {
        equipPages.set(index, page - 1);
        updateAllEquipment();
      }
      if (e.target.classList.contains('right')) {
        equipPages.set(index, page + 1);
        updateAllEquipment();
      }
    }
  });
});

  // ----------------- ИНИЦИАЛИЗАЦИЯ СЕЛЕКТОВ, ЗВЁЗД, НАВИГАЦИИ -----------------
members.forEach((member, index) => {
  const select = member.querySelector('.character-select');

  // если звёздный селект ещё не создан
  if (!member.querySelector('.star-select')) {
    const starSelect = document.createElement('select');
    starSelect.className = 'star-select';
    for (let i = 1; i <= 14; i++) {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `${i}★`;
      starSelect.appendChild(opt);
    }
    member.insertBefore(starSelect, member.querySelector('.Container') || member.firstChild);
    starSelect.addEventListener('change', updateAllEquipment);
  }

  // заполняем персонажей если пустой селект
  if (select && select.options.length <= 1) {
    Object.keys(characters).forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = key;
      select.appendChild(opt);
    });
  }

  // === НАВИГАЦИЯ ПО ЭКВИПУ ===
  const grid = member.querySelector('.description-grid');
  if (grid) {
    // кнопки в твоей разметке
    const leftBtn = grid.querySelector('.equip-nav-btn.left');
    const rightBtn = grid.querySelector('.equip-nav-btn.right');

    // инициализация страницы
    if (!equipPages.has(index)) equipPages.set(index, 0);

    // обработчик "влево"
    leftBtn?.addEventListener('click', () => {
      let page = equipPages.get(index) || 0;
      if (page > 0) {
        equipPages.set(index, page - 1);
        updateAllEquipment();
      }
    });

    // обработчик "вправо"
    rightBtn?.addEventListener('click', () => {
      let page = equipPages.get(index) || 0;
      equipPages.set(index, page + 1);
      updateAllEquipment();
    });
  }

  // слушатели на смену персонажа
  select?.addEventListener('change', () => {
    equipPages.set(index, 0); // сброс страницы при смене персонажа
    updateAllEquipment();
  });
});

  // старт
  updateAllEquipment();
});