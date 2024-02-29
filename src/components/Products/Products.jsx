import React from 'react'
import {motion} from 'framer-motion'
import Card from '../ui/Card/Card'

const Products = () => {
    return (
        <div className="main-products bg-grid-white/[0.02] ">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "circInOut" }}
                viewport={{ once: true }}
                className="product-heading">Product <span>Suite</span></motion.h1>
            <div className="product-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <div className="gradient-container"></div>
            </div>
            <div className="chain-container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "circInOut" }}
                    viewport={{ once: true }}
                    className="chain-heading">With LYNC, build on your <br /> <span>favorite chain.</span></motion.h1>
                <div className="gradient-chain"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "circInOut" }}
                    viewport={{ once: true }}
                    className="chain-companies">
                    <img src="https://s3-alpha-sig.figma.com/img/05b2/7e70/22612ec04465be574573d8c129924042?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ijAkk1GcpU5okT3PQMcBrLiamlOMkfIp2XXGh4QpzUBcTY6WvFy4227a13dDKKa3btHdkwrXI3tR57bmoDlDd~qsV45fcUYygRtOSYzHFnHVyOMB7uQ9XfEYuHgClKZ5-xagUvYWLLdKQtYGCOTXCWoTHqndHP3cVlxYjzYNgOuarn2riTvRJ40gFdEnWXH2qjUa0lD2m4qEtHMFerYFZgTO7faE8xucxf-GH9JUh0Qe7E~XPMNwtbVyGnFq40JC5Y~ihirl5ZMo2t3NXV0dakOdL4RRiL-2i~qMprMS57kriKuxv6i~Xi0InGRKvehajLSelTPNUDghFYNtSA2Z~w__" alt="img" />
                    <img src="https://lync.world/app/assets/polygon.png" alt="img" />
                    <img src="https://s3-alpha-sig.figma.com/img/33eb/9619/fa7f0818a7086b6006e751b02f342aa2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fGH5wWdmzDS8eDKha-q0n6NkqUljRNr5c8GufDil~WN9Wy2EN0YdnWZjonNz-gsPEDA3skfeIa~dO~0n9vnjqd18M2NTzOFV1AhQhGyfk8O1XEAOZ5HzUTE4O2qcTgUQAFWShbWPT4-lSeJbW124bCTCbWO2-t3t6~NyUR3a2jex7-w04eWVee5g835VA9gJCXst9NVNxTqUFb3Swm0~tfthLgWZ2GgE~KK~1Y11xbQ-hPBH70ZGdbFSHPDSg1QR6oSwxX7STJSIUtFDOhSZqj-AKJAIzR3UU0EebBBKwV18kUGlOHRA66u4NZlM0Bu~JhfWhMevk0rX1uCvJdLzqQ__" alt="img" />
                    <img src="https://s3-alpha-sig.figma.com/img/5673/25c0/de4f9e6f9856507de5cebb373f08eb46?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CV04fwCL57FM~Icp6segLr2H42~stDU9VpUtrXyfArWs~sm0Y6VohXeeFvUXGZ7~Zp163S40cAcO7kDeFYWzjVp3rXD696KS17JmK4tEqgN~ZngZLT52a2QU2ou~uKhZBH2sfqWm92hmONksSpiM87SKsDSW~a8-d18p0KY8ZecmjFk9gIhE~ayPeoCwTTsIRFTzluBRmUp3yi48kRs3qJoARw0BzbKwGLDDlujYllDwfBjfcS15kzF2LMWMzm6BRGIHE1cX3-HOBwqB6pc2WgbBUBoZ~Qph7hu2~8mcQIgpRfCpfGUVX88DDbZkzy4XWcrJt8vPYpKBPopxzrJsiA__" alt="img" />
                    <img src="https://lync.world/app/assets/arbitrum.svg" alt="img" />
                    <img src="https://s3-alpha-sig.figma.com/img/2832/d688/ade51d824b8f49958b637caadde447a2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FYfhzpd88QrGnbZHtLzy3JFCw4SbRHJphlcpqp5Z~O--VcPj3Ijm7KVidP~oJ8PBkkQ0qfV9qfbyuIGqKa8X8XCcnw6k2L6FuIh7L12NRfVWiaATKToCjfq0YY760~mDUuNzm7fdUJip97lqDNdtw1VUxV-rb77UbuO1vAoY-~T-s6RYCYLkB2p2Vpbti8m6kXLwC20Ein~KQaOYreAERJzl9Kfv4DkqeeW8FKylzi9glwXQOPB1wlZud0AXZdc~Gu8NLr5pQeEAho8M3tfmhYjcBs0mCdnAcyOg99LVSyxK-KgrAmHxh5h-6m9pKEVs-6-OUwrsFYapQwiJOa0lyA__" alt="img" />
                    <img src="https://s3-alpha-sig.figma.com/img/ec76/ce3a/68c9260d69d979f7a0382fc4893a76c2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1BElT52rBoL~Swy6-S6V-0ClZ5hzadXdk5X1vxfyDTCZgTCgmKeXcs5zmHHCaTZQy9aDUaeVjYZINP6-LJT6GXT3KP9Rl4XCYeoa3NVTPpspHWeUAW9JLPfHUaJBX6VnmLWusfuMnBwoDN1I7zo8CeefkilAQ0feXDvjXmkUv0Ysa-tYFOjP7rmNZ4qyFGGsr~bMbKaL46-c-fjFPQaWvReR9J1e3JwW6HLWFIE-lbRQCe-ZJJvDgZ3SaG62Gkb9aNSAEhLgxOdoao~wFAvfiK9w96QcLX9vQXRJbtRg0TpV1ld6wv7p96Pu9p5BFLDk2yrcSKNcXsSneAfoxI2vw__" alt="img" />
                    <img src="https://s3-alpha-sig.figma.com/img/910f/f9e2/c02d6980cc9cb0c1c61800211cd48aa2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0GY46ydz~aMqBUQqZc6NjUOoFU2AvnSEzy9h9yBb7TOnpX-7hUPm6cqTE7thN~NiaNqIp3YagapRRPt9LXnzSd4IWee20RRQwtqiMuCWSH39tVbUbyoUFgk7DaJjNoooScpFMkRnwsKRGUImh-0UyKCGd9KAKF4eJm7IixPug2HqcYW-HGzRxzQ7ATdoYQRVmH4oqMZUcvjs6d9XlnWofgWrj0vlkUlleqv7~WkejBiw0Wznpmq60BBu-rjMgeGEmVLF2c4r-RTP~60ctUAS7nP~NvJLBCbP3HBMccoySdXvEoDnYltcc5gCsp9hpMv7x1rvsD87cv5yeMbmiHp1w__" alt="img" />
                </motion.div>
            </div>
        </div>
    )
}

export default Products
