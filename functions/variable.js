

const variable = (...a) => {
    for (x in a) {
        console.log(a[x]);
    }
}


variable(10, 20, 30, 40);