import Team from '../app';

test("Test add character", () => {
  const newTeam = new Team();
  const character = { name: "Alexa", age: 20 };  

  newTeam.add(character);

  const newSet = new Set();
  newSet.add({ name: "Alexa", age: 20 });

  expect(newTeam.members).toEqual(newSet);
});

test("Test add already exist character", () => {
  const newTeam = new Team();
  const character = { name: "Alexa", age: 20 };  

  newTeam.add(character);

  expect(function () {
    newTeam.add(character);
  }).toThrowError("Данный персонаж уже есть в команде.");
});

test('Test addAll', () => {
  const newTeam = new Team();

  const character1 = { name: "Alexa", age: 21 };
  const character2 = { name: "Alexa1", age: 22 };
  const character3 = { name: "Alexa2", age: 23 };

  newTeam.addAll(character1, character2, character3);  

  expect(newTeam.members.size).toEqual(3);
});

test('Test toArray', () => {
  const newTeam = new Team();

  const character1 = { name: "Alexa", age: 21 };
  const character2 = { name: "Alexa1", age: 22 };
  const character3 = { name: "Alexa2", age: 23 };

  newTeam.addAll(character1, character2, character3);  

  newTeam.toArray();
  const testArray = [{ name: "Alexa", age: 21 }, { name: "Alexa1", age: 22 }, { name: "Alexa2", age: 23 }]; 
  expect(newTeam.members).toEqual(testArray);
});



