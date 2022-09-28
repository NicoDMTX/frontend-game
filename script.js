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
        </div>
        `
    });
    document.querySelector('.container').innerHTML = characterData;
}).catch((err) => {
    console.log(err)
})


    




