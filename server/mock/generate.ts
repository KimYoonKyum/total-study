import generateTestingData from "./data/test/test";

const generateJsonServer = () => {
    return {
        ...generateTestingData(),
    }
}

module.exports = generateJsonServer;
