const christmasCatsData = [
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "moody-christmas-dog.jpg",
        alt: "A dog looking moody",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomniac-christmas-dog.jpg",
        alt: "A dog looking insomniac",
    },
    {
        emotionTags: ["confused"],
        isGif: false,
        image: "confused-christmas-cat.jpg",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["confused"],
        isGif: false,
        image: "confused-christmas-dog.jpg",
        alt: "A dog looking confused",
    },
    {
        emotionTags: ["dominant"],
        isGif: false,
        image: "dominant-christmas-cat.jpg",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy", "relaxed"],
        isGif: false,
        image: "happy-christmas-cat.jpg",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["happy"],
        isGif: false,
        image: "happy-christmas-dog.jpg",
        alt: "A dog looking happy",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry-christmas-cat.jpg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomniac-christmas-cat.jpg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["cold"],
        isGif: false,
        image: "cold-christmas-dog.jpg",
        alt: "A dog looking cold",
    },
    {
        emotionTags: ["sad"],
        isGif: false,
        image: "sad-christmas-cat.jpg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["sad"],
        isGif: false,
        image: "sad-christmas-dog.jpg",
        alt: "A dog looking sad",
    },
    {
        emotionTags: ["sad", "moody"],
        isGif: false,
        image: "moody-sad-christmas-dog.jpg",
        alt: "A dog looking sad",
    },
    {
        emotionTags: ["scared"],
        isGif: true,
        image: "scared-santa-cat.gif",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["scared"],
        isGif: true,
        image: "scared-christmas-cat.gif",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["cold"],
        isGif: true,
        image: "cold-christmas-cat.gif",
        alt: "A cat looking cold",
    },
    {
        emotionTags: ["cold"],
        isGif: true,
        image: "cold-christmas-cat2.gif",
        alt: "A cat looking cold",
    },
    {
        emotionTags: ["cold"],
        isGif: true,
        image: "ccold-christmas-dog.gif",
        alt: "A dog looking cold",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "moody-christmas-kitten.gif",
        alt: "A cat looking angry",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "moody-christmas-dog.gif",
        alt: "A dog looking angry",
    },
    {
        emotionTags: ["confused"],
        isGif: true,
        image: "confused-christmas-cat.gif",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant"],
        isGif: true,
        image: "dominant-christmas-cat.gif",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy", "relaxed"],
        isGif: true,
        image: "happy-christmas-cat.gif",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["happy"],
        isGif: true,
        image: "happy-christmas-dog.gif",
        alt: "A dog looking happy",
    },    
    {
        emotionTags: ["sad"],
        isGif: true,
        image: "sad-christmas-dog.gif",
        alt: "A dog looking sad",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "sabrina-witch-cat.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry-christmas-dog.gif",
        alt: "A dog looking hungry",
    },
    {
        emotionTags: ["insomniac"],
        isGif: true,
        image: "insomniac-christmas-dog.gif",
        alt: "A dog looking insomniac",
    },
    {
        emotionTags: ["scared", "confused"],
        isGif: true,
        image: "confused-christmas-dog.gif",
        alt: "A dog looking scared",
    },
]

const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const gifsOnlyOption = document.getElementById("gifs-only-option")
const memeModalInner = document.getElementById("meme-modal-inner")
const memeModal = document.getElementById("meme-modal")
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")

emotionRadios.addEventListener("change", highlightCheckedOption)

memeModalCloseBtn.addEventListener("click", closeModal)

getImageBtn.addEventListener("click", renderCat)

window.addEventListener("click", rootClick)

memeModal.addEventListener("click", modalClick)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName("radio")
    for (let radio of radios){
        radio.classList.remove("highlight")
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function closeModal(){
    memeModal.style.display = "none"

    // Uncheck the radio after the modal is closed
    document.querySelector('input[type="radio"]').checked = false

    // Remove highlighting from the radio label after the modal is closed
    const radios = document.getElementsByClassName("radio")
    for (let radio of radios) {
        radio.classList.remove("highlight")
    }

    // Uncheck "Animated Gifs only" checkbox
    gifsOnlyOption.checked = false
}

function rootClick(e) {
    if (memeModal.style.display === "flex" &&
        e.target.id !== "meme-modal" &&
        e.target.id !== "get-image-btn" &&
        !memeModal.contains(e.target)) {
        // Element clicked was not the modal or its children — close the modal
        console.log("clicked")
        closeModal()
        }
}

function modalClick(e) {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    return false
}

function renderCat(){
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML =  `
        <img 
        class="cat-img" 
        src="./images/christmas-images/${catObject.image}"
        alt="${catObject.alt}"
        >
        `
    memeModal.style.display = "flex"
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    
    if(catsArray.length === 1){
        return catsArray[0]
    }
    else{
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
}

function getMatchingCatsArray(){     
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        
        const matchingCatsArray = christmasCatsData.filter(function(cat){
            
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else{
                return cat.emotionTags.includes(selectedEmotion)
            }            
        })
        return matchingCatsArray
    }
}

function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(christmasCatsData)
