import React, { useState, useEffect } from 'react';

/**
 * @typedef {Object} KLineData
 * @property {Date} openTime
 * @property {Date} closeTime
 * @property {number} open
 * @property {number} high
 * @property {number} low
 * @property {number} close
 * @property {number} volume 
 * @property {number} quoteAssessVolume
 * @property {number} numberOfTrades
 * @property {number} takerBuyBaseAssetVolume 
 * @property {number} takerBuyQuoteAssetVolume
 */

/**
 * Binance K-Line Data Fetcher Component
 * @returns {JSX.Element}
 */ 
const BinanceKlineFetcher = () => {
    /** @type {[string[], React.Dispatch<React.SetStateAction<string[]>>]} */
    const [symbols, setSymbols] = useState(['BTCUSDT', 'ETHUSDT', 'ADAUSDT']);
    
    /** @type {[string, React.Disaptch<React.SetStateAction<string>>]} */
    const [interval, setInterval] = useState('1h');

    /** @type {[number, React.Dispatch<React.SetStateAction<number>>]} */
    const [limit, setLimit] = useState(100);
}

