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

loopThrough(students);
students.forEach(student => console.log(student));
