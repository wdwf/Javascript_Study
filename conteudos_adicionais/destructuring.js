const user = {
    name: 'Icarus Benavonte',
    age: 24,
    social: {
        github: 'http://github.com/Ivonte',
    },
    skills: {
        frontend: {
            language: ['HTML', 'CSS', 'JavaScript'],
            frameworks: ['React', 'React Native'],
        },
        backend: {
            language: ['JavaScript', 'Go', 'PHP']
        }
    }
}


function summary({ name, age, social: {github}, skills: {backend} }) {
    console.log(`Nome Completo: ${name}, Idade: ${age}`);
    console.log(`GitHub: ${github}`);
    console.log(`Habilidades: ${backend.language}`);
}

summary(user)