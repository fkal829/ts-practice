// order를 제한할 수 있지 않을까?
export function simpleSort(arr: number[], order = "asc"): number[] { //1. 매개변수명을 먼저 정해 //export를 붙여서 노출시키기
    // order가 추가되었으니 => 정렬을 뒤집어야 함

    const sortedArr = [...arr];     // 원본 배열을 변경하지 않기 위해 복사 // copy 함수를 쓰면?? deep인지 shallow인지 모를 수 있음...
    //타입스크립트에서 매개변수로 들어오는거 -> 레퍼런스 타입
    //변경하기 싫으면 1. 복사해서 쓰거나 2. 손을 못 대게 하든가(Read-Only)
    for (let i = 0; i < sortedArr.length - 1; i++) {
        for (let j = 0; j < sortedArr.length - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {  // boolean을 리턴하는 order()함수를 선언하자!!
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
}