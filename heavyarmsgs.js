Hooks.once("init", () => {
  CONFIG.DND5E.itemProperties.kick= {
    label: "Kick",
    isPhysical: "true"
  };
  CONFIG.DND5E.validProperties.weapon.add("kick");

  CONFIG.DND5E.itemProperties.loud= {
    label: "Loud",
    isPhysical: "true"
  };
  CONFIG.DND5E.validProperties.weapon.add("loud");

  CONFIG.DND5E.itemProperties.pocket= {
    label: "Pocket",
    isPhysical: "true"
  };
  CONFIG.DND5E.validProperties.weapon.add("pocket");
});
