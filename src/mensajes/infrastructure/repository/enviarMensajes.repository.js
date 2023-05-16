module.exports = async ({body}) => {
    if (statusApp) {
        let result = [];
        for (const [index, item] of Object.entries(body)) {
            const isWaNumber = await client.isRegisteredUser(`57${item.number}@c.us`)
            if (!isWaNumber) {
                return `El numero ${item.number} no esta registrado en WhatsApp`
            }
            const temp = await client.sendMessage(`57${item.number}@c.us`, `${item.message}`);
            console.log(temp)
            result.push(temp);
        }
        return {
            result
        }
    } else {
        return "401 No se ha podido enviar el mensaje, por favor escanee el codigo QR"
    }
}