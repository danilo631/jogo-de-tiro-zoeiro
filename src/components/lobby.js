import { getCharacterSkins, getWeaponSkins } from "../api/skinAPI";

const loadSkins = async () => {
  const characterSkins = await getCharacterSkins();
  const weaponSkins = await getWeaponSkins();

  const characterSelect = document.getElementById("characterSelect");
  const weaponSelect = document.getElementById("weaponSelect");

  characterSkins.forEach(skin => {
    const option = document.createElement("option");
    option.value = skin.id;
    option.textContent = skin.name;
    characterSelect.appendChild(option);
  });

  weaponSkins.forEach(skin => {
    const option = document.createElement("option");
    option.value = skin.id;
    option.textContent = skin.name;
    weaponSelect.appendChild(option);
  });
};

document.addEventListener("DOMContentLoaded", loadSkins);
