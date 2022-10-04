

async function getCharacters() {
    try {
        const response = await axios.get('http://localhost:5000/characters')
        response.data.map((character, data) => {
            data += `
                <div class="character_card">
                    <div class="character_level">${character.level}</div>
                    <div class="character_job">${character.job}</div>
                    <div class="character_life">${character.life}</div>
                </div>
            `
            console.log(data)
            console.log(character)
            document.querySelector('.container').innerHTML = data;
        })
        
    } catch (e) {
        console.log(e)
    }
}

getCharacters();

const createCharacter = async () => {
    const newCharacter = {
        level: 1,
        life: 30,
        job: 'warrior'
    };

    try {
        const res = await axios.post('http://localhost:5000/characters', newCharacter);
        await getCharacters(res.data)
    } catch (e) {
        console.log(e)
    }
}

const characterCreateBtn = document.querySelector('.create_character')

characterCreateBtn.addEventListener('click', () => {
    createCharacter();
})

// const character = fetch('http://localhost:5000/characters').then((data) => {
//     return data.json();
// }).then((completeData) => {
//     characterData = "";
//     completeData.map((values) => {
//         characterData += 
//     });
//     document.querySelector('.container').innerHTML = characterData;
// }).catch((err) => {
//     console.log(err)
// })

// User 

const formEmail = document.querySelector('#email_name');
const formPassword = document.querySelector('#password');
const sendRegister = document.querySelector('#submit')

const subscribe = async () => {
    let register = {
        email: formEmail.value,
        password: formPassword.value
    }

    try {
        const res = axios.post('http://localhost:5000/register', register)
        console.log(res);

    } catch(e) {
        console(e)
    }
}

sendRegister.addEventListener('click', () => {
    subscribe();
});




    




