let firstline = [ "가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하"];
let second = ["갸", "냐", "댜", "랴", "먀", "뱌", "샤", "야", "쟈", "챠", "캬", "탸", "퍄", "햐"];
let third = ["거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허"];
let fourth = ["겨", "녀", "뎌", "려", "며", "벼", "셔", "여", "져", "쳐", "켜", "텨", "펴", "혀"];
let fifth = ["고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호"];
let sixth = ["교", "뇨", "됴", "료", "묘", "뵤", "쇼", "요", "죠", "쵸", "쿄", "툐", "표", "효"];
let seventh = ["구","누", "두", "루", "무", "부", "수", "우", "주", "추", "쿠", "투", "푸", "후"];
let eighth = ["규", "뉴", "듀", "류", "뮤", "뷰", "슈", "유", "쥬", "츄", "큐", "튜", "퓨", "휴"];
let ninth = ["그", "느", "드", "르", "므", "브", "스", "으", "즈", "츠", "크", "트", "프", "흐"];
let tenth = ["기", "니", "디", "리", "미", "비", "시", "이", "지", "치", "키", "티", "피", "히"];


function setup() {
  createCanvas(400, 400);
  textSize(20);
}

function draw() {
  background(250);

  for (let i = 0; i < firstline.length; i++) {
    // The i value is used for index values and y position values.
    textSize(20);
    textStyle(ITALIC);
    text(firstline[i], 30, 60 + i * 20);
  }
  for (let j = 0; j < second.length; j++) {
    fill(30);
    text(second[j], 30 + 30, 50 + j * 20);
  }
  for (let k = 0; k < third.length; k++) {
    fill(60);
    text(third[k], 90, 40 + k * 20);
  }
  for (let l = 0; l < fourth.length; l++) {
    fill(90);
    text(fourth[l], 120, 35 + l * 20);
  }
  for (let m = 0; m < fifth.length; m++) {
    fill(100);
    text(fifth[m], 150, 30 + m * 20);
  }
  for (let n = 0; n < sixth.length; n++) {
    fill(140);
    text(sixth[n], 180, 35 + n * 20);
  }
  for (let o = 0; o < seventh.length; o++) {
    fill(160);
    text(seventh[o], 210, 40 + o * 20);
  }
  for (let p = 0; p < eighth.length; p++) {
    fill(180);
    text(eighth[p], 240, 50 + p * 20);
  }
  for (let q = 0; q < ninth.length; q++) {
    fill(200);
    text(ninth[q], 270, 40 + q * 20);
  }
  for (let r = 0; r < tenth.length; r++) {
    fill(215);
    text(tenth[r], 300, 35 + r * 20);
  }
  
  fill(0);
  textStyle(BOLD);
  text("한글; Hangeul", 250, 350);

  noLoop();
}