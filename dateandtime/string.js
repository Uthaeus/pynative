

const str = s => {
    let obj = Date.parse(s.slice(0, s.length - 2));
    let out = new Date(obj);
    return out.toString();
}

let date_string = "Feb 25 2020 4:20PM";

console.log(str(date_string));