
const game = document.querySelector(".gamer");
let foody;
let foodx;
let snakey = 25;
let snakex = 11;
let  directionX  = 0;
let  directionY = 0;
let gameover = false;
let snakebody = [];
let setint;

function position() {
    foody = Math.floor(Math.random() * 30 + 1);
    foodx = Math.floor(Math.random() * 30 + 1);

}

function handlegameover()
{    clearInterval(setint);
    alert("game over")
    location.reload();
}



function direction(e) {
    if (e.key === "ArrowLeft" &&  directionX != 1) {
        directionX = -1;
        directionY = 0;
    }
    else if (e.key === "ArrowRight"  &&  directionX != -1) {
        directionX = 1;
        directionY = 0;

    }
    else if (e.key === "ArrowUp"  &&  directionY != 1) {
        directionX = 0;
        directionY = -1;
    }
    else if (e.key === "ArrowDown"  &&  directionY != -1) {
        directionX = 0;
        directionY = 1;
     }
     gamestart();

}


function gamestart() {
 
    if(gameover) return handlegameover();
    let food = `<div class="food" style = "grid-area:${foody} / ${foodx}"></div>`;

    if(snakex === foodx && snakey === foody)
    {
        position();
        snakebody.push([foodx,foody]);

    }
   
    for(let i = snakebody.length - 1 ; i > 0 ; i--)
    {
        snakebody[i] = snakebody[i - 1];

       
       
    }
    
  
    snakey += directionY;
    snakex += directionX;

    if(snakex <= 0 || snakex > 30 ||snakey <= 0 || snakey > 30 )
    {
      gameover = true;  
    }
   
    // for(let i = 2 ; i < snakebody.length ; i++)
    // {
    //     if(snakebody[i] = snakebody[0])
    //     {
    //         gameover = true;  
    //     }
    // }

    snakebody[0] =  [snakex,snakey]

   
    for(let i = 0; i < snakebody.length ; i++)
    {
        food += `<div class="snake" style = "grid-area:${snakebody[i][1]} / ${snakebody[i][0]}"> </div>`;
        if(i !== 0 && snakebody[0][1] === snakebody[i][1] && snakebody[0][0] === snakebody[i][0])
        {
            gameover = true;
        }
    }

    
    game.innerHTML = food;
    document.getElementById("score").innerHTML = snakebody.length - 1;
}

position();
setint = setInterval(gamestart , 200)
document.addEventListener("keyup", direction);