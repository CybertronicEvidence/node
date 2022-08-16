const fs = require('fs')

// fs.mkdir('./doc', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('folder created successfully')
// })

// fs.writeFile('./doc/text.txt', 'Hello people of the World', () => {
//     console.log('file created successfully')
// })

// fs.readFile('./doc/text.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// fs.mkdir('./new', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('new folder created')

// if (!fs.existsSync('./new')) {
//     fs.mkdir('./new', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./new', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

if (fs.existsSync('./new/writings.txt')) {
    fs.unlink('./new/writings.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}