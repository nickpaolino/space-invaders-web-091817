class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.cloaked = false;
    if (!crew.length){
      this.docked = true;
    }
    else {
      this.docked = false;
    }
    this.phasers = phasers;
    this.shields = shields;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    crew.forEach((person) => {
      person.currentShip = this;
    })
  }
}
