// garbage-collector : 스레기 수집가
// 아무도 오브젝트를 참조하지 않으면 메모리에서 지워버림
// 이것도 cup를 사용함

// 글로벌 변수는 앱이 종료될때까지 계속 메모리에 유지됨!
const global = 1;
{
    // 블럭 내부에서만 존재하고, 블럭이 끝나면 자동으로 소멸됨 (GC)
    const local = 1;
}

function print() {
    if(true) {
        // 함수 내부에서도 블럭안에서 필요한 경우에는
        // 필요한 곳에서! 블럭 안에서 변수를 선언하고 사용해야 함
        let temp = 0;
    }
}
