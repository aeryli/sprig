/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started
*/

const player = "p"
const flag = "f"
const portal = "1"
const backround = "b"
const solid = "s"
const wall = "w"
const music = tune`
500: C4-500 + D4-500 + B5~500 + B4^500 + C5^500,
15500`

setLegend(
  [ player, bitmap`
................
................
................
...00......00...
...00......00...
................
................
................
................
...00......00...
...00......00...
.....000000.....
.....000000.....
................
................
................` ],
  [ wall, bitmap `
5555555555555555
5777775777777775
5757757775777775
5775777575775775
5777575757757775
5755777777777775
5777557775557575
5755777777775775
5777575757577775
5775577757757775
5775775777777775
5777757577577775
5775757757775775
5757777777777775
5777777777777775
5555555555555555` ],
  [ solid, bitmap `
5555555555555555
544444D444444445
54D44D444D444445
544D444D4D44D445
5444D4D4D44D4445
54DD444444444445
5444DD444DDD4D45
54DD44444444D445
5444D4D4D4D44445
544DD444D44D4445
544D44D444444445
54444D4D44D44445
544D4D44D444D445
54D4444444444445
5444444444444445
5555555555555555` ],
  [ backround, bitmap `
5555555555555555
5..............5
5..............5
5..............5
5..............5
5..............5
5..............5
5..............5
5..............5
5..............5
5..............5
5..............5
5..............5
5..............5
5..............5
5555555555555555` ],
  [ flag, bitmap `
................
.33333333333CCC.
.33333333333CCC.
.33333333333CCC.
.33333333333CCC.
.33333333333CCC.
.33333333333CCC.
.33333333333CCC.
.33333333333CCC.
.33333333333CCC.
............CCC.
............CCC.
............CCC.
............CCC.
............CCC.
............CCC.`],
  [ portal, bitmap `
5555555555555555
5777777777777775
5700000000000075
570LLLLLLLLLL075
570L11111111L075
570L12222221L075
570L12999921L075
570L12966921L075
570L12966921L075
570L12999921L075
570L12222221L075
570L11111111L075
570LLLLLLLLLL075
5700000000000075
5777777777777775
5555555555555555` ]
)


setSolids([ solid, wall, player ])

setBackground(backround)

setPushables({ 
  [player]: [ wall ] 
})

let level = 0
let wow = 100000000000000
const levels = [
  map `pf`,
  map `
...s.......
.w.s.s.sss.
.w.wws.s...
.sf..w.s.ss
.sswwsws...
ws..s..s.s.
.sp......s.
.s..ssss.s.
.sssw....s.
.s...ssss..
...s.......`,
  map `
ssssssssss
ssssssssss
sssfs...ss
sss.w.s.ss
sss.w.s.ss
sssssss.ss
sswpws..ss
ss.w.s.sss
s.w.ws..ss
s..s.ss.ss
s.....s.ss
s...s...ss
ssssssssss
ssssssssss`
]

setMap(levels[level])


onInput("s", () => {
  getFirst(player).y += 1
})

onInput("w", () => {
  getFirst(player).y -= 1
})

onInput("d", () => {
  getFirst(player).x += 1
})

onInput("a", () => {
  getFirst(player).x -= 1
})

afterInput(() => {
 let tiles = tilesWith(player)[0]
  for (let t of tiles.map(t => t._type)) {
    if (t == "f") {
      addText("hello", { 
  x: 8,
  y: 0,
  color: color`0`
})
    }
    
   if (t == "f") {
    level = level += 1
     setMap(levels[level])
     
   }
  }
})

afterInput(() => {
 let tiles2 = tilesWith(player)[0]
 for (let t of tiles2.map(t => t._type)) {
   if (t = "p") {
     level = level + 0
   }
 }
  
})

if (wow = level) {
 playTune(tune `
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
600: B5~600 + G5-600,
600: A5^600 + F5/600,
4800`)
}