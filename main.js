document.getElementById('time').innerHTML = new Date().toLocaleString()
function confirmed() {
  colorbuf = document.body.style.backgroundColor
}
function showpink() {
  colorbuf = document.body.style.backgroundColor
  document.body.style.backgroundColor = 'pink'
}
function showlightblue() {
  colorbuf = document.body.style.backgroundColor
  document.body.style.backgroundColor = 'lightblue'
}
function showyellow() {
  colorbuf = document.body.style.backgroundColor
  document.body.style.backgroundColor = 'yellow'
}
function showreset() {
  colorbuf = document.body.style.backgroundColor
  document.body.style.backgroundColor = 'linen'
}
function returncolor() {
  document.body.style.backgroundColor = colorbuf
}
function showhtml() {
  document.getElementById('fig').src = 'img/HTML5.png'
  document.getElementById('desc').innerHTML =
    '<h3>HTML</h3>은 구조적 웹문서를 작성하는데 사용되는 마크업 언어이다.'
}
function showcss3() {
  document.getElementById('fig').src = 'img/CSS3.png'
  document.getElementById('desc').innerHTML =
    '<span style="color:red;"><b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}
function showjs() {
  document.getElementById('fig').src = 'img/JS.png'
  document.getElementById('desc').innerHTML =
    'JavaScript는 웹을 위한 프로그래밍 언이이며 웹문서에서 동작을 실행할 수 있게 된다.'
}
function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
function thide() {
  document.getElementById('tdesc').innerHTML = ''
}
function timehere() {
  document.getElementById('tdesc').innerHTML = new Date().toLocaleString()
}
function timekorea() {
  document.getElementById('tdesc').innerHTML = new Date().toLocaleString(
    undefined,
    { timeZone: 'Asia/Seoul' },
  )
}
function timeamerica() {
  document.getElementById('tdesc').innerHTML = new Date().toLocaleString(
    undefined,
    { timeZone: 'America/New_York' },
  )
}
function timeeurope() {
  document.getElementById('tdesc').innerHTML = new Date().toLocaleString(
    undefined,
    { timeZone: 'Europe/London' },
  )
}
function timechina() {
  document.getElementById('tdesc').innerHTML = new Date().toLocaleString(
    undefined,
    { timeZone: 'Asia/Shanghai' },
  )
}
