
//1
function extractNumbers(arr){
    try{
        if (!Array.isArray(arr)) // בודק אם זה לא מערך
        throw new Error('must be an array'); // מוציא שגיאה בכוח
            arr = arr.map( item => {
            if (typeof item !== 'number') {
            return undefined;
        }
        }).filter( (item) => item !== undefined);
        return arr;
    }      
    catch (err) {
        console.error({err});
        return [];
    }
}
    
//2
function sumNumbersSafe(arr){
    try{
        let sumNum = 0;
        newArr = extractNumbers(arr); // משאלה 1
        if (Array.isArray(newArr) && newArr.length > 0){
            newArr.forEach(element => {
                console.log(`element : ${element}`);
                sumNum += element;
            }); //end foreach
            console.log(`sum : ${sumNum}`);
            return sumNum;
        }//end if
    }
    catch(err){
        console.log("worning !! Error");
        return 0;
    }
}
//3
function filterLargeSums(arrList, minTotal){
    //מקבל מערך של מערכים

    let num = 0;
    for(let i = 0; i < arrList.length; i++){
        num = sumNumbersSafe(arrList[i]);
        console.log(num);
        if( num < minTotal){
            
            if (Array.isArray(arrList[i])){
                arrList[i] = [];
            }
            else{
                arrList[i] = 0;
            }
            return arrList;
        }
    }
}
// const aa = [ [1,2,3] , [10 , "b", 5] ,"FGr"];
// filterLargeSums(aa , 10);
// console.log(aa);

//להריץ מסודר לראות - לא הצלחתי להריץ חלק

//4
function summaryStats(arrList){
    const newArrList = filterLargeSums(arrList,10);
    
    let numTotal = sumNumbersSafe(newArrList); // אולי זה הולך על תת מערך אז צריך לעשות פה איזשהו for or foreach- בוודאות צריך
    const len = newArrList.length;
    let average = numTotal / len;
    
    const objToReturn ={
        sum: numTotal ,
        average: average
    }
    return objToReturn; // להחזיר מערך של אובייקטים 

}

//5
function safeCalculator(a, b, operation){ // זה באמת בקשה לפונקצייה - לבדוק 
    
    if(typeof a !== typeof b){
        throw new Error("Error Type = - a or b - must be the some type ! ");
    }
}