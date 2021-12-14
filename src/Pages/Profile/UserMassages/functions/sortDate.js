export default function sortDate(a, b) {
    const arrA = a.date.split('-')
    const arrB = b.date.split('-')

    //year
    if (arrA[2] > arrB[2]) { return 1 }
    else if (arrA[2] < arrB[2]) { return -1 }
    //mounth
    if (arrA[1] > arrB[1]) { return 1 }
    else if (arrA[1] < arrB[1]) { return -1 }
    //day
    if (arrA[0] > arrB[0]) { return 1 }
    else if (arrA[0] < arrB[0]) { return -1 }

    if (a.hour > b.hour) { return 1 }
    else if (a.hour < b.hour) { return -1 }
    return 0
}