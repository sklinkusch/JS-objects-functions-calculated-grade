const students = [
  {
    name: "Peter",
    points: 35
  },
  {
    name: "Paul",
    points: 100
  },
  {
    name: "John",
    points: 45
  },
  {
    name: "Mary",
    points: 84
  },
  {
    name: "Jane",
    points: 15
  },
  {
    name: "Jennifer",
    points: 92
  },
  {
    name: "Martin",
    points: 9
  }
];

function loopThrough(array) {
  array.forEach(student => {
    student.grade = calculateGrade(student.points);
  });
}

function calculateGrade(points) {
  if (points >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 30) {
    return "D";
  } else if (points >= 10) {
    return "E";
  } else {
    return "F";
  }
}

function getTable(array) {
  let table;
  table =
    "<table><thead><tr><th>Name</th><th>Points</th><th>Grade</th></tr></thead><tbody>";
  students.forEach(student => {
    table =
      table +
      `<tr><td>${student.name}</td><td>${student.points}</td><td>${
        student.grade
      }</td></tr>`;
  });
  table = table + "</tbody></table>";
  return table;
}
function printTable(array) {
  document.getElementById("table").innerHTML = getTable(array);
}
loopThrough(students);
printTable(students);
