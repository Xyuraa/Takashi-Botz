require("../settings.js");
const axios = require("axios");

class OrderKuota {
    constructor() {
        this.apitoken = global.apiOrderKuota;
        this.urlQris = global.qrisOrderKuota;
        this.merchantId = global.merchantIdOrderKuota;
    }

    async createPayment(amount) {
        const response = await axios(`https://gateway.elevate.web.id/api/orkut/createpayment?amount=${amount}&codeqr=${this.UrlQris}`);
        if (response.statusText !== "OK") throw new Error("Error")
        return response.data.result
    }
    
    async cekStatus() {
        const response = await axios(`https://gateway.elevate.web.id/api/orkut/cekstatus?merchant=${this.merchantId}&keyorkut=${this.apitoken}`);
        if (response.statusText !== "OK") throw new Error("Error")
        return response.data;
    }
}

module.exports = { OrderKuota };