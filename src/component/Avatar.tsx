import { useState } from "react";

interface avatar {
  item_id: number;
  name: string;
  level: number;
  labels: string[];
}

export default function Avatar({
  avatar,
  onAvatarClick,
}: {
  avatar: avatar;
  onAvatarClick: (arg0: any) => void;
}) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(!isSelected);
    onAvatarClick(avatar);
  }

  return (
    <li key={avatar.item_id} onClick={handleClick}>
      <div></div>
      {avatar.name}
    </li>
  );
}
