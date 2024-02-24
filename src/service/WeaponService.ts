import weapons from "../datasource/weapon.json";
import weapon_ascension_materials from "../datasource/weapon_ascension_material.json";
import domains from "../datasource/domain.json";
import DomainService from "./DomainService";

interface Weapon {
  id: number;
  name: string;
  level: number;
  labels: number[];
}
const WeaponService = {
  toDomain: (weapon: Weapon) => {
    return weapon_ascension_materials.list
      .filter((material) => weapon.labels.includes(material.id))
      .map((material) => DomainService.getDomain(material.domain))
      .pop();
  },
};

export default WeaponService;
