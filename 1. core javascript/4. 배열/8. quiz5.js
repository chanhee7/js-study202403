/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/

// 배열 저장
var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (true) {
  var choice = prompt(
    `현재 멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`
  );
  if (choice === '1') {
    var newName = prompt('추가할 새로운 멤버의 이름을 입력하세요.');
    tvxq.push(newName);
    alert(`${newName}이(가) 추가되었습니다.`);
  } else if (choice === '2') {
    var delName = prompt('삭제할 멤버의 이름을 입력하세요.');
    var idx = tvxq.indexOf(delName);
    if (idx !== -1) {
      tvxq.splice(idx, 1);
      alert(`${delName}이(가) 삭제되었습니다.`);
    } else {
      alert(`${delName}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }
  } else if (choice === '3') {
    alert('프로그램을 종료합니다.');
    break;
  } else {
    alert('잘못된 입력입니다. 메뉴 번호를 정확하게 입력해주세요.');
  }
}

// 메뉴 선택
// const NEW = 1,
//   DELETE = 2,
//   END = 3;

// var idx = tvxq.indexOf(menu);

// switch (menu) {
//   case NEW:
    
//   case DELETE:

//   case END:
//     var menu = alert("프로그램을 종료합니다.");
// }

// while (true) {
//   // 출력
//   var menu = prompt(`현재 멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`);

//   // 메뉴
//   if (menu === NEW) {
//     var menu = prompt("추가할 새로운 멤버의 이름을 입력하세요.");
//     tvxq[idx] = newName;
//     alert(`${newName}이(가) 추가되었습니다.`);
//   } else if (menu === DELETE) {
//     alert(`${tvxq}이(가) 삭제되었습니다.`);
//   } else {
//     alert("프로그램을 종료합니다.");
//   }
// }
