const paytmchecksum = require('../paytm/PaytmChecksum.cjs')
const formidable = require('formidable')
const { v4: uuid } = require('uuid');
const https = require('https');


let PAYTM_MERCHANT_KEY = 'bKMfNxPPf_QdZppa'
let PaytmMerchantKey = PAYTM_MERCHANT_KEY

let paytmParams = {};
paytmParams['MID'] = 'DIY12386817555501617';
paytmParams['WEBSITE'] = 'DIYtestingweb';
paytmParams['CHANNEL_ID'] = 'WAP';
paytmParams['INDUSTRY_TYPE_ID'] = 'Retail';
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = 'jrgCtG46360212431082';
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:5000/callback';
paytmParams['EMAIL'] = 'aasif@hostivers.com';
paytmParams['MOBILE_NO'] = '1234567890';


const addPaymentGateway = async (req, res) => {
    let paytmChecksum = await paytmchecksum.generateSignature(paytmParams, PaytmMerchantKey)

    try {
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmChecksum
        }
        res.json(params)
    } catch (error) {
        console.log('errir in addpaymentgatway',error)
    }
}


const paymentResponse = (request, response) => {
    const form = new formidable.IncomingForm();
    let paytmCheckSum = request.body.CHECKSUMHASH;
    delete request.body.CHECKSUMHASH;

    let isVerifySignature = paytmchecksum.verifySignature(request.body, 'bKMfNxPPf_QdZppa', paytmCheckSum)


    if (isVerifySignature) {

        paytmParams['MID'] = request.body.MID;
        paytmParams['ORDERID'] = request.body.ORDERID;

        paytmchecksum.generateSignature(paytmParams, 'bKMfNxPPf_QdZppa').then((checksum) => {
            paytmParams['CHECKSUMHASH'] = checksum;

            let post_data = JSON.stringify(paytmParams)

            let option = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content_Length': post_data.length
                }
            }

            let res = ''
            let post_req = https.request(option, (post_res) => {
                post_res.on('data', (chunk) => {
                    res += chunk;
                })
                post_res.on('end', () => {
                    let result = JSON.parse(res)
                    response.redirect('http://localhost:3000/');
                })
            })
            post_req.write(post_data);
            post_req.end();
        })
    } else {
        console.log('paytmcheksum is mismatched')
    }
}


module.exports = { addPaymentGateway, paymentResponse };