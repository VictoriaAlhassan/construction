export default defineEventHandler(async(event, response)=> 
 {
    try {} catch {error}{
        sendError(event, createError({statusCode: 400,
        statusMessage: error}))
    }
});