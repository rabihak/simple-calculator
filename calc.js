    let firstop = "0";
    let secop = "0";
    let element = document.querySelector('.calc');
    let screen = document.querySelector('.result')
    let rs;
    let sym;
    let eq;
    let t;
    start();

    function start() {
        element.addEventListener('click', function s(event) {
            let a = event.target.innerHTML;
            checker(a)
            element.removeEventListener('click', s)
        })
    }

    function checker(a) {
        add1(a);
        if ((a === "+" || a === "-" || a === "*" || a === "/")) {
            sym = a;
            addit();
        }
        t = firstop;
        if (a === "C") {
            purge();
        }
    }

    function purge() {
        firstop = "0";
        secop = "0";
        screen.innerHTML = 0;
        return start();
    }

    function add1(a) {
        if (a === "1" || a === "2" || a === "3" || a === "4" || a === "5" || a === "6" || a === "7" || a === "8" || a === "9" || a === "0") {
            firstop += a;
            console.log(firstop);
            let i = parseFloat(firstop)
            screen.innerHTML = i;
            return start();
        }
    }

    function addit() {
        element.addEventListener('click', function f() {
            let y = event.target.innerHTML;
            eq = y;
            add2(y);
            resA(y);
            resS(y);
            resM(y);
            resD(y);
            resE(y);
            t = secop;

            if (y === "C") {
                purge();
            }
            element.removeEventListener('click', f)
        });

    }

    function add2(c) {
        if (c === "1" || c === "2" || c === "3" || c === "4" || c === "5" || c === "6" || c === "7" || c === "8" || c === "9" || c === "0") {
            secop += c;
            console.log(secop);
            let j = parseFloat(secop)
            screen.innerHTML = j;
            return addit();
        }
    }



    function resM(a) {
        if (a === "*") {
            let z = parseFloat(firstop);
            let u = parseFloat(secop);
            rs = z * u;
            screen.innerHTML = rs;
            firstop = rs.toString();
            secop = "0";
            if (eq === "=") {
                return start();
            } else
                return addit();
        }
    }

    function resD(a) {
        if (a === "/") {
            let z = parseFloat(firstop);
            let u = parseFloat(secop);
            rs = z / u;
            screen.innerHTML = rs;
            firstop = rs.toString();
            secop = "0";
            if (eq === "=") {
                return start();
            } else
                return addit();
        }
    }

    function resS(a) {
        if (a === "-") {
            let z = parseFloat(firstop);
            let u = parseFloat(secop);
            rs = z - u;
            screen.innerHTML = rs;
            firstop = rs.toString();
            secop = "0";
            if (eq === "=") {
                return start();
            } else
                return addit();
        }
    }

    function resA(a) {
        if (a === "+") {
            let z = parseFloat(firstop);
            let u = parseFloat(secop);
            rs = z + u;
            screen.innerHTML = rs;
            firstop = rs.toString();
            secop = "0";
            if (eq === "=") {
                return start();
            } else
                return addit();
        }
    }

    function resE(a) {
        if (a === "=") {
            switch (sym) {
                case "+":
                    resA(sym);
                    break;
                case "-":
                    resS(sym);
                    break;
                case "*":
                    resM(sym);
                    break;
                case "/":
                    resD(sym)
                    break;
                default:
                    break;
            }
        }
    }