// write a for loop that generates the multiplication table.

// note start 1*1, 1*2 ..... 1*12, then starts from 2. till 20

var num = 1;
var out = "";

function multiTable() {
    for (let i = 1; i < 20; i++) {
        if (i !== 13) {
            out += (num * i) + ", ";
        } else {
            num++;
            out += "\n";
            break;
        }
    }
    if (num !== 21) {
        multiTable();
    } else {
        txt = "all done";
    }
}

 multiTable();

console.log(out);