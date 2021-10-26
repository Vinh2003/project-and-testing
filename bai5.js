//a//
let d = parseInt(prompt())
let m = parseInt(prompt())
let y = parseInt(prompt())

d=d +1;
if (m==1||m==3||m==5||m==7||m==8||m==10||m==12){
    if (d>31){
        console.log(" Không Hợp Lệ")
    }
}
else if (m== 2){
    if ((y% 4 == 0 && y % 100 !=0) || (y% 400 ==0)){
        if( d>29){
            console.log("Không hợp lệ")
        }
        else{
            if (d>28){
                d=1;
                m=m+1;
            }
        }
    
    }
    }

//b//
let d = parseInt(prompt())
let m = parseInt(prompt())
let y = parseInt(prompt())

d=d +1;
if (m==1||m==3||m==5||m==7||m==8||m==10||m==12){
    if (d>31){
    d=1
    m=m+1
    }
}
else if (m== 2){
    if ((y% 4 == 0 && y % 100 !=0) || (y% 400 ==0)){
        if( d>29){
            d=1;
            m=m+1;
        }
    }
    else{
        if (d>28){
            d=1;
            m=m+1;
        }
    }

}
else {
    if (d > 30){
        d=1;
        m=m+1;
    }
}
if (m ==13){
    m=1;
    y=y+1
}
console.log("ngày tiếp theo là:"+"ngày:"+d,"tháng:"+m,"năm:"+y)