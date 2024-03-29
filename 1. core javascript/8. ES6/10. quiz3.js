const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];


// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
const nameCity = traders
  .filter((user) => user.year === 2022)
  .map((user) => {
    return user.trader;
  });
// .forEach(trader => console.log(trader))
console.log(nameCity);


// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
const city = traders
  // .filter(user => user.trader.city)
  .map((user) => {
    return user.trader.city;
  });

// Set = 중복제거
const cities = [ ...new Set(city) ];
console.log(cities);


// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
traders
  .filter((user) => user.trader.city === "대전")
  .map((user) => {
    return user.trader;
  })
  .forEach((trader) => console.log(trader));


// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const allName = traders
  // .filter(user => user.trader.name)
  .map((user) => {
    return user.trader.name;
  });
// .forEach(trader => console.log(trader))
console.log(allName);


// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
// 고차함수
let seoulTotal = 0;
traders
  .filter((user) => user.trader.city === "서울")
  .map((user) => { return user.value }) 
  .forEach((user) => (seoulTotal += user))
console.log(`거래총액: ${seoulTotal}원`);

// reduce 사용
const total = traders
                .filter(trs => trs.trader.city === '서울')
                .reduce((total, trs) => total + trs.value, 0);
                console.log(`거래총액: ${total}원`);

// 고차함수 X
// let total = 0;
// const newArray = [];
// for (const trs of traders) {
//   if (trs.trader.city === '서울') {
//     newArray.push(trs);
//   }
// }
// for (const filteredTrs of newArray) {
//   // console.log(filteredTrs.value);
//   total += filteredTrs.value;
// }
// console.log(`총액: ${total}`);


// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
let daejeonTotal = 0;
traders
  .filter((user) => user.year === 2023 && user.trader.city === "대전")
  .map((user) => {
    return user.value;
  })
  .forEach((user) => (daejeonTotal += user));
console.log(`2023년 대전 거래 총액: ${daejeonTotal}원`);


// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
const busanTradeName = traders
  .filter((user) => user.trader.city === "부산")
  .map((user) => {
    return user.trader.name;
  });
console.log(busanTradeName);


// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
//    거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
function highstValue(mostVlaue, n) {
  // userList가 비어있으면 null 반환
  if (mostVlaue.length === 0) {
    return null;
  }

  let high = mostVlaue[0];
  for (const user of mostVlaue) {
    if (user[n] > high[n]) {
      high = user;
    }
  }
  return high;
}
console.log("가장 높은 거래액을 가진 사용자:", highstValue(traders, "value"));


// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//    예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
const cityTotalValue = traders.reduce((count, n) => {
    
  if (n.value in count) {
    count[n.trader.city] += n.value; 
  } else {
    count[n.trader.city] = n.value;
  }
  return count;
}, {})
console.log(cityTotalValue);


console.log('====================================');
// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요.
//   결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
const a = traders
  .filter((tradeVlaue) => tradeVlaue.value >= 700000)
  .map((tradeVlaue) => {
    if (tradeVlaue.year === 2022) {
      return (`${tradeVlaue.year}: ${tradeVlaue.value}`)
    } 
    if (tradeVlaue.year === 2023) {
      return (`${tradeVlaue.year}: ${tradeVlaue.value}`)
    }
  })
  console.log(a);


// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요.
//   결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
// traders
//   .filter()


// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요.
// 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
