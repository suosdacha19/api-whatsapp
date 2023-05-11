module.exports = async ({body}) => {
    let result = [];
    for (const [index,item] of Object.entries(body)) {
        const temp = await client.sendMessage(`57${item.number}@c.us`, `${item.message}`);
        result.push(temp);
    }
    return {
        result
    }
}