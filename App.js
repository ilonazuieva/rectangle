function sqInRect(lng, wdth){
    let arr = []
    if(lng === wdth) return null
    while(lng > 0 && wdth > 0){
        arr.push(lng > wdth ? wdth : lng)
        lng > wdth ? lng -= wdth : wdth -= lng
    }
    return arr
}
//https://www.codewars.com/kata/55466989aeecab5aac00003e/solutions/javascript
//level 6 codewars