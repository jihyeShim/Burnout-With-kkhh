
//type script.

let targetBox = document.querySelector('#container');
let myVideo = document.querySelector('#myVideo');

let timeUnit = 0.3;
let totalPlayNum = 0;

window.addEventListener('keydown', keyEvent)

function keyEvent(e)
{
   makeType(e.keyCode);
}



function makeType(keyCode)
{
    if(keyCode >= 60 && keyCode <= 90 || keyCode >=48 && keyCode <=57) //a~z
    {
        console.log("dkdkdk==" +keyCode );
        totalPlayNum += timeUnit;
        if(totalPlayNum >= 2999)
        {
            totalPlayNum = 2999;
        }
        myVideo.currentTime = totalPlayNum;
    }
    else if(keyCode == 8) //backspace
    {
        totalPlayNum -= timeUnit;
        if(totalPlayNum <= 0)
        {
            totalPlayNum = 0;
        }
        myVideo.currentTime = totalPlayNum;
        let divList = targetBox.querySelectorAll('div');
        
        if(divList.loength == 0)
        {
            return;
        }
        else
        {
            targetBox.removeChild(divList[divList.length-1]);
        }
        
    }
   
}