function a(){
    console.log("executou funsao a()")
}

function b(){
    console.log("executou funsao b()")
}

function c(){
    console.log("executou funsao c()")

    b();
    a();
}

c()