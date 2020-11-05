

const filer = () => {
    let reader = new FileReader();
    reader.onload = function(e) {
        let text = reader.result;
    }

    reader.readAsText('test.txt');
}


filer();