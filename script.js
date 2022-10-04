const charactersCard = []

document.addEventListener("DOMContentLoaded", async(event) => {
    const res = await axios.get('http://localhost:5000/characters')
    const datas = res.data;
    generateAllCards(datas)
});

const generateCharacterCard = (life, level, job) => {
    const div = document.createElement('div');
    div.classList.add('character_card')
    div.innerHTML =  `
        <div class="">
            <div class="character_level">${life}</div>
            <div class="character_job">${level}</div>
            <div class="character_life">${job}</div>
        </div>
    `
    return div;
}

const generateAllCards = (datas => {
    datas.forEach(data => {
        const div = generateCharacterCard(data.life, data.level, data.job)
        charactersCard.push(div)

        document.querySelector('.container').appendChild(div);
    })
    

})

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




    




