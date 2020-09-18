const handler = require('./index');

// AWS.mock('S3', 'listBuckets', function (params, callback){
//     callback(null, "successfully put item in database");
// });


const mockS3GetObject = jest.fn({
    data: 123
});
jest.mock('aws-sdk', () => {
    return {
        S3: jest.fn(() => ({
            listBuckets: mockS3GetObject
        }))
    }
})

describe('...', () => {

    beforeEach(() => {
        mockS3GetObject.mockReset();
    });

    test("...", async () => {
        mockS3GetObject.mockImplementation((params) => {
            return {
                promise() {
                    return Promise.resolve({Body: "test document"})
                }
            };
        });
        const result = await handler.getLocalGreeting("en")
        console.log(result)
        // expect(await functionUnderTest()).toEqual("test document");
    });
});

