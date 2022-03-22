const arrayObjetos=[
   alumno1={
         nombre:"juan",
            edad:20,
   },
    alumno2={
            nombre:"pedro",
            edad:30,
    },
    alumno3={
            nombre:"jose",
            edad:40,
    },
]
let repo=arrayObjetos.map(item=>item.edad);
console.log(repo);