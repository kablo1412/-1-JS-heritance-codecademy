class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name () {
    return this._name;
  }

  get level () {
    return this._level;
  }

  get numberOfStudents () {
    return this._numberOfStudents;
  }

  set numberOfStudents (value) {
    if (value.NaN()) {
      return console.log('Invalid input: numberOfStudents must be set to a Number.')
    } else {
      this._numberOfStudents = value;
    }

  }
  
quickFacts () {
  console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
}

static pickSubstituteTeacher(substituteTeachers) {
  const randomInt = Math.floor(Math.random()*substituteTeachers.length);
  return substituteTeachers[randomInt];

}


}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy () {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'High', numberOfStudents)
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams () {
    return this._sportsTeams;
  }
}

const lorraineHunsburry = new PrimarySchool ('Lorraine Hunsburry', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' )

lorraineHunsburry.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);


const alSmith = new HighSchool ('Al E. Smith', 415, ['Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);


















