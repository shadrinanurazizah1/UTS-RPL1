function samplePromise(){
    return Promise.resolve("shadrina");
}
const nama = await samplePromise();
    console.info(nama);