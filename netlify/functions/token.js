exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({msg: process.env.DEPLOY_URL})
    }
}