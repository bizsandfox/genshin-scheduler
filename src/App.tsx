import React, { useState, useEffect } from "react";
import Weapon from "./component/Weapon";

import weapons from "./datasource/weapon.json";
import avatars from "./datasource/avatar.json";
import Avatar from "./component/Avatar";
import Grid from "./component/Grid";
import "./css/common.css";
import Weeks from "./component/Weeks";

function saveToLocalStorage(selectedWeapons: any[], selectedAvatars: any[]) {
  localStorage.setItem("selectedWeapons", JSON.stringify(selectedWeapons));
  localStorage.setItem("selectedAvatars", JSON.stringify(selectedAvatars));
}

function loadFromLocalStorage() {
  const storedWeapons = localStorage.getItem("selectedWeapons");
  const storedAvatars = localStorage.getItem("selectedAvatars");

  if (storedWeapons && storedAvatars) {
    return {
      selectedWeapons: JSON.parse(storedWeapons),
      selectedAvatars: JSON.parse(storedAvatars),
    };
  }

  return {
    selectedWeapons: [],
    selectedAvatars: [],
  };
}

function App() {
  const [selectedWeapons, setSelectedWeapons] = useState<any[]>([]);
  const [selectedAvatars, setSelectedAvatars] = useState<any[]>([]);

  useEffect(() => {
    const { selectedWeapons, selectedAvatars } = loadFromLocalStorage();
    setSelectedWeapons(selectedWeapons);
    setSelectedAvatars(selectedAvatars);
  }, []);

  const weaponItems = weapons.list.map((weapon: any) => (
    <Weapon
      weapon={weapon}
      onWeaponClick={(weapon: any): any =>
        setSelectedWeapons([...selectedWeapons, weapon])
      }
    ></Weapon>
  ));
  const avatarItems = avatars.list.map((avatar: any) => (
    <Avatar
      avatar={avatar}
      onAvatarClick={(avatar: any): any =>
        setSelectedAvatars([...selectedAvatars, avatar])
      }
    ></Avatar>
  ));

  function handleDeleteWeapon(weapo_item_id: number) {
    setSelectedWeapons(
      selectedWeapons.filter((weapon) => weapon.item_id !== weapo_item_id)
    );
  }

  function handleDeleteAvatar(avatar_item_id: number) {
    setSelectedAvatars(
      selectedAvatars.filter((avatar) => avatar.item_id !== avatar_item_id)
    );
  }

  return (
    <>
      <Weeks
        weaponTasks={selectedWeapons}
        talentTasks={selectedAvatars}
      ></Weeks>
      <hr />
      {selectedWeapons.map((weapon) => (
        <div onClick={() => handleDeleteWeapon(weapon.item_id)}>
          {weapon.name}
        </div>
      ))}
      {selectedAvatars.map((avatar) => (
        <div onClick={() => handleDeleteAvatar(avatar.item_id)}>
          {avatar.name}
        </div>
      ))}
      <hr />
      <button
        onClick={() => saveToLocalStorage(selectedWeapons, selectedAvatars)}
      >
        Save
      </button>
      <button
        onClick={() => {
          saveToLocalStorage([], []);
          setSelectedWeapons([]);
          setSelectedAvatars([]);
        }}
      >
        Reset
      </button>
      <hr />
      <Grid columns={5} gap={""}>
        {weaponItems}
      </Grid>
      <Grid columns={5} gap={""}>
        {avatarItems}
      </Grid>
    </>
  );
}

export default App;
