import character_talent_material from "../datasource/character_talent_material.json";

interface material {
  id: number;
  name: string;
  weeks: string[];
  domain: number;
}

const TalentService = {
  getMaterial: (id: number): material | undefined => {
    return character_talent_material.list.find(
      (material) => material.id === id
    );
  },
};

export default TalentService;
