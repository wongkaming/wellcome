var introAnimation = anime.timeline({
    easing: 'easeOutExpo',
    duration: 2000,
    delay: 1000,
    boolean:false,
})


introAnimation
.add({
    targets:'#text_1',
    opacity: [1,0],
})
.add({
    targets:'#bg_l2',
    scale: [1.1,1.1],
    translateY: ["5px",0],
},100)
.add({
    targets:'#bg_l3',
    scale: [1.1,1.1],
    translateY: ["10px",0],
},0)
.add({
    targets:'#bg_l4',
    translateY: ["45px",0],
},0)
.add({
    targets:'#bg_l5',
    translateY: ["60px",0],
},0)
.add({
    targets:'#bg_l6',
    translateY: ["80px",0],
},0)
.add({
    targets:'#bg_l7',
    translateY: ["100px",0],
},0)
.add({
    targets:'#bg_l8',
    translateY: ["102px",0],
},0)
.add({
    targets:'#bg_l9',
    translateY: ["40px",0],
},0)
.add({
    targets:'#bg_l10',
    translateY: ["40px",0],
},0)
.add({
    targets:'#bg_l11',
    opacity: [1,0.5],
},0)
.add({
    targets:'#button_container',
    opacity: [0,1],
},300)
.add({
    targets:'#h1',
    opacity: [0,1],
},0)
.add({
    targets: '#button_1',
    translateY: ["100px",0],
},600)
.add({
    targets:'#p',
    opacity: [0,1],
},0)
.add({
    targets: '#button_2',
    translateY: ["100px",0],
},800)
.add({
    targets: '#button_3',
    translateY: ["100px",0],
},1000)
;