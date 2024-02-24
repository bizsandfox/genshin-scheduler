import { useState } from "react";

interface weapon {
  item_id: number;
  name: string;
  level: number;
  labels: string[];
}

export default function Weapon({
  weapon,
  onWeaponClick,
}: {
  weapon: weapon;
  onWeaponClick: (arg0: any) => void;
}) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onWeaponClick(weapon);
  };
  return (
    <li key={weapon.item_id} onClick={handleClick}>
      {weapon.name}
    </li>
  );
}
