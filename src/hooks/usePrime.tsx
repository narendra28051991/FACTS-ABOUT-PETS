export const usePrime = (num: number) => {
    let prime = true;

    if(num>=2) {
        for(let i=2; i<num; i++) {
            if(num>1 && num%i===0) {
                prime = false;
                break;
            }
        }
    }

    else {
        prime = false;
    }

    return prime;
}
