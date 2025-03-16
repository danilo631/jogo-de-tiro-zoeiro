const getCharacterSkins = async () => {
  try {
    const response = await fetch('https://api.pexels.com/v1/characters');
    const data = await response.json();
    return data.skins;
  } catch (error) {
    console.error("Erro ao buscar skins de personagens:", error);
  }
};

const getWeaponSkins = async () => {
  try {
    const response = await fetch('https://api.unsplash.com/photos');
    const data = await response.json();
    return data.map(item => ({
      id: item.id,
      name: item.alt_description,
      image: item.urls.small
    }));
  } catch (error) {
    console.error("Erro ao buscar skins de armas:", error);
  }
};

const getSound = async () => {
  try {
    const response = await fetch('https://api.soundbible.com/shotgun.mp3');
    const data = await response.json();
    return data.soundUrl;
  } catch (error) {
    console.error("Erro ao buscar som de tiro:", error);
  }
};

export { getCharacterSkins, getWeaponSkins, getSound };

