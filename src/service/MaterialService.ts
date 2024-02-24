import weapon_ascension_materials from "../datasource/weapon_ascension_material.json";

interface material {
  id: number;
  name: string;
  weeks: string[];
  domain: number;
}

const MaterialService = {
  getMaterial: (id: number): material | undefined => {
    return weapon_ascension_materials.list.find(
      (material) => material.id === id
    );
  },
};

export default MaterialService;
