import React from 'react'
import { motion } from 'framer-motion'
import community from '../../assets/home/community-pattern.png'
import company1 from '../../assets/backed/image.png'

const Community = () => {
    return (
        <div className="main-community bg-grid-white/[0.02] ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "circInOut" }}
                viewport={{ once: true }}
                className="community-circle">
                <div className="gradient-circle"></div>
                <h1 className='circle-heading'>Strongest Web3 <br /> <span>Community</span></h1>
                <button>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Join Telegram</span>
                </button>
                <div className="community-img">
                    <img src={community} alt="community" />
                </div>
            </motion.div>
            <div className="believers-container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "circInOut" }}
                    viewport={{ once: true }}
                    className="believers-heading">Our <span>Believers and Partners</span></motion.h1>
                <div className="gradient-believers"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "circInOut" }}
                    viewport={{ once: true }}
                    className="believers-companies">
                    <div className="partner-img">
                        <img src="https://s3-alpha-sig.figma.com/img/dbdc/7e9a/bfcd02ad161d771b33c514344895a2c0?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9P~G01ALeqmTloAMOeqIrEQT2AwDlS~MFbROOqjR4ZBtVpMNh47dXswXNje6eHiZuwf-aqV00UTadqA25pYJSxkkABq58S8e8gAUdbzofR4Am4GagGi-9SSf6YwNpmsJ78~X0621S55X~~waC5CGKBDk-6a~hItlfH3M310IZb80SQSXZrct8Ro-96u~5-oUDugEJXzpDkB1pBE-c~S4VZ6lqD0zAcyUNZ3FnPn3NT9at-fGa~JJy0LlqxjJpv9D2CgIgH2zo3Nda2wcXDA1I4anC7A9x55jWHClVeP6NK9eLNBqVhYSqZhRV3BLMbO7ag4-5kC1gO6JDfxFxxmNg__" alt="company1" />
                    </div>
                    <div className="partner-img">
                        <img src="https://s3-alpha-sig.figma.com/img/ae78/38b8/871df777e93df73a5eca0771db48737f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YjSJpwErEJCPJsQ4BTgbMJ-Xf6L9PVw91iStpUlY5-5IlqItwq0K7yGdGw1rROWQhKDZTEsJu1f1MG0CpJwtjS16xDsyeHbgWS3A34E-pyBTF~B~WShWnFETgLHmzPSW7fFrAQO~v82-28GLjP099Nx3QFKE4A9CiSC-0KhfWPvYroFJtX1J3CDWcblaO1KCv0abk2P~6o4xp5zDd8hltV6hcTyOBXAaZvZst4EqGimFwQTb1bX5A2O~SFq5~tDCfba1RMnA6xX6kOWQ2wbXDUoh2pUu~6cx9MnprTVbziJ4ewU3nUmxNEGIL1wGQOBMDg1FNTlCvaQUQ43zHx9USw__" alt="company1" />
                    </div>
                    <div className="partner-img">
                        <img src={"https://s3-alpha-sig.figma.com/img/28cc/1bac/9c4b1085b4ee2317b5bdfdc01efe136b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJxS4JJ7yPpulzRZUEj8oOb0sJoaEfNJob03Hwdifr~N0P4JDml0kfISMZxg1LJISlp2CnV6EYhJO0sd~8nJ8elErdPbG4oOBOyy7~UB-r2MTCWX7lySJMw2wNzdK3NWId6MEDyHqmo5r3NGTdWw2FK7UiVqHAPsutwe-FahIstNd2Sa8EJNxwRCTNKTznYb2OMLa7ae-TS18eCRjzLje2kC79-udfG18uL2nW7JBj9d6wg-YEvQ9G7gazYm2oMy66J9taqdXSP63KlpLLd8IPedkcVS7w3~GOkARnWJwWLKS~F4fqDj6NYj~57uKFt38DRzlMUE86lvmDSZJ1dDMw__"} alt="company1" />
                    </div>
                    <div className="partner-img">
                        <img src={"https://s3-alpha-sig.figma.com/img/d0f1/fa05/c75ea6b22b9e8845470e5ddc2392aef9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d6-u6zvpB94sRYYVUPTENoVCtY1cmF4TQNtq1XijU48ZBrNMEjdVR5E1PBV~77RlWSN2wq10JYwUvglCtwXk2wmQYRBAKC~02yIoJQApi4af6TBewwlBRtghWg~B4Km31m7z7y9e3BclgJR1FD~3peJAJXMpicmgKrNegyYdoErHhq0OhgBRyUFj014Aea~CvzMt8NH7Glj92ASDD56x5yRSiz07m3gJOUrchlw3YrclVzHoWIxwE2dWE3vY1rt~nKhknXCgPSBinY8TSCECCNufpIRgohb33hOUTUPBEQgkf~wxWz5rWaYui4M4aFdjkmPlbMGai2IDRRTjzTEv2w__"} alt="company1" />
                    </div>
                    <div className="partner-img">
                        <img src={"https://s3-alpha-sig.figma.com/img/6d02/42bc/cb12b63990c168a2947fb279265e41a9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XZ0S9J7e5QoWMFD3io~s1V13QrZgN9hVRAHRdd3NEGrC3MjyJmmgid~bkPIaU5CGjNN3B~45EWJ4SONJgi3CI6Y7PSM3BSHq2uxTsvicPHYUBtTV-obpoL6gy4T4u7LNmMWhGeLDW6iT3VGqlY08bMBsuqyFKDQP0XPXeDGjx4hmuivfqS49KAbLE44sWhIQRCI1rpHW9sTK8cLg1vIPMVIc0cMyrbu7u4Svopy3jVE2nWobCMyqHPXkyMdb7i1l3TWGFnfV5~EuteQ1hv0rrIQU5DzN1yJa0wId1Fmc4N7gFI7qhPjcaPElsreN6sd294pGWERDEgZCAUQbw6HQ8g__"} alt="company1" />
                    </div>
                    <div className="partner-img">
                        <img src={"https://s3-alpha-sig.figma.com/img/cc00/c22a/7a1f2c315ede4dafc1e75d85610d6de9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZdC1JXCkL3hZC6VazB0JjcjpSTMpLPCVQlqtS92q-l1Gj~s2Ly2stQXtm2Wu7fOkFjPYvyK2SBo0a2QM5yzKAz~xqCNCLmyV7~WvsuDyx3Fd9exYlKrHBDSbrzDzAdu0a2IMcUYmT83r487TDJsZe0lJEJBeY2eAhfLBgjVD4dTtKXi-itwQVIfu0IiqQM3UsZi5fituKRszeRPSElS9mUzpxlOUsFbWwesNRMb1sWngEvUvw1y2JRM8tyoAphAo5wnkpMqvYOnT-CWY7TvA2ZMnsTCm8z7mf6VYnL0VFQqXrCJA8frNcE9QmYMtH7oYmlDV8skMQ-TFmFMN4K5~Q__"} alt="company1" />
                    </div>
                    <div className="partner-img">
                        <img src={"https://s3-alpha-sig.figma.com/img/59eb/d7a2/03e5da0fd05c05d8f147e58b4d2b9b51?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DWafUyDBG6fmY5~fIXZB65HetQ5mOkgYsKwZGyf8ekW1WSBcbh2EPAN5wUufbnPRHRALeKVd-9w0GPq54O8WFDiCe6eJs9jdWts-h5v-buEJ0cRrrMWCFKvxNJb8y8xX58TbwPhrWMrH-W94R-LHQckwrmSoNBb8ylnWY4iBXiRkYEjvo03ETUGbkhi2Bug902ZuYRWVBk-TVnIGNUUKXATP8zvLJlMzAJ5~z2YdvjmzLo1X3Xz~SqfdLSQ8BXJ1-VBe6DXRLi2Zqt7O0xgTvu1pyg7O-FfT2HUmoHrCWNSupMvx26Ku7Dx7xnu~NpbaKZGKCIVeFG1dY5vzXINW2w__"} alt="company1" />
                    </div>
                    <div className="partner-img">
                        <img src={"https://s3-alpha-sig.figma.com/img/f773/e7cb/2a5b181e33c8a3dbfc6485db0af345a8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e0stWHF~XMzVHetgEjjmGzHMHoLOvIYXyIMKIVbQI8nrZ1-T0l7qik6MQfpYcwcOfuV5SwLH-DNBP9-GPEA5~CTqc2kCyKZsVkGHasDg9YTcUgvgwKvHKYo8eXuYBqXXtTq4~KekHPUwkwnqpKspRjPNQ8Yc9wbZ0dXGXxrRZT-i2QCXqgVo~CCl9rm2ySdhlKLnAuxWUPw2u4qg5AlKw~cpgmnPIIoYcv-5pNIfDJfqmIajpJ6M6BZjnVdwLHf6bMA8t1pF4cjOamnbvVMl5rhaLmh2J1qe3qqdaaE8plDek7UJy-BlJndnOZlIryVWi-U3S61nJ1Ww74V3f3zdBg__"} alt="company1" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Community
