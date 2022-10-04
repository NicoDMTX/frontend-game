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
        <div class="character_content">
            <div class="character_level">${life}</div>
            <div class="character_job">${level}</div>
            <div class="character_life">${job}</div>
            <button class="character_select">Choose this character</button>
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




    




