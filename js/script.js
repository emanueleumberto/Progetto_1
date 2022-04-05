let arr = ['ciao', 'abc', 'bar'];
let newArr = [...arr];
newArr.push('new');
console.log(arr);
console.log(newArr);

function func(x, y, z) {
    console.log('Sono nella Func ' + x + ' - ' + y + ' - ' + z);
}

func(...arr);

let arrCopy = Object.assign([], arr);
arrCopy.splice(1,1,'newAbc');
console.log(arrCopy);
console.log(arr);

// altro codice del
console.log("Cioao");