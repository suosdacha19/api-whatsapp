module.exports = async ({params: {numero}}) => {
    const isWaNumber = await client.isRegisteredUser(`57${numero}@c.us`)
    if (!isWaNumber) {
        return `404, El numero ${numero} no esta registrado en WhatsApp`
    } else {
        return `200, El numero ${numero} esta registrado en WhatsApp`
    }
}