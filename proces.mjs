import process from "process";

process.addListener("exit", function(exitCode){
    console.info(`NodeJS exit with code ${exitCode}`);
});

console.info(process.version);
console.info(process.argv);
console.info(process.report);
console.info(process.env);

process.exit(1);

console.info("Hello");