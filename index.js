import { Indicators, IndicatorsNormalized } from "@ixjb94/indicators"
import { BitcoinData } from "./BTCUSDT.js"
import { createWriteStream } from "fs"

const ta  = new Indicators()
const tan = new IndicatorsNormalized()

const closes = []
BitcoinData.forEach(data => {
    closes.push(data.close)
})

Run()
async function Run() {
    const res = await tan.ema(closes, 10)
    
    // Write Data
    const stream = createWriteStream("./results_ema.txt")
    res.forEach(data => {
        stream.write(String(data) + "\n")
    })
    stream.end()
}