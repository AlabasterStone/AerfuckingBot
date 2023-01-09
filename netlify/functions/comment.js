import request from "request";

export async function handler(event, context) {
    const url = "https://gitblock.cn/WebApi/Comment/Post";
    cookie = "uniqueVisitorId=80e042f3-dd42-d486-338c-02ce295887c3; gitblock-session-id=dhsicrehxlulavw1zyarqk41; gitblock-auth=DD768202305BC2C2545C9F6424AADC9D7C07A81DB6186B29AA5AA5A2EEC9F78DA60C4BBC96E8FFE27DC8DE710734CCCA9630049161A6639214CA2FC4697C3136C7E3B2B7B0AD09BD3F51E6AF1CB84185AF5D2EC129C4D0AC1E9C0FC937C1C7D9CB3B235AF2513D3D691C6AC83361A0EB1B0CCB66ADC7A6F08F0D47FACDE1FF3291234F5DC2B6CE203D1DFE62B09B7A6F687608FBF1661B8FFD5DDFC1B6AD01765771C1FD19C60B074D86AE3902CE578AC2DACBD178FEC8F4222CD540DD85C8645F94EA3A";
    const headers = { "Cookie": cookie };
    const data = { "forType": "User", "forId": 1253773, "content": "aerfucking bot test from netlify", "t": 1675854896100, "s": "9812a55ff8a3bca4a5fc4464bdda54bcaa95486b" };
    request(
        {
            method: "POST",
            url: url,
            headers: headers,
            body: data,
            json: true
        },
        (err, res, body) => {
            if (err) {
                console.log(err);
            } else {
                console.log(body);
            }
        }
    );
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
    };
};

