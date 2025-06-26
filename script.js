/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((user) => {
    if (user.profession === "developer") {
      console.log(
        `id : ${user.id}, Name : ${user.name}, Age : ${user.age}, Profession : ${user.profession}`
      );
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((user) => {
    if (user.profession === "developer") {
      console.log(
        `id : ${user.id}, Name : ${user.name}, Age : ${user.age}, Profession : ${user.profession}`
      );
    }
  });
}

const newUser = Object.create(arr[0]);

function addData() {
  //Write your code here, just console.log
  const Names = [
    "Aarav",
    "Ishita",
    "Rohan",
    "Priya",
    "Vivaan",
    "Sneha",
    "Karthik",
    "Meera",
    "Ananya",
    "Rahul",
  ];

  const itProfessions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "DevOps Engineer",
    "Cybersecurity Analyst",
    "UI/UX Designer",
    "Cloud Architect",
    "Machine Learning Engineer",
    "QA Engineer",
  ];

  newUser.id = 4;
  newUser.name = Names[Math.floor(Math.random() * 10)];
  newUser.age = "22";
  newUser.profession = itProfessions[Math.floor(Math.random() * 10)];

  arr.push(newUser);
  arr.forEach((user) => {
    console.log(
      `id : ${user.id}, Name : ${user.name}, Age : ${user.age}, Profession : ${user.profession}`
    );
  });
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((user) => user.profession !== "admin");
  for (let employe of arr) {
    console.log(
      `id : ${employe.id}, Name : ${employe.name}, Age : ${employe.age}, Profession : ${employe.profession}`
    );
  }
}

function concatenateArray() {
  //Write your code here, just console.log
  const Names = [
    "Aarav",
    "Ishita",
    "Rohan",
    "Priya",
    "Vivaan",
    "Sneha",
    "Karthik",
    "Meera",
    "Ananya",
    "Rahul",
  ];

  const itProfessions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "DevOps Engineer",
    "Cybersecurity Analyst",
    "UI/UX Designer",
    "Cloud Architect",
    "Machine Learning Engineer",
    "QA Engineer",
  ];

  const newEmploye = new Array(3);
  for (let i = 0; i < 3; i++) {
    const newUser = Object.create(arr[0]);
    newUser.id = arr[arr.length - 1].id + 1 + i;
    newUser.name = Names[Math.floor(Math.random() * 10)];
    newUser.age = `${Math.floor(Math.random() * 10 * 3)}`;
    newUser.profession = itProfessions[Math.floor(Math.random() * 10)];
    newEmploye.push(newUser);
  }
  arr = arr.concat(newEmploye);

  arr.forEach((user) => {
    console.log(
      `id : ${user.id}, Name : ${user.name}, Age : ${user.age}, Profession : ${user.profession}`
    );
  });
}
