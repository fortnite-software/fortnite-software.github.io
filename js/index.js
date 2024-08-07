const sentences = [
    "home of the best fortnite cheats",
    "detected? never",
    "obliterating lobbies since the beggining",
    "detected cheats? i had 50 kills only! hello staff?",
];

async function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

var bStart = false;
async function run() 
{
    var textContainer = document.getElementById("textshit");
    if (!textContainer) return;

    textContainer.innerHTML = sentences[3];

    while (true) 
    {
        for (let i = 0; i < sentences.length; i++) 
        {
            let sentence = sentences[i];

            for (let j = 0; j <= 100; j++) 
            {
                textContainer.style.opacity = 0.01 * j;
                await sleep(8);
            }

            await sleep(1600);

            // Fade out
            for (let j = 100; j >= 0; j--) 
            {
                textContainer.style.opacity = 0.01 * j;
                await sleep(8);
            }

            textContainer.innerHTML = sentence;
        }

        await sleep(25);
    }
}

run();
