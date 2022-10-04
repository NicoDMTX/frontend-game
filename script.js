async function getCharacters() {
    try {
        const response = await axios.get('http://localhost:5000/characters')
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

getCharacters()

const createCharacter = async () => {
    const newCharacter = {
        level: 1,
        life: 30,
        job: 'warrior'
    };

    try {
        const res = await axios.post('http://localhost:5000/characters', newCharacter);
        console.log(res.data)
    } catch (e) {
        console.log(e)
    }
}

const characterCreateBtn = document.querySelector('.create_character')

characterCreateBtn.addEventListener('click', () => {
    createCharacter();
})
    

const character = fetch('http://localhost:5000/characters').then((data) => {
    return data.json();
}).then((completeData) => {
    let characterData = "";
    completeData.map((values) => {
        characterData += `
        <div class="character_card">
            <div class="character_level">${values.level}</div>
            <div class="character_job">${values.job}</div>
            <div class="character_life">${values.life}</div>
        </div>
        `
    });
    document.querySelector('.container').innerHTML = characterData;
}).catch((err) => {
    console.log(err)
})


// User 

const formEmail = document.querySelector('#email_name');
const formPassword = document.querySelector('#password');
const sendRegister = document.querySelector('#submit')
console.log(formEmail, formPassword)

const subscribe = async () => {
    let register = {
        email: formEmail.value,
        password: formPassword.value
    }

    try {
        const res = axios.post('http://localhost:5000/register', register);
        console.log(res)
    } catch(e) {
        console(e)
    }
}

sendRegister.addEventListener('click', () => {
    subscribe();
});




    




