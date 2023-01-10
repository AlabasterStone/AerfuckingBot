import requests
from rich.console import Console
from rich.markdown import Markdown

def getCookie(username, password, t, s):
    url = "http://gitblock.cn/WebApi/Users/Login"
    data = {
        "username": username,
        "password": password,
        "t": t,
        "s": s
    }
    res = requests.post(url=url, data=data)
    console.log(res.text)
    console.log(res.cookies.get_dict())
    cookie_dict = res.cookies.get_dict()
    cookie = ""
    for key in cookie_dict:
        cookie += f"{key}={cookie_dict[key]};"
    return cookie


def postComment(forType, forId, content, t, s, cookie):
    headers = {"Cookie": cookie}
    console.log(cookie)
    url = "https://gitblock.cn/WebApi/Comment/Post"
    data = {
        "forType": forType,
        "forId": forId,
        "content": content,
        "t": t,
        "s": s
    }
    res = requests.post(url=url, data=data, headers=headers)
    console.log(res.text)
