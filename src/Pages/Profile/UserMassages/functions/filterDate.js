const date = new Date()
const currentDay = ('0' + date.getDate()).slice(-2)
const currentMounth = ('0' + (date.getMonth() + 1)).slice(-2)
const currentYear = date.getFullYear()

export default function filterDate(massageDate) {
    const massageDateArr = massageDate.split('-')
    const massageDay = massageDateArr[0]
    const massageMounth = massageDateArr[1]
    const massageYear = massageDateArr[2]


    if (massageYear > currentYear) {
        return 1
    } else {
        if (massageYear >= currentYear) {
            if (massageMounth >= currentMounth) {
                if (massageDay >= currentDay) {
                    return 1
                }
            }
        }
    }
}