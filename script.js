let container = document.createElement('div')
container.className = 'container'


let Block1 = document.createElement('div')
let Block2 = document.createElement('div')
Block2.className = 'Block2'

let Block3 = document.createElement('div')
Block3.className = 'Block3'

let Block4 = document.createElement('div')
Block4.className = 'Block4'

let Block5 = document.createElement('div')
Block5.className = 'Block5'

let Block6 = document.createElement('div')
Block6.className = 'Block6'

let Block7 = document.createElement('div')
Block7.className = 'Block7'


let Block8 = document.createElement('div')
Block8.className = 'Block8'

let Block9 = document.createElement('div')
Block9.className = 'Block9'

let Block10 = document.createElement('div')
Block10.className = 'Block10'

let Block11 = document.createElement('div')
Block11.className = 'Block11'




let starText = document.createElement('div')
starText.className = 'starText'
starText.innerHTML = `
<div class="Gericht">Gericht</div>
<div class="menu">
    <ul>
        <li>Home</li>
        <li>Pages</li>
        <li>Contact Us</li>
        <li>Blog</li>
        <li>Landing</li>
    </ul>
</div>
<div class="rebo">
    <div class="re">Log In / Registration</div>
    <div class="line"></div>
    <div class="bo">Book Table</div>
</div>`

Block1.append(starText)

let img1 = document.createElement('div')
img1.cllassNeme = 'img1'
img1.innerHTML=`<img class="desk1" src="Desk.png"></img>
<img class="desk2" src="Desk.png"></img>

<img class="eggs" src="eggs.png"></img>`

Block1.append(img1)

let icon1 = document.createElement('img')
icon1.src='./Scroll.png'
icon1.className = 'icon1'
Block1.append(icon1)

let icon2 = document.createElement('img')
icon2.src='./line.png'
icon2.className = 'icon2'
Block1.append(icon2)

let icon3 = document.createElement('img')
icon3.src='./The Key.png'
icon3.className = 'icon3'
Block1.append(icon3)

let icon4 = document.createElement('img')
icon4.src='./Vector.png'
icon4.className = 'icon4'
Block1.append(icon4)

let texIn = document.createElement('div')
texIn.className = 'textIn'
texIn.innerHTML = 'Sit tellus lobortis sed senectus vivamus molestie.<br> Condimentum volutpat morbi facilisis quam scelerisque <br> sapien. Et, penatibus aliquam amet tellus'
Block1.append(texIn)


let textIn1 = document.createElement('p')
textIn1.className = 'textIn1'
textIn1.innerHTML = `<div class="textIn1">Chase the new Flavour</div>`
Block1.append(textIn1)

let date1 = document.createElement('div')
date1.className = 'date1'
date1.innerHTML = '01 ━ 02 03 04'
Block1.append(date1)

let hech = document.createElement('img')
hech.src = './hech.png'
hech.className = 'hech'
Block1.append(hech)

let Btn1 = document.createElement('button')
Btn1.innerHTML = '<div class="Btn1">Explore Menu</div>'
Block1.append(Btn1)


container.append(Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9,Block10,Block11)



let G = document.createElement('img')
G.src = './G.png'
G.className = 'G'
Block2.append(G)

let Noj = document.createElement('img')
Noj.src = './Noj.png'
Noj.className='Noj'
Block2.append(Noj)

let About = document.createElement('img')
About.src = './About Us.png'
About.className = 'About'
Block2.append(About)

let Our = document.createElement('img')
Our.src = './Our History.png'
Our.className = 'Our'
Block2.append(Our)

let lojka = document.createElement('img')
lojka.src = './Vector2.png'
lojka.className = 'lojka'
Block2.append(lojka)

let texUr = document.createElement('div')
texUr.className = 'texUr'
texUr.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis <br> pharetra adipiscing ultrices vulputate posuere tristique. In sed<br> odio nec aliquet eu proin mauris et.'
Block2.append(texUr)

let Btn2 = document.createElement('button')
Btn2.innerHTML = '<div class="Btn2">Know More</div>'
Block2.append(Btn2)

let texRu = document.createElement('div')
texRu.className = 'texRu'
texRu.innerHTML = 'Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. <br> Risus placerat morbi volutpat habitasse interdum mi aliquam In <br> sed odio nec aliquet.'
Block2.append(texRu)

let lojka2 = document.createElement('img')
lojka2.src = './Vector.png'
lojka2.className = 'lojka2'
Block2.append(lojka2)

let Btn3 = document.createElement('button')
Btn3.innerHTML = '<div class="Btn3">Know More</div>'
Block2.append(Btn3)


// Block1.append(Block2)



let Krug = document.createElement('img')
Krug.src = './krug.png'
Krug.className = 'Krug'
Block3.append(Krug)

let noji = document.createElement('img')
noji.src = './kaychy.png'
noji.className = 'noji'
Block3.append(noji)

let texReservations = document.createElement('div')
texReservations.className = 'texReservations'
texReservations.innerHTML = 'Reservations'
Block3.append(texReservations)

let bookA = document.createElement('img')
bookA.src = './Book.png'
bookA.className = 'bookA'
Block3.append(bookA)

let con = document.createElement('div')
con.className = 'con'

let con1 = document.createElement('img')
con1.src = './Frame 1.png'
con1.className = 'con1'
con.append(con1)

let con2 = document.createElement('img')
con2.src = './Frame 2.png'
con2.className = 'con2'
con.append(con2)

let con3 = document.createElement('img')
con3.src = './Frame 3.png'
con3.className = 'con3'
con.append(con3)

let Btn4 = document.createElement('button')
Btn4.innerHTML = '<div class="Btn4">Book Now</div>'
Block3.append(Btn4)


Block3.append(con)
// Block1.append(Block3)


let Krug2 = document.createElement('img')
Krug2.src = './krug.png'
Krug2.className = 'Krug2'
Block4.append(Krug2)

let noji2 = document.createElement('img')
noji2.src = './kaychy.png'
noji2.className = 'noji2'
Block4.append(noji2)

let men = document.createElement('img')
men.src = './Fr1.png'
men.className = 'men'
Block4.append(men)

// Block1.append(Block4)


let maksG = document.createElement('img')
maksG.src = './Mask Group.png'
maksG.className = 'maksG'
Block5.append(maksG)

let texMenu = document.createElement('img')
texMenu.src = './Menu.png'
texMenu.className = 'texMenu'
Block5.append(texMenu)

let today = document.createElement('img')
today.src = './Today.png'
today.className = 'today'
Block5.append(today)

let lojka3 = document.createElement('img')
lojka3.src = './Vector.png'
lojka3.className = 'lojka3'
Block5.append(lojka3)

let meni1 = document.createElement('img')
meni1.src = './Beer 1.png'
meni1.className = 'meni1'
Block5.append(meni1)

let meni2 = document.createElement('img')
meni2.src = './Beer 2.png'
meni2.className = 'meni2'
Block5.append(meni2)

let Btn5 = document.createElement('button')
Btn5.innerHTML = '<div class="Btn5">View More</div>'
Block5.append(Btn5)

// Block1.append(Block5)



let img2 = document.createElement('div')
img2.cllassNeme = 'img2'
img2.innerHTML=`<img class="Cdesk1" src="Desk.png"></img>
<img class="Cdesk2" src="Desk.png"></img>
<img class="chel" src="chel.jpg"></img>`
Block6.append(img2)


let chef = document.createElement('img')
chef.src = './Chef.png'
chef.className = 'chef'
Block6.append(chef)

let lojka4 = document.createElement('img')
lojka4.src = './Vector.png'
lojka4.className = 'lojka4'
Block6.append(lojka4)

let we = document.createElement('img')
we.src = './we.png'
we.className = 'we'
Block6.append(we)

let n = document.createElement('img')
n.src = './n.png'
n.className = 'n'
Block6.append(n)

let texN = document.createElement('div')
texN.className = 'texN'
texN.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .'
Block6.append(texN)

let texT = document.createElement('div')
texT.className = 'texT'
texT.innerHTML = 'auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla <br> scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. <br> Congue iaculis integer curabitur semper sit nunc.'
Block6.append(texT)

let im = document.createElement('img')
im.src = './im.png'
im.className = 'im'
Block6.append(im)

let luo = document.createElement('img')
luo.src = './Luo.png'
luo.className = 'luo'
Block6.append(luo)

// Block1.append(Block6)


let bol = document.createElement('img')
bol.src = './Block7.png'
bol.className = 'bol'
Block7.append(bol)

let Krug3 = document.createElement('img')
Krug3.src = './krug.png'
Krug3.className = 'Krug3'
Block7.append(Krug3)

let noji3 = document.createElement('img')
noji3.src = './kaychy.png'
noji3.className = 'noji3'
Block7.append(noji3)


// Block1.append(Block7)



let Krug4 = document.createElement('img')
Krug4.src = './krug.png'
Krug4.className = 'Krug4'
Block8.append(Krug4)

let noji4 = document.createElement('img')
noji4.src = './kaychy.png'
noji4.className = 'noji4'
Block8.append(noji4)

let play = document.createElement('img')
play.src = './Play.png'
play.className = 'play'
Block8.append(play)

// Block1.append(Block8)



let bol9 =document.createElement('img')
bol9.src = './Block9.png'
bol9.className = 'bol9'
Block9.append(bol9)

// Block1.append(Block9)



let blogs = document.createElement('img')
blogs.src = './Blogs.png'
blogs.className = 'blogs'
Block10.append(blogs)

let b1 = document.createElement('img')
b1.src = './b1.png'
b1.className = 'b1'
Block10.append(b1)

let b2 = document.createElement('img')
b2.src = './b2.png'
b2.className = 'b2'
Block10.append(b2)

let b3 = document.createElement('img')
b3.src = './b3.png'
b3.className = 'b3'
Block10.append(b3)

let Btn6 = document.createElement('button')
Btn6.innerHTML = '<div class="Btn6">View More</div>'
Block10.append(Btn6)

let Krug5 = document.createElement('img')
Krug5.src = './krug.png'
Krug5.className = 'Krug5'
Block10.append(Krug5)

let noji5 = document.createElement('img')
noji5.src = './kaychy.png'
noji5.className = 'noji5'
Block10.append(noji5)

let kas = document.createElement('div')
kas.className = 'kas'

let Gallery = document.createElement('img')
Gallery.src = './Gallery.png'
Gallery.className = 'Gallery'
kas.append(Gallery) 

let texGa = document.createElement('div')
texGa.className = 'texGa'
texGa.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.'
kas.append(texGa)

let Btn7 = document.createElement('button')
Btn7.innerHTML = '<div class="Btn7">View More</div>'
kas.append(Btn7)

let inst = document.createElement('img')
inst.src = './inst.png'
inst.className = 'inst'
kas.append(inst)

Block10.append(kas)

let Krug6 = document.createElement('img')
Krug6.src = './krug.png'
Krug6.className = 'Krug6'
Block10.append(Krug6)

let noji6 = document.createElement('img')
noji6.src = './kaychy.png'
noji6.className = 'noji6'
Block10.append(noji6)

let kas2 = document.createElement('div')
kas2.className = 'kas2'

let rim = document.createElement('img')
rim.src = './rim.png'
rim.className = 'rim'
kas2.append(rim)

let R = document.createElement('img')
R.src = './R.png'
R.className = 'R'
kas2.append(R)

let Btn8 = document.createElement('button')
Btn8.innerHTML = '<div class="Btn8">Subscribe</div>'
kas2.append(Btn8)

let te = document.createElement('div')
te.className = 'te'
te.innerHTML = 'Email Address'
kas2.append(te)
Block10.append(kas2)

// Block1.append(Block10)


let cat = document.createElement('img')
cat.src = './top.png'
cat.className = 'cat'
Block11.append(cat)

let fat = document.createElement('img')
fat.src = './Footer.png'
fat.className = 'fat'
Block11.append(fat)

// Block1.append(Block11)



document.body.append(container)