const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' }
  ];
  
    let classA = [];
    let classB = [];
    let classC = [];

  const modStudents = students.map(student => {
    let ad = student.name;
    if(student.grade==='A'){
    classA.push(ad);
    }else if(student.grade==='B'){
    classB.push(ad);
    }else if(student.grade==='C'){
     classC.push(ad);
    }
  });
  console.log(classA,classB,classC);