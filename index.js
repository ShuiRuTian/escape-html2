import { performance } from 'node:perf_hooks'

let encoder = new TextEncoder();
function decodeNoCachingNoString(aStr) {
  decodeNoCachingNoStringPreEncoded(encoder.encode(aStr));
}

const longNoEscapeString = "J0ctfWP9ekvbzwHhLm02Z1GiOw8N4BAD1o1MTZNfKj8zvun3KwPfkodw7nok1CwhB4YHwXFNSgHe2SUmq3uBdvkaINdE8Me0XaqU6cR8Nr4 XRepJZVs5NjcAAhffLz IpXf9M8yXqwoAdxEtu3mM6bTtclo RFz7iKRMwbTBOTdx2H3HkO9diXWcSYqCVqGMVjfpxUM8I5aq8eb8zBR VUpgJ03uJQTIGAUyq W1iT6OzhTp4RRbbjywh8OmhbIKV4AOiO7fkxdtu68Og0XMBQq6wPow8pJ2iQ TKrMxVlFNMSqyaqxhML6rAHJ8JMu3d LDF8b6Cuzq1Ei85R5EtKJ59BzkqgtDdpNxG4BlfQ5135PStVJTjRXJGHNX5Xn1pQWB ZheJtuTAJsId1lVwhcLZvML9xnvuu39mJX1FxCwCbYBPSJ6S3wHpEipACXxHSMn8J2mU9MZuvL3MnAY0QqzHku7weRXRtfAXXkn5IiBvleLTbt8I8vma8Q5HFB9CueqJMC5U0vz1vFB9FMoseLJomNmulpKaQBvei7al2d0FRJtaWlsJb0sB7I84mMRTAtOlZFZcoTj1zzBPMJDgpsTSzBJJtUxgF47SHn4SddQ8XtargSuMOFfqrZnY9j5dDi6VJOXzyROKf4ZqpCTudytvlaZt8M3WdaPqwEr3zyckrHECi";

const str_noEscape_200 = "J0ctfWP9ekvbzwHhLm02Z1GiOw8N4BAD1o1MTZNfKj8zvun3KwPfkodw7nok1CwhB4YHwXFNSgHe2SUmq3uBdvkaINdE8Me0XaqU6cR8Nr4 XRepJZVs5NjcAAhffLz IpXf9M8yXqwoAdxEtu3mM6bTtclo RFz7iKRMwbTBOTdx2H3HkO9diXWcSYqCVqGMVjfpxUM";

const str_noEscape_400 = "J0ctfWP9ekvbzwHhLm02Z1GiOw8N4BAD1o1MTZNfKj8zvun3KwPfkodw7nok1CwhB4YHwXFNSgHe2SUmq3uBdvkaINdE8Me0XaqU6cR8Nr4 XRepJZVs5NjcAAhffLz IpXf9M8yXqwoAdxEtu3mM6bTtclo RFz7iKRMwbTBOTdx2H3HkO9diXWcSYqCVqGMVjfpxUMJ0ctfWP9ekvbzwHhLm02Z1GiOw8N4BAD1o1MTZNfKj8zvun3KwPfkodw7nok1CwhB4YHwXFNSgHe2SUmq3uBdvkaINdE8Me0XaqU6cR8Nr4 XRepJZVs5NjcAAhffLz IpXf9M8yXqwoAdxEtu3mM6bTtclo RFz7iKRMwbTBOTdx2H3HkO9diXWcSYqCVqGMVjfpxUM";

const str_escape_200 = "J0ctfWP9ekvbzwHhLm02Z1GiOw8N4B&AD1o1MTZNfKj8zvun3KwPfkodw7nok1CwhB4YHwXFNSgHe2SUmq3uBdvkaINdE8Me0X<aqU6cR8Nr4 XRepJZVs5NjcAAhffLz IpXf9M8yXqwoAdxEtu3mM6bTtclo RFz7iKRMwbTBOTdx2H3HkO9di>XWcSYqCVqGMVjfpxUM";

const str_scape_400 = "J0ctfWP9ekvbzwHhLm02Z1GiOw8N4BA&D1o1MTZNfKj8zvun3KwPfkodw7nok1CwhB4YHwXFNSgHe2SUmq3uBdvkaINdE8Me0Xaq<U6cR8Nr4 XRepJZVs5NjcAAhffLz IpXf9M8yXqwoAdxEtu3mM6bTtclo RFz7iKRMwbTBOTdx2H3HkO9diXW>cSYqCVqGMVjfpxUMJ0ctfWP9ekvbzwHhLm02Z1GiOw8N4BAD1o1MTZNfKj8zvun3KwPfkodw7nok1CwhB4YHwXFNSgHe2SUmq3uBdvka'INdE8Me0XaqU6cR8Nr4 XRepJZVs5NjcAAhffLz IpXf9M8yXqwoAdxE&tu3mM6bTtclo RFz7iKRMwbTBOTdx2H3HkO9diXWcSYqCVqGMVjfpxUM";


const shortNoEscapeString = "fop237";

const candidates = `"'&<>`;

const regularPattern = new RegExp(`([${candidates}])`);

const regularPattenGlobal =  new RegExp(`([${candidates}])`, 'g');

const charSet = new Set(candidates.split(''));

const charCodeSet = new Set();
for (let i = 0; i < candidates.length; i++) {
    charCodeSet.add(candidates.charCodeAt(i));
}

function profileFunction(fn) {
    const start = performance.now();
    for (let i = 0; i < 1_000_000; i++) {
        fn(str_noEscape_400);
    }
    const end = performance.now();
    console.log(`Execution ${fn.name} time: ${end - start} ms`);
}

function searchByRegExp(str) {
    let result = str.match(regularPattern);
    if (result) {
        return true;
    }
    return false;
}

function searchByRegExpSplit2(str) {
    const length = str.length;
    const middleIndx = Math.floor(length / 2);
    const strPart1 = str.slice(0, middleIndx);
    const strPart2 = str.slice(middleIndx);

    let result = strPart1.match(regularPattern);
    const result2 = strPart2.match(regularPattern);
    if (result&&result2) {
        return true;
    }
    return false;
}


function searchByRegExpGlobal(str) {
    let result = str.match(regularPattenGlobal);
    if (result) {
        return true;
    }
    return false;
}

/**
 * 
 * @param {string} str 
 * @returns 
 */
function searchByRegExpGlobalMatchAll(str) {
    let result = str.matchAll(regularPattenGlobal);
    if ([...result].length > 0) {
        return true;
    }
    return false;
}
function searchByCharcodeAndSwitchExplicitly(str) {
    for (let i = 0; i < str.length; i++) {
        switch (str.charCodeAt(i)) {
            case 34: // "
            case 38: // &
            case 39: // '
            case 60: // <
            case 62: // >
                return true;
        }
    }
    return false;
}


let charCodeLookupTable = {};
for (let i = 0; i < candidates.length; i++) {
    charCodeLookupTable[candidates.charCodeAt(i)] = true;
}
charCodeLookupTable = JSON.parse(JSON.stringify(charCodeLookupTable));
function searchByCharcodeAndLookupTable(str){
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) in charCodeLookupTable) {
            return true;
        }
    }
    return false;
}

let charCodeLookupTable2 = {
    34: true, // "
    38: true, // &
    39: true, // '
    60: true, // <
    62: true, // >
};

console.log(charCodeLookupTable);
console.log(charCodeLookupTable2);

charCodeLookupTable2 = JSON.parse(JSON.stringify(charCodeLookupTable2));

// console.log(%HasFastProperties(charCodeLookupTable));
// console.log(%HasFastProperties(charCodeLookupTable2));

function searchByCharcodeAndLookupTable2(str){
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) in charCodeLookupTable2) {
            return true;
        }
    }
    return false;
}

const charCodeLookupTableArray2 = new Uint32Array(128);
for (let i = 0; i < candidates.length; i++) {
    charCodeLookupTableArray2[candidates.charCodeAt(i)] = 1;
}

function searchByCharcodeAndLookupTableArray(str){
    for (let i = 0; i < str.length; i++) {
        if (charCodeLookupTableArray2[str.charCodeAt(i)]) {
            return true;
        }
    }
    return false;
}

const charCodeLookupTableArray = new Uint32Array(64);
for (let i = 0; i < candidates.length; i++) {
    charCodeLookupTableArray2[candidates.charCodeAt(i)] = 1;
}

function searchByCharcodeAndLookupTableArray2(str){
    for (let i = 0; i < str.length; i++) {
        if (charCodeLookupTableArray2[str.charCodeAt(i)]) {
            return true;
        }
    }
    return false;
}


function searchByCharcodeAndIfelseExplicitly(str) {
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (
            code === 34 || // "
            code === 38 || // &
            code === 39 || // '
            code === 60 || // <
            code === 62 // >
        ) {
            return true;
        }
    }
    return false;
}

function searchByCharcodeLoopAndSet(str) {
    for (let i = 0; i < str.length; i++) {
        if (charCodeSet.has(str.charCodeAt(i))) {
            return true;
        }
    }
    return false;
}

function searchByIncludes(str){
    for (let i = 0; i < candidates.length; i++) {
        if (str.includes(candidates[i])) {
            return true;
        }        
    }
    return false;
}

profileFunction(searchByRegExp);
profileFunction(searchByRegExpSplit2);
profileFunction(searchByRegExpGlobal);
profileFunction(searchByRegExpGlobalMatchAll);
profileFunction(searchByCharcodeLoopAndSet);
profileFunction(searchByIncludes);
profileFunction(searchByCharcodeAndIfelseExplicitly);
profileFunction(searchByCharcodeAndSwitchExplicitly);
profileFunction(searchByCharcodeAndLookupTable);
profileFunction(searchByCharcodeAndLookupTable2);
profileFunction(searchByCharcodeAndLookupTableArray);
