module.exports = (req,res,next) => {
    const data = {
        qr: qrCodeApp,
        status: statusApp
    }
    res.render("qr", { data })
}