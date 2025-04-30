const escapeRE = /["'&<>]/

function escapeHtmlHybrid(str) {
    const match = escapeRE.exec(str)

    if (!match) {
        return str
    }

    let html = ''
    let escaped
    let index
    let lastIndex = 0


    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;'
                break
            case 38: // &
                escaped = '&amp;'
                break
            case 39: // '
                escaped = '&#39;'
                break
            case 60: // <
                escaped = '&lt;'
                break
            case 62: // >
                escaped = '&gt;'
                break
            default:
                continue
        }

        if (lastIndex !== index) {
            html += str.slice(lastIndex, index)
        }

        lastIndex = index + 1
        html += escaped
    }

    return lastIndex !== index ? html + str.slice(lastIndex, index) : html
}

function escapeHtmlLoop(str) {
    let html = ''
    let escaped
    let index
    let lastIndex = 0
    for (index = 0; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;'
                break
            case 38: // &
                escaped = '&amp;'
                break
            case 39: // '
                escaped = '&#39;'
                break
            case 60: // <
                escaped = '&lt;'
                break
            case 62: // >
                escaped = '&gt;'
                break
            default:
                continue
        }

        if (lastIndex !== index) {
            html += str.slice(lastIndex, index)
        }

        lastIndex = index + 1
        html += escaped
    }

    return lastIndex !== index ? html + str.slice(lastIndex, index) : html
}

const htmlEntities = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '&': '&amp;',
}

const map = new Map(Object.entries(htmlEntities))

function escapeHtmlRegExp(str) {
    return str.replace(/[<>"'&]/, (match) => map.get(match))
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ '

function generateRandomString(length) {
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('')
}

const testStrings = Array.from({ length: 1024 }, () => generateRandomString(300 + Math.floor(Math.random() * 397)))

const longNoEscapeString = "J0ctfWP9ekvbzwHhLm02Z1GiOw8N4BAD1o1MTZNfKj8zvun3KwPfkodw7nok1CwhB4YHwXFNSgHe2SUmq3uBdvkaINdE8Me0XaqU6cR8Nr4 XRepJZVs5NjcAAhffLz IpXf9M8yXqwoAdxEtu3mM6bTtclo RFz7iKRMwbTBOTdx2H3HkO9diXWcSYqCVqGMVjfpxUM8I5aq8eb8zBR VUpgJ03uJQTIGAUyq W1iT6OzhTp4RRbbjywh8OmhbIKV4AOiO7fkxdtu68Og0XMBQq6wPow8pJ2iQ TKrMxVlFNMSqyaqxhML6rAHJ8JMu3d LDF8b6Cuzq1Ei85R5EtKJ59BzkqgtDdpNxG4BlfQ5135PStVJTjRXJGHNX5Xn1pQWB ZheJtuTAJsId1lVwhcLZvML9xnvuu39mJX1FxCwCbYBPSJ6S3wHpEipACXxHSMn8J2mU9MZuvL3MnAY0QqzHku7weRXRtfAXXkn5IiBvleLTbt8I8vma8Q5HFB9CueqJMC5U0vz1vFB9FMoseLJomNmulpKaQBvei7al2d0FRJtaWlsJb0sB7I84mMRTAtOlZFZcoTj1zzBPMJDgpsTSzBJJtUxgF47SHn4SddQ8XtargSuMOFfqrZnY9j5dDi6VJOXzyROKf4ZqpCTudytvlaZt8M3WdaPqwEr3zyckrHECi";

const shortNoEscapeString = "fop23789";

const testString = longNoEscapeString;

const iteration_times = 100_000_0;

function testEscapeHtmlHybrid() {
    console.time("hybrid");
    for (let i = 0; i < iteration_times; i++) {
        escapeHtmlHybrid(testString)
    }
    console.timeEnd("hybrid");
}

function testEscapeHtmlLoop() {
    console.time("my");
    for (let i = 0; i < iteration_times; i++) {
        escapeHtmlLoop(testString)
    }
    console.timeEnd("my");
}

function testEscapeHtmlRegExp() {
    console.time("regexp");
    for (let i = 0; i < iteration_times; i++) {
        escapeHtmlRegExp(testString)
    }
    console.timeEnd("regexp");
}

testEscapeHtmlHybrid();
testEscapeHtmlLoop();
testEscapeHtmlRegExp();
