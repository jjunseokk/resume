// 타이핑----------------
const content = `안녕하세요, 소통하고 즐겁게\n 일하고 싶은 개발자 박준석 입니다.`;
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)


const swiper = new Swiper('.wrap', {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 0,
    slidesPerView: "auto",
    grabCursor: true,
    centeredSlides: true,
    speed: 1500,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 1400,
        disableOnInteraction: true
    }
});

// .btnStart 요소를 찾아서 btnStart에 저장
const btnStart = document.querySelector(".btnStart");
// .btnStop 요소를 찾아서 btnStop에 저장
const btnStop = document.querySelector(".btnStop");

//btnStart버튼을 클릭시 자동롤링 시작
btnStart.addEventListener("click", () => {
    swiper.autoplay.start();
});

//btnStart버튼을 클릭시 자동롤링 정지
btnStop.addEventListener("click", () => {
    swiper.autoplay.stop();
});

// 스크롤 내리면 skill----------------
let showEmoji = document.querySelector(".skill") 
window.addEventListener("scroll",function(){
    let value = window.scrollY;
    if(value>850){
        showEmoji.style.left="50%";
        showEmoji.style.transform="translate(-50%)";
        showEmoji.style.transition = "0.5s";
    } else {
        showEmoji.style.left="-1500px"
    }
});

$(function(){
let scroll = function(){
    let $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false; // 새로 만든 변수

    $(document).ready(function(){
        init();
        initEvent();
    });
    
    let init = function(){
        $cnt = $("#container");
    };
    
    let initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        $cnt.on("mousewheel", function(e){
            if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
              wheel(e);
              console.log("움직인다.");
            }
        });
    };
        
    let winResize = function(){
        winH = $(window).height();
        $cnt.children("section").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    let wheel = function(e){
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 2){
                moveIndex += 1;
                moving(moveIndex);
                console.log("moveIndex::::",moveIndex);
            };
        }else{
            if(moveIndex > 0){
                moveIndex -= 1;
                moving(moveIndex);
                console.log("moveIndex::::",moveIndex);
            };
        };
    };
    
    let moving = function(index){
        time = true // 휠 이벤트가 실행 동시에 true로 변경
        moveCnt = $cnt.children("section").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 700, function(){
          time = false; // 휠 이벤트가 끝나면 false로 변경
        });
    };
    
};

scroll();

$(".skill-box span").on({
    "mouseover" : function(){
        $(this).find("p").css("display","block");
    },
    "mouseleave" : function(){
        $(this).find("p").css("display","none");
    }
})
});