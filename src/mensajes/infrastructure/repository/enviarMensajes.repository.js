module.exports = async ({body}) => {
    if (statusApp) {
        let result = [];
        for (const [index, item] of Object.entries(body)) {
            const isWaNumber = await client.isRegisteredUser(`57${item.number}@c.us`)
            if (!isWaNumber) {
                return {
                    status: 401,
                    mensaje: `El numero ${item.number} no esta registrado en WhatsApp`
                }
            }
            const temp = await client.sendMessage(`57${item.number}@c.us`, `${item.message}`);
            result.push(temp);
        }
        return {
            status: 200,
            mensaje: "Mensaje enviado correctamente",
        }
    } else {
        return {
            status: 401,
            mensaje: "No se ha podido enviar el mensaje, por favor escanee el codigo QR"
        }
    }
}