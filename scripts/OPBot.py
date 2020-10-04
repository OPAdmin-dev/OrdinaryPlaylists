import json
import requests
from appsecrets import TELEGRAM_BOT_ACCESS_TOKEN


class OrdinaryPlaylistsBot():

    def __init__(self):
        self.token = TELEGRAM_BOT_ACCESS_TOKEN
        self.base = "https://api.telegram.org/bot{}/".format(self.token)

    def get_updates(self, offset=None):
        url = self.base + "getUpdates?timeout=100"
        if offset:
            url = url + "&offset={}".format(offset + 1)
        r = requests.get(url)
        return json.loads(r.content)

    def send_message(self, msg, chat_id):
        url = self.base + "sendMessage?chat_id={}&text={}".format(chat_id, msg)
        if msg is not None:
            requests.get(url)


def runBot(outgoing_message):
    update_id = None
    bot = OrdinaryPlaylistsBot()
    updates = bot.get_updates(offset=update_id)
    updates = updates["result"]
    if updates:
        for item in updates:
            update_id = item["update_id"]
            try:
                incoming_message = item["message"]["text"]
            except:
                incoming_message = None
        from_ = item["message"]["from"]["id"]
        bot.send_message(outgoing_message, from_)
