export const get_user = async function (data: any) {
    let person = {
        name: "Majid Ahmadi",
        age: 34
    }
    return {"status": 200, "data": person}
}