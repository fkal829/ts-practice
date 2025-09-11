// src/sort.ts
// order를 통해 오름차순, 내림차순 정렬 boolean 리턴
function decideOrder(a: number, b: number, order: string): boolean {
    if (order === "asc") {
        return a > b;
    } else if (order === "desc") {
        return a < b;
    }
    else return false;
}

//1. 매개변수명을 먼저 정해 //export를 붙여서 노출시키기
export function simpleSort(arr: number[], order = "asc"): number[] {
    const sortedArr = [...arr];     // 원본 배열을 변경하지 않기 위해 복사 // copy 함수를 쓰면?? deep인지 shallow인지 헷갈리 수 있음...
                                    //ts에서 매개변수로 들어오는거 -> 레퍼런스 타입
                                    //원본 변경하기 싫으면 1. 복사해서 쓰거나 2. 손을 못 대게 하든가(Read-Only)
    for (let i = 0; i < sortedArr.length - 1; i++) {
        for (let j = 0; j < sortedArr.length - 1; j++) {
            if (decideOrder(sortedArr[j] as number, sortedArr[j + 1] as number, order)) {
                const temp = sortedArr[j] as number;
                sortedArr[j] = sortedArr[j + 1] as number;
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
}