export const textSHuffle = (text, dispatch) => {

    let shuffleTimer = 0;
    let startText = text;
    let shuffledtext

    setInterval(()=>{
        shuffleTimer++
        shuffledtext = startText + "whatever";
    }, 200);

    return shuffledtext
}