function samplePromise(){
    return Promise.resolve("shadrina");
}
async function run(){
    const nama = await samplePromise();
    console.info(nama);
}
run();