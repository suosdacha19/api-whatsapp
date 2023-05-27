module.exports = async ({params: {numero}}) => {
    if (statusApp) {
        const isWaNumber = await client.isRegisteredUser(`57${numero}@c.us`)
        if (!isWaNumber) {
            return {
                status: 500,
                mensaje: `El numero ${numero} no esta registrado en WhatsApp`
            }
        } else {
            return {
                status: 200,
                mensaje: "Numero validado correctamente",
            }
        }
    } else {
        return {
            status: 500,
            mensaje: "No se ha podido validar el numero, por favor escanee el codigo QR"
        }
    }
}