const button=document.querySelector("button")
button.addEventListener("click",()=>{
    Notification.requestPermission().then(prem =>{
        if(prem==="granted"){
           const notification= new Notification("example notification",{
                body:"this is more text",
                data:{hello:"world"},
                icon:"th.jpg"

            })
            notification.addEventListener("close",e=>{
                console.log(e);
            })
        }
    } )
})
let noti
document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState==="hidden"){
     noti=   new Notification("come back please",{
            body:"pleaaaaseeeee",
            tag:"come back"
        })
    }else{
        noti.close()
    }
})