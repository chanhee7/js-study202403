
// 불러온 변수 (충돌 피하기 위해 as사용해서 이름 변경)
import { $btn as $button } from "./getDom.js";

import { clickHandler } from "./event.js";
import haha from "./pow.js";

const pow = () => {
  console.log('pow');
};


const $btn = '123'; // 내가 만든 변수 (불러온 변수랑 충돌)
console.log(`내가만든 btn: ${$btn}`);
console.log(`불러온 btn:`, $button);

console.log(haha.pow(5));
console.log(haha.add(3, 6));

// event.js에서 만든 이벤트 핸들러 등록
$button.addEventListener('click', clickHandler);