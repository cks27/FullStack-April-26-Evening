// --------------- Bad Code : Callback Hell (:----------

// function downloadFile(url, downloaded) {
//     console.log('Started to download the file');
//     // -------We are just faking the time here using setTimeout------
//     setTimeout(() => {
//         downloaded('profile.jpg'); // this callback is called to acknowledge download is completed.
//     }, 2000);
// }

// function compressFile(fileName, compressed) {
//     console.log('Started to compress the file');
//     setTimeout(() => {
//         const compressedFile = fileName.split('.')[0]+'.zip'
//         compressed(compressedFile);
//     }, 1000);
// }

// function storeFile(file, stored) {
//     console.log('Started to store the file');
//     setTimeout(() => {
//         stored(file)
//     }, 1000);
// }

// // Callback Hell
// downloadFile('http://s3.amazon.com/profile.jpg', function (fileName) {
//     console.log(`File download completed, fileName : ${fileName}`);
//     compressFile(fileName, function (compressedFile) {
//         console.log(`Compression completed ${compressedFile}`);
//         storeFile(compressedFile, function (file) {
//             console.log(`File stored successfully : ${compressedFile}`);
//             console.log('Everything done!');
//         })
//     });
// });

// ------------------------------ Good Code using promise----------

function downloadFile(url) {
    console.log('Started to download the file');
    // -------We are just faking the time here using setTimeout------
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!url.startsWith('https')) {
                reject(new Error('protocol is not https'))
            } else {
                resolve('profile.jpg'); // this callback is called to acknowledge download is completed.
            }
        }, 2000);
    })
}

function compressFile(fileName) {
    console.log('Started to compress the file');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const compressedFile = fileName.split('.')[0] + '.zip'
            resolve(compressedFile);
        }, 1000);
    })

}

function storeFile(file) {
    console.log('Started to store the file');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(file)
        }, 1000);
    })
}

downloadFile('http://s3.amazon.com/profile.jpg') //async-await 
    .then(function (fileName) {
        console.log(`File dowloaded successfully`);
        return compressFile(fileName)
    })
    .then(function (compressedFile) {
        console.log(`File compression completed ${compressedFile}`);
        return storeFile(compressedFile);
    })
    .then(function (file) {
        console.log(`File stored successfully ${file}`);
        console.log('Everything done!');
    })
    .catch(function (err) {
        console.log(err);
    })
    
/*

    const fileName = await downloadFile(url)
    const compressedFile = await compressFile(fileName);
    const storedFile = await storeFile(compressedFile);
    
*/